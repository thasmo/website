// worker.js

(function(navigator) {
	'use strict';

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/worker.js');
	}
})(window.navigator);
