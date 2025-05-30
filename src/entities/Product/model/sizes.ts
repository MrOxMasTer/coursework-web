export const sizes = [
  {
    value: 'XS',
    label: 'x-small',
  },
  {
    value: 'S',
    label: 'small',
  },
  {
    value: 'M',
    label: 'medium',
  },
  {
    value: 'L',
    label: 'large',
  },
  {
    value: 'XL',
    label: 'x-large',
  },
] as const;

export const literalSizes = sizes.map((s) => s.value);

export type Size = (typeof literalSizes)[number];
