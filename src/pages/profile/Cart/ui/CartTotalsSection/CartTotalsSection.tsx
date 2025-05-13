'use client';

import { useCartStore } from '@/entities/Cart/api/useCartStore';
import type { CartProduct } from '@/entities/Cart/model/types';
import { products } from '@/entities/Product/model/constants/products';
import { Action } from '@/shared/ui/Action';
import { Typography } from '@/shared/ui/Typography';

export const CartTotalsSection = () => {
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

  const invoice = cartProducts.reduce(
    (acc, { product: { price, discountedPrice }, count }) => {
      acc.subtotal += price * count;
      acc.discount += discountedPrice ? (price - discountedPrice) * count : 0;
      acc.total += (discountedPrice ?? price) * count;

      return acc;
    },
    { subtotal: 0, discount: 0, total: 0 },
  );

  const { discount, subtotal, total } = invoice;

  return (
    <section className="md:w-[328px]">
      <Typography
        className="text-center mt-4 font-medium md:font-bold md:text-left md:border-b-[0.5px] md:border-solid md:border-[rgba(70,_163,_88,_0.5)] md:pb-2.5"
        variant="h2"
      >
        Cart Totals
      </Typography>
      <div className="text-mine-shaft">
        <Typography className="flex justify-between text-current mt-4">
          Subtotal
          <Typography variant="span" className="font-medium text-current">
            ${subtotal}
          </Typography>
        </Typography>
        <Typography className="flex justify-between text-current">
          Discount
          <Typography variant="span" className="text-current">
            -${discount}
          </Typography>
        </Typography>
        <Typography className="flex font-bold items-baseline justify-between mt-5">
          Total
          <Typography variant="span" className="text-green text-lg">
            ${total}
          </Typography>
        </Typography>
      </div>
      <Action
        className="w-full font-bold bg-linear-[137deg] mt-7 py-5 from-0% from-green to-100% to-[rgba(70,_163,_88,_0.8)] rounded-[40px] md:rounded-[3px] md:py-3"
        type="button"
      >
        Process to Checkout
      </Action>
    </section>
  );
};
