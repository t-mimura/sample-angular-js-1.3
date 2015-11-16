var gulp = require('gulp');
var path = require('path');

var conf = require('./conf');

gulp.task('watch', ['build'], function() {
  gulp.watch([
    path.join(conf.paths.src, '/**/*')
  ],
  function(event) {
    gulp.start('build');
  });
});
