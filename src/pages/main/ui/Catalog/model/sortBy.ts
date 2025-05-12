export const sortBy = [
  {
    value: 'default',
    label: 'default',
  },
  {
    value: 'popular',
    label: 'popular',
  },
  {
    value: 'new',
    label: 'new',
  },
  {
    value: 'cheaper',
    label: 'cheaper',
  },
  {
    value: 'dearer',
    label: 'dearer',
  },
] as const;

export const literalSortBy = sortBy.map((s) => s.value);
