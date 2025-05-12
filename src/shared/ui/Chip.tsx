import type { ComponentProps } from 'react';
import { cva } from '../configs/cva';
import type { ClassValue, VariantProps } from 'cva';

type ChipVariantProps = VariantProps<typeof chipVariants>;

type ChipProps = ComponentProps<'button'> &
  ChipVariantProps & {
    className: ClassValue;
  };

export const Chip = ({ children, variant, className, ...props }: ChipProps) => {
  return (
    <button className={chipVariants({ variant, className })} {...props}>
      {children}
    </button>
  );
};

export const chipVariants = cva({
  base: 'rounded-full flex justify-center items-center',
  variants: {
    variant: {
      unset: null,
      base: 'bg-mercury text-black',
      active: 'text-white bg-green outline outline-green',
      outline: 'text-dove-gray outline outline-mercury',
      outlineActive: 'outline-green text-green outline font-bold',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'unset',
  },
});
