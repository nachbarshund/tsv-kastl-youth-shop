import { NextResponse } from 'next/server';

export async function POST(req) {
  const res = NextResponse.redirect(new URL('/login', req.url), 303);
  res.cookies.delete('shop_auth');
  res.cookies.delete('shop_admin');
  return res;
}
