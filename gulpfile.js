'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sassGlob     = require('gulp-sass-glob');
const del          = require('del');
const babel        = require('babelify');
const source       = require('vinyl-source-stream');
const buffer       = require('vinyl-buffer');



/* SASS */

gulp.task('css:build', () => {
  return gulp.src('assets/sass/main.scss')
    .pipe(sassGlob())
    .pipe(sass({
        includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/assets/css'));
});

gulp.task('css:clean', done => {
    return del(['public/assets/css'], done);
});

gulp.task('css', gulp.series('css:clean', 'css:build'));


/* Fonts */

gulp.task('fonts:copy', function() {
  return gulp.src('assets/fonts/**/*')
    .pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('fonts:clean', function(done) {
    return del(['public/assets/fonts'], done);
});

gulp.task('fonts', gulp.series('fonts:clean', 'fonts:copy'));


/* Images */

gulp.task('images:copy', () => {
    return  gulp.src('assets/img/**/*')
                .pipe(gulp.dest('public/assets/img'));
});

gulp.task('images:clean', done => {
    return del(['public/assets/img'], done);
});

gulp.task('images', gulp.series('images:clean', 'images:copy'));



/* JS */

gulp.task('js:clean', done => {
    return del(['public/assets/js'], done);
});

gulp.task('js:build', () => {
    return  gulp.src('assets/js/**/*')
                .pipe(gulp.dest('public/assets/js'))
});

gulp.task('js', gulp.series('js:clean', 'js:build'));



/** Watch **/

gulp.task('css:watch',      () => { gulp.watch( 'assets/sass/**/*.scss',    gulp.parallel('css') )      });
gulp.task('images:watch',   () => { gulp.watch( 'assets/img/**/*',          gulp.parallel('images') )   });
gulp.task('js:watch',       () => { gulp.watch( 'assets/js/**/*',           gulp.parallel('js') )       });


/** Tasks **/

gulp.task('default', gulp.parallel('fonts', 'css', 'images', 'js'));

gulp.task('watch:build', gulp.parallel('css:watch', 'images:watch', 'js:watch'));
gulp.task('watch', gulp.series('default', 'watch:build') );
