import type { ComponentProps } from 'react';
import { cn } from '../lib/utils/classes';
import { cva } from '../configs/cva';
import type { VariantProps } from 'cva';

type FieldVariantsProps = VariantProps<typeof fieldVariants>;

type FieldProps = ComponentProps<'input'> &
  FieldVariantsProps & {
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
  };

export const Field = ({
  className,
  leftContent,
  rightContent,
  svgFill,
  variant,
  ...props
}: FieldProps) => {
  const fieldClassName = fieldVariants({ variant, svgFill, className });

  // FIXME: focus - outline
  return (
    <label className={fieldClassName}>
      {leftContent}
      <input className={cn('peer w-full outline-none')} {...props} />
      {rightContent}
    </label>
  );
};

const fieldVariants = cva({
  base: 'flex gap-4 items-center p-3 placeholder:text-sm rounded-[10px]',
  variants: {
    variant: {
      unset: null,
      base: '',
      gray: 'bg-alabaster text-black placeholder:text-silver-chalice',
      outline:
        'border-mercury border border-solid placeholder:text-silver-chalice focus-within:border-green transition-colors',
    },
    svgFill: {
      unset: null,
      paths: '[&>svg]:fill-current [&>svg>path]:fill-inherit',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'base',
    svgFill: 'unset',
  },
});
