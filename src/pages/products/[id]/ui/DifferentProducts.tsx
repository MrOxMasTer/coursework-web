'use client';

import { useFavoritesStore } from '@/entities/Favorites/api/useFavoritesStore';
import { products } from '@/entities/Product/model/constants/products';
import type { Product } from '@/entities/Product/model/types';
import { Typography } from '@/shared/ui/Typography';
import { ProductCardWidget } from '@/widgets/ProductCardWidget/ui/ProductCardWidget';

type DifferentProductsProps = {
  productId: Product['id'];
};

export const DifferentProducts = ({ productId }: DifferentProductsProps) => {
  const likes = useFavoritesStore((state) => state.likes);

  const filteredProducts = products.filter((p) => p.id !== productId);

  return (
    <section className="mt-7">
      <div className="container">
        <Typography variant="h2" className="font-medium text-2xl">
          Different Products
        </Typography>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 mt:grid-cols-3 md:grid-cols-4">
          {filteredProducts.map((p, index) => (
            <li key={`${p.id}${index}`}>
              <ProductCardWidget isLike={likes.includes(p.id)} product={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
