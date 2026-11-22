import Link from 'next/link';
import Gate from '../components/Gate';
import { ShopBar } from '../components/TopBar';
import ProductImage from '../components/ProductImage';
import { PRODUCTS, GROUPS, DEADLINE, euro } from '../lib/products';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Vereinskleidung · Jugendshop TSV Kastl' };

export default function Katalog() {
  return (
    <Gate>
      <ShopBar />
      <div className="banner">
        <strong>{DEADLINE ? `Sammelbestellung bis ${DEADLINE}` : 'Sammelbestellung läuft, Frist folgt'}</strong>
        <span>Wähle Größe und Artikel. Bestellt wird gesammelt, bezahlt wird später mit der Jugendleitung.</span>
        <span>Alle Artikel sind bereits mit Vereinslogo.</span>
      </div>
      <section className="hero">
        <h1>Vereinskleidung</h1>
      </section>
      {GROUPS.map((g) => {
        const list = PRODUCTS.filter((p) => p.group === g.id);
        if (!list.length) return null;
        return (
          <section key={g.id}>
            <h2 style={{ margin: '24px 16px 8px', fontSize: 18 }}>{g.label}</h2>
            <div className="grid">
              {list.map((p) => (
                <Link key={p.id} href={`/produkt/${p.id}`} className="card">
                  <div className="tile">
                    <ProductImage product={p} size={96} />
                  </div>
                  <div>
                    <div className="name">{p.name}</div>
                    <div className="price">{euro(p.price)}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </Gate>
  );
}
