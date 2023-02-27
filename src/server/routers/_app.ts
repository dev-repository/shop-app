/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from '~/server/trpc';
import { authRouter } from './auth';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'check!!'),
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
