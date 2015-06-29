window.Promise = window.Promise || require('es6-promise').Promise;
require('whatwg-fetch');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      // Registration was successful
      console.log(
        'ServiceWorker registration successful: ',
        registration
      );
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    })
  ;
}
