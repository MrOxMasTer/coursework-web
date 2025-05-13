'use client';

import { useCartStore } from '@/entities/Cart/api/useCartStore';
import type { CartProduct } from '@/entities/Cart/model/types';
import { CartCardWidget } from '@/widgets/CartCardWidget/ui/CartCardWidget';

type CartListProps = {
  cartProducts: CartProduct[];
};

export const CartList = ({ cartProducts }: CartListProps) => {
  const removeToCart = useCartStore((state) => state.removeToCart);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <ul className="grid gap-5 md:hidden">
      {cartProducts.map((cp) => {
        const { product, count, size } = cp;
        const { id } = product;

        const handleMinusCart = () => {
          if (count > 1) {
            return addToCart(id, size, count - 1);
          }

          return;
        };

        const handlePlusCart = () => {
          if (count < 99) {
            return addToCart(id, size, count + 1);
          }

          return;
        };

        const handleRemove = () => removeToCart(id);

        return (
          <li key={cp.product.id}>
            <CartCardWidget
              handleRemove={handleRemove}
              handleMinus={handleMinusCart}
              handlePlus={handlePlusCart}
              cartProduct={cp}
            />
          </li>
        );
      })}
    </ul>
  );
};
