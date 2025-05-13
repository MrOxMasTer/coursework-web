'use client';

import { CartCard } from '@/entities/Cart/ui/CartCard';
import { useCounter } from '@/features/counterToCart/api/useCounter';
import { CounterToCart } from '@/features/counterToCart/ui/CounterToCart';
import Delete from '#/public/svg/Delete.svg';
import type { CartProduct } from '@/entities/Cart/model/types';

type CartCardWidgetProps = {
  cartProduct: CartProduct;
};

export const CartCardWidget = ({ cartProduct }: CartCardWidgetProps) => {
  const { product, count, size } = cartProduct;

  const { count: tempSize, handleMinus, handlePlus } = useCounter(count);

  return (
    <CartCard product={product} size={size}>
      <div className="mr-3 flex flex-col items-center justify-between pt-3 pb-2">
        <div className="bg-mercury rounded-full size-6 flex justify-center items-center self-end">
          <Delete className="size-4" />
        </div>
        <CounterToCart
          state={count}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
        />
      </div>
    </CartCard>
  );
};
