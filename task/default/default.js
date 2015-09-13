// default.js

var gulp = require('gulp');

gulp.task('default', ['build'], function() {
	return gulp.start('watch');
});
