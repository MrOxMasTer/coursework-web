'use client';

import { Field } from '@/shared/ui/Field';
import SearchSvg from '#/public/svg/Search.svg';
import { useQueryState } from 'nuqs';
import type { ChangeEvent } from 'react';

// FIXME: next.js -> <Form /> ?
export const Search = () => {
  const [search, setSearch] = useQueryState('q');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setSearch(value);
  };

  return (
    <Field
      onChange={handleChange}
      value={search || ''}
      type="text"
      placeholder="Find your plants"
      variant="gray"
      svgFill="paths"
      className="cursor-text w-full max-w-[800px]"
      leftContent={<SearchSvg className="text-silver-chalice" />}
    />
  );
};
