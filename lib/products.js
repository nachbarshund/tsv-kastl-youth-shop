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
  { id: 'kinder-trainingsjacke-kapuze', group: 'kinder', name: 'Trainingsjacke mit Kapuze', line: EVO, artNr: '1032454', color: EVO_COLOR, sizes: KIDS, price: 66, erimaPrice: 59.99, kind: 'jacket' },
  { id: 'kinder-trainingsjacke', group: 'kinder', name: 'Trainingsjacke ohne Kapuze', line: EVO, artNr: '1032456', color: EVO_COLOR, sizes: KIDS, price: 50, erimaPrice: 49.99, kind: 'jacket' },
  { id: 'kinder-t-shirt', group: 'kinder', name: 'T-Shirt', line: EVO, artNr: '1082434', color: EVO_COLOR, sizes: KIDS, price: 33, erimaPrice: 29.99, kind: 'tee', check: 'Shop listet schwarz/slate grey nur in 116' },
  { id: 'kinder-shorts', group: 'kinder', name: 'Shorts', line: TEAM, artNr: '2152401', color: 'schwarz', sizes: KIDS_128, price: 33, erimaPrice: 34.99, kind: 'shorts' },
  { id: 'kinder-trainingshose', group: 'kinder', name: 'Trainingshose mit Wadeneinsatz 2.0', line: BASIC, artNr: '3100704', color: 'schwarz', sizes: KIDS, price: 36, erimaPrice: 33.99, kind: 'pants' },
  { id: 'kinder-allwetterjacke', group: 'kinder', name: 'Allwetterjacke', line: TEAM, artNr: '2052206', color: 'schwarz', sizes: KIDS, price: 55, erimaPrice: 54.99, kind: 'rain', check: 'Shop listet schwarz nur in 116' },

  // Herren
  { id: 'herren-trainingsjacke-kapuze', group: 'herren', name: 'Trainingsjacke mit Kapuze', line: EVO, artNr: '1032454', color: EVO_COLOR, sizes: MEN, price: 72, erimaPrice: 64.99, kind: 'jacket' },
  { id: 'herren-trainingsjacke', group: 'herren', name: 'Trainingsjacke ohne Kapuze', line: EVO, artNr: '1032456', color: EVO_COLOR, sizes: MEN_4XL, price: 55, erimaPrice: 54.99, kind: 'jacket' },
  { id: 'herren-poloshirt', group: 'herren', name: 'Poloshirt', line: EVO, artNr: '1112434', color: EVO_COLOR, sizes: MEN_4XL, price: 50, erimaPrice: 44.99, kind: 'tee', check: 'Shop listet schwarz/slate grey nur in 3XL und 4XL' },
  { id: 'herren-t-shirt', group: 'herren', name: 'T-Shirt', line: EVO, artNr: '1082434', color: EVO_COLOR, sizes: MEN, price: 39, erimaPrice: 34.99, kind: 'tee' },
  { id: 'herren-shorts', group: 'herren', name: 'Shorts', line: TEAM, artNr: '2152401', color: 'schwarz', sizes: MEN, price: 39, erimaPrice: 39.99, kind: 'shorts' },
  { id: 'herren-trainingshose', group: 'herren', name: 'Trainingshose mit Wadeneinsatz 2.0', line: BASIC, artNr: '3100704', color: 'schwarz', sizes: MEN, price: 41, erimaPrice: 39.99, kind: 'pants' },
  { id: 'herren-allwetterjacke', group: 'herren', name: 'Allwetterjacke', line: TEAM, artNr: '2052206', color: 'schwarz', sizes: MEN, price: 61, erimaPrice: 59.99, kind: 'rain', check: 'Unisex, auch für Damen. Shop listet schwarz nur in XXL und 3XL' },

  // Damen
  { id: 'damen-trainingsjacke-kapuze', group: 'damen', name: 'Trainingsjacke mit Kapuze', line: EVO, artNr: '1032455', color: EVO_COLOR, sizes: WOMEN, price: 72, erimaPrice: 64.99, kind: 'jacket' },
  { id: 'damen-t-shirt', group: 'damen', name: 'T-Shirt', line: EVO, artNr: '1082435', color: EVO_COLOR, sizes: WOMEN, price: 39, erimaPrice: 34.99, kind: 'tee' },
  { id: 'damen-shorts', group: 'damen', name: 'Shorts', line: TEAM, artNr: '2322401', color: 'schwarz', sizes: WOMEN, price: 39, erimaPrice: 39.99, kind: 'shorts', check: 'Shop listet schwarz ohne 34' },
  { id: 'damen-trainingshose', group: 'damen', name: 'Trainingshose mit Bündchen', line: BASIC, artNr: '210211', color: 'schwarz', sizes: WOMEN_48, price: 55, erimaPrice: 54.99, kind: 'pants', check: 'Artikel unklar: Art.-Nr. hat nur 6 Stellen, Preis passt zur Performance Trainingshose Damen (kein reines Schwarz)' },

  // Zubehör
  { id: 'sporttasche-s', group: 'zubehoer', name: 'Sporttasche S', line: 'Club 1900 2.0', artNr: '7232001-S', color: null, sizes: ['S'], price: 32, erimaPrice: 29.99, kind: 'bag', check: 'Farbe fehlt in der Bestellliste' },
  { id: 'sporttasche-l', group: 'zubehoer', name: 'Sporttasche L', line: 'Club 1900 2.0', artNr: '7232001-L', color: null, sizes: ['L'], price: 43, erimaPrice: 39.99, kind: 'bag', check: 'Farbe fehlt in der Bestellliste' },
  { id: 'tsv-cap', group: 'zubehoer', name: 'TSV Cap', line: 'TSV Kastl', artNr: null, color: null, sizes: ['Einheitsgröße'], price: 20, erimaPrice: null, kind: 'cap', check: 'Kein Erima-Artikel, Details fehlen (in der Bestellliste als "TSV Cup")' },
];

const IMG = 'https://www.erima.de/media/image/';
// Schwarze Variante, Quelle: erima.de
const IMAGES = {
  '1032454': '8c/e7/5b/1032454_V_600x600@2x.png',
  '1032455': '02/c6/79/1032455_V_600x600@2x.png',
  '1032456': 'd6/5c/0a/1032456_V_600x600@2x.png',
  '1082434': '86/b1/5b/1082434_V_600x600@2x.png',
  '1082435': '66/92/63/1082435_V_600x600@2x.png',
  '1112434': 'ff/80/33/1112434_V_600x600@2x.png',
  '2152401': 'be/36/4d/2152401_V_600x600.png',
  '2322401': '4b/d5/3f/2322401_V_600x600.png',
  '3100704': 'd2/db/f0/3100704_V_600x600.png',
  '2052206': 'ba/80/ed/2052206_V_600x600.png',
  '7232001': '51/4f/e3/7230705_V_600x600@2x.png',
};
// Vorschau der Beflockung (Vereinslogo in Weiß), Position in % der Bildfläche
const FLOCK = {
  '1032456': { x: 54, y: 27, w: 6.5 },
};
const imageFor = (p) => {
  const key = (p.artNr || '').split('-')[0];
  return IMAGES[key] ? IMG + IMAGES[key] : null;
};

export const PRODUCTS = items.map((p) => ({
  image: imageFor(p),
  flock: FLOCK[(p.artNr || '').split('-')[0]] || null,
  ...p,
  desc: p.color ? `Farbe: ${p.color}` : '',
}));

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

export const euro = (n) =>
  n == null ? 'XX,XX €' : Number.isInteger(n) ? n + ' €' : n.toFixed(2).replace('.', ',') + ' €';

// Name für Warenkorb und Bestellung, mit Gruppe, damit gleiche Artikel unterscheidbar bleiben
export const cartName = (p) => {
  const g = GROUPS.find((x) => x.id === p.group);
  return p.group === 'zubehoer' || !g ? p.name : `${p.name} (${g.label})`;
};
