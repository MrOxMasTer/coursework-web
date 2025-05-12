'use client';

import { Chip } from '@/shared/ui/Chip';
import { sizes } from '../../../entities/Product/model/sizes';
import { Typography } from '@/shared/ui/Typography';
import { useQueryState } from 'nuqs';

export const SizeChips = () => {
  const [size, setSize] = useQueryState('size');

  const handleClick = (value: string) => {
    return () => setSize((prev) => (prev === value ? null : value));
  };

  return (
    <>
      <Typography className="font-bold">Sizes</Typography>
      <ul className="mt-3 flex gap-x-1.5 gap-y-2 flex-wrap">
        {sizes.map(({ value, label }) => (
          <li key={value}>
            <Chip
              onClick={handleClick(value)}
              className="px-3 py-1 text-sm am:text-base"
              variant={size === value ? 'active' : 'base'}
            >
              {label}
            </Chip>
          </li>
        ))}
      </ul>
    </>
  );
};
