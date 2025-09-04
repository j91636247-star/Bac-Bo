const CACHE_NAME = "robojl-v1";
const FILES_TO_CACHE = [
  "/Robo-JL/",
  "/Robo-JL/index.html",
  "/Robo-JL/manifest.json",
  "/Robo-JL/icon-192.png",
  "/Robo-JL/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
