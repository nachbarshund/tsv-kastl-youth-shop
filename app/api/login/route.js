import { NextResponse } from 'next/server';

async function token(prefix, pw) {
  const data = new TextEncoder().encode(prefix + pw);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function POST(req) {
  const form = await req.formData();
  const given = String(form.get('password') || '');
  const pw = process.env.SHOP_PASSWORD || '';
  const adminPw = process.env.ADMIN_PASSWORD || '';
  const isAdmin = !!adminPw && given === adminPw;
  const isShop = !!pw && given === pw;
  if (!isAdmin && !isShop) {
    return NextResponse.redirect(new URL('/login?error=1', req.url), 303);
  }
  const opts = { httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 60 };
  const res = NextResponse.redirect(new URL('/', req.url), 303);
  if (pw) res.cookies.set('shop_auth', await token('jugendshop:', pw), opts);
  // Admin-Cookie: kürzere Laufzeit
  if (isAdmin) res.cookies.set('shop_admin', await token('jugendshop-admin:', adminPw), { ...opts, maxAge: 60 * 60 * 24 * 7 });
  else res.cookies.delete('shop_admin');
  return res;
}
