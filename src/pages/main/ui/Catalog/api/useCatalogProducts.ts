import type { Size } from '@/entities/Product/model/sizes';
import type { Product } from '@/entities/Product/model/types';
import { useEffect, useState } from 'react';
import type { literalSortBy } from '../model/sortBy';

export type CatalogProductsOptions = {
  q?: string | null;
  tab?: string;
  sortBy?: (typeof literalSortBy)[number] | null;
  start?: number | null;
  end?: number | null;
  category?: string | null;
  size?: string | null;
  pageSize?: number;
  cursor?: number;
};

export const useCatalogProducts = (
  initialData: Product[],
  options: CatalogProductsOptions,
) => {
  const [products, setProducts] = useState(initialData);

  useEffect(() => {
    let newProducts = [...initialData];
    const { tab, q, sortBy, category, size, start, end } = options;

    if (category) {
      newProducts = newProducts.filter((p) => p.category === category);
    }

    if (size) {
      newProducts = newProducts.filter((p) => p.sizes.includes(size as Size));
    }

    if (start && end) {
      newProducts = newProducts.filter((p) => {
        if (p.discountedPrice) {
          return p.discountedPrice >= start && p.discountedPrice <= end;
        }

        return p.price >= start && p.price <= end;
      });
    }

    if (tab) {
      if (tab === 'arrivals') {
        newProducts = newProducts.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
        );
      }

      if (tab === 'sale') {
        newProducts = newProducts.filter(
          (p) => p.discount && p.discountedPrice,
        );
      }
    }

    if (sortBy) {
      if (sortBy === 'higher_rating') {
        newProducts = newProducts.sort((a, b) => b.rating - a.rating);
      }

      if (sortBy === 'popular') {
        newProducts = newProducts.sort((a, b) => b.ratingCount - a.ratingCount);
      }

      if (sortBy === 'dearer') {
        newProducts = newProducts.sort((a, b) => {
          return (
            (b.discountedPrice ?? b.price) - (a.discountedPrice ?? a.price)
          );
        });
      }

      if (sortBy === 'cheaper') {
        newProducts = newProducts.sort((a, b) => {
          return (
            (a.discountedPrice ?? a.price) - (b.discountedPrice ?? b.price)
          );
        });
      }
    }

    if (q) {
      newProducts = newProducts.filter((p) =>
        p.name.toLowerCase().includes(q.toLowerCase()),
      );
    }

    setProducts(newProducts);
  }, [initialData, options]);

  return products;
};
