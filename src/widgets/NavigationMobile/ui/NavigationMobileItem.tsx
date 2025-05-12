'use client';

import type { PagePaths } from '@/shared/configs/page';
import { cn } from '@/shared/lib/utils/classes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavigationMobileItemProps = {
  href: PagePaths;
  label: string;
  children: React.ReactNode;
};

export const NavigationMobileItem = ({
  href,
  label,
  children,
  ...props
}: NavigationMobileItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li
      className={cn({
        'text-green': isActive,
      })}
      {...props}
    >
      <Link aria-label={label} href={href}>
        {children}
      </Link>
    </li>
  );
};
