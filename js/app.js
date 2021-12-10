if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('SService worker registered', reg))
        .catch((err) => console.warn('Error while registering service worker', err));
}
