/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';

// Precache e roteie os recursos usando o Workbox
precacheAndRoute(self.__WB_MANIFEST || []);

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
