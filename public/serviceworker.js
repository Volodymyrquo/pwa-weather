const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

// Install ServiceWorker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
//Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).catch(() => {
      caches.match("offline.html");
    })
  );
});
//Activate the ServiceWorker
self.addEventListener("activate", (event) => {});
