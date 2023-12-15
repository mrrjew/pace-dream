import axios from 'axios';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const excludedRoutes = ['/auth/login', '/auth/signup'];

const isLoginRoutes = (pathname: string) => {
  return excludedRoutes.some((route) => pathname.startsWith(route));
};

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next();
  }
  const cookies = request.cookies;
  const authToken = cookies.get('auth-token')?.value;

  let isValidToken = false;

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
  console.log(isValidToken);
  // if the request url contains /auth/login or /auth/signin and isValidToken is true then redirect to home page
  if (isLoginRoutes(request.nextUrl.pathname) && isValidToken) {
    return NextResponse.redirect(new URL('/', request.nextUrl).href);
  }
  // if the request url contains /auth/login or /auth/signin and isValidToken is false then return the request
  if (isLoginRoutes(request.nextUrl.pathname) && !isValidToken) {
    return NextResponse.next();
  }
  if (isValidToken) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/auth/login', request.nextUrl).href);
}
