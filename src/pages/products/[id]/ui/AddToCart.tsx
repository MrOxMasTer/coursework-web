'use client';

import { useCounter } from '@/features/counterToCart/api/useCounter';
import { CounterToCart } from '@/features/counterToCart/ui/CounterToCart';
import { Action } from '@/shared/ui/Action';

export const AddToCart = () => {
  const isCart = true;

  const { count, handleMinus, handlePlus } = useCounter(0);

  const handleClickAddToCart = () => {};

  return (
    <div className="flex gap-5 items-center mt-5 justify-start">
      <Action
        className="max-w-[175px] w-full rounded-[40px] py-3.5 font-bold bg-linear-[137deg] from-0% from-green to-100% to-green/80 shadow-[0_10px_20px_0_rgba(70,_163,_88,_0.3)]"
        type="button"
        onClick={handleClickAddToCart}
        variant="base"
      >
        Buy now
      </Action>
      {isCart ? (
        <CounterToCart
          state={count}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
        />
      ) : null}
    </div>
  );
};
