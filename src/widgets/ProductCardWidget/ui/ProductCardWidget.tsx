import type { Product } from '@/entities/Product/model/schemes';
import { ProductCard } from '@/entities/Product/ui/ProductCard';
import { ButtonLike } from '@/features/toggleLike/ui/ButtonLike';
import { pageConfig } from '@/shared/configs/page';
import Link from 'next/link';

type ProductCardWidgetProps = {
  product: Product;
  isLike: boolean;
};

export const ProductCardWidget = ({
  product,
  isLike = false,
}: ProductCardWidgetProps) => {
  return (
    <div className="relative">
      <ButtonLike productId={product.id} isLike={isLike} />
      <Link href={pageConfig.product(product.id)}>
        <ProductCard product={product} />
      </Link>
    </div>
  );
};
