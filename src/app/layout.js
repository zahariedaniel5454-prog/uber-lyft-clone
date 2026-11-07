import './globals.css';
import PWARegister from '@/components/shell/PWARegister';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'RIDO — Călătorește în siguranță',
    template: '%s · RIDO',
  },
  description:
    'RIDO — platformă de transport la cerere în România, cu tarife transparente, urmărire live și curse verificate.',
  applicationName: 'RIDO',
  keywords: ['RIDO', 'ridesharing', 'transport', 'taxi', 'Timișoara'],
  authors: [{ name: 'RIDO' }],
  openGraph: {
    title: 'RIDO — Călătorește în siguranță',
    description:
      'Comandă o cursă cu RIDO. Tarife transparente și urmărirea cursei în timp real.',
    siteName: 'RIDO',
    url: BASE_URL,
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RIDO — Călătorește în siguranță',
    description: 'Comandă o cursă cu RIDO. Tarife transparente și urmărire live.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#0C0A09',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body><PWARegister />{children}</body>
    </html>
  );
}
