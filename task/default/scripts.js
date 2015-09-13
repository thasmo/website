// scripts.js

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    helper = require('../helper'),
    path = require('../path');

// Base
gulp.task('scripts', ['scripts:common']);

// Common
gulp.task('scripts:common', function() {
	var name = 'Common Scripts';

	return gulp.src(path.source.script + '*.js')
		.pipe($.plumber(helper.error))
		.pipe($.sourcemaps.init())
		.pipe($.include())
		.pipe($.jsvalidate())
		.pipe($.if($.util.env.production, $.uglify()))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest(path.public.script))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
