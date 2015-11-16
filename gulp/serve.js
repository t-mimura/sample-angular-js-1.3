'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var webServer = require('gulp-webserver');

gulp.task('serve', ['watch'], function() {
  return gulp.src(conf.paths.dist)
    .pipe(webServer({
      livereload: true,
      open: true
    }));
});

