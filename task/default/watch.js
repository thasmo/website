// watch.js

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    server = require('browser-sync'),
    config = require('../config'),
    path = require('../path');

gulp.task('watch', ['watch:tasks', 'watch:server']);

// Tasks
gulp.task('watch:tasks', function() {

	// Common
	gulp.watch(path.source.main + '*.*', ['common']);

	// Templates
	gulp.watch([path.source.template + '**', path.source.data + '**'], ['templates:common']);

	// Styles
	gulp.watch(path.source.style + '**', ['styles:common']);
});

// Server
gulp.task('watch:server', function() {
	server(config.plugin.server, function() {
		gulp.watch(path.public.main + '**').on('change', function(file) {
			if(!file.path.match(config.task.watch.exclude)) {
				server.reload(file.path);
			}
		});
	});
});
