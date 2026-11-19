export default function manifest() {
  return {
    name: 'Jugendshop TSV Kastl',
    short_name: 'Jugendshop',
    description: 'Sammelbestellung für Vereinskleidung der TSV Kastl Jugend',
    lang: 'de',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2e7d6b',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
