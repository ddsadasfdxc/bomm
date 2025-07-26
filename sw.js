const CACHE_NAME = 'geek-proxy-v1.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/404.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Geek Proxy: Caching resources...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Geek Proxy: Service Worker installed successfully');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Geek Proxy: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Geek Proxy: Service Worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          console.log('Geek Proxy: Serving from cache:', event.request.url);
          return response;
        }
        
        console.log('Geek Proxy: Fetching from network:', event.request.url);
        return fetch(event.request)
          .then(response => {
            // Don't cache API calls or non-GET requests
            if (!response || response.status !== 200 || response.type !== 'basic' || event.request.method !== 'GET') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/404.html');
            }
          });
      })
  );
});

// Background sync for offline actions (if needed)
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('Geek Proxy: Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Placeholder for future background sync functionality
  console.log('Geek Proxy: Background sync completed');
  return Promise.resolve();
}

// Push notification handling (if needed)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || 'Geek Proxy notification',
      icon: '/manifest.json',
      badge: '/manifest.json',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    
    event.waitUntil(
      self.registration.showNotification('Geek Proxy', options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});