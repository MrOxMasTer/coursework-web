import LoginInSvg from '#/public/svg/Logout.svg';
import { pageConfig } from '@/shared/configs/page';
import { Action } from '@/shared/ui/Action';
import { User } from 'lucide-react';

import Link from 'next/link';

// TODO: fetch
export const Person = () => {
  const isLogin = true;

  if (isLogin) {
    return (
      <Link href={pageConfig.profile}>
        <User className="text-mine-shaft translate-y-[1.5px]" />
      </Link>
    );
  }

  return (
    <Action href={pageConfig.login} className="gap-x-1">
      <LoginInSvg />
      Login
    </Action>
  );
};
