# TSV Kastl Jugendshop

Interner Shop für die Sammelbestellung von Vereinskleidung der TSV Kastl Jugend. Next.js, Warenkorb im Local Storage, Zugang über ein gemeinsames Passwort.

## Einrichten

1. Umgebungsvariable `SHOP_PASSWORD` setzen (lokal in `.env.local`, auf Vercel unter Settings, Environment Variables).
2. `npm install`, dann `npm run dev`.

## Anpassen

- Produkte, Preise und Frist: `lib/products.js`
- Farben: CSS-Variablen oben in `app/globals.css`

## Stand

Bestellungen werden noch nicht gespeichert oder per E-Mail verschickt.
