// Include gulp
var gulp = require('gulp');
 // Define base folders
 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');


// Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
      .pipe(concat('app.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('build/js'));
});
 // Compile CSS from Sass files
gulp.task('sass', function() {
    return sass('src/scss/', { style: 'expanded' })
        .pipe(concat('app.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'));
});


 // Watch for changes in files
gulp.task('watch', function() {
  // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('src/scss/*.scss', ['sass']);


});
gulp.task('serveprod', function() {
  connect.server({
    root: [your_project_path],
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});

 // Default Task
gulp.task('default', ['scripts','sass', 'watch']);