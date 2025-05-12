'use client';

import type { Product } from '@/entities/Product/model/types';
import {
  useQueryStates,
  parseAsString,
  parseAsStringLiteral,
  parseAsInteger,
} from 'nuqs';
import { useCatalogProducts } from '../api/useCatalogProducts';
import { useInView } from 'react-intersection-observer';
import { literalTabs } from '../model/tabs';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { ProductCardWidget } from '@/widgets/ProductCardWidget/ui/ProductCardWidget';
import { literalSortBy } from '../model/sortBy';
import { literalCategories } from '@/entities/Product/model/categories';
import { literalSizes } from '@/entities/Product/model/sizes';

type CatalogProductsProps = {
  initialData: Product[];
};

const mediaQuery = '(width < 768px)';
const intersectionThreshold = 0.1;
const intersectionDelay = 100;
const intersectionRootMargin = '350px 0px';

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

  // const deferredQuery = useDeferredValue(options.q);

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useCatalogProducts(finalProducts, {
      ...options,
      pageSize,
      // q: deferredQuery,
    });

  // FIXME: tabs:
  const [ref] = useInView({
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage();
    },

    threshold: intersectionThreshold,
    triggerOnce: false,
    trackVisibility: true,
    delay: intersectionDelay,
    rootMargin: intersectionRootMargin,
  });

  return (
    <div className="mt-4">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-4 mt:grid-cols-3">
        {data.pages.flat().map((p, index) => (
          <li key={`${p.id}${index}`}>
            <ProductCardWidget product={p} />
          </li>
        ))}
      </ul>
      {(hasNextPage || isFetchingNextPage) && <div ref={ref}>...</div>}
    </div>
  );
};
