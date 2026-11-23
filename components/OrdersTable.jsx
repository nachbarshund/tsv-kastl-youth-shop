'use client';
import { useState } from 'react';
import { euro } from '../lib/products';

export default function OrdersTable({ orders }) {
  const [open, setOpen] = useState(null);

  if (orders.length === 0) return <p className="note" style={{ padding: '14px 20px 0' }}>Noch keine Bestellungen.</p>;

  return (
    <div className="otable-wrap">
      <table className="otable">
        <thead>
          <tr>
            <th>Datum</th>
            <th>Name</th>
            <th className="num">Betrag</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => {
            const isOpen = open === o.id;
            return [
              <tr key={o.id} className={isOpen ? 'open' : ''}>
                <td>{o.date}</td>
                <td>{o.name}</td>
                <td className="num">{o.hasPrices ? euro(o.sum) : 'XX,XX €'}</td>
                <td className="act">
                  <button type="button" className="detail-btn" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : o.id)}>
                    {isOpen ? 'Schließen' : 'Details'}
                  </button>
                </td>
              </tr>,
              isOpen && (
                <tr key={o.id + '-d'} className="detail-row">
                  <td colSpan={4}>
                    <div className="detail">
                      <div className="note">
                        <a href={`mailto:${o.email}`}>{o.email}</a> · <a href={`tel:${o.phone}`}>{o.phone}</a>
                      </div>
                      {o.items.map((i) => (
                        <div className="r" key={i.name + i.size}>
                          <span>{i.qty}× {i.name} · {i.size}</span>
                          <span>{euro(i.price)}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ),
            ];
          })}
        </tbody>
      </table>
    </div>
  );
}
