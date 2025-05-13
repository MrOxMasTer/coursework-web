import { CatalogTabs } from './CatalogTabs';
import { SortByDrawer } from './SortByDrawer';
import { FilterContent } from '../../FilterContent';
import { SortBySelector } from './SortBySelector';
import { CatalogProducts } from './CatalogProducts';

type CatalogProps = {};

export const Catalog = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between mt-5 gap-12">
          <div className="bg-alabaster hidden md:block rounded-t-[20px] pl-[1.125rem] pr-6 max-w-[310px] mt-2 min-h-screen pt-3.5">
            <div className="sticky top-7">
              {/* FIXME: text */}
              <FilterContent />
            </div>
          </div>
          <div className="grow">
            <div className="flex items-center justify-between">
              <CatalogTabs />
              <SortByDrawer />
              <SortBySelector />
            </div>
            <CatalogProducts />
          </div>
        </div>
      </div>
    </section>
  );
};
