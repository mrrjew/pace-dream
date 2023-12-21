import axios from 'axios';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const excludedRoutes = ['/auth/login', '/auth/signup'];

const isLoginRoutes = (pathname: string) => {
  return excludedRoutes.some((route) => pathname.startsWith(route));
};

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next();
  }
  return NextResponse.next();

  //TODO: uncomment this code when it is known which pages to block
  // const cookies = request.cookies;
  // const authToken = cookies.get('auth-token')?.value;

  // let isValidToken = false;

  // const checkToken = await fetch(
  //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-token`,
  //   {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${authToken}`,
  //     },
  //   }
  // );
  // if (checkToken.status === 200) {
  //   isValidToken = true;
  // }
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
