// build.js

var gulp = require('gulp'),
    sequence = require('run-sequence');

gulp.task('build', function(callback) {
	return sequence(['common', 'templates', 'styles', 'scripts'], callback);
});
