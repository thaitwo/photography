var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

// sass
gulp.task('sass', function () {
  return gulp.src('resources/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('public/stylesheets'))
  .pipe(livereload());
});

// watches sass
gulp.task('watch', function () {
  gulp.watch('resources/scss/**/*.scss', ['sass']);
  livereload.listen();
});