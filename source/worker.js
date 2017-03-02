// worker.js

self.addEventListener('fetch', function(event) {
	const url = new URL(event.request.url);

	if (/^\/static\//.test(url.pathname)) {
		event.respondWith(returnFromCacheAndFetch(event.request));
	}
});

function returnFromCacheAndFetch(request) {
	const cachePromise = caches.open('static');
	const matchPromise = cachePromise.then(function (cache) {
		return cache.match(request);
	});

	return Promise.all([cachePromise, matchPromise]).then(function ([cache, cacheResponse]) {
		const fetchPromise = fetch(request).then(function (response) {
			if (response.ok) {
				cache.put(request, response.clone());
			}

			return response;
		});

		return cacheResponse || fetchPromise;
	});
}
