// build.js

var gulp = require('gulp'),
    sequence = require('run-sequence');

gulp.task('build', ['setup'], function(callback) {
	return sequence(['common', 'templates', 'styles'], callback);
});
