import { NextResponse } from 'next/server';

async function token(pw) {
  const data = new TextEncoder().encode('jugendshop:' + pw);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function POST(req) {
  const form = await req.formData();
  const given = String(form.get('password') || '');
  const pw = process.env.SHOP_PASSWORD || '';
  if (!pw || given !== pw) {
    return NextResponse.redirect(new URL('/login?error=1', req.url), 303);
  }
  const res = NextResponse.redirect(new URL('/', req.url), 303);
  res.cookies.set('shop_auth', await token(pw), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 60,
  });
  return res;
}
