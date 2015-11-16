'use strict';

var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');
var del = require('del');

gulp.task('clean', [], function(done) {
  del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')], done);
});
