import { z } from 'zod';

export const productSchema = z.object({
  id: z.number(),
  name: z.string().max(100),
  price: z.number().min(0.01),
  imageUrl: z.string(),

  discount: z.number().min(1).max(100).nullish(),
  discountedPrice: z.number().nullish(),
});

export type Product = z.infer<typeof productSchema>;
