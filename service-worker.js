if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        r[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const r = document.createElement("script");
              (r.src = e), document.head.appendChild(r), (r.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    s = (s, r) => {
      Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(s) };
  self.define = (s, i, c) => {
    r[s] ||
      (r[s] = Promise.resolve().then(() => {
        let r = {};
        const n = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case "exports":
                return r;
              case "module":
                return n;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = c(...e);
          return r.default || (r.default = s), r;
        });
      }));
  };
}
define("./service-worker.js", ["./workbox-05311b83"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "app.js", revision: "29b1c39842bfdee3c52c052c11d10d3d" },
        { url: "app.min.js", revision: "8c15c723e142a294a11bf3118b1a0254" },
        {
          url: "Assets/coin.wav",
          revision: "0482e8d85aba761198907a8df16c1895",
        },
        {
          url: "Assets/coins.png",
          revision: "2e1ba6ac1240fe0d8db094adeb7a002a",
        },
        {
          url: "Assets/mario.wav",
          revision: "ecbe75382491838b0139f625251546bb",
        },
        { url: "Assets/OFL.txt", revision: "5096248a0ad125929b038a264f57b570" },
        {
          url: "Assets/PressStart2P-Regular.ttf",
          revision: "2c404fd06cd67770807d242b2d2e5a16",
        },
        { url: "service-worker.js", revision: "f79f1fd3fd3bc12cd79a31157d7af8d9" },
        {
          url: "workbox-79c7c299.js",
          revision: "0af91d229e089aee270d4de6ef7e7294",
        },
        {
          url: "icon-192x192.png",
          revision: "99f2762661485d6330e5d17687e32578",
        },
        {
          url: "icon-256x256.png",
          revision: "1a401076d7ae0ed95029342e77ca6449",
        },
        {
          url: "icon-384x384.png",
          revision: "4a164e537119f542eca21f837b7cb075",
        },
        {
          url: "icon-512x512.png",
          revision: "c70a79df40ee2323a54462a5d9492f51",
        },
        { url: "index.html", revision: "31c92bca346beb7611d0cfba8e796232" },
        {
          url: "manifest.webmanifest",
          revision: "7cc302a5b8c822bdb11e46e427aa7da9",
        },
        { url: "style.css", revision: "7590cc0efcc24c2d060f0748339d2165" },
        { url: "style.min.css", revision: "55bceaeccc534e4c11a656dd25c4940c" },
      ],
      {}
    ),
    e.registerRoute(
      /\.(?:png|jpg|jpeg|svg)$/,
      new e.CacheFirst({
        cacheName: "images",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 10, purgeOnQuotaError: !0 }),
        ],
      }),
      "GET"
    );
});
//# sourceMappingURL=sw.js.map
