'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BackBar } from '../../components/TopBar';
import { euro } from '../../lib/products';
import { loadLocalOrders } from '../../lib/localOrders';

const fmtDate = (iso) => {
  const d = new Date(iso);
  return isNaN(d) ? '' : d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

export default function MeineBestellungen() {
  const [orders, setOrders] = useState([]);
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const list = loadLocalOrders();
    setOrders(list);
    // Neueste Bestellung ist vorausgewählt
    if (list[0]?.email) setEmail(list[0].email);
    setReady(true);
  }, []);

  const q = email.trim().toLowerCase();
  const matches = q ? orders.filter((o) => String(o.email).toLowerCase() === q) : [];

  return (
    <>
      <BackBar title="Meine Bestellungen" href="/" />
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="email">E-Mail-Adresse der Bestellung</label>
          <input
            id="email"
            type="email"
            inputMode="email"
            placeholder="name@beispiel.de"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p className="hint">Bestellungen werden nur auf diesem Gerät gespeichert.</p>
      </form>

      {ready && orders.length === 0 && (
        <div className="empty">
          <p>Auf diesem Gerät gibt es noch keine Bestellung.</p>
          <Link href="/" className="btn">Zum Katalog</Link>
        </div>
      )}

      {ready && orders.length > 0 && q && matches.length === 0 && (
        <div className="empty"><p>Zu dieser E-Mail-Adresse wurde keine Bestellung gefunden.</p></div>
      )}

      {matches.map((o) => {
        const hasPrices = o.items.every((i) => i.price != null);
        const total = o.items.reduce((s, i) => s + (i.price ?? 0) * i.qty, 0);
        return (
          <div className="summary" key={o.id}>
            <div className="r">
              <span style={{ fontWeight: 600 }}>{o.name}</span>
              <span style={{ color: 'var(--muted)' }}>{fmtDate(o.createdAt)}</span>
            </div>
            {o.items.map((i) => (
              <div className="r" key={i.id + i.size}>
                <span>{i.qty}× {i.name} · {i.size}</span>
                <span style={{ fontWeight: 500 }}>{euro(i.price)}</span>
              </div>
            ))}
            <div className="r sum">
              <span className="total-label" style={{ fontSize: 14 }}>Summe</span>
              <span style={{ fontSize: 18, fontWeight: 700 }}>{hasPrices ? euro(total) : 'XX,XX €'}</span>
            </div>
          </div>
        );
      })}
      <div style={{ height: 32 }} />
    </>
  );
}
