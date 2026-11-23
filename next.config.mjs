// Admin- und Login-Antworten dürfen nie von Browser oder CDN zwischengespeichert werden.
const noStore = [
  { key: 'Cache-Control', value: 'private, no-store, max-age=0, must-revalidate' },
  { key: 'Vary', value: 'Cookie' },
];

export default {
  async headers() {
    return [
      { source: '/admin', headers: noStore },
      { source: '/admin/:path*', headers: noStore },
      { source: '/api/:path*', headers: noStore },
    ];
  },
};
