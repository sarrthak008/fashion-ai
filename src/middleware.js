import { NextResponse } from 'next/server'
 

export function middleware(request) {
  console.log("hiiii")
  return NextResponse.next()
 
}
export const config = {
  matcher: '/api/:path*',
}