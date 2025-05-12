import './fonts';
import './globals.css';

import type { Metadata } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { Header } from '@/widgets/Header/ui/Header';
import { NavigationMobile } from '@/widgets/NavigationMobile/ui/NavigationMobile';

export const metadata: Metadata = {
  title: 'Greenshop',
  description: 'Houseplant shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'antialiased'}>
        <NuqsAdapter>
          <div className="pb-[5rem] md:pb-0 flex flex-col min-h-screen">
            <Header />
            {children}
          </div>
          <NavigationMobile />
        </NuqsAdapter>
      </body>
    </html>
  );
}
