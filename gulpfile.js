let gulp  = require('gulp'),
    gls   = require('gulp-live-server'),
    path  = require('path'),
    less  = require('gulp-less');

// Start server
gulp.task('serve', () => {
  let server = gls.new('./server/index.js', {env: 'development'});
  server.start();

  // gulp.watch(['./config/{commands,application}.js', './server/{routes,models,lib}/*.js'], (file) => {
  //   server.notify.apply(server, [file]);
  // });

  gulp.watch(['./config/{commands,application}.js', './server/{routes,models,lib}/*.js', './server/index.js'], function() {
    server.start.bind(server)();
  });
});

gulp.task('less', () => {
  return gulp.src('./public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', () => {
  gulp.watch('./server/public/less/**/*.less', gulp.series('less'));
});

gulp.task('default', gulp.parallel('watch', 'serve'));
