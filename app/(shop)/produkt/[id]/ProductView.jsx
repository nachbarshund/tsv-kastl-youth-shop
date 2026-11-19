'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Silhouette from '../../../../components/Silhouette';
import { useCart } from '../../../../components/CartProvider';
import { SIZES, euro } from '../../../../lib/products';

export default function ProductView({ product }) {
  const router = useRouter();
  const { add } = useCart();
  const [size, setSize] = useState('140');
  const [qty, setQty] = useState(1);

  return (
    <div className="detail">
      <div className="tile">
        <Silhouette kind={product.kind} size={200} />
      </div>
      <div className="detail-body">
        <h1>{product.name}</h1>
        <span className="price">{euro(product.price)}</span>
        <p className="desc">{product.desc}</p>

        <div className="label">Größe</div>
        <div className="sizes">
          {SIZES.map((s) => (
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
          <button
            className="btn"
            onClick={() => {
              add(product.id, size, qty);
              router.push('/warenkorb');
            }}
          >
            In den Warenkorb
          </button>
        </div>
      </div>
    </div>
  );
}
