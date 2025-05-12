import Logo from '#/public/svg/Logo.svg';
import Link from 'next/link';
import { Cart } from './Cart';
import { pageConfig } from '@/shared/configs/page';
import { Search } from '@/features/search/ui/Search';
import { Person } from './Person';

export const Header = () => {
  return (
    <header className="hidden md:block">
      <div className="container">
        <div className="flex items-center justify-between pt-6">
          <Link href={pageConfig.base}>
            <Logo />
          </Link>
          <Search />
          <div className="flex items-baseline gap-4">
            <Cart />
            <Person />
          </div>
        </div>
      </div>
    </header>
  );
};
