import Link from 'next/link';
import pkg from '../package.json';

export default function Footer() {
  const sha = (process.env.VERCEL_GIT_COMMIT_SHA || '').slice(0, 7);
  return (
    <footer className="site-footer">
      <Link href="/impressum">Impressum</Link>
      <span>Version {pkg.version}{sha ? ` · ${sha}` : ''}</span>
    </footer>
  );
}
