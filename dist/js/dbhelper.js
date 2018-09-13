"indexedDB"in window?(console.log("This browser supports IndexedDB"),dbPromise=idb.open("mws-restaurant-store-2",1,e=>{switch(console.log("Opened IndexedDB called mws-restaurant-store"),e.oldVersion){case 0:case 1:e.createObjectStore("restaurants",{keyPath:"id"})}})):console.log("This browser doesn't support IndexedDB");class DBHelper{static get DATABASE_URL(){return"http://localhost:1337/restaurants"}static fetchRestaurants(e){fetch(DBHelper.DATABASE_URL).then(function(e){return e.json()}).then(function(t){dbPromise.then(e=>{let n=e.transaction("restaurants","readwrite").objectStore("restaurants");t.forEach(e=>{n.put(e)})}),e(null,t)}).catch(function(t){e(null,t)})}static fetchRestaurantById(e,t){DBHelper.fetchRestaurants((n,s)=>{if(n)t(n,null);else{const n=s.find(t=>t.id==e);n?t(null,n):t("Restaurant does not exist",null)}})}static fetchRestaurantByCuisine(e,t){DBHelper.fetchRestaurants((n,s)=>{if(n)t(n,null);else{const n=s.filter(t=>t.cuisine_type==e);t(null,n)}})}static fetchRestaurantByNeighborhood(e,t){DBHelper.fetchRestaurants((n,s)=>{if(n)t(n,null);else{const n=s.filter(t=>t.neighborhood==e);t(null,n)}})}static fetchRestaurantByCuisineAndNeighborhood(e,t,n){DBHelper.fetchRestaurants((s,r)=>{if(s)n(s,null);else{let s=r;"all"!=e&&(s=s.filter(t=>t.cuisine_type==e)),"all"!=t&&(s=s.filter(e=>e.neighborhood==t)),n(null,s)}})}static fetchNeighborhoods(e){DBHelper.fetchRestaurants((t,n)=>{if(t)e(t,null);else{const t=n.map((e,t)=>n[t].neighborhood),s=t.filter((e,n)=>t.indexOf(e)==n);e(null,s)}})}static fetchCuisines(e){DBHelper.fetchRestaurants((t,n)=>{if(t)e(t,null);else{const t=n.map((e,t)=>n[t].cuisine_type),s=t.filter((e,n)=>t.indexOf(e)==n);e(null,s)}})}static urlForRestaurant(e){return`./restaurant.html?id=${e.id}`}static imageUrlForRestaurant(e){return`img/${e.photograph}`}static mapMarkerForRestaurant(e,t){const n=new L.marker([e.latlng.lat,e.latlng.lng],{title:e.name,alt:e.name,url:DBHelper.urlForRestaurant(e)});return n.addTo(newMap),n}}