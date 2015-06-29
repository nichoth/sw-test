/**
 * This event is triggered during install/registration of the ServiceWorker.
 */
this.addEventListener('install', function(ev) {
  console.log('Serviceworker installed!');
  ev.waitUntil(
    caches.open('v1').then(function(cache) {
      console.log(cache);
    })
  );
});


/**
 * This event is triggered for all network requests made against our
 * ServiceWorker's scope.
 */
this.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);
});
