import { NextResponse } from 'next/server'
import responder from '../utils/responder'

export async function middleware(request) {
  // get apikey from body
  let {apikey} = await request.json()
  if(!apikey){
    return responder("opps apikey is required",null,404,false);
  }
  NextResponse.next()
}
export const config = {
  matcher: ['/api/suggestion'],
}