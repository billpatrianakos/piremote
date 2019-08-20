let gulp  = require('gulp'),
    gls   = require('gulp-live-server'),
    path  = require('path'),
    less  = require('gulp-less');

// Start server
gulp.task('serve', () => {
  let server = gls.new('./server/index.js', {env: 'development'});
  server.start();

  gulp.watch(['.server/{routes,models}/**/*.js'], (file) => {
    server.notify.apply(server, [file]);
  });

  gulp.watch('./server/index.js', function() {
    server.start.bind(server)();
  });
});

gulp.task('less', () => {
  return gulp.src('./server/public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./server/public/css'));
});

gulp.task('watch', () => {
  gulp.watch('./server/public/less/**/*.less', gulp.series('less'));
});

gulp.task('default', gulp.parallel('watch', 'server'));
