'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');

gulp.task('script', [], function() {
  return gulp.src(path.join(conf.paths.src, 'js/entry.js'))
    .pipe($.webpack({output:{filename: 'app.js'}}))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/scripts')));
});

gulp.task('inject', ['script'], function() {
  var injectScripts = gulp.src([
    path.join(conf.paths.dist, '/**/*.js')
  ], {read: false});
  var injectScriptOptions = {
    ignorePath: conf.paths.dist,
    addRootSlash: false
  };
  var injectBowerOptions = {
    name: 'bower',
    relative: true
  };
  var injectBowers = gulp.src(mainBowerFiles({
    }), {read: false});
  
  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe($.inject(injectScripts, injectScriptOptions))
    .pipe($.inject(injectBowers, injectBowerOptions))
    .pipe($.useref())
    .pipe(gulp.dest(conf.paths.dist));
});

gulp.task('build', ['inject'], function() {
});
