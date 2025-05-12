import { pageConfig, type PagePaths } from '@/shared/configs/page';
import Home from '#/public/svg/Home.svg';
import Favorites from '#/public/svg/Favorites.svg';
import Cart from '#/public/svg/CartMobile.svg';
import User from '#/public/svg/User.svg';
import type { JSX } from 'react';

type NavigationMobileItem = {
  label: string;
  page?: PagePaths;
  Component: () => JSX.Element;
};

export const navigationMobileList: NavigationMobileItem[] = [
  {
    label: 'home',
    page: pageConfig.base,
    Component: Home,
  },
  {
    label: 'favorites',
    page: pageConfig.favorites,
    Component: Favorites,
  },
  {
    // TODO: fetch
    label: 'Cart',
    page: pageConfig.cart,
    Component: Cart,
  },
  {
    label: 'Profile',
    Component: User,
    page: pageConfig.login,
  },
];
