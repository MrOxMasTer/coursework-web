import type { CartProduct } from '@/entities/Cart/model/types';
import { CartCardWidget } from '@/widgets/CartCardWidget/ui/CartCardWidget';

type CartListProps = {
  cartProducts: CartProduct[];
};

export const CartList = ({ cartProducts }: CartListProps) => {
  return (
    <ul className="grid gap-5 mt-6 md:hidden">
      {cartProducts.map((cp) => (
        <li key={cp.product.id}>
          <CartCardWidget cartProduct={cp} />
        </li>
      ))}
    </ul>
  );
};
