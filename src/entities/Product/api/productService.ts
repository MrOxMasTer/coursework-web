import { api } from '@/shared/configs/api';
import type { Product } from '../model/schemes';

const productApi = api.extend({ prefixUrl: '/products' });

const products: Product[] = [
  {
    id: 0,
    name: 'Barberton Daisy',
    imageUrl: '',
    price: 119.0,
  },
  {
    id: 1,
    name: 'African Violet',
    imageUrl: '',
    discount: 13,
    price: 229.0,
    discountedPrice: 199.0,
  },
  {
    id: 2,
    name: 'Blushing Bromeliad',
    imageUrl: '',
    discount: 13,
    price: 229.0,
    discountedPrice: 199.0,
  },
  {
    id: 3,
    name: 'Angel Wing Begonia',
    imageUrl: '',
    price: 169.0,
  },
];

export type CatalogProductsOptions = {
  q?: string | null;
  tab?: string;
  sortBy?: string | null;
  start?: number | null;
  end?: number | null;
  category?: string | null;
  size?: string | null;
  pageSize?: number;
  cursor?: number;
};

export const productService = {
  getById: async (id: Product['id']) => {
    return products[id];
  },

  catalog: async ({
    tab = 'all',
    q,
    sortBy,
    pageSize = 9,
    cursor,
  }: CatalogProductsOptions) => {
    // const products = await productApi("");

    return products;
  },

  favorites: async () => {
    return products;
  },
};
