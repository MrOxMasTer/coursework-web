'use client';

import { CartCard } from '@/entities/Cart/ui/CartCard';
import { CounterToCart } from '@/features/counterToCart/ui/CounterToCart';
import Delete from '#/public/svg/Delete.svg';
import type { CartProduct } from '@/entities/Cart/model/types';

type CartCardWidgetProps = {
  cartProduct: CartProduct;
  handleMinus: () => void;
  handlePlus: () => void;
  handleRemove: () => void;
};

export const CartCardWidget = ({
  cartProduct,
  handleMinus,
  handlePlus,
  handleRemove,
}: CartCardWidgetProps) => {
  const { count } = cartProduct;

  return (
    <CartCard cartProduct={cartProduct}>
      <div className="mr-3 flex flex-col items-center justify-between pt-3 pb-2">
        <button
          onClick={handleRemove}
          type="button"
          className="bg-mercury rounded-full size-6 flex justify-center items-center self-end"
        >
          <Delete className="size-4" />
        </button>
        <CounterToCart
          state={count}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
        />
      </div>
    </CartCard>
  );
};
