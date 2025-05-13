'use client';

import { useCartStore } from '@/entities/Cart/api/useCartStore';
import { literalSizes } from '@/entities/Product/model/sizes';
import type { Product } from '@/entities/Product/model/types';
import { CounterToCart } from '@/features/counterToCart/ui/CounterToCart';
import { Action } from '@/shared/ui/Action';
import { parseAsStringLiteral, useQueryState } from 'nuqs';

type AddToCartProps = {
  productId: Product['id'];
};

export const AddToCart = ({ productId }: AddToCartProps) => {
  const [size] = useQueryState('size', parseAsStringLiteral(literalSizes));

  const cartItems = useCartStore((state) => state.products);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeToCart = useCartStore((state) => state.removeToCart);

  const cartItem = cartItems.find((i) => i.id === productId);

  const isProductInCart = !!cartItem && cartItem.size === size;

  const handleMinusCart = () => {
    if (!cartItem || !size) {
      return;
    }

    if (cartItem.count > 1) {
      addToCart(productId, size, cartItem.count - 1);
    } else {
      removeToCart(productId);
    }
  };

  const handlePlusCart = () => {
    if (!size) {
      return;
    }

    if (!cartItem) {
      return addToCart(productId, size, 1);
    }

    if (cartItem.count < 99) {
      return addToCart(productId, size, cartItem.count + 1);
    }

    return;
  };

  const handleAddToCart = () => {
    if (!size) {
      return;
    }

    if (cartItem) {
      return addToCart(productId, size, cartItem.count + 1);
    }

    return addToCart(productId, size, 1);
  };

  return (
    <div className="flex gap-5 items-center mt-5 justify-start">
      <Action
        className="max-w-[175px] w-full rounded-[40px] py-3.5 font-bold bg-linear-[137deg] from-0% from-green to-100% to-green/80 shadow-[0_10px_20px_0_rgba(70,_163,_88,_0.3)]"
        type="button"
        onClick={handleAddToCart}
        variant="base"
      >
        Buy now
      </Action>
      {isProductInCart ? (
        <CounterToCart
          state={cartItem.count}
          handleMinus={handleMinusCart}
          handlePlus={handlePlusCart}
        />
      ) : null}
    </div>
  );
};
