const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const path = require('path');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync' ,function(cb){
	browserSync.init({
		server: {
			baseDir: [ path.join(process.cwd(), '/dist') ]
		},
		files: [
			'src/*.scss',
			'src/js/*.js',
			'dist/index.html'
		],
		port: 3001,
	});
	gulp.watch('src/index.js', ['js'])
		.on('change', browserSync.reload);
	gulp.watch('src/scss/*.scss', ['sass'])
		.on('change', browserSync.reload);
	gulp.watch('dist/index.html')
		.on('change', browserSync.reload);
});

gulp.task('sass', function(){
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

// Lint JS/JSX files
gulp.task('eslint', function() {
  return gulp.src('src/index.js')
    .pipe(eslint({
      baseConfig: {
        "ecmaFeatures": {
           "jsx": true
         }
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('js', () => {
    return browserify('./src/index.js')
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
	gulp.watch('src/**/*.js', ['js']).on('change', browserSync.reload);
	gulp.watch('scss/*.scss', ['sass']).on('change', browserSync.reload);
	gulp.watch('dist/index.html').on('change', browserSync.reload);
});

gulp.task('default', [
	'sass',
	'js',
	'browser-sync',
	'watch' ]);
