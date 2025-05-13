'use client';

import Heart from '#/public/svg/Heart.svg';
import HeartFill from '#/public/svg/Heart_fill.svg';
import { useFavoritesStore } from '@/entities/Favorites/api/useFavoritesStore';
import type { Product } from '@/entities/Product/model/types';
import { cn } from '@/shared/lib/utils/classes';
import type { ComponentProps } from 'react';

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
  const toggleLike = useFavoritesStore((state) => state.toggleLike);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();

        toggleLike(productId);
      }}
      type="button"
      aria-label="toggle like"
      className={cn(
        'bg-white rounded-full flex size-7 justify-center items-center absolute right-3 top-3 z-10',
        className,
      )}
      {...props}
    >
      {isLike ? (
        <HeartFill className="translate-y-[1px]" />
      ) : (
        <Heart className="translate-y-[1px]" />
      )}
    </button>
  );
};
