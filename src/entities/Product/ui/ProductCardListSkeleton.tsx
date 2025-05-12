import { ProductCardSkeleton } from './ProductCardSkeleton';

export const ProductCardListSkeleton = () => {
  return (
    <div className="grid mt-4 grid-cols-2 gap-x-4 gap-y-6">
      {Array.from({ length: 9 }).map((_, index) => (
        <ProductCardSkeleton
          className="last:odd:hidden md:last:odd:block"
          key={`product_card_skeleton_${index}`}
        />
      ))}
    </div>
  );
};
