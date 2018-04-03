const gulp = require('gulp');
const server = require('gulp-express');

const conf = require('../../gulp.conf');

gulp.task('server:watch', gulp.series(startServer));

function startServer() {
  server.run([conf.path.server.bin('www')]);
  gulp.watch([
    conf.path.server.root('/**/*')
  ], () => {
    server.notify();
  });
}
