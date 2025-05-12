import FilterSvg from '#/public/svg/Filter.svg';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/shadcnui/Drawer';
import { ClearFilter } from './ClearFilter';
import { FilterContent } from '../../FilterContent';

export const Filter = () => {
  return (
    <Drawer>
      <DrawerTrigger
        className="bg-linear-[147deg] from-0% from-green/45 to-green to-100% p-3 rounded-[14px] cursor-pointer"
        aria-label="change the filter"
      >
        <FilterSvg />
      </DrawerTrigger>

      <DrawerContent className="bg-white shadow-2xl">
        <div className="container pb-8">
          <div className="flex justify-between">
            <div>
              <DrawerTitle className="text-2xl">Filters</DrawerTitle>
              <DrawerDescription>
                Select the desired parameters
              </DrawerDescription>
            </div>
            <ClearFilter />
          </div>

          <div className="mt-4">
            <FilterContent />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
