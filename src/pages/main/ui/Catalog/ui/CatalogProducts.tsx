'use client';

import {
  useQueryStates,
  parseAsString,
  parseAsStringLiteral,
  parseAsInteger,
} from 'nuqs';
import { literalTabs } from '../model/tabs';
import { ProductCardWidget } from '@/widgets/ProductCardWidget/ui/ProductCardWidget';
import { literalSortBy } from '../model/sortBy';
import { literalCategories } from '@/entities/Product/model/categories';
import { literalSizes } from '@/entities/Product/model/sizes';
import { useCatalogProducts } from '../api/useCatalogProducts';
import { useFavoritesStore } from '@/entities/Favorites/api/useFavoritesStore';

type CatalogProductsProps = {};

export const CatalogProducts = () => {
  const [options] = useQueryStates({
    tab: parseAsStringLiteral(literalTabs).withDefault('all'),
    q: parseAsString,
    sortBy: parseAsStringLiteral(literalSortBy),
    category: parseAsStringLiteral(literalCategories),
    size: parseAsStringLiteral(literalSizes),
    start: parseAsInteger,
    end: parseAsInteger,
  });

  const products = useCatalogProducts(options);
  const likes = useFavoritesStore((state) => state.likes);

  return (
    <div className="mt-4 md:pb-5">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-4 mt:grid-cols-3">
        {products.map((p, index) => (
          <li key={`${p.id}${index}`}>
            <ProductCardWidget isLike={likes.includes(p.id)} product={p} />
          </li>
        ))}
      </ul>
    </div>
  );
};
