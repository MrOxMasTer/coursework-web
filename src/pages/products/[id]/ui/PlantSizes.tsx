'use client';

import type { Size } from '@/entities/Product/model/sizes';
import { Chip } from '@/shared/ui/Chip';
import { Typography } from '@/shared/ui/Typography';
import { useQueryState } from 'nuqs';

type PlantSizesProps = {
  sizes: Size[];
};

export const PlantSizes = ({ sizes }: PlantSizesProps) => {
  const [size, setSize] = useQueryState('size');

  const handleClick = (value: string) => {
    return () => setSize(value);
  };

  return (
    <>
      <Typography className="font-medium text-[15px]">Size:</Typography>
      <ul className="mt-3 flex gap-x-2.5 gap-y-2 flex-wrap">
        {sizes.map((s) => {
          const isActive = size === s;

          return (
            <li key={s}>
              <Chip
                onClick={handleClick(s)}
                // @ts-ignore
                className={[
                  'px-3 py-1 text-sm size-7',
                  isActive ? 'text-lg' : '',
                ]}
                variant={isActive ? 'outlineActive' : 'outline'}
              >
                {s}
              </Chip>
            </li>
          );
        })}
      </ul>
    </>
  );
};
