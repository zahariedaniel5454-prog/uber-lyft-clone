'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PWARegister() {
  const pathname = usePathname();

  useEffect(() => {
    const manifestPath = pathname?.startsWith('/driver')
      ? '/driver.webmanifest'
      : '/client.webmanifest';

    let link = document.querySelector('link[rel="manifest"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'manifest';
      document.head.appendChild(link);
    }
    link.href = manifestPath;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((error) => {
        console.error('RIDO service worker registration failed:', error);
      });
    }
  }, [pathname]);

  return null;
}
