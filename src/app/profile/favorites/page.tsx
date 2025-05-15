'use client';

import { products } from '@/entities/Product/model/constants/products';
import { useFavoritesStore } from '@/entities/Favorites/api/useFavoritesStore';
import { Typography } from '@/shared/ui/Typography';
import { ProductCardWidget } from '@/widgets/ProductCardWidget/ui/ProductCardWidget';

export default function FavoritesPage() {
  const likes = useFavoritesStore((state) => state.likes);
  const likesProducts = products.filter((p) => likes.includes(p.id));

  return (
    <main>
      <div className="container">
        <Typography variant="h1" className="font-bold text-2xl mt-3">
          Favorites
        </Typography>

        {likesProducts.length !== 0 ? (
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-4 mt:grid-cols-3 md:grid-cols-4">
            {likesProducts.map((p, index) => (
              <li key={`${p.id}${index}`}>
                <ProductCardWidget isLike={true} product={p} />
              </li>
            ))}
          </ul>
        ) : (
          <Typography className="font-medium text-center text-3xl mt-10 md:mt-24">
            empty
          </Typography>
        )}
      </div>
    </main>
  );
}
