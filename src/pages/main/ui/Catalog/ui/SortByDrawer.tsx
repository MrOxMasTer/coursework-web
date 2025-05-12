'use client';

import { cn } from '@/shared/lib/utils/classes';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/shadcnui/Drawer';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/shadcnui/RadioGroup';

import { ArrowDownUp } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { literalSortBy, sortBy } from '../model/sortBy';

export const SortByDrawer = () => {
  const [sort, setSort] = useQueryState('sortBy');

  const handleChange = (s: string) =>
    setSort(s === literalSortBy[0] ? null : s);

  return (
    <Drawer>
      <DrawerTrigger
        className={cn(
          'md:hidden text-silver-chalice bg-wild-sand p-1.5 rounded-[14px]',
          {
            'text-green': sort,
          },
        )}
      >
        <ArrowDownUp />
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <div className="container">
          <DrawerTitle>Sort by</DrawerTitle>
          <DrawerDescription className="mt-1">
            Sort as desired
          </DrawerDescription>
          <RadioGroup
            defaultValue={sort ?? literalSortBy[0]}
            onValueChange={handleChange}
            className="flex flex-col space-y-2 bg-wild-sand rounded-t-[20px] text-green pt-4 px-4 mt-4 pb-8"
          >
            {sortBy.map(({ label, value }) => (
              <div className="flex items-center gap-3" key={value}>
                <RadioGroupItem id={value} className="size-5" value={value} />
                <label className="text-black font-medium" htmlFor={value}>
                  {label}
                </label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
