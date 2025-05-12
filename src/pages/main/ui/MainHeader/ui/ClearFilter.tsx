'use client';

import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';

export const ClearFilter = () => {
  const [, setFilter] = useQueryStates({
    category: parseAsString,
    size: parseAsString,
    start: parseAsInteger,
    end: parseAsInteger,
  });

  const clearFilter = () => {
    setFilter({
      category: null,
      size: null,
      start: null,
      end: null,
    });
  };

  return (
    <button
      className="font-medium text-[#d02424]"
      onClick={clearFilter}
      type="button"
    >
      clear
    </button>
  );
};
