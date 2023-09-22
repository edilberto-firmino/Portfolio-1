/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';

// Precache e roteie os recursos usando o Workbox
precacheAndRoute(self.__WB_MANIFEST || []);

// Registro do Service Worker com o caminho correto para o arquivo pwabuilder-sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/static/js/bundle.js',
        '/pwabuilder-sw.js', 
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
