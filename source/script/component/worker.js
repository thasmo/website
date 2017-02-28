// worker.js

(function(navigator) {
	'use strict';

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/static/script/worker.js', {
			scope: '/'
		});
	}
})(window.navigator);
