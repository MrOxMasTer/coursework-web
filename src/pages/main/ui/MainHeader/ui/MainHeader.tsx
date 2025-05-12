import { Filter } from './Filter';
import { Search } from '../../../../../features/search/ui/Search';

export const MainHeader = () => {
  return (
    <header className="md:hidden">
      <div className="container mt-4 justify-between flex gap-2">
        <Search />
        <Filter />
      </div>
    </header>
  );
};
