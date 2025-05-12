import { NextResponse } from 'next/server';
import { auth } from './shared/configs/auth';

export default auth(async (req) => {
  // const pathname = req.nextUrl.pathname;

  // if (!req.auth) {
  // }

  // return NextResponse.redirect(new URL(pageConfig.login, req.url));

  // // Protection of authentication pages from authorized users
  // if (req.auth) {
  //   if (pathname.startsWith(pageConfig.auth))
  //     return NextResponse.redirect(new URL(pageConfig.profile, req.url));
  // }

  // // Pages Protection from non-authorized users
  // if (!req.auth) {
  //   if (pathname.startsWith(pageConfig.auth)) {
  //     const auth = req.cookies.get('auth')?.value;

  //     if (
  //       (pathname.startsWith(pageConfig.signin) ||
  //         pathname.startsWith(pageConfig.signup)) &&
  //       !auth
  //     )
  //       return NextResponse.redirect(new URL(pageConfig.auth, req.url));

  //     return NextResponse.next();
  //   }

  //   const response = NextResponse.redirect(new URL(pageConfig.auth, req.url));

  //   // FIXME: Take to AUTH or by redirect send
  //   response.cookies.set('needGetAuth', pathname, {
  //     secure: true,
  //     httpOnly: true,
  //   });

  //   return response;
  // }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // '/((?!api|_next/static|_next/image|favicon.ico|icons/sprite.svg).*)',
    '/profile/:path*',
    // '/admin/:path*', // FIXME:
  ],
};
