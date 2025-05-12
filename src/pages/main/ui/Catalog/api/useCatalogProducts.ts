import {
  productService,
  type CatalogProductsOptions,
} from '@/entities/Product/api/productService';
import type { Product } from '@/entities/Product/model/types';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useCatalogProducts = (
  initialData: Product[],
  options: CatalogProductsOptions,
) => {
  const { tab, q, pageSize = 9, sortBy } = options;
  const queryKey = ['catalog-products', tab, q, sortBy, pageSize] as const;

  const getNextPageParam = (lastPage: Product[]) =>
    lastPage.length > 0 ? lastPage[lastPage.length - 1].id : undefined;

  const infiniteQuery = useInfiniteQuery<Product[]>({
    queryKey,
    initialData: () => {
      return {
        pages: [initialData],
        pageParams: [undefined],
      };
    },
    queryFn: async ({ pageParam, queryKey, client }) => {
      const products = await productService.catalog({
        ...options,
        cursor: pageParam as Product['id'] | undefined,
      });

      if (products.length === 0) return products;

      // FIXME: ???
      // const nextCursor = products[products.length - 1].id;

      // client.prefetchInfiniteQuery({
      //   initialPageParam: nextCursor,
      //   getNextPageParam,
      //   queryKey,
      //   queryFn: async ({ pageParam }) => {
      //     const products = await productService.catalog({
      //       ...options,
      //       cursor: pageParam,
      //     });
      //     return products;
      //   },
      // });

      return products;
    },
    initialPageParam: undefined,
    getNextPageParam,
  });

  return infiniteQuery;
};
