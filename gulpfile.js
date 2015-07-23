var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var taskListing = require('gulp-task-listing');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');


gulp.task('default', function(callback) {
  runSequence('build', callback);
});

gulp.task('build', function(callback) {
  runSequence('clean', 'webpack', 'sub:copy-public', callback);
});

gulp.task('clean', function(callback) {
  del(['./dist'], {force: true}, callback);
});

gulp.task('sub:copy-public', function() {
  return gulp.src('./public/**/*')
    .pipe(gulp.dest('./dist'));
});

gulp.task('help', taskListing.withFilters(/sub:/));

gulp.task('webpack', function(callback) {
  webpack(webpackConfig, function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString());
    callback();
  });
});

gulp.task('webpack-dev-server', function(callback) {
  var webpackDevConfig = Object.create(webpackConfig);
  webpackDevConfig.output.path = __dirname + '/public';
  var compiler = webpack(webpackDevConfig);
  
  new WebpackDevServer(compiler, {
    contentBase: './public',
    stats: { colors: true }
  }).listen(9080, 'localhost', function(err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:9080/');
  });
});
