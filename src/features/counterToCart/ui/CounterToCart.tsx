'use client';

import { Action, type ActionVariantsProps } from '@/shared/ui/Action';
import { Typography } from '@/shared/ui/Typography';

type CounterToCartProps = ActionVariantsProps & {
  state: number;
  handleMinus: () => void;
  handlePlus: () => void;
};

export const CounterToCart = ({
  state,
  handleMinus,
  handlePlus,
  variant = 'grey',
}: CounterToCartProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Action
        variant={variant}
        onClick={handleMinus}
        className="rounded-full size-6 text-3xl flex"
      >
        -
      </Action>
      <Typography className="text-mine-shaft flex items-center justify-center min-w-[20px]">
        {state}
      </Typography>
      <Action
        variant={variant}
        onClick={handlePlus}
        className="rounded-full size-6 text-xl flex"
      >
        +
      </Action>
    </div>
  );
};
