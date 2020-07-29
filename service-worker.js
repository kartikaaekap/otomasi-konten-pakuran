const CACHE_NAME = "otomasi-konten-pakuran-v1";
var urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/css/materialize.min.css",
  "/css/footer.css",
  "/css/form.css",
  "/css/slider.css",
  "/images/favicon.png",
  "/images/pakuran.jpg",
  "/images/pakuran1.jpg",
  "/images/pakuran2.jpg",
  "/images/pakuran3.jpg",
  "/images/playPause.png",
  "/js/materialize.min.js",
  "/js/myScript.js",
  "/js/api.js",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
  "https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.2/mqttws31.min.js",
  "/icon.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches
        .match(event.request, { cacheName: CACHE_NAME })
        .then(function(response) {
          if (response) {
            console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
            return response;
          }
   
          console.log(
            "ServiceWorker: Memuat aset dari server: ",
            event.request.url
          );
          return fetch(event.request);
        })
    );
});