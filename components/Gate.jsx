import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createHash } from 'node:crypto';

// Serverseitiger Passwort-Check. Ohne gültigen Cookie geht es zum Login.
export default async function Gate({ children }) {
  const pw = process.env.SHOP_PASSWORD;
  const cookie = (await cookies()).get('shop_auth')?.value;
  const expected = pw
    ? createHash('sha256').update('jugendshop:' + pw).digest('hex')
    : null;
  if (!expected || cookie !== expected) {
    redirect('/login');
  }
  return children;
}
