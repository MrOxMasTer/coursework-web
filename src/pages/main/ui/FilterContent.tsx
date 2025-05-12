import { CategorySelector } from './CategorySelector';
import { SizeChips } from './SizeChips';
import { SliderRange } from './SliderRange';

export const FilterContent = () => {
  return (
    <>
      <CategorySelector />

      <div className="mt-4">
        <SizeChips />
      </div>

      <div className="mt-4">
        <SliderRange />
      </div>
    </>
  );
};
