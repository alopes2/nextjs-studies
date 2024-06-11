import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('Middleware');
  return NextResponse.next();
}

export const config = {
  matcher: '/news',
};
