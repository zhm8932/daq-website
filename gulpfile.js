var gulp = require('gulp');
// var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var webpack = require('webpack');
var babel = require('gulp-babel');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

var srcPaths = {
    sass: './client/sass/**/*.scss',
    js: './client/js/**/*.js',
    jsx: './client/js/**/*.jsx',
    bundledJS: './public/js/**/*.js'
};

gulp.task('sass', function () {
    sass(srcPaths.sass)
        .on('err', sass.logError)
        .pipe(gulp.dest('public/css'))
        // .pipe(cleanCSS())
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        // .pipe(gulp.dest('public/css'));
});

gulp.task('webpack', function () {
    var webpackConfig = require('./webpack.config');
    webpack(webpackConfig, function (err, stats) {
        console.log(stats.toString());
    })
});

gulp.task('js', function () {
    return gulp.src(srcPaths.bundledJS)
        // .pipe(babel())
        // .pipe(uglify())
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function () {
    gulp.watch(srcPaths.sass, ['sass']);
    gulp.watch(srcPaths.js, ['webpack']);
    gulp.watch(srcPaths.jsx, ['webpack']);
    gulp.watch(srcPaths.bundledJS, ['js']);
});


//js压缩
gulp.task('jsmin', function () {
    return gulp.src(srcPaths.bundledJS)
        .pipe(babel())
        .pipe(uglify())
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        .pipe(gulp.dest('public/js'));
});

//sass编译 并压缩css  //css文件压缩
gulp.task('cssmin', function () {
    sass(srcPaths.sass)
        .on('err', sass.logError)
        .pipe(gulp.dest('public/css'))
        .pipe(cleanCSS())
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['sass', 'webpack', 'js', 'watch']);
gulp.task('prod', ['webpack', 'cssmin','jsmin']);