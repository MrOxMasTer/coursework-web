import { Typography } from '@/shared/ui/Typography';
import { CartList } from './CartList';
import { CartTable } from './CartTable';
import { productService } from '@/entities/Product/api/productService';

export const CartProductSection = async () => {
  // TODO: use cart

  const products = await productService.favorites();

  return (
    <section className="md:grow">
      <Typography variant="h2" className="hidden">
        Cart product
      </Typography>
      <CartList products={products} />
      <CartTable products={products} />
    </section>
  );
};
