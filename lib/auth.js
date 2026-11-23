import { cookies } from 'next/headers';
import { createHash } from 'node:crypto';

const sha = (s) => createHash('sha256').update(s).digest('hex');

export const shopToken = (pw) => sha('jugendshop:' + pw);
export const adminToken = (pw) => sha('jugendshop-admin:' + pw);

export async function isShopAuthed() {
  const pw = process.env.SHOP_PASSWORD;
  const c = (await cookies()).get('shop_auth')?.value;
  return !!pw && c === shopToken(pw);
}

export async function isAdmin() {
  const pw = process.env.ADMIN_PASSWORD;
  const c = (await cookies()).get('shop_admin')?.value;
  return !!pw && c === adminToken(pw);
}
