import type { Product } from '@/entities/Product/model/schemes';
import { CartCardWidget } from '@/widgets/CartCardWidget/ui/CartCardWidget';

type CartListProps = {
  products: Product[];
};

export const CartList = ({ products }: CartListProps) => {
  return (
    <ul className="grid gap-5 mt-6 md:hidden">
      {products.map((p) => (
        <li key={p.id}>
          <CartCardWidget product={p} />
        </li>
      ))}
    </ul>
  );
};
