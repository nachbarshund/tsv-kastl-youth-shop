import { NextResponse } from 'next/server';

async function token(pw) {
  const data = new TextEncoder().encode('jugendshop:' + pw);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function middleware(req) {
  try {
    const pw = process.env.SHOP_PASSWORD;
    const cookie = req.cookies.get('shop_auth')?.value;
    if (pw && cookie && cookie === (await token(pw))) {
      return NextResponse.next();
    }
  } catch (e) {
    // bei Fehlern immer zum Login, nie hart abbrechen
  }
  const url = req.nextUrl.clone();
  url.pathname = '/login';
  url.search = '';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!login|api/login|_next|logo.png|favicon.ico).*)'],
};
