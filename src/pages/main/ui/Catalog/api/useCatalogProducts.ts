import type { Size } from '@/entities/Product/model/sizes';
import { useEffect, useState } from 'react';
import { products as initialData } from '@/entities/Product/model/constants/products';
import type { CatalogProductsOptions } from '../model/types';

export const useCatalogProducts = (options: CatalogProductsOptions) => {
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
  }, [options]);

  return products;
};
