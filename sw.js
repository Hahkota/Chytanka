/* Читанка service worker.
   Online: always fetch the latest file and keep a copy. Offline: serve the saved copy.
   Bump VERSION when the list of files changes. */
const VERSION = "chytanka-v3";
const FILES = [
  "./", "index.html", "cards.html", "css/style.css", "css/cards.css",
  "js/lessons.js", "js/app.js", "js/words.js", "js/cards.js",
  "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== location.origin && !isFont) return;

  const keep = res => {
    if (res && (res.ok || res.type === "opaque")) {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
    }
    return res;
  };

  if (isFont) {
    // fonts never change: saved copy first
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(keep)));
    return;
  }
  // the app's own files: network first, so updates show straight away
  e.respondWith(
    fetch(e.request, { cache: "no-cache" }).then(keep)
      .catch(() => caches.match(e.request, { ignoreSearch: true })
        .then(hit => hit || (e.request.mode === "navigate" ? caches.match("index.html") : undefined)))
  );
});
