import { pageConfig } from '@/shared/configs/page';
import CartSvg from '#/public/svg/Cart.svg';
import Link from 'next/link';

// TODO: fetch
export const Cart = () => {
  return (
    <Link href={pageConfig.cart}>
      <CartSvg />
    </Link>
  );
};
