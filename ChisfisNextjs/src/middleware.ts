import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isAuthRelatedRoutes = (pathname: string) => {
  return pathname.startsWith('/auth');
};

const routeRequiringAuth = ['/account', '/inbox'];

const checkRouteRequiresAuth = (pathname: string) => {
  return routeRequiringAuth.some((route) => pathname.startsWith(route));
};

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  const cookies = request.cookies;
  const authToken = cookies.get('auth-token')?.value;

  let isValidToken = true;

  const checkToken = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-token`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  if (checkToken.status === 200) {
    isValidToken = true;
  }
  if (isAuthRelatedRoutes(request.nextUrl.pathname) && isValidToken) {
    return NextResponse.redirect(new URL('/', request.nextUrl).href);
  }

  if (!isValidToken && checkRouteRequiresAuth(request.nextUrl.pathname)) {
    console.log('isValidToken', isValidToken);
    console.log(
      'checkRouteRequiresAuth',
      checkRouteRequiresAuth(request.nextUrl.pathname)
    );
    return NextResponse.redirect(new URL(`/auth/login`, request.nextUrl).href);
  }

  return NextResponse.next();
  // // if the request url contains /auth/login or /auth/signin and isValidToken is true then redirect to home page
  // if (isLoginRoutes(request.nextUrl.pathname) && isValidToken) {
  //   return NextResponse.redirect(new URL('/', request.nextUrl).href);
  // }
  // // if the request url contains /auth/login or /auth/signin and isValidToken is false then return the request
  // if (isLoginRoutes(request.nextUrl.pathname) && !isValidToken) {
  //   return NextResponse.next();
  // }
  // if (isValidToken) {
  //   return NextResponse.next();
  // }
  // return NextResponse.redirect(
  //   new URL(
  //     `/auth/login?from=${encodeURIComponent(request.nextUrl.pathname)}`,
  //     request.nextUrl
  //   ).href
  // );
}
