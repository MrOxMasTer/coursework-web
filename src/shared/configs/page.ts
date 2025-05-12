import type { Product } from '@/entities/Product/model/schemes';

const pages = {
  base: '/',

  // profile
  profile: '/profile',
  favorites: '/profile/favorites',
  cart: '/profile/cart',

  // auth
  login: '/login',
  register: '/register',

  //products
  product: (id: Product['id']) => `/products/${id}`,
} as const;

type PagesBase = typeof pages;

export type Pages = NonMethodKeys<PagesBase>;
export type PagePaths = PagesBase[keyof PagesBase];

interface PageConfig extends PagesBase {}

// FIXME: https://github.com/microsoft/TypeScript/issues/16163
// biome-ignore lint: unavailability of ts
class PageConfig {
  constructor(params: PagesBase) {
    Object.assign(this, params);
  }
}

export const pageConfig = new PageConfig(pages);
