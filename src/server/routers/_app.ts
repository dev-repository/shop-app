/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from '~/server/trpc';
import { authRouter } from './auth';
import { categoriesRouter } from './categories';
import { productsRouter } from './products';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'check!!'),
  auth: authRouter,
  products: productsRouter,
  categories: categoriesRouter,
});

export type AppRouter = typeof appRouter;
