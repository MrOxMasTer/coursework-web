import type { ClassValue } from 'clsx';
import type { VariantProps } from 'cva';
import { memo, type ElementType } from 'react';
import { cva } from '../configs/cva';

type TypographyVariantProps = VariantProps<typeof typographyVariants>;

export type TypographyProps = {
  children: React.ReactNode;
  className?: ClassValue;
  as?: ElementType;
} & TypographyVariantProps;

// const titles = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const Typography = memo(
  ({ as, children, variant, className, ...props }: TypographyProps) => {
    const Tag = as || variant || 'p';

    // const otherTheme =
    //   theme ?? (titles.some((t) => t === variant) ? 'title' : null);

    return (
      <Tag
        // @ts-ignore
        className={typographyVariants({ variant, className })}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

export const typographyVariants = cva({
  base: 'text-black',
  variants: {
    variant: {
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      p: '',
      span: '',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'p',
  },
});
