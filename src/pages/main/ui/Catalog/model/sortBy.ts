export const sortBy = [
  {
    value: 'default',
    label: 'default',
  },

  {
    value: 'cheaper',
    label: 'cheaper',
  },
  {
    value: 'dearer',
    label: 'dearer',
  },
  {
    value: 'popular',
    label: 'popular',
  },
  {
    value: 'higher_rating',
    label: 'higher rating',
  },
] as const;

export const literalSortBy = sortBy.map((s) => s.value);
