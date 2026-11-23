import { NextResponse } from 'next/server';
import { isAdmin } from '../../../lib/auth';
import { listOrders } from '../../../lib/orders';

const cell = (v) => {
  let s = String(v ?? '');
  if (/^[=+\-@]/.test(s)) s = "'" + s; // CSV-/Excel-Formel-Injection verhindern
  return '"' + s.replace(/"/g, '""') + '"';
};

export async function GET() {
  if (!(await isAdmin())) return new NextResponse('Not found', { status: 404 });
  const orders = (await listOrders()).reverse();
  const head = ['Datum', 'Name', 'E-Mail', 'Telefon', 'Artikel', 'Größe', 'Menge', 'Einzelpreis', 'Zeilensumme'];
  const rows = [head];
  for (const o of orders) {
    for (const i of o.items) {
      rows.push([
        new Date(o.createdAt).toLocaleString('de-DE', { timeZone: 'Europe/Berlin' }),
        o.name, o.email, o.phone, i.name, i.size, i.qty,
        i.price == null ? '' : String(i.price).replace('.', ','),
        i.price == null ? '' : String(i.price * i.qty).replace('.', ','),
      ]);
    }
  }
  // Semikolon + BOM, damit Excel (de) die Datei direkt richtig öffnet
  const csv = '﻿' + rows.map((r) => r.map(cell).join(';')).join('\r\n');
  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="jugendshop-bestellungen.csv"',
      'Cache-Control': 'no-store',
    },
  });
}
