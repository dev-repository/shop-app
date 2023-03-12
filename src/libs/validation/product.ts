import * as z from 'zod';

export const schema = {
  create: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number().min(0),
    salePrice: z.number().min(0).optional(),
    totalSales: z.number().min(1).max(100).optional(),
    images: z.array(z.string()).length(1),
    categories: z.array(z.string()).length(1),
  }),
  update: z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    price: z.number().min(0),
    salePrice: z.number().min(0).optional(),
    totalSales: z.number().min(1).max(100).optional(),
    images: z.array(z.string()).length(1),
    categories: z.array(z.string()).length(1),
  }),
  byId: z.object({
    id: z.number(),
  }),
  list: z.object({
    limit: z.number().min(1).max(100).nullish(),
    cursor: z.number().nullish(),
    initialCursor: z.number().nullish(),
  }),
};
