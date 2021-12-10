// install sw 
self.addEventListener('install', evt => {
    console.log('service worker has been installed');
});
// activate sw 
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});
