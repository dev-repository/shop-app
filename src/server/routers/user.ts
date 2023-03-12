import { TRPCError } from '@trpc/server';
import { schema } from '~/libs/validation/user';
import { protectedProcedure, router } from '~/server/trpc';
import { generateHash, generateSalt, secureCompare } from '../password';

export const usersRouter = router({
  update: protectedProcedure
    .input(schema.update)
    .mutation(async ({ ctx, input }) => {
      try {
        const session = ctx.session;

        const profile = await ctx.prisma.profile.update({
          where: {
            id: session.id,
          },
          data: {
            name: input.name,
            birthday: input.brithday,
            gender: input.gender,
          },
        });

        return {
          success: true,
        };
      } catch (error) {
        throw error;
      }
    }),
  changePassword: protectedProcedure
    .input(schema.changePassword)
    .mutation(async ({ ctx, input }) => {
      try {
        const session = ctx.session;

        const user = await ctx.prisma.user.findUnique({
          where: {
            id: session.id,
          },
          select: {
            id: true,
            passwordHash: true,
            salt: true,
          },
        });

        if (!user) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'User not found',
          });
        }

        const old = generateHash(input.oldPassword, user.salt);
        const isPasswordCorrect = secureCompare(old, user.passwordHash);
        if (!isPasswordCorrect) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Old password is incorrect',
          });
        }

        const salt = generateSalt();
        const nextPassword = generateHash(input.newPassword, salt);

        await ctx.prisma.user.update({
          where: {
            id: session.id,
          },
          data: {
            passwordHash: nextPassword,
            salt,
          },
        });

        return {
          userId: user.id,
        };
      } catch (error) {
        throw error;
      }
    }),
  products: protectedProcedure
    .input(schema.list)
    .query(async ({ ctx, input }) => {
      // 유저가 등록한 상품 정보를 가져온다.
      const limit = input.limit ?? 20;
      const cursor = input.cursor ?? input.initialCursor;

      const items = await ctx.prisma.product.findMany({
        where: {
          userId: ctx.session.id,
        },
        take: limit + 1,
        cursor: cursor
          ? {
              id: cursor,
            }
          : undefined,
        orderBy: {
          createdAt: 'desc',
        },
      });

      let nextCursor: number | undefined = undefined;
      if (items.length > limit) {
        // Remove the last item and use it as next cursor

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const lastItem = items.pop()!;
        nextCursor = lastItem.id;
      }

      return {
        items: items,
        nextCursor,
      };
    }),
});
