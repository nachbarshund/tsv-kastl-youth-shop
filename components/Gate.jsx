import { redirect } from 'next/navigation';
import { isShopAuthed, isAdmin } from '../lib/auth';

// Serverseitiger Passwort-Check. Ohne gültigen Cookie geht es zum Login.
// Admins (zweites Passwort) kommen ebenfalls in den Shop.
export default async function Gate({ children }) {
  if (!(await isShopAuthed()) && !(await isAdmin())) {
    redirect('/login');
  }
  return children;
}
