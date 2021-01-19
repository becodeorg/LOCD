const cacheName = "v1";

// Call Install event

self.addEventListener("install", (e) => {
  // console.log("Service worker installed!");
});

//Call activate event

self.addEventListener("activate", (e) => {
  // console.log("Service worker activated!");
  //Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            // console.log("Service worker: clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call fetch event
self.addEventListener("fetch", (e) => {
  // console.log("Service workers: fetching");
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        //Make clone/copy of response
        const resClone = res.clone();
        //Open cache
        caches.open(cacheName).then((cache) => {
          //Add response to cache
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
