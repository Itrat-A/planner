// Offline support: keeps the planner and the Quran text available without internet.
const CACHE = "planner-v9";
const FILES = ["./", "index.html", "quran.json", "en-clear.json", "en-saheeh.json", "manifest.webmanifest", "icon-192.png", "icon-512.png", "img/morning.webp", "img/day.webp", "img/evening.webp", "img/night.webp", "img/quran.webp"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  // App page: network first so updates arrive, cache as fallback when offline.
  if (url.origin === location.origin && (req.mode === "navigate" || url.pathname.endsWith("index.html"))) {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; }).catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
    return;
  }
  // Everything else (Quran text, icons, fonts): cache first.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === "opaque") { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); }
    return r;
  })));
});
