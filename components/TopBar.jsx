'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useCart } from './CartProvider';

function CartLink() {
  const { count, ready } = useCart();
  const prev = useRef(null);
  const [bump, setBump] = useState(0);

  useEffect(() => {
    if (!ready) return;
    if (prev.current === null) {
      prev.current = count;
      return;
    }
    if (count > prev.current) setBump((b) => b + 1);
    prev.current = count;
  }, [count, ready]);

  return (
    <Link href="/warenkorb" className="icon-btn cart-link" aria-label={`Warenkorb, ${count} Artikel`}>
      <span key={bump} className={bump ? 'cart-ico bump' : 'cart-ico'}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 8h12l-1 12H7L6 8z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      </span>
      {count > 0 && (
        <span key={'b' + count} className="badge pop">
          {count}
        </span>
      )}
    </Link>
  );
}

export function ShopBar({ admin = false }) {
  return (
    <header className="topbar">
      <Link href="/" className="brand">
        <img src="/logo.png" alt="TSV Kastl Wappen" width="44" height="44" />
        <span>Jugendshop</span>
      </Link>
      <div className="topbar-right">
        {admin && <Link href="/admin" className="admin-link">Admin</Link>}
        <Link href="/meine-bestellungen" className="icon-btn" aria-label="Meine Bestellungen" title="Meine Bestellungen">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 3h10a1 1 0 0 1 1 1v17l-3-2-3 2-3-2-3 2V4a1 1 0 0 1 1-1z" />
            <path d="M9 8h6M9 12h6" />
          </svg>
        </Link>
        <CartLink />
        <form method="POST" action="/api/logout" style={{ display: 'flex' }}>
          <button type="submit" className="icon-btn logout-btn" aria-label="Abmelden" title="Abmelden">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4" />
              <path d="M15 8l4 4-4 4" />
              <path d="M19 12H9" />
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
}

export function BackBar({ title, href = '/', cart = false }) {
  return (
    <header className="topbar">
      <div className="back-group">
        <Link href={href} className="icon-btn" aria-label="Zurück">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        {title && <h1 className="bar-title">{title}</h1>}
      </div>
      {cart && <CartLink />}
    </header>
  );
}
