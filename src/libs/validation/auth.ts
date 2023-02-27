import * as z from 'zod';

export const schema = {
  signup: z
    .object({
      username: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(8),
      passwordConfirm: z.string().min(8),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: 'Passwords do not match',
      path: ['passwordConfirm'],
    }),
  signin: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
};

export type SignupData = z.infer<typeof schema.signup>;
