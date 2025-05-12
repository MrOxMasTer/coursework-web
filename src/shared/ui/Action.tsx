import type { ComponentProps } from 'react';
import { cva } from '../configs/cva';
import type { VariantProps } from 'cva';
import Link from 'next/link';

export type ActionVariantsProps = VariantProps<typeof actionVariants>;

type ButtonProps = ComponentProps<'button'>;
type LinkProps = ComponentProps<typeof Link>;

type ButtonOrLink = ButtonProps | LinkProps;

type ActionProps = ActionVariantsProps & ButtonOrLink;

export const Action = ({ variant, className, ...props }: ActionProps) => {
  const newClassName = actionVariants({
    variant,
    className,
  });

  return 'href' in props ? (
    <Link className={newClassName} {...props} />
  ) : (
    <button className={newClassName} {...props} />
  );
};

export const actionVariants = cva({
  base: 'flex justify-center items-center rounded-md py-1.5 px-2.5',
  variants: {
    variant: {
      base: 'bg-green text-white',
      grey: 'bg-alabaster text-black',
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});
