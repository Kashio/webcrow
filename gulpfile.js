const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./gulp.conf');

// Load some files into the registry
const clientHub = new HubRegistry([conf.path.client.tasks('*.js')]);
const serverHub = new HubRegistry([conf.path.server.tasks('*.js')]);
// Tell gulp to use the tasks just loaded
gulp.registry(clientHub);
gulp.registry(serverHub);

gulp.task('client:build', gulp.parallel('client:other', 'webpack:dist'));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));
gulp.task('serve:client', gulp.series('webpack:watch', 'watch', 'browsersync'));
gulp.task('serve:server', gulp.series('server:watch'));
gulp.task('serve', gulp.parallel('serve:server', 'serve:client'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('client:clean', 'client:build'));
gulp.task('watch', watch);

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch(conf.path.client.tmp('index.html'), reloadBrowserSync);
  done();
}
