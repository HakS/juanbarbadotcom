var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

var stylesSource = './sass/';
var stylesDest = './css/';
var jsSource = './js/';
var jsDest = './js/';

var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concatVendor = require('gulp-concat-vendor');

var bootstrapSass = {
  in: './node_modules/bootstrap/'
};
var fonts = {
  in: [
    stylesSource + 'fonts/*.*',
  ],
  out: stylesDest + 'fonts/'
};
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('jsVendors', function() {
  gulp.src([
    './node_modules/jquery/dist/jquery.slim.js',
    './node_modules/popper.js/dist/umd/popper.js',
    './node_modules/bootstrap/js/dist/util.js',
    './node_modules/bootstrap/js/dist/modal.js',
    './node_modules/bootstrap/js/dist/scrollspy.js',
    './node_modules/bootstrap/js/dist/tooltip.js',
  ])
    .pipe(concatVendor('vendor.js'))
    .pipe(gulp.dest(jsDest));
});

gulp.task('js', function() {
  gulp.src([
    'node_modules/babel-polyfill/dist/polyfill.js',
    jsSource + 'src/plugins.js',
    jsSource + 'src/main.js',
  ])
    .pipe(concatVendor('main.js'))
    .pipe(babel({presets: ['env']}))
    .pipe(gulp.dest('./js'));
});

gulp.task('fonts', function () {
  return gulp
      .src(fonts.in)
      .pipe(gulp.dest(fonts.out));
});

gulp.task('stylesDist', function() {
  return gulp
    .src(stylesSource + 'style.scss')
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed',
      includePaths: [bootstrapSass.in + 'scss']
    }).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('.'));
});

gulp.task('styles', function() {
  return gulp
    .src(stylesSource + 'style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded',
      includePaths: [bootstrapSass.in + 'scss']
    }).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(stylesDest));
});

gulp.task('watchJsVendors', function(){
  return gulp.watch(jsSource + 'vendor/**/*.js', ['jsVendors'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
})

gulp.task('watchJs', function(){
  return gulp.watch(jsSource + 'src/**/*.js', ['js'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
})

gulp.task('watchStyles', function(){
  return gulp.watch(stylesSource + '**/*.scss', ['styles'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
})

gulp.task('default', ['watchJsVendors', 'watchJs', 'watchStyles']);

