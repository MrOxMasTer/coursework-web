'use client';

import type { Product } from '@/entities/Product/model/types';
import {
  useQueryStates,
  parseAsString,
  parseAsStringLiteral,
  parseAsInteger,
} from 'nuqs';
import { literalTabs } from '../model/tabs';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { ProductCardWidget } from '@/widgets/ProductCardWidget/ui/ProductCardWidget';
import { literalSortBy } from '../model/sortBy';
import { literalCategories } from '@/entities/Product/model/categories';
import { literalSizes } from '@/entities/Product/model/sizes';
import { useCatalogProducts } from '../api/useCatalogProducts';

type CatalogProductsProps = {
  initialData: Product[];
};

const mediaQuery = '(width < 768px)';

const pageSizeOfMobile = 8;
const pageSizeOfTabletAndDesktop = 9;

export const CatalogProducts = ({ initialData }: CatalogProductsProps) => {
  const isMobile = useMediaQuery(mediaQuery); // true

  const pageSize = isMobile ? pageSizeOfMobile : pageSizeOfTabletAndDesktop;
  const finalProducts = (
    isMobile ? initialData.slice(0, pageSize) : initialData
  ) as Product[];

  const [options] = useQueryStates({
    tab: parseAsStringLiteral(literalTabs).withDefault('all'),
    q: parseAsString,
    sortBy: parseAsStringLiteral(literalSortBy),
    category: parseAsStringLiteral(literalCategories),
    size: parseAsStringLiteral(literalSizes),
    start: parseAsInteger,
    end: parseAsInteger,
  });

  const products = useCatalogProducts(finalProducts, options);

  return (
    <div className="mt-4 md:pb-5">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-4 mt:grid-cols-3">
        {products.map((p, index) => (
          <li key={`${p.id}${index}`}>
            <ProductCardWidget product={p} />
          </li>
        ))}
      </ul>
    </div>
  );
};
