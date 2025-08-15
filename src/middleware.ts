import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/shared/config/i18n/routing';
import {
  publicRoutes,
  protectedRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
  DEFAULT_LOGOUT_REDIRECT,
} from '@/shared/config/routes';
import { verifyRefreshToken } from '@/shared/utils/verifyRefreshToken';

const intlMiddleware = createMiddleware(routing);

async function authMiddleware(req: NextRequest) {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  const locale = routing.locales.find(
    loc => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  const pathnameWithoutLocale = locale ? pathname.replace(`/${locale}`, '') || '/' : pathname;

  if (pathname.startsWith(apiAuthPrefix)) {
    return intlMiddleware(req);
  }

  const publicPathnameRegex = RegExp(
    `^(${publicRoutes.flatMap(route => (route === '/' ? ['', '/'] : route)).join('|')})/?$`,
    'i'
  );

  const protectedPathnameRegex = RegExp(`^(${protectedRoutes.join('|')})/?$`, 'i');

  const isPublicPage = publicPathnameRegex.test(pathnameWithoutLocale);
  const isProtectedPage = protectedPathnameRegex.test(pathnameWithoutLocale);

  const refreshToken = req.cookies.get('refresh-token')?.value;

  let isAuthenticated = false;

  if (!isAuthenticated && refreshToken) {
    const payload = await verifyRefreshToken(refreshToken);

    if (payload) isAuthenticated = true;
  }

  if (isProtectedPage && !isAuthenticated) {
    const loginUrl = new URL(
      locale ? `/${locale}${DEFAULT_LOGOUT_REDIRECT}` : DEFAULT_LOGOUT_REDIRECT,
      req.url
    );

    loginUrl.searchParams.set('redirect', pathname);

    return NextResponse.redirect(loginUrl);
  }

  if (isAuthenticated && isPublicPage && pathnameWithoutLocale !== '/') {
    const dashboardUrl = new URL(
      locale ? `/${locale}${DEFAULT_LOGIN_REDIRECT}` : DEFAULT_LOGIN_REDIRECT,
      req.url
    );

    return NextResponse.redirect(dashboardUrl);
  }

  return intlMiddleware(req);
}

export default function middleware(req: NextRequest) {
  return authMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
