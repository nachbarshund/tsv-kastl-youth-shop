import Gate from '../components/Gate';
import { ShopBar } from '../components/TopBar';
import { isAdmin } from '../lib/auth';
import Catalog from '../components/Catalog';
import { PRODUCTS, GROUPS, DEADLINE } from '../lib/products';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Vereinskleidung · Jugendshop TSV Kastl' };

export default async function Katalog() {
  const admin = await isAdmin();
  return (
    <Gate>
      <ShopBar admin={admin} />
      <div className="hero-card">
        <span className="hero-label">Sammelbestellung bis</span>
        <strong className="hero-date">{DEADLINE || 'Frist folgt'}</strong>
        <span className="hero-text">Wähle Größe und Artikel. Bestellt wird gesammelt, bezahlt wird später mit der Jugendleitung.</span>
        <div className="hero-logo">
          <img src="/logo.png" alt="" width="36" height="36" />
          <div>
            <strong>Alle Artikel sind bereits mit Vereinslogo</strong>
            <span>Du musst nichts extra bestellen, die Beflockung ist im Preis enthalten.</span>
          </div>
        </div>
      </div>
      <Catalog products={PRODUCTS} groups={GROUPS} />
    </Gate>
  );
}
