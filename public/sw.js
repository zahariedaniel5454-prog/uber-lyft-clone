const CACHE_NAME = 'rido-shell-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

// Network-first for pages. Do not cache API calls, authentication, or live trip data.
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;
  if (request.mode !== 'navigate') return;

  event.respondWith((async () => {
    try {
      return await fetch(request);
    } catch {
      return new Response(
        '<!doctype html><html lang="ro"><meta name="viewport" content="width=device-width,initial-scale=1"><title>RIDO offline</title><body style="font-family:sans-serif;padding:2rem;background:#0c0a09;color:#fafaf9"><h1>RIDO</h1><p>Nu există conexiune la internet. Reconectează-te și încearcă din nou.</p></body></html>',
        { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 503 }
      );
    }
  })());
});
