import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Product } from '../../Product/model/types';

type FavoritesStore = {
  likes: Product['id'][];
  toggleLike: (id: Product['id']) => void;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      likes: [],
      toggleLike: (id: Product['id']) => {
        const likes = get().likes;

        const isExist = likes.includes(id);

        if (isExist) {
          return set({ likes: likes.filter((l) => id !== l) });
        }

        return set({ likes: [...likes, id] });
      },
    }),
    {
      name: 'favorites',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
