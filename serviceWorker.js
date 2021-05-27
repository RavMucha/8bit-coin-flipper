const staticCoinz = "retro-coin-flip"
const assets = [
  "/",
  "/index.html",
  "/style-min.css",
  "/app-min.js",
  "/Assets/PressStart2P-Regular.ttf",
  "/Assets/coin.wav",
  "/Assets/coins.png",
  "/Assets/mario.wav",
  "/Assets/Icons/icon-72-72.png",
  "/Assets/Icons/icon-96-96.png",
  "/Assets/Icons/icon-144-144.png",
  "/Assets/Icons/icon-192-192.png",
  "/Assets/Icons/icon-512-512.png",
  "/Assets/Icons/maskable_icon_x384.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCoinz).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })