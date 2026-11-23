import Link from 'next/link';
import { redirect } from 'next/navigation';
import { isAdmin } from '../../lib/auth';
import { listOrders, storageConfigured } from '../../lib/orders';
import { euro } from '../../lib/products';
import { BackBar } from '../../components/TopBar';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Admin', robots: { index: false, follow: false } };

const fmt = (iso) => new Date(iso).toLocaleString('de-DE', { timeZone: 'Europe/Berlin', dateStyle: 'short', timeStyle: 'short' });

export default async function Admin() {
  if (!(await isAdmin())) redirect('/login');

  let orders = [];
  let error = null;
  if (!storageConfigured()) error = 'Speicher nicht eingerichtet (Upstash Redis in Vercel verbinden).';
  else {
    try { orders = await listOrders(); } catch (e) { error = 'Bestellungen konnten nicht geladen werden.'; }
  }

  const sum = (o) => o.items.reduce((s, i) => s + (i.price ?? 0) * i.qty, 0);
  const total = orders.reduce((s, o) => s + sum(o), 0);
  const pieces = orders.reduce((s, o) => s + o.items.reduce((a, i) => a + i.qty, 0), 0);

  // Sammelbestellung: je Artikel + Größe aufsummiert
  const agg = new Map();
  for (const o of orders) for (const i of o.items) {
    const k = i.name + '||' + i.size;
    agg.set(k, { name: i.name, size: i.size, qty: (agg.get(k)?.qty || 0) + i.qty });
  }
  const totals = [...agg.values()].sort((a, b) => a.name.localeCompare(b.name, 'de') || a.size.localeCompare(b.size, 'de', { numeric: true }));

  return (
    <>
      <BackBar title="Admin" href="/" />
      {error && <p className="error" style={{ margin: '16px 20px 0' }} role="alert">{error}</p>}
      <div className="admin-stats">
        <div><strong>{orders.length}</strong><span>Bestellungen</span></div>
        <div><strong>{pieces}</strong><span>Teile</span></div>
        <div><strong>{euro(total)}</strong><span>Summe</span></div>
      </div>
      <div style={{ padding: '0 20px' }}>
        <a href="/admin/export" className="btn outline" style={{ marginTop: 14 }}>CSV exportieren</a>
      </div>

      <h2 className="h2">Gesamt je Artikel und Größe</h2>
      <div className="summary">
        {totals.length === 0 && <span className="note">Noch keine Bestellungen.</span>}
        {totals.map((t) => (
          <div className="r" key={t.name + t.size}>
            <span>{t.name} · {t.size}</span>
            <span style={{ fontWeight: 600 }}>{t.qty}×</span>
          </div>
        ))}
      </div>

      <h2 className="h2">Alle Bestellungen</h2>
      <div className="admin-orders">
        {orders.map((o) => (
          <div className="summary" style={{ margin: 0 }} key={o.id}>
            <div className="r" style={{ fontWeight: 600 }}>
              <span>{o.name}</span>
              <span>{euro(sum(o))}</span>
            </div>
            <div className="note">{fmt(o.createdAt)} · <a href={`mailto:${o.email}`}>{o.email}</a> · <a href={`tel:${o.phone}`}>{o.phone}</a></div>
            {o.items.map((i) => (
              <div className="r" key={i.name + i.size}>
                <span>{i.qty}× {i.name} · {i.size}</span>
                <span>{euro(i.price)}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ height: 24 }} />
    </>
  );
}
