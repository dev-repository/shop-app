import { schema } from '~/libs/validation/auth';
import { publicProcedure, router } from '~/server/trpc';
import { generateTokens } from '~/server/token';
import { HttpException } from '~/server/errors/exceptions';
import { generateHash, generateSalt, secureCompare } from '~/utils/password';

export const authRouter = router({
  signup: publicProcedure
    .input(schema.signup)
    .mutation(async ({ ctx, input }) => {
      try {
        const exists = await ctx.prisma.user.findUnique({
          where: {
            email: input.email,
          },
        });

        if (exists) {
          throw new HttpException(400, 'AlreadyExists');
        }

        const salt = generateSalt();
        const hash = generateHash(input.password, salt);

        const user = await ctx.prisma.user.create({
          data: {
            email: input.email,
            salt,
            passwordHash: hash,
          },
        });

        await ctx.prisma.profile.create({
          data: {
            name: input.username,
            userId: user.id,
          },
        });

        const tokens = await generateTokens(user);

        return {
          userId: user.id,
          tokens,
        };
      } catch (error) {
        throw error;
      }
    }),
  signin: publicProcedure
    .input(schema.signin)
    .mutation(async ({ ctx, input }) => {
      try {
        const user = await ctx.prisma.user.findUnique({
          where: {
            email: input.email,
          },
        });

        if (!user) {
          throw new HttpException(400, 'InvalidCredentials');
        }

        if (
          !secureCompare(
            user.passwordHash,
            generateHash(input.password, user.salt),
          )
        ) {
          throw new HttpException(400, 'InvalidCredentials');
        }

        const tokens = await generateTokens(user);
        return {
          userId: user.id,
          tokens,
        };
      } catch (error) {
        throw error;
      }
    }),
});
