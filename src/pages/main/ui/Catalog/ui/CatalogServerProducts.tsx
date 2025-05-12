import { productService } from '@/entities/Product/api/productService';
import { CatalogProducts } from './CatalogProducts';
import { literalTabs } from '../model/tabs';

type CatalogServerProductsProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function CatalogServerProducts({
  searchParams,
}: CatalogServerProductsProps) {
  const { tab, q, sortBy, start, end, category, size } = await searchParams;

  const products = await productService.catalog({
    tab: tab ?? literalTabs[0],
    q,
    sortBy,
    start: start ? Number(start) : undefined,
    end: end ? Number(end) : undefined,
    size,
    category,
    pageSize: 9,
  });

  return <CatalogProducts initialData={products} />;
}
