'use client';
import { useState } from 'react';
import Silhouette from './Silhouette';

export default function ProductImage({ product, size = 96 }) {
  const [failed, setFailed] = useState(false);
  if (!product.image || failed) return <Silhouette kind={product.kind} size={size} />;
  return (
    <img
      src={product.image}
      alt={product.name}
      loading="lazy"
      onError={() => setFailed(true)}
      style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
    />
  );
}
