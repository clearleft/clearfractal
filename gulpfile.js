
'use strict';


/*************************************
 *  Config - EDIT THESE
 *************************************/

 const CONFIG = {
    css: {
        src:                ['assets/sass/build.scss'],
        dest:               'public/assets/css/all.css',
        autoprefix:         ['> 1%', 'last 2 versions'],
        clean:              ['public/assets/css/*'],
        watch:              'assets/sass/**/*.scss'
    },

    images: {
        src:                'assets/img',
        dest:               'public/assets/img',
        optimise:           ['**/*.{png,jpg,jpeg,gif,svg}'],
        copy:               ['**/*.svg'],
        clean:              ['public/assets/img/*'],
        optimizationLevel:  3,
        watch:              ['assets/img/**/*.{png,jpg,jpeg,gif,svg}']
    },

    fonts: {
        src:                'assets/fonts',
        dest:               'public/assets/fonts',
        copy:               ['**/*.{eot,ttf,woff,woff2}'],
        clean:              ['public/assets/fonts/*'],
        watch:              ['assets/fonts/**/*.{eot,ttf,woff,woff2}']
    },

    scripts: {
        src:                ['assets/js/main.js'],
        dest:               'public/assets/js/main.js',
        clean:              ['public/assets/js/*'],
        watch:              ['assets/js/**/*.js']
    }
}


/*************************************
 *  Packages
 *************************************/


const autoprefixer  = require('autoprefixer');
const del           = require('del');
const gulp          = require('gulp');
const postcss       = require('gulp-postcss');
const rename        = require('gulp-rename');
const sass          = require('gulp-sass');
const sassGlob      = require('gulp-sass-glob');
const sourcemaps    = require('gulp-sourcemaps');
const syntax_scss   = require('postcss-scss');
const stylelint     = require('gulp-stylelint');


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
    - Autoprefix
    - Create Sourcemap
    - Output stats
    - Write to disk
 *************************************/


const CSSProcessors = [
    autoprefixer( { browsers: CONFIG.css.autoprefix } )
];

gulp.task('sass:lint', () => {
    return gulp.src( 'assets/sass/**/*' )
        // lint
        .pipe(stylelint({
            reporters: [
                { formatter: 'string', console: true }
            ]
        }));
});

gulp.task('sass:build', () => {

    let { fileName, path } = SplitParts(CONFIG.css.dest);

    // delete all build files + folders
    del( CONFIG.css.clean );

    return gulp.src( CONFIG.css.src )

        .pipe(sourcemaps.init())

        // glob
        .pipe(sassGlob())

        // compile SASS
        .pipe(
            sass().on('error', sass.logError)
        )

        // PostCSS
        .pipe(postcss( CSSProcessors ) )

        // create sourcemap
        .pipe(sourcemaps.write('.'))

        // output
        .pipe( rename( fileName ) )
        .pipe( gulp.dest( path ) );
});

gulp.task('sass', gulp.series('sass:lint', 'sass:build'));


/******************************************************************************
    Images

    - Delete source directory (in development mode)
 ******************************************************************************/

gulp.task('images', () => {

    // delete all build files + folders
    del( CONFIG.images.clean );

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
        .pipe( gulp.dest( CONFIG.images.dest ) );
});


/******************************************************************************
    Fonts

    - Copy font files
 ******************************************************************************/

gulp.task('fonts', () => {

    // delete all build files + folders
    del( CONFIG.fonts.clean );

    return gulp.src( CONFIG.fonts.src + '/' + CONFIG.fonts.copy )

        // output to dest folder
        .pipe( gulp.dest( CONFIG.fonts.dest ) );
});


/******************************************************************************
    JavaScript

    - Copies files over to build folder
 ******************************************************************************/

 gulp.task('scripts', () => {

     let { fileName, path } = SplitParts(CONFIG.scripts.dest);

     // delete all previously compiled files + folders
     del( CONFIG.scripts.clean );

     return gulp.src( CONFIG.scripts.src )

        // write sourcemap
        // .pipe(sourcemaps.write('.'))

        // output
        .pipe( rename( fileName ) )
        .pipe( gulp.dest( path ) );
});



/** Watch **/

gulp.task('sass:watch',     () => { gulp.watch( CONFIG.css.watch,       gulp.series('sass') )       });
gulp.task('images:watch',   () => { gulp.watch( CONFIG.images.watch,    gulp.series('images') )     });
gulp.task('fonts:watch',    () => { gulp.watch( CONFIG.fonts.watch,     gulp.series('fonts') )      });
gulp.task('scripts:watch',  () => { gulp.watch( CONFIG.scripts.watch,   gulp.series('scripts') )    });


/** Tasks **/

gulp.task('default', gulp.parallel('fonts', 'sass', 'images', 'scripts'));

gulp.task('watch:build', gulp.parallel('sass:watch', 'images:watch', 'fonts:watch', 'scripts:watch'));
gulp.task('watch', gulp.series('default', 'watch:build') );
