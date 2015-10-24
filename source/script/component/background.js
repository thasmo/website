// background.js

(function(document, window) {
	'use strict';

	var background = function() {
		var pattern = window.Trianglify({
			width: window.innerWidth,
			height: window.innerHeight,
			x_colors: ['ccc', 'fff', 'ccc'],
			y_colors: ['ccc', 'fff', 'ccc'],
			cell_size: Math.max(window.innerWidth, window.innerHeight),
			variance: .5
		});

		document.body.style.backgroundImage = 'url(' + pattern.png() + ')';
	};

	if(document.readyState != 'loading') {
		background();
	} else {
		document.addEventListener('DOMContentLoaded', function() {
			background();
		});
	}

	window.addEventListener('resize', function() {
		background();
	});

	window.addEventListener('orientationchange', function() {
		background();
	});
})(document, window);
