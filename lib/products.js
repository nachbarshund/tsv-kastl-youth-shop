export const SIZES = ['116', '128', '140', '152', '164', 'S', 'M', 'L'];

// Frist der Sammelbestellung, z. B. '31.12.2026'. null = Frist folgt.
export const DEADLINE = '01.01.2027';

export const PRODUCTS = [
  { id: 'trainingshose', name: 'Trainingshose', kind: 'pants', price: null, desc: 'Kurze Beschreibung folgt. Für Mädchen und Jungs.' },
  { id: 'trainingsjacke', name: 'Trainingsjacke', kind: 'jacket', price: null, desc: 'Kurze Beschreibung folgt. Für Mädchen und Jungs.' },
  { id: 'regenjacke', name: 'Regenjacke', kind: 'rain', price: null, desc: 'Kurze Beschreibung folgt. Für Mädchen und Jungs.' },
  { id: 't-shirt', name: 'T-Shirt kurz', kind: 'tee', price: null, desc: 'Kurze Beschreibung folgt. Für Mädchen und Jungs.' },
  { id: 'kurze-hose', name: 'Kurze Hose', kind: 'shorts', price: null, desc: 'Kurze Beschreibung folgt. Für Mädchen und Jungs.' },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

export const euro = (n) =>
  n == null ? 'XX,XX €' : n.toFixed(2).replace('.', ',') + ' €';
