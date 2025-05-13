import type { Size } from '@/entities/Product/model/sizes';
import type { Product } from '@/entities/Product/model/types';

export type CartItem = {
  id: Product['id'];
  size: Size;
  count: number;
};

export type CartProduct = {
  product: Product;
  size: Size;
  count: number;
};
