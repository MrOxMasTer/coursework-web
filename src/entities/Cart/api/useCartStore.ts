import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Product } from '../../../entities/Product/model/types';
import type { CartItem } from '../model/types';
import type { Size } from '@/entities/Product/model/sizes';

type CartStore = {
  products: CartItem[];
  addToCart: (id: Product['id'], size: Size, count: number) => void;
  removeToCart: (id: Product['id']) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],
      removeToCart: (id: Product['id']) =>
        set({ products: get().products.filter((p) => p.id !== id) }),
      addToCart: (id: Product['id'], size: Size, count = 1) => {
        const products = get().products;

        const index = products.findIndex((i) => i.id === id);

        const newProducts = [...products];

        if (index !== -1) {
          newProducts[index].count = count;

          return set({ products: newProducts });
        }

        newProducts.push({ id: id, count, size });

        return set({ products: newProducts });
      },
    }),
    {
      name: 'favorites',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
