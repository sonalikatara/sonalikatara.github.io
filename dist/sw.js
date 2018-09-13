const CACHE_NAME="mws-stage2-cache-v5",urlsToCache=["/","index.html","restaurant.html","manifest.json","/css/styles.css","/js/main.js","/js/dbhelper.js","/js/restaurant_info.js","/img/1_large.jpg","/img/1_medium.jpg","/img/2_large.jpg","/img/2_medium.jpg","/img/3_large.jpg","/img/3_medium.jpg","/img/4_large.jpg","/img/4_medium.jpg","/img/5_large.jpg","/img/5_medium.jpg","/img/6_large.jpg","/img/6_medium.jpg","/img/7_large.jpg","/img/7_medium.jpg","/img/8_large.jpg","/img/8_medium.jpg","/img/9_large.jpg","/img/9_medium.jpg","/img/10_large.jpg","/img/10_medium.jpg","/img/restaurantLong/1_large.jpg","/img/restaurantLong/1_medium.jpg","/img/restaurantLong/2_large.jpg","/img/restaurantLong/2_medium.jpg","/img/restaurantLong/3_large.jpg","/img/restaurantLong/3_medium.jpg","/img/restaurantLong/4_large.jpg","/img/restaurantLong/4_medium.jpg","/img/restaurantLong/5_large.jpg","/img/restaurantLong/5_medium.jpg","/img/restaurantLong/6_large.jpg","/img/restaurantLong/6_medium.jpg","/img/restaurantLong/7_large.jpg","/img/restaurantLong/7_medium.jpg","/img/restaurantLong/8_large.jpg","/img/restaurantLong/8_medium.jpg","/img/restaurantLong/9_large.jpg","/img/restaurantLong/9_medium.jpg","/img/restaurantLong/10_large.jpg","/img/restaurantLong/10_medium.jpg"];self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(e){return console.log("Install cache and add urls"),e.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(e){console.log("in sw fetch"),e.respondWith(fetch(e.request).then(function(g){return caches.open(CACHE_NAME).then(function(t){return console.log("store data in cache"),t.put(e.request,g.clone()),g})}).catch(function(){return console.log("found cache data"),caches.match(e.request)}))}),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return e.startsWith("mws-")&&e!=CACHE_NAME}).map(function(e){return caches.delete(e)}))}))});