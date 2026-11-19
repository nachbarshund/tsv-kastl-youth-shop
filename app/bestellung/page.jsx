'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackBar } from '../../components/TopBar';
import { useCart } from '../../components/CartProvider';
import { getProduct, euro } from '../../lib/products';

export default function Bestellung() {
  const router = useRouter();
  const { items, ready, clear } = useCart();
  const lines = items.map((i) => ({ ...i, product: getProduct(i.id) })).filter((l) => l.product);
  const total = lines.reduce((s, l) => s + (l.product.price ?? 0) * l.qty, 0);
  const hasPrices = lines.length > 0 && lines.every((l) => l.product.price != null);

  function submit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const order = {
      name: String(f.get('name') || '').trim(),
      email: String(f.get('email') || '').trim(),
      phone: String(f.get('phone') || '').trim(),
      items: lines.map((l) => ({ id: l.id, name: l.product.name, size: l.size, qty: l.qty, price: l.product.price })),
      createdAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem('jugendshop-last-order', JSON.stringify(order));
    } catch (err) {}
    clear();
    router.push('/danke');
  }

  if (ready && lines.length === 0) {
    return (
      <>
        <BackBar title="Bestellung" href="/warenkorb" />
        <div className="empty">
          <p>Dein Warenkorb ist leer.</p>
          <Link href="/" className="btn">Zum Katalog</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <BackBar title="Bestellung" href="/warenkorb" />
      <h2 className="h2">Deine Auswahl</h2>
      <div className="summary">
        {lines.map((l) => (
          <div className="r" key={l.id + l.size}>
            <span>{l.qty}× {l.product.name} · {l.size}</span>
            <span style={{ fontWeight: 500 }}>{euro(l.product.price)}</span>
          </div>
        ))}
        <div className="r sum">
          <span className="total-label" style={{ fontSize: 14 }}>Summe</span>
          <span style={{ fontSize: 20, fontWeight: 700 }}>{hasPrices ? euro(total) : 'XX,XX €'}</span>
        </div>
      </div>

      <form className="form" onSubmit={submit}>
        <h2 className="h2" style={{ margin: 0 }}>Deine Daten</h2>
        <p className="hint">Alle Felder mit * sind Pflicht.</p>
        <div className="field">
          <label htmlFor="name">Vor- und Nachname *</label>
          <input id="name" name="name" type="text" required placeholder="Max Mustermann" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">E-Mail-Adresse *</label>
          <input id="email" name="email" type="email" required placeholder="name@beispiel.de" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">Telefonnummer *</label>
          <input id="phone" name="phone" type="tel" required placeholder="0170 1234567" autoComplete="tel" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8, paddingBottom: 32 }}>
          <p className="note">Bezahlt wird nicht im Shop, sondern später mit der Jugendleitung.</p>
          <button type="submit" className="btn">Bestellung abschicken</button>
        </div>
      </form>
    </>
  );
}
