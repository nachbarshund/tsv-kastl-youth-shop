import Link from 'next/link';
import pkg from '../package.json';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/impressum">Impressum</Link>
      <span>Version {pkg.version}</span>
    </footer>
  );
}
