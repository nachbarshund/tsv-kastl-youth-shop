import './globals.css';
import { CartProvider } from '../components/CartProvider';
import Footer from '../components/Footer';

const TITLE = 'Jugendshop · TSV Kastl';
const DESCRIPTION = 'Sammelbestellung für Vereinskleidung der TSV Kastl Jugend';

const BASE = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL
  : process.env.VERCEL_URL
    ? 'https://' + process.env.VERCEL_URL
    : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(BASE),
  title: { default: TITLE, template: '%s · Jugendshop TSV Kastl' },
  description: DESCRIPTION,
  applicationName: 'Jugendshop TSV Kastl',
  // Der Shop ist per Passwort geschützt und soll nicht in Suchmaschinen auftauchen.
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Jugendshop TSV Kastl',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TSV Kastl Wappen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2e7d6b',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <CartProvider>
          <div className="shell">{children}<Footer /></div>
        </CartProvider>
      </body>
    </html>
  );
}
