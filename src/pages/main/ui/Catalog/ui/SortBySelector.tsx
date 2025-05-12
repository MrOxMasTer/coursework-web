'use client';

import { useQueryState } from 'nuqs';
import { literalSortBy, sortBy } from '../model/sortBy';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/shared/ui/shadcnui/Select';
import { Typography } from '@/shared/ui/Typography';

// TODO:
export const SortBySelector = () => {
  const [sort, setSort] = useQueryState('sortBy');

  const handleChange = (s: string) =>
    setSort(s === literalSortBy[0] ? null : s);

  return (
    <Select
      defaultValue={sort ?? literalSortBy[0]}
      onValueChange={handleChange}
    >
      <SelectTrigger className="w-fit hidden md:flex border-none px-0 h-fit">
        Sort by
        <Typography variant="span" className="ml-3 block mr-1">
          {sort ? sortBy.find((i) => i.value === sort)?.label : sortBy[0].label}
        </Typography>
      </SelectTrigger>
      <SelectContent className="bg-white border-0">
        {sortBy.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
