self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // PWA manifest only needs a registered service worker; pass through everything.
  // This avoids caching stale builds under stale service workers.
});
