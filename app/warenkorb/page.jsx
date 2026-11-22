'use client';
import Link from 'next/link';
import { BackBar } from '../../components/TopBar';
import Silhouette from '../../components/Silhouette';
import { useCart } from '../../components/CartProvider';
import { getProduct, euro, cartName } from '../../lib/products';

export default function Warenkorb() {
  const { items, ready, setQty, remove } = useCart();
  const lines = items.map((i) => ({ ...i, product: getProduct(i.id) })).filter((l) => l.product);
  const total = lines.reduce((s, l) => s + (l.product.price ?? 0) * l.qty, 0);
  const hasPrices = lines.length > 0 && lines.every((l) => l.product.price != null);

  return (
    <>
      <BackBar title="Warenkorb" href="/" />
      {ready && lines.length === 0 ? (
        <div className="empty">
          <p>Dein Warenkorb ist leer.</p>
          <Link href="/" className="btn">Zum Katalog</Link>
        </div>
      ) : (
        <>
          <div className="lines">
            {lines.map((l) => (
              <div className="line" key={l.id + l.size}>
                <div className="thumb"><Silhouette kind={l.product.kind} size={52} /></div>
                <div className="line-main">
                  <div className="row">
                    <span className="t">{cartName(l.product)}</span>
                    <span>{euro(l.product.price)}</span>
                  </div>
                  <span className="sub">Größe {l.size}</span>
                  <div className="line-actions">
                    <div className="stepper small">
                      <button aria-label="Menge verringern" onClick={() => setQty(l.id, l.size, l.qty - 1)}>−</button>
                      <span>{l.qty}</span>
                      <button aria-label="Menge erhöhen" onClick={() => setQty(l.id, l.size, l.qty + 1)}>+</button>
                    </div>
                    <button className="link-btn" onClick={() => remove(l.id, l.size)}>Entfernen</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="footer-bar">
            <div className="row">
              <span className="total-label">Summe</span>
              <span className="total">{hasPrices ? euro(total) : 'XX,XX €'}</span>
            </div>
            <Link href="/bestellung" className="btn">Zur Bestellung</Link>
          </div>
        </>
      )}
    </>
  );
}
