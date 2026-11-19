'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { euro } from '../../lib/products';

export default function Danke() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('jugendshop-last-order');
      if (raw) setOrder(JSON.parse(raw));
    } catch (e) {}
  }, []);

  const hasPrices = order && order.items.every((i) => i.price != null);
  const total = order ? order.items.reduce((s, i) => s + (i.price ?? 0) * i.qty, 0) : 0;

  return (
    <main className="center">
      <div className="check">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </div>
      <h1>Danke für Deine Bestellung</h1>
      <p className="sub">
        Wir haben Deine Auswahl erhalten. Bestellt wird gesammelt bis zum 01.01.2027, bezahlt wird später mit der Jugendleitung.
      </p>
      {order && (
        <div className="summary">
          {order.items.map((i) => (
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
      )}
      <Link href="/" className="btn outline">Zurück zum Shop</Link>
    </main>
  );
}
