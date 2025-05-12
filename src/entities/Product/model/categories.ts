export const categories = [
  {
    value: 'house',
    label: 'House Plants',
  },
  {
    value: 'potter',
    label: 'Potter Plants',
  },
  {
    value: 'seeds',
    label: 'Seeds',
  },
  {
    value: 'succulents',
    label: 'Succulents',
  },
  {
    value: 'small',
    label: 'Small Plants',
  },
  {
    value: 'big',
    label: 'Big Plants',
  },
  {
    value: 'terrariums',
    label: 'Terrariums',
  },
  {
    value: 'gardening',
    label: 'Gardening',
  },
  {
    value: 'accessories',
    label: 'Accessories',
  },
] as const;

export const literalCategories = categories.map((c) => c.value);
