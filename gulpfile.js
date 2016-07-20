const gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    webpack = require('webpack-stream'),
    open = require('open');

const config = {
    port: 8080
};

gulp.task('live-server', () => {
    connect.server({
        root: 'public',
        port: config.port,
        livereload: true
    });
    // open('http://localhost:' + config.port);
});

gulp.task('live-reload', () => {
    gulp.src('./public/**/*.*')
        .pipe(connect.reload());
});

gulp.task('sass', () => {
    gulp.src('./App/sass/style.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/css'))
        .pipe(connect.reload());
});

gulp.task('react', () => {
    gulp.src('./App/index.js')
        .pipe(plumber())
        .pipe(webpack({
            watch: true,
            output: {
                filename: "bundle.js"
            },
            module: {
                loaders: [{
                    test: /\.js?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        presets: ['react', 'es2015']
                    }
                }, {
                    test: /\.json$/,
                    loader: "json"
                }],
            },
        }))
        .pipe(gulp.dest('./public/javascripts/'));
});

gulp.task('watch', () => {
    gulp.watch('./public/**/*.*', ['live-reload']);
    gulp.watch('./App/sass/**/*.scss', ['sass']);
});

gulp.task('default', [
    'live-server',
    'live-reload',
    'sass',
    'react',
    'watch'
]);
