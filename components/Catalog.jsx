'use client';
import { useState } from 'react';
import Link from 'next/link';
import ProductImage from './ProductImage';
import { euro } from '../lib/products';

export default function Catalog({ products, groups }) {
  const [filter, setFilter] = useState('alle');
  const tabs = [{ id: 'alle', label: 'Alle' }, ...groups.filter((g) => products.some((p) => p.group === g.id))];
  const shown = groups.filter((g) => filter === 'alle' || g.id === filter);

  return (
    <>
      <div className="filter-bar" role="tablist" aria-label="Artikel filtern">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={filter === t.id}
            className="filter-tab"
            onClick={() => setFilter(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {shown.map((g) => {
        const list = products.filter((p) => p.group === g.id);
        if (!list.length) return null;
        return (
          <section key={g.id}>
            <h2 style={{ margin: '20px 16px 8px', fontSize: 18 }}>{g.label}</h2>
            <div className="grid">
              {list.map((p) => (
                <Link key={p.id} href={`/produkt/${p.id}`} className="card">
                  <div className="tile">
                    <ProductImage product={p} size={96} showFlock />
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
    </>
  );
}
