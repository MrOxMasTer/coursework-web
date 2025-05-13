'use client';

import { Typography } from '@/shared/ui/Typography';
import { CartList } from './CartList';
import { CartTable } from './CartTable';
import { useCartStore } from '@/entities/Cart/api/useCartStore';
import { products } from '@/entities/Product/model/constants/products';
import type { CartProduct } from '@/entities/Cart/model/types';

export const CartProductSection = () => {
  const cartItems = useCartStore((state) => state.products);
  const cartProducts: CartProduct[] = cartItems.map(({ id, count, size }) => {
    const findProduct = products.find((p) => p.id === id);

    if (!findProduct) {
      throw new Error(`Product ${id} does not exist`);
    }

    return {
      product: findProduct,
      count,
      size,
    };
  });

  return (
    <section className="md:grow">
      <Typography variant="h2" className="hidden">
        Cart product
      </Typography>

      <CartList cartProducts={cartProducts} />
      <CartTable cartProducts={cartProducts} />
    </section>
  );
};
