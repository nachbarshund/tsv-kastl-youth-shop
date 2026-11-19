import './globals.css';
import { CartProvider } from '../components/CartProvider';

export const metadata = {
  title: 'Jugendshop · TSV Kastl',
  description: 'Sammelbestellung für Vereinskleidung der TSV Kastl Jugend',
  robots: { index: false, follow: false },
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <CartProvider>
          <div className="shell">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
