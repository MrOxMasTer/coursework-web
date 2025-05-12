import type { Product } from '../model/types';
import { Typography } from '@/shared/ui/Typography';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { imageUrl, name, price, discountedPrice, discount } = product;

  return (
    <div className="relative max-w-[175px] mm:max-w-none">
      <div className="bg-linear-[135deg] rounded-[20px] from-0% from-wild-sand to-100% to-wild-sand min-h-[160px] mm:min-h-[200px]">
        {/* <Image src={imageUrl} alt={name} /> */}
      </div>
      <div className="pl-[3px]">
        <Typography
          className="text-mine-shaft text-[0.9375rem] mt-2.5 line-clamp-1"
          variant="p"
        >
          {name}
        </Typography>
        <div className="flex gap-2 items-center">
          <Typography className="text-green font-bold" variant="p">
            ${discount ? discountedPrice : price}
          </Typography>
          {discount ? (
            <Typography
              className="text-silver-chalice line-through"
              variant="span"
            >
              {price}
            </Typography>
          ) : null}
        </div>
      </div>
      {discount ? (
        <div className="bg-green absolute top-[18px] pl-1.5 py-1 pr-1.5 text-white text-xs md:text-base md:pr-2">
          {discount}% OFF
        </div>
      ) : null}
    </div>
  );
};
