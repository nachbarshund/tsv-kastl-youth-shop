# TSV Kastl Jugendshop

Interner Shop für die Sammelbestellung von Vereinskleidung der TSV Kastl Jugend. Next.js, Warenkorb im Local Storage, Zugang über ein gemeinsames Passwort.

## Einrichten

1. Umgebungsvariablen setzen (lokal in `.env.local`, auf Vercel unter Settings, Environment Variables): `SHOP_PASSWORD` (Shop), `ADMIN_PASSWORD` (zweites Passwort, gleiches Login-Feld, schaltet `/admin` frei).
2. Bestellspeicher: In Vercel die Integration „Upstash for Redis" mit dem Projekt verbinden (setzt `KV_REST_API_URL` und `KV_REST_API_TOKEN`).
3. `npm install`, dann `npm run dev`.

## Anpassen

- Produkte, Preise und Frist: `lib/products.js`
- Farben: CSS-Variablen oben in `app/globals.css`

## Stand

Bestellungen werden in Upstash Redis gespeichert und im Admin (`/admin`, CSV-Export unter `/admin/export`) angezeigt. E-Mail-Benachrichtigung fehlt noch.
