const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');

const conf = require('../../gulp.conf');

gulp.task('server:clean', clean);
gulp.task('server:other', other);

function clean() {
  return del([conf.paths.server.dist]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    conf.path.server.config('swagger.json'),
    conf.path.server.views('/**/*')
  ], {base: conf.paths.server.root})
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.server.dist));
}
