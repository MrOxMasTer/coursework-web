'use client';

import { CartCard } from '@/entities/Cart/ui/CartCard';
import type { Product } from '@/entities/Product/model/schemes';
import { sizes } from '@/entities/Product/model/sizes';
import { useCounter } from '@/features/counterToCart/api/useCounter';
import { CounterToCart } from '@/features/counterToCart/ui/CounterToCart';
import Delete from '#/public/svg/Delete.svg';

type CartCardWidgetProps = {
  product: Product;
};

export const CartCardWidget = ({ product }: CartCardWidgetProps) => {
  // FIXME: size:
  const size = sizes[2].value;
  const { count, handleMinus, handlePlus } = useCounter(0);

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
