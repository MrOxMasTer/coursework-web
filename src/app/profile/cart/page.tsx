'use client';

import { useCartStore } from '@/entities/Cart/api/useCartStore';
import type { CartProduct } from '@/entities/Cart/model/types';
import { products } from '@/entities/Product/model/constants/products';
import { CartProductSection } from '@/pages/profile/Cart/ui/CartProductSection/CartProductSection';
import { CartTotalsSection } from '@/pages/profile/Cart/ui/CartTotalsSection/CartTotalsSection';
import { Typography } from '@/shared/ui/Typography';

export default function CartPage() {
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
    <main>
      <Typography
        className="mt-10 font-medium text-xl text-center"
        variant="h1"
      >
        Cart
      </Typography>
      <div className="container">
        {cartProducts.length !== 0 ? (
          <div className="flex flex-col md:flex-row md:justify-between mt-16 md:gap-[86px]">
            <CartProductSection />
            <CartTotalsSection />
          </div>
        ) : (
          <Typography className="font-medium text-center text-3xl mt-10 md:mt-24">
            empty
          </Typography>
        )}
      </div>
    </main>
  );
}
