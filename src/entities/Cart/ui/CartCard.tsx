import { Typography } from '@/shared/ui/Typography';
import type { CartProduct } from '../model/types';
import Image from 'next/image';

type CartCard = {
  cartProduct: CartProduct;
  children?: React.ReactNode;
};

export const CartCard = ({ cartProduct, children }: CartCard) => {
  const { product, size } = cartProduct;
  const { name, price, imageUrl, description } = product;

  // TODO: image

  return (
    <div className="flex bg-linear-[144deg] from-0% to-100% from-white to-white shadow-[0_6px_20px_0_rgba(210,_210,_210,_0.25)] justify-between h-[100px] rounded-[14px]">
      <div className="flex justify-start gap-2">
        <div className="w-[100px] h-full bg-linear-[135deg] from-0% from-wild-sand to-100% to-alabaster rounded-l-[14px] shrink-0 flex justify-center items-center">
          <Image
            width={100}
            height={100}
            src={`/${imageUrl}`}
            alt={description}
          />
        </div>
        <div className="mt-2.5 flex flex-col pb-2">
          <Typography className="font-medium text-[0.9375rem] line-clamp-1">
            {name}
          </Typography>
          <Typography className="text-sm flex gap-1 text-dove-gray">
            Size :
            <Typography variant="span" className="font-bold text-current">
              {size}
            </Typography>
          </Typography>
          <Typography className="font-bold text-green text-lg mt-auto">
            ${price}
          </Typography>
        </div>
      </div>
      {children}
    </div>
  );
};
