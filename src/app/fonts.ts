import localFont from 'next/font/local';

export const ceraPro = localFont({
  src: [
    {
      path: '../shared/assets/fonts/ceraPro/CeraPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/ceraPro/CeraPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../shared/assets/fonts/ceraPro/CeraPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
