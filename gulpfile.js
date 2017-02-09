'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
     }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
