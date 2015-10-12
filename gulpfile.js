var gulp       = require( 'gulp' );
var rename     = require( 'gulp-rename' );
var compass    = require( 'gulp-compass' );
var concat     = require( 'gulp-concat' );
var sourcemaps = require( 'gulp-sourcemaps' );

var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');

function swallowError( error ) {
  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}

gulp.task('build', function() {
    browserify({
        entries: './src/js/main.js',
        debug: true
    })
    .transform(babel)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/js'));
});


gulp.task( 'js', function() {
    gulp.src( 'src/js/plugins/*.js' )
        .pipe(concat( 'plugins.js' ))
        .pipe(gulp.dest( './dist/js/' ));
});

gulp.task( 'sass', function() {
    gulp.src( 'src/sass' )
        .pipe(compass({
            images : 'images',
            sass: 'src/sass',
            css: 'dist/css'
        }))
        .on('error', swallowError)
        .pipe(gulp.dest('./dist/css'));
});

gulp.task( 'watch', function() {
    gulp.watch( 'src/js/**/*.js', [ 'js' ] );

    gulp.watch( 'src/sass/**/*.scss', [ 'sass' ] );
});

gulp.task( 'default', [ 'js', 'sass' ] );
