'use client';

import { categories } from '@/entities/Product/model/categories';
import { cn } from '@/shared/lib/utils/classes';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/shadcnui/RadioGroup';
import { Typography } from '@/shared/ui/Typography';
import { useQueryState } from 'nuqs';

export const CategorySelector = () => {
  const [category, setCategory] = useQueryState('category');

  const handleChange = (value: string) => {
    setCategory(value === category ? null : value);
  };

  return (
    <>
      <Typography className="font-bold">Categories</Typography>
      <RadioGroup
        defaultValue={category ?? undefined}
        value={category}
        onValueChange={handleChange}
        className="mt-3"
      >
        {categories.map(({ value, label }) => (
          <div
            className={cn('flex justify-between', {
              'text-green font-bold': category === value,
            })}
            key={value}
          >
            <label className="w-full" htmlFor={value}>
              {label}
            </label>
            <RadioGroupItem className="md:hidden" id={value} value={value} />
          </div>
        ))}
      </RadioGroup>
    </>
  );
};
