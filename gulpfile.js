/*
 编译Sass (gulp-ruby-sass)
 Autoprefixer (gulp-autoprefixer)
 缩小化(minify)CSS (gulp-minify-css)
 JSHint (gulp-jshint)
 拼接 (gulp-concat)
 丑化(Uglify) (gulp-uglify)
 图片压缩 (gulp-imagemin)
 即时重整(LiveReload) (gulp-livereload)
 清理档案 (gulp-clean)
 图片快取，只有更改过得图片会进行压缩 (gulp-cache)
 更动通知 (gulp-notify)
 sass浏览器地图(gulp-sourcemaps);

* */

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');     // sass编译
var minifycss = require('gulp-minify-css');  //缩小化(minify)CSS
var uglify = require('gulp-uglify');    //gulp-uglify压缩javascript文件，减小文件大小
var livereload = require('gulp-livereload');
// var nodemon = require('gulp-nodemon');

//sass编译  自动刷新
gulp.task('sass', function () {
    livereload.listen();
    sass('./client/sass/**/*.scss')
        .on('error', sass.logError)
        // For inline sourcemaps
        //.pipe(sourcemaps.write())

        // For file sourcemaps
        // .pipe(sourcemaps.write('maps', {
        //     includeContent: false,
        //     sourceRoot: 'source'
        // }))
        //.pipe(minifycss())
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload())
        // .pipe(connect.reload());//通知浏览器重启
});
//sass编译 并压缩css  //css文件压缩
gulp.task('cssmin', function () {
    sass('./client/sass/**/*.scss')
        .on('error', sass.logError)
        // For inline sourcemaps
        .pipe(minifycss())
        .pipe(gulp.dest('./public/css'))
});
//js压缩
gulp.task('jsmin', function () {
    //压缩src/js目录下的所有js文件
    //除了test1.js和test2.js（**匹配src/js的0个或多个子文件夹）
    // gulp.src(['./client/js/**/*.js', '!src/js/**/{test1,test2}.js'])
    // gulp.src(['./client/js/**/*.js', '!./client/js/libs/**/*.js'])
    gulp.src(['./client/js/**/*.js'])
        // .pipe(uglify())
        .pipe(uglify({
            //mangle: true,//类型：Boolean 默认：true 是否修改变量名
            mangle: {except: ['require' ,'exports' ,'module' ,'$']},//排除混淆关键字
            // mangle: true,//类型：Boolean 默认：true 是否修改变量名
            // compress: false,//类型：Boolean 默认：true 是否完全压缩
            // preserveComments: 'all' //保留所有注释
        }))
        .pipe(gulp.dest('./public/js'));
});
//js不压缩
gulp.task('js', function () {
    //压缩src/js目录下的所有js文件
    //除了test1.js和test2.js（**匹配src/js的0个或多个子文件夹）
    // gulp.src(['./client/js/**/*.js', '!src/js/**/{test1,test2}.js'])
    // gulp.src(['./client/js/**/*.js', '!./client/js/libs/**/*.js'])
    gulp.src(['./client/js/**/*.js'])
        .pipe(gulp.dest('./public/js'));
});
gulp.task('jade', function() {
    return gulp.src('./views/*.jade')
        .pipe(jade())
        //.pipe(gulp.dest('./VIE'));
});

gulp.task('jade:watch', function() {
    gulp.watch('./views/**/*.jade', ['jade']);
});

// 当客户端被监听的文件改变时，刷新浏览器
gulp.task('livereload', function() {
    livereload.listen();
    var server = livereload();
    return gulp.watch(['./client/js/**/*.js', './client/sass/**/*.scss','./views/*.jade'], function(event) {
        // console.log('server:',server)
        // server.changed(event.path);
        console.log('event.path:',event)
        livereload.changed(event.path)
    });
});

// gulp.task('server',function(){
//     connect.server({
//         root:'views',//服务器的根目录
//         // port:2000, //服务器的地址，没有此配置项默认也是 8080
//         livereload:true//启用实时刷新的功能
//     });
// });


gulp.task('sass:watch', function () {
    livereload.listen();
    gulp.watch('./client/sass/**/*.scss', ['sass']);
});
gulp.task('cssmin:watch', function () {
    gulp.watch('./client/sass/**/*.scss', ['cssmin']);
});
//监听
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./client/sass/**/*.scss', ['sass']);  //sass生成后的文件不压缩
    gulp.watch('./client/js/**/*.js', ['js']);  //js文件不压缩
    // gulp.watch('./views/**/*.jade', ['jade']);
    gulp.watch(['./client/js/**/*.js', './client/sass/**/*.scss', './dist/css/**/*.css'], function (file) {
        livereload.changed(file.path);
    });
});


// develop 任务， 同时开启 livereload 任务
gulp.task('develop', ['watch','livereload']);
gulp.task('prod', ['cssmin','jsmin']);
