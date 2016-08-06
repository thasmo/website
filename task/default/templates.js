// templates.js

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('../config'),
    helper = require('../helper'),
    path = require('../path'),
    fs = require('fs');

// Base
gulp.task('templates', ['templates:common']);

// Common
gulp.task('templates:common', function() {
	var name = 'Templates';
	var data = function() {
		return {
			content: JSON.parse(fs.readFileSync(path.source.data + 'content.json'))
		}
	};

	return gulp.src(path.source.template + '*.pug')
		.pipe($.plumber(helper.error))
		.pipe($.data(data))
		.pipe($.pug(config.plugin.pug))
		.pipe($.if($.util.env.production, $.htmlmin(config.plugin.htmlmin)))
		.pipe(gulp.dest(path.public.template))
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
