import type { Category } from './categories';
import type { Size } from './sizes';

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  ratingCount: number;
  category: Category;
  description: string;
  sizes: Size[];
  discount?: number;
  discountedPrice?: number;
};
