import Gate from '../components/Gate';
import { ShopBar } from '../components/TopBar';
import Catalog from '../components/Catalog';
import { PRODUCTS, GROUPS, DEADLINE } from '../lib/products';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Vereinskleidung · Jugendshop TSV Kastl' };

export default function Katalog() {
  return (
    <Gate>
      <ShopBar />
      <div className="banner">
        <strong>{DEADLINE ? `Sammelbestellung bis ${DEADLINE}` : 'Sammelbestellung läuft, Frist folgt'}</strong>
        <span>Wähle Größe und Artikel. Bestellt wird gesammelt, bezahlt wird später mit der Jugendleitung.</span>
      </div>
      <div className="logo-note">
        <img src="/logo.png" alt="" width="36" height="36" />
        <div>
          <strong>Alle Artikel sind bereits mit Vereinslogo</strong>
          <span>Du musst nichts extra bestellen, die Beflockung ist im Preis enthalten.</span>
        </div>
      </div>
      <Catalog products={PRODUCTS} groups={GROUPS} />
    </Gate>
  );
}
