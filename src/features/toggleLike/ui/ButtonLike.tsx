'use client';

import Heart from '#/public/svg/Heart.svg';
import HeartFill from '#/public/svg/Heart_fill.svg';
import type { Product } from '@/entities/Product/model/types';
import { cn } from '@/shared/lib/utils/classes';
import { useState, type ComponentProps } from 'react';

type ButtonLikeProps = ComponentProps<'button'> & {
  productId: Product['id'];
  isLike: boolean;
};

export const ButtonLike = ({
  productId,
  isLike,
  className,
  ...props
}: ButtonLikeProps) => {
  const [like, setLike] = useState(isLike);

  return (
    <button
      onClick={(e) => {
        // e.stopPropagation();

        setLike((prev) => !prev);

        console.log(`toggle LIKE product ${productId}`);
      }}
      type="button"
      aria-label="toggle like"
      className={cn(
        'bg-white rounded-full flex size-7 justify-center items-center absolute right-3 top-3 z-10',
        className,
      )}
      {...props}
    >
      {like ? (
        <HeartFill className="translate-y-[1px]" />
      ) : (
        <Heart className="translate-y-[1px]" />
      )}
    </button>
  );
};
