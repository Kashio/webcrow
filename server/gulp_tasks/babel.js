const path = require('path');

const gulp = require('gulp');
const babel = require('gulp-babel');
const server = require('gulp-express');

const conf = require('../../gulp.conf');

gulp.task('server:dist', gulp.series(babelTranspile));
gulp.task('server:watch', gulp.series(babelTranspile, startServer));

function babelTranspile() {
  return gulp.src([
    conf.path.server.root('app.js'),
    conf.path.server.bin('www'),
    conf.path.server.models('/**/*'),
    conf.path.server.routes('/**/*'),
    conf.path.server.utils('/**/*'),
    conf.path.server.test('/**/*')
  ], {base: conf.paths.server.root})
    .pipe(babel())
    .pipe(gulp.dest(conf.paths.server.dist));
}

function startServer() {
  server.run([conf.path.server.dist('/bin/www')]);
  gulp.watch([
    conf.path.server.root('/**/*'),
    `!${conf.path.server.root('/dist')}`
  ], () => {
    babelTranspile();
    server.notify();
  });
}
