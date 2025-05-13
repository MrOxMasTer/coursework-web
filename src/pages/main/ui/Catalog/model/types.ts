import type { literalSortBy } from './sortBy';

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
