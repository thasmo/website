// release.js

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    helper = require('../helper'),
    path = require('../path');

// Base
gulp.task('release', ['build'], function() {
	return gulp.start('release:inline');
});

// Inline
gulp.task('release:inline', function() {
	var name = 'Inline';

	return gulp.src(path.public.template + '*.html')
		.pipe($.plumber(helper.error))
		.pipe($.inlineSource())
		.pipe(gulp.dest(path.public.template))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
