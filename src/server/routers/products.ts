import { TRPCError } from '@trpc/server';
import { schema } from '~/libs/validation/product';
import { protectedProcedure, publicProcedure, router } from '~/server/trpc';

export const productsRouter = router({
  byId: publicProcedure.input(schema.byId).query(async ({ ctx, input }) => {
    try {
      const product = await ctx.prisma.product.findUnique({
        where: {
          id: input.id,
        },
        include: {
          images: true,
          categories: true,
        },
      });

      return {
        product,
      };
    } catch (error) {
      throw error;
    }
  }),
  list: publicProcedure.input(schema.list).query(async ({ input, ctx }) => {
    const limit = input.limit ?? 20;
    const cursor = input.cursor ?? input.initialCursor;

    const items = await ctx.prisma.product.findMany({
      take: limit + 1,
      cursor: cursor
        ? {
            id: cursor,
          }
        : undefined,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        images: true,
        categories: true,
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
  create: protectedProcedure
    .input(schema.create)
    .mutation(async ({ ctx, input }) => {
      try {
        const session = ctx.session;

        const product = await ctx.prisma.product.create({
          data: {
            name: input.name,
            description: input.description,
            price: input.price,
            salePrice: input.salePrice,
            totalSales: input.totalSales,
            userId: session.id,
            images: {
              create: input.images.map((image) => ({
                url: image,
              })),
            },
            categories: {
              create: input.categories.map((category) => ({
                name: category,
              })),
            },
          },
        });

        return {
          productId: product.id,
        };
      } catch (error) {
        throw error;
      }
    }),
  update: protectedProcedure
    .input(schema.update)
    .mutation(async ({ ctx, input }) => {
      try {
        const session = ctx.session;

        const item = await ctx.prisma.product.findUnique({
          where: {
            id: input.id,
          },
          include: {
            images: true,
            categories: true,
          },
        });

        if (!item) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'Product not found',
          });
        }

        if (item.userId !== session.id) {
          throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'Unauthorized',
          });
        }

        // ??????????????? ?????? ???????????? ????????? ??????????????? ??????????????????, ?????????????????? ????????????.
        // ????????? ??????????????? create, ????????? ??????????????? delete??? ????????????.
        const categories = input.categories;
        const newCategories = categories.filter(
          (category) =>
            !item.categories.find(
              (itemCategory) => itemCategory.name === category,
            ),
        );
        if (newCategories.length > 0) {
          for (const category of newCategories) {
            await ctx.prisma.category.create({
              data: {
                name: category,
                productId: input.id,
              },
            });
          }
        }

        const deletedCategories = item.categories.filter(
          (itemCategory) =>
            !categories.find((category) => itemCategory.name === category),
        );
        if (deletedCategories.length > 0) {
          await ctx.prisma.category.deleteMany({
            where: {
              id: {
                in: deletedCategories.map((category) => category.id),
              },
            },
          });
        }

        const images = input.images;
        // ???????????? ?????? ???????????? ????????? ??????????????? ??????????????????, ?????????????????? ????????????.
        // ????????? ??????????????? create, ????????? ??????????????? delete??? ????????????.
        const newImages = images.filter(
          (image) => !item.images.find((itemImage) => itemImage.url === image),
        );
        if (newImages.length > 0) {
          for (const image of newImages) {
            await ctx.prisma.image.create({
              data: {
                url: image,
                productId: input.id,
              },
            });
          }
        }

        const deletedImages = item.images.filter(
          (itemImage) => !images.find((image) => itemImage.url === image),
        );
        if (deletedImages.length > 0) {
          await ctx.prisma.image.deleteMany({
            where: {
              id: {
                in: deletedImages.map((image) => image.id),
              },
            },
          });
        }

        const product = await ctx.prisma.product.update({
          where: {
            id: input.id,
          },
          data: {
            name: input.name,
            description: input.description,
            price: input.price,
            salePrice: input.salePrice,
            totalSales: input.totalSales,
            userId: session.id,
          },
          include: {
            images: true,
            categories: true,
          },
        });

        // images??? ??????, ????????? ?????? ???????????? ???????????? ??????, ????????? ???????????? ????????????.

        return {
          productId: product.id,
        };
      } catch (error) {
        throw error;
      }
    }),
  delete: protectedProcedure
    .input(schema.byId)
    .mutation(async ({ ctx, input }) => {
      try {
        const session = ctx.session;

        const item = await ctx.prisma.product.findUnique({
          where: {
            id: input.id,
          },
          include: {
            images: true,
            categories: true,
          },
        });

        if (!item) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'Product not found',
          });
        }

        if (item.userId !== session.id) {
          throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'Unauthorized',
          });
        }

        await ctx.prisma.product.delete({
          where: {
            id: input.id,
          },
        });

        return {
          success: true,
        };
      } catch (error) {
        throw error;
      }
    }),
});
