// Frist der Sammelbestellung, z. B. '31.12.2026'. null = Frist folgt.
export const DEADLINE = '01.01.2027';

// Größenreihen (Shop-Bezeichnungen laut erima.de)
const KIDS = ['116', '128', '140', '152', '164'];
const KIDS_128 = ['128', '140', '152', '164'];
const MEN = ['S', 'M', 'L', 'XL', 'XXL', '3XL'];
const MEN_4XL = [...MEN, '4XL'];
const WOMEN = ['34', '36', '38', '40', '42', '44'];
const WOMEN_48 = [...WOMEN, '46', '48'];

export const GROUPS = [
  { id: 'kinder', label: 'Kinder' },
  { id: 'herren', label: 'Herren' },
  { id: 'damen', label: 'Damen' },
  { id: 'zubehoer', label: 'Zubehör' },
];

const EVO = 'EVO STAR';
const TEAM = 'TEAM';
const BASIC = 'Basic 2.0';
const EVO_COLOR = 'schwarz/slate grey';

// price      = Preis laut Bestellliste (22.11.2026)
// erimaPrice = aktueller Einzelpreis auf erima.de (Stand 22.11.2026), nur zum Abgleich
// check      = offener Punkt, vor Bestellung klären
const items = [
  // Kinder
  { id: 'kinder-trainingsjacke-kapuze', group: 'kinder', name: 'Trainingsjacke mit Kapuze Kinder', line: EVO, artNr: '1032454', color: EVO_COLOR, sizes: KIDS, price: 65.99, erimaPrice: 59.99, kind: 'jacket' },
  { id: 'kinder-trainingsjacke', group: 'kinder', name: 'Trainingsjacke ohne Kapuze Kinder', line: EVO, artNr: '1032456', color: EVO_COLOR, sizes: KIDS, price: 49.99, erimaPrice: 49.99, kind: 'jacket' },
  { id: 'kinder-t-shirt', group: 'kinder', name: 'T-Shirt Kinder', line: EVO, artNr: '1082434', color: EVO_COLOR, sizes: KIDS, price: 32.99, erimaPrice: 29.99, kind: 'tee', check: 'Shop listet schwarz/slate grey nur in 116' },
  { id: 'kinder-shorts', group: 'kinder', name: 'Shorts Kinder', line: TEAM, artNr: '2152401', color: 'schwarz', sizes: KIDS_128, price: 32.99, erimaPrice: 34.99, kind: 'shorts' },
  { id: 'kinder-trainingshose', group: 'kinder', name: 'Trainingshose mit Wadeneinsatz 2.0 Kinder', line: BASIC, artNr: '3100704', color: 'schwarz', sizes: KIDS, price: 35.19, erimaPrice: 33.99, kind: 'pants' },
  { id: 'kinder-allwetterjacke', group: 'kinder', name: 'Allwetterjacke Kinder', line: TEAM, artNr: '2052206', color: 'schwarz', sizes: KIDS, price: 54.99, erimaPrice: 54.99, kind: 'rain', check: 'Shop listet schwarz nur in 116' },

  // Herren
  { id: 'herren-trainingsjacke-kapuze', group: 'herren', name: 'Trainingsjacke mit Kapuze Herren', line: EVO, artNr: '1032454', color: EVO_COLOR, sizes: MEN, price: 71.49, erimaPrice: 64.99, kind: 'jacket' },
  { id: 'herren-trainingsjacke', group: 'herren', name: 'Trainingsjacke ohne Kapuze Herren', line: EVO, artNr: '1032456', color: EVO_COLOR, sizes: MEN_4XL, price: 54.99, erimaPrice: 54.99, kind: 'jacket' },
  { id: 'herren-poloshirt', group: 'herren', name: 'Poloshirt Herren', line: EVO, artNr: '1112434', color: EVO_COLOR, sizes: MEN_4XL, price: 49.49, erimaPrice: 44.99, kind: 'tee', check: 'Shop listet schwarz/slate grey nur in 3XL und 4XL' },
  { id: 'herren-t-shirt', group: 'herren', name: 'T-Shirt Herren', line: EVO, artNr: '1082434', color: EVO_COLOR, sizes: MEN, price: 38.49, erimaPrice: 34.99, kind: 'tee' },
  { id: 'herren-shorts', group: 'herren', name: 'Shorts Herren', line: TEAM, artNr: '2152401', color: 'schwarz', sizes: MEN, price: 38.5, erimaPrice: 39.99, kind: 'shorts' },
  { id: 'herren-trainingshose', group: 'herren', name: 'Trainingshose mit Wadeneinsatz 2.0 Herren', line: BASIC, artNr: '3100704', color: 'schwarz', sizes: MEN, price: 40.69, erimaPrice: 39.99, kind: 'pants' },
  { id: 'herren-allwetterjacke', group: 'herren', name: 'Allwetterjacke Unisex', line: TEAM, artNr: '2052206', color: 'schwarz', sizes: MEN, price: 60.49, erimaPrice: 59.99, kind: 'rain', check: 'Unisex, auch für Damen. Shop listet schwarz nur in XXL und 3XL' },

  // Damen
  { id: 'damen-trainingsjacke-kapuze', group: 'damen', name: 'Trainingsjacke mit Kapuze Damen', line: EVO, artNr: '1032455', color: EVO_COLOR, sizes: WOMEN, price: 71.49, erimaPrice: 64.99, kind: 'jacket' },
  { id: 'damen-t-shirt', group: 'damen', name: 'T-Shirt Damen', line: EVO, artNr: '1082435', color: EVO_COLOR, sizes: WOMEN, price: 38.49, erimaPrice: 34.99, kind: 'tee' },
  { id: 'damen-shorts', group: 'damen', name: 'Shorts Damen', line: TEAM, artNr: '2322401', color: 'schwarz', sizes: WOMEN, price: 38.49, erimaPrice: 39.99, kind: 'shorts', check: 'Shop listet schwarz ohne 34' },
  { id: 'damen-trainingshose', group: 'damen', name: 'Trainingshose mit Bündchen Damen', line: BASIC, artNr: '210211', color: 'schwarz', sizes: WOMEN_48, price: 54.99, erimaPrice: 54.99, kind: 'pants', check: 'Artikel unklar: Art.-Nr. hat nur 6 Stellen, Preis passt zur Performance Trainingshose Damen (kein reines Schwarz)' },

  // Zubehör
  { id: 'sporttasche-s', group: 'zubehoer', name: 'Club 1900 2.0 Sporttasche S', line: 'Club 1900 2.0', artNr: '7232001-S', color: null, sizes: ['S'], price: 31.04, erimaPrice: 29.99, kind: 'bag', check: 'Farbe fehlt in der Bestellliste' },
  { id: 'sporttasche-l', group: 'zubehoer', name: 'Club 1900 2.0 Sporttasche L', line: 'Club 1900 2.0', artNr: '7232001-L', color: null, sizes: ['L'], price: 42.54, erimaPrice: 39.99, kind: 'bag', check: 'Farbe fehlt in der Bestellliste' },
  { id: 'tsv-cap', group: 'zubehoer', name: 'TSV Cap Unisex', line: 'TSV Kastl', artNr: null, color: null, sizes: ['Einheitsgröße'], price: 20, erimaPrice: null, kind: 'cap', check: 'Kein Erima-Artikel, Details fehlen (in der Bestellliste als "TSV Cup")' },
];

export const PRODUCTS = items.map((p) => ({
  ...p,
  desc: [p.line, p.color && `Farbe ${p.color}`].filter(Boolean).join(' · '),
}));

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

export const euro = (n) =>
  n == null ? 'XX,XX €' : n.toFixed(2).replace('.', ',') + ' €';
