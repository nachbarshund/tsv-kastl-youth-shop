import Link from 'next/link';
import Gate from '../components/Gate';
import { ShopBar } from '../components/TopBar';
import Silhouette from '../components/Silhouette';
import { PRODUCTS, DEADLINE, euro } from '../lib/products';

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
      <section className="hero">
        <h1>Vereinskleidung</h1>
        <p>Für Mädchen und Jungs</p>
      </section>
      <div className="grid">
        {PRODUCTS.map((p) => (
          <Link key={p.id} href={`/produkt/${p.id}`} className="card">
            <div className="tile">
              <Silhouette kind={p.kind} size={96} />
            </div>
            <div>
              <div className="name">{p.name}</div>
              <div className="price">{euro(p.price)}</div>
            </div>
          </Link>
        ))}
      </div>
    </Gate>
  );
}
