'use client';
import { useState } from 'react';
import Silhouette from './Silhouette';

export default function ProductImage({ product, size = 96, showFlock = false }) {
  const [failed, setFailed] = useState(false);
  if (!product.image || failed) return <Silhouette kind={product.kind} size={size} />;
  const f = showFlock ? product.flock : null;
  return (
    <>
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        onError={() => setFailed(true)}
        style={{ mixBlendMode: 'multiply' }}
      />
      {f && (
        <img
          className="flock"
          src="/logo.png"
          alt="Vereinslogo in Weiß (Beflockung)"
          style={{ left: `${f.x}%`, top: `${f.y}%`, width: `${f.w}%` }}
        />
      )}
    </>
  );
}
