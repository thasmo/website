// worker.js

self.addEventListener('install', function(event) {
	event.waitUntil(caches.open('static').then(function(cache) {
		return cache.addAll([
			'/index.html',
			'/static/style/main.css',
			'/static/script/main.js'
		]);
	}));
});
