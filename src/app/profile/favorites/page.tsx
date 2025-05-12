import { productService } from '@/entities/Product/api/productService';
import { Typography } from '@/shared/ui/Typography';
import { ProductCardWidget } from '@/widgets/ProductCardWidget/ui/ProductCardWidget';

export default async function FavoritesPage() {
  // FIXME: refactor
  const products = await productService.favorites();

  return (
    <main>
      <div className="container">
        <Typography variant="h1" className="font-bold text-2xl mt-3">
          Favorites
        </Typography>

        <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-4 mt:grid-cols-3 md:grid-cols-4">
          {products.map((p, index) => (
            <li key={`${p.id}${index}`}>
              <ProductCardWidget isLike={true} product={p} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
