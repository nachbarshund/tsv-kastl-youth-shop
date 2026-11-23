// Bestellspeicher auf Basis von Upstash Redis (REST). Kein zusätzliches npm-Paket nötig.
// Env-Variablen (setzt die Vercel-Integration "Upstash for Redis" automatisch):
//   KV_REST_API_URL + KV_REST_API_TOKEN  oder  UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
const KEY = 'jugendshop:orders';

function conf() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

export const storageConfigured = () => !!conf();

async function redis(command) {
  const c = conf();
  if (!c) throw new Error('storage-not-configured');
  const res = await fetch(c.url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${c.token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
    cache: 'no-store',
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.error) throw new Error(data.error || `redis-${res.status}`);
  return data.result;
}

export async function saveOrder(order) {
  await redis(['LPUSH', KEY, JSON.stringify(order)]);
}

// Neueste zuerst
export async function listOrders() {
  const rows = await redis(['LRANGE', KEY, 0, -1]);
  return (rows || []).map((r) => {
    try { return JSON.parse(r); } catch { return null; }
  }).filter(Boolean);
}
