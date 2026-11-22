'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ProductImage from '../../../components/ProductImage';
import { useCart } from '../../../components/CartProvider';
import { euro } from '../../../lib/products';

export default function ProductView({ product }) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes.includes('140') ? '140' : product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [sheet, setSheet] = useState(null);
  const [open, setOpen] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  function addToCart() {
    add(product.id, size, qty);
    setSheet({ name: product.name, size, qty });
    setOpen(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 3500);
  }

  function close() {
    clearTimeout(timer.current);
    setOpen(false);
  }

  return (
    <div className="detail">
      <div className="tile">
        <ProductImage product={product} size={200} showFlock />
      </div>
      <div className="detail-body">
        <h1>{product.name}</h1>
        <span className="price">{euro(product.price)}</span>
        <p className="desc">{product.desc}</p>
        {product.flock && <p className="desc">Vorschau: Vereinslogo in Weiß auf der Brust.</p>}

        <div className="label">Größe</div>
        <div className="sizes">
          {product.sizes.map((s) => (
            <button key={s} className="size" aria-pressed={size === s} onClick={() => setSize(s)}>
              {s}
            </button>
          ))}
        </div>

        <div className="label">Menge</div>
        <div className="stepper">
          <button aria-label="Menge verringern" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
          <span>{qty}</span>
          <button aria-label="Menge erhöhen" onClick={() => setQty((q) => Math.min(9, q + 1))}>+</button>
        </div>

        <div className="sticky-actions">
          <button className="btn" onClick={addToCart}>
            In den Warenkorb
          </button>
        </div>
      </div>

      <div className={open ? 'sheet-backdrop open' : 'sheet-backdrop'} onClick={close} aria-hidden="true" />
      <div className={open ? 'sheet open' : 'sheet'} role="status" aria-live="polite">
        {sheet && (
          <>
            <div className="sheet-head">
              <span className="sheet-check" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <div>
                <div className="sheet-title">Zum Warenkorb hinzugefügt</div>
                <div className="sheet-sub">
                  {sheet.qty}× {sheet.name} · Größe {sheet.size}
                </div>
              </div>
            </div>
            <div className="sheet-actions">
              <button className="btn outline" onClick={close}>Weiter einkaufen</button>
              <Link href="/warenkorb" className="btn">Zum Warenkorb</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
