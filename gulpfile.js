
'use strict';


/*************************************
 *  Config - EDIT THESE
 *************************************/

 const CONFIG = {
    css: {
        src:                [__dirname+'/assets/sass/build.scss'],
        dest:               '/public/assets/css/all.css',
        autoprefix:         ['> 1%', 'last 2 versions'],
        clean:              ['/public/assets/css/*'],
        watch:              __dirname+'/assets/sass/**/*.scss'
    },

    images: {
        src:                __dirname+'/assets/img',
        dest:               '/public/assets/img',
        optimise:           ['**/*.{png,jpg,jpeg,gif,svg}'],
        copy:               ['**/*.svg'],
        clean:              ['/public/assets/img/*'],
        optimizationLevel:  3,
        watch:              [__dirname+'/assets/img/**/*.{png,jpg,jpeg,gif,svg}']
    },

    fonts: {
        src:                __dirname+'/assets/fonts',
        dest:               '/public/assets/fonts',
        copy:               ['**/*.{eot,ttf,woff,woff2}'],
        clean:              ['/public/assets/fonts/*'],
        watch:              [__dirname+'/assets/fonts/**/*.{eot,ttf,woff,woff2}']
    },

    scripts: {
        src:                __dirname+'/assets/js/main.js',
        dest:               '/public/assets/js/main.js',
        clean:              ['/public/assets/js/*'],
        watch:              [__dirname+'/assets/js/**/*.js']
    }
}


/*************************************
 *  Packages
 *************************************/


const del               = require('del');
const gulp              = require('gulp');
const postcss           = require('gulp-postcss');
const rename            = require('gulp-rename');
const rollup            = require('rollup');
const rollupBabel       = require('rollup-plugin-babel');
const rollupFilesize    = require('rollup-plugin-filesize');
const rollupUglify      = require('rollup-plugin-uglify');
const sass              = require('gulp-sass');
const sassGlob          = require('gulp-sass-glob');
const sourcemaps        = require('gulp-sourcemaps');
const syntax_scss       = require('postcss-scss');
const stylelint         = require('gulp-stylelint');


// TODO: Do some ENV stuff here.
// console.log(process.argv);
// const env = process.argv.contains('env') ? process.argv['env'] : 'production';


/*************************************
 *  Functions
 *************************************/

const SplitParts = (str) => {
    let parts      = str.split('/');
    let fileName   = parts.pop();
    let path       = parts.join('/');

    return { fileName, path };
};


// TASKS ===========================================================


/*************************************
    SASS

    - Read source build file
    - Glob files
    - Lint SASS (not the resulting CSS)
    - Compile
    - Create Sourcemap
    - Output stats
    - Write to disk
 *************************************/



function sassLint() {
    // lint all files except those in a _vendor folder (I ain't fixing someone else's code).
    return gulp.src( ['assets/sass/**/*.scss', '!assets/sass/_vendor/*.scss'] )
        // lint
        .pipe(stylelint({
            reporters: [
                { formatter: 'string', console: true }
            ]
        }));
}

function sassBuild(prefix) {

    return () => {

        let { fileName, path } = SplitParts(CONFIG.css.dest);

        // delete all build files + folders
        return del( (prefix || __dirname) + CONFIG.css.clean )
        .then(() => {
            return gulp.src( CONFIG.css.src )

            .pipe(sourcemaps.init())

            // glob
            .pipe(sassGlob())

            // compile SASS
            .pipe(
                sass({outputStyle: 'compact'}).on('error', sass.logError)
            )

            // rename (must be done before creating the sourcemap)
            .pipe( rename( fileName ) )

            // create sourcemap
            .pipe(sourcemaps.write('.'))

            // output
            .pipe( gulp.dest( (prefix || __dirname) + path ) );
        })
    }

}

gulp.task('sass:lint', sassLint);
gulp.task('sass:build', sassBuild());

gulp.task('sass', gulp.series('sass:lint', 'sass:build'));


/******************************************************************************
    Images

    - Delete source directory (in development mode)
 ******************************************************************************/

function images(prefix) {

    return () => {

        // delete all build files + folders
        return del( (prefix || __dirname) + CONFIG.images.clean )
        .then(() => {
            return gulp.src( CONFIG.images.src + '/' + CONFIG.images.optimise )

                // image minification
                // all files are piped through this package. Remove this pipe if you simply want to copy files without being minified.
                // .pipe(imagemin({
                //     progressive: true,
                //     svgoPlugins: [
                //         { removeViewBox: false },
                //         { removeUselessStrokeAndFill: false }
                //     ],
                // }))

                // output to dest folder
                .pipe( gulp.dest( (prefix || __dirname) + CONFIG.images.dest ) );
        })
    }
}

gulp.task('images', images());


/******************************************************************************
    Fonts

    - Copy font files
 ******************************************************************************/

function fonts(prefix) {

    return () => {

        // delete all build files + folders
        return del( (prefix || __dirname) + CONFIG.fonts.clean )
        .then(() => {
            return gulp.src( CONFIG.fonts.src + '/' + CONFIG.fonts.copy )

                // output to dest folder
                .pipe( gulp.dest( (prefix || __dirname) + CONFIG.fonts.dest  ) );
        }
        );
    }
}

gulp.task('fonts', fonts());


/******************************************************************************
    JavaScript

    - Copies files over to build folder
 ******************************************************************************/

function scripts(prefix) {

    return () => {

        let { fileName, path } = SplitParts(CONFIG.scripts.dest);

        return del( (prefix || __dirname) + CONFIG.scripts.clean )
        .then(() => {
            return rollup.rollup({
                entry: CONFIG.scripts.src,
                plugins: [
                    rollupBabel({
                        "presets": [
                            [ "es2015", { "modules": false } ]
                        ]
                    }),
                    rollupUglify(),
                    rollupFilesize(),
                ],
            })
        })
        .then(function (bundle) {
            return bundle.write({
                format: 'es',
                dest: (prefix || __dirname) + path + '/' + fileName,
                sourceMap: true
            });
        });

    }
}

function copyScripts(prefix) {

    return () => {
        let path = '/public/assets/js/';
        console.log(prefix, path);
        return gulp.src( __dirname+'/assets/js/highlight.pack.js' )
        .pipe( gulp.dest( (prefix || __dirname) + path + '/' ) );
    }
}

gulp.task('scripts', gulp.series( scripts(), copyScripts() ) );

////

function build(dest) {

    return gulp.series(sassBuild(dest), images(dest), fonts(dest), scripts(dest), copyScripts(dest) );
}

/** Watch **/

gulp.task('sass:watch',     () => { gulp.watch( CONFIG.css.watch,       gulp.series('sass') )       });
gulp.task('images:watch',   () => { gulp.watch( CONFIG.images.watch,    gulp.series('images') )     });
gulp.task('fonts:watch',    () => { gulp.watch( CONFIG.fonts.watch,     gulp.series('fonts') )      });
gulp.task('scripts:watch',  () => { gulp.watch( CONFIG.scripts.watch,   gulp.series('scripts') )    });


/** Tasks **/

gulp.task('default', gulp.parallel('fonts', 'sass', 'images', 'scripts'));

gulp.task('watch:build', gulp.parallel('sass:watch', 'images:watch', 'fonts:watch', 'scripts:watch'));
gulp.task('watch', gulp.series('default', 'watch:build') );

module.exports = { build };
