/* global workbox */

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /\.mp4$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'videos',
    plugins: [
      new workbox.cacheableResponse.Plugin({statuses: [200]}),
      new workbox.rangeRequests.Plugin(),
    ],
  }),
);
