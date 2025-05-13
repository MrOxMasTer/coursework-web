'use client';

import { pageConfig } from '@/shared/configs/page';
import CartSvg from '#/public/svg/Cart.svg';
import Link from 'next/link';
import { useCartStore } from '@/entities/Cart/api/useCartStore';

export const Cart = () => {
  const products = useCartStore((state) => state.products);
  const productInCartCount = products.length;

  return (
    <Link className="relative" href={pageConfig.cart}>
      <div className="size-4 border-2 absolute top-0 right-[-5px] border-solid bg-green text-white rounded-full border-white flex items-center justify-center text-[0.625rem]">
        {productInCartCount}
      </div>
      <CartSvg />
    </Link>
  );
};
