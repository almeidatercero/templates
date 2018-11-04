var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var mamp = require('gulp-mamp');


var options = {};

gulp.task('start', function(cb){
    mamp(options, 'start', cb);
});

gulp.task('stop', function(cb){
    mamp(options, 'stop', cb);
});

gulp.task('mamp', ['start']);


gulp.task('sass', function () {
  return sass('wp-content/themes/coralweb/scss/main.scss')
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(gulp.dest('wp-content/themes/coralweb/'));
});









gulp.task('sass-watch', ['sass'], browserSync.reload);

gulp.task('html-watch', browserSync.reload);

gulp.task('php-watch', browserSync.reload);


gulp.task('js-watch', browserSync.reload);










gulp.task('watch', function(){

  gulp.watch('*.html', ['html-watch']);
  gulp.watch('wp-content/themes/coralweb/**/*.php',  ['php-watch']);
  gulp.watch('wp-content/themes/coralweb/js/**.js', ['js-watch']);
  gulp.watch('wp-content/themes/coralweb/scss/**/*.scss', ['sass-watch']);


});



gulp.task('browser-sync', function() {
    browserSync.init(["wp-content/themes/coralweb/css/*.css", "wp-content/themes/coralweb/js/*.js", '*.html'], {
        proxy: 'localhost:8000/coral'
    });
});

gulp.task('default', ['mamp','watch','browser-sync'], function () {


});
