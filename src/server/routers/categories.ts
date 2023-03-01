import { TRPCError } from '@trpc/server';
import { schema } from '~/libs/validation/category';
import { publicProcedure, router } from '~/server/trpc';

export const categoriesRouter = router({
  list: publicProcedure.input(schema.list).query(async ({ input, ctx }) => {
    const limit = input.limit ?? 20;
    const cursor = input.cursor ?? input.initialCursor;

    const items = await ctx.prisma.category.findMany({
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
