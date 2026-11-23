import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { isShopAuthed, isAdmin } from '../../../lib/auth';
import { saveOrder, storageConfigured } from '../../../lib/orders';
import { getProduct, cartName } from '../../../lib/products';

const clean = (v, max) => String(v ?? '').trim().slice(0, max);

export async function POST(req) {
  if (!(await isShopAuthed()) && !(await isAdmin())) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }
  if (!storageConfigured()) {
    return NextResponse.json({ error: 'storage' }, { status: 503 });
  }
  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'invalid' }, { status: 400 }); }

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !phone) {
    return NextResponse.json({ error: 'invalid' }, { status: 400 });
  }

  // Artikel, Namen und Preise kommen vom Server, nicht vom Client
  const items = [];
  for (const i of Array.isArray(body.items) ? body.items.slice(0, 50) : []) {
    const p = getProduct(i?.id);
    const qty = Number(i?.qty);
    if (!p || !p.sizes.includes(i?.size) || !Number.isInteger(qty) || qty < 1 || qty > 20) {
      return NextResponse.json({ error: 'invalid' }, { status: 400 });
    }
    items.push({ id: p.id, name: cartName(p), size: i.size, qty, price: p.price ?? null });
  }
  if (items.length === 0) return NextResponse.json({ error: 'invalid' }, { status: 400 });

  const order = { id: randomUUID(), name, email, phone, items, createdAt: new Date().toISOString() };
  try {
    await saveOrder(order);
  } catch (e) {
    return NextResponse.json({ error: 'storage' }, { status: 503 });
  }
  return NextResponse.json({ ok: true, order });
}
