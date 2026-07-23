const CACHE_NAME = 'meditag-cache-v1';
const urlsToCache = [
  '/MediTag/',
  '/MediTag/index.html',
  '/MediTag/src/main.jsx',
  '/MediTag/src/index.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
