# serviceWorker demo

Use these for debugging: 

* chrome://inspect/#service-workers
* chrome://serviceworker-internals/

If you shift+reload a document it will always load without a controller.

**How do I [update the service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Updating_your_service_worker)**

Change the service worker file, and make sure to update the cache key (the cache version).

* Close & reopen the tab, or shift+reload then normal reload

**What's the deal with `self`?**

`self` is a reference to `ServiceWorkerGlobalScope`. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self)

## things to do

DRY way to keep track of static assets to pre-fetch. Our install event might fetch things like this:

```js
cache.addAll([
  '/contact'
]);
return cache.addAll([
  '/',
  '/style.css',
  '/assets/img/bg-bah.png',
  '/assets/img/circle.svg',
  '/assets/img/triangle.svg'
]);
```

Tool to make a list of requests?

**Check out [`sw-precache`](https://github.com/GoogleChrome/sw-precache)** &mdash; a build tool that generates sw and asset list. You can use globs since it runs in gulp.

* automatically versions cached assets using a hash of the content
* knows which caches have expired

## Research

* [slightlyoff/ServiceWorker/explainer.md](https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md)

* [html5rocks](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)

* [Offline Cookbook](http://jakearchibald.com/2014/offline-cookbook/)

* [MDN &mdash; API](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API)

* [MDN &mdash; Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)

* [trained to thrill (demo)](https://github.com/jakearchibald/trained-to-thrill)

* [registration example via google](https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js)

* [code examples](https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker)
