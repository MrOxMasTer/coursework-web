'use client';

import { Slider } from '@/shared/ui/shadcnui/Slider';
import { Typography } from '@/shared/ui/Typography';
import { parseAsInteger, useQueryStates } from 'nuqs';
import { useState } from 'react';

const maxMoney = 3000;

// FIXME: sync temp and real value
export const SliderRange = () => {
  const [range, setRange] = useQueryStates({
    start: parseAsInteger,
    end: parseAsInteger,
  });

  const startRange = range.start ?? 0;
  const endRange = range.end ?? maxMoney - 1500;

  const handleChangeCommit = (value: number[]) =>
    setRange({
      start: value[0],
      end: value[1],
    });

  const [tempRange, setTempRange] = useState<number[]>([startRange, endRange]);

  const handleChange = (value: number[]) => {
    setTempRange([value[0], value[1]]);
  };

  return (
    <>
      <Typography className="font-bold">Price range</Typography>
      <Slider
        onValueCommit={handleChangeCommit}
        onValueChange={handleChange}
        className="mt-3"
        defaultValue={[startRange, endRange]}
        min={0}
        max={maxMoney}
        step={1}
      />
      <Typography className="mt-3">
        Price:{' '}
        <Typography variant="span" className="font-bold text-green">
          ${tempRange[0]} - ${tempRange[1]}{' '}
        </Typography>
      </Typography>
    </>
  );
};
