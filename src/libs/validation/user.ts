import * as z from 'zod';

export const schema = {
  update: z.object({
    name: z.string().optional(),
    brithday: z.string().optional(),
    gender: z.string().optional(),
  }),
  changePassword: z.object({
    oldPassword: z.string(),
    newPassword: z.string(),
  }),
  list: z.object({
    limit: z.number().min(1).max(100).nullish(),
    cursor: z.number().nullish(),
    initialCursor: z.number().nullish(),
  }),
};
