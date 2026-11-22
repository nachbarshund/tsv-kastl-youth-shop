import Link from 'next/link';
import { LEGAL } from '../../lib/legal';

export const metadata = { title: 'Impressum' };

const val = (v) => v || 'Angabe folgt';

export default function Impressum() {
  return (
    <div style={{ padding: '24px 20px', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 24, marginBottom: 16 }}>Impressum</h1>
      <p><strong>{LEGAL.verein}</strong></p>
      <p>Anschrift: {val(LEGAL.anschrift)}</p>
      <p>Vertreten durch: {val(LEGAL.vertretung)}</p>
      <p>E-Mail: {val(LEGAL.kontaktMail)}</p>
      <p>Telefon: {val(LEGAL.kontaktTelefon)}</p>
      <p>Verantwortlich für den Inhalt: {val(LEGAL.verantwortlich)}</p>
      <p style={{ marginTop: 16 }}>
        Interner Shop für Mitglieder und Eltern der TSV-Kastl-Jugend. Bestellungen werden gesammelt, bezahlt wird nicht im Shop.
      </p>
      <p style={{ marginTop: 24 }}><Link href="/">Zurück zum Shop</Link></p>
    </div>
  );
}
