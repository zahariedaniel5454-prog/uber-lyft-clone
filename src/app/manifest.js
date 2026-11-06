import { NextResponse } from 'next/server';

export default function manifest() {
  return {
    id: '/',
    name: 'RIDO — Transport în Timișoara',
    short_name: 'RIDO',
    description: 'Platformă de transport la cerere în România.',
    lang: 'ro-RO',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#0C0A09',
    theme_color: '#0C0A09',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
    ],
  };
}
