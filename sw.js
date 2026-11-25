// Cache-first: depois da 1ª visita o app abre sem internet.
// Mudou algum arquivo? Sobe a versão aqui pra forçar a atualização.
const V = "role-v2";
const ARQ = ["./", "index.html", "listas.js", "manifest.webmanifest", "icons/icon.svg", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(ARQ)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, {ignoreSearch: true}).then(hit => {
      const rede = fetch(e.request).then(r => {
        if (r.ok && new URL(e.request.url).origin === location.origin) caches.open(V).then(c => c.put(e.request, r.clone()));
        return r;
      }).catch(() => hit);
      return hit || rede;
    })
  );
});
