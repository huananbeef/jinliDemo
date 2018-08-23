//导入所需插件
const gulp = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const scss = require('gulp-sass');
/*或者使用const scss = require('gulp-sass-china')*/
const minifyCSS = require('gulp-minify-css');
const connect = require('gulp-connect');

/*处理scss文件*/
gulp.task('scss',function(){
	return gulp.src('./scss/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('./dist/css'))
	.pipe(minifyCSS())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/css'))
	.pipe(connect.reload());
})

/*
	1.实现html拷贝
*/
gulp.task('copy-html',function(){
	return gulp.src('./html/*.html')
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
})

/*
	2.实现图片的拷贝
*/
gulp.task('images',function(){
	return gulp.src("./images/**/*.{jpg,png,gif}")
	.pipe(gulp.dest('dist/images'))
	.pipe(connect.reload());
})

/*
	3.拷贝js文件
*/
gulp.task('scripts',function(){
	return gulp.src("./js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})


/*4.拷贝json数据*/
gulp.task('data',function(){
	return gulp.src("./data/*.json")
	.pipe(gulp.dest('dist/data'))
	.pipe(connect.reload());
})

/*异步执行拷贝数据*/
gulp.task('build',["copy-html","images","data","scripts","scss"],function(){
	console.log('编译成功');
})


gulp.task('server',function(){
	/*文件发生改变，自动更新*/
	connect.server({
		root:'dist',//设置根目录
		port:8888,
		livereload:true//实时刷新
	})
})

/*事件监听*/
gulp.task('watch',function(){
	gulp.watch("./scss/*.scss",['scss']);
	gulp.watch("./images/**/*",['images']);
	gulp.watch("./html/*.html",['copy-html']);
	gulp.watch("./data/*.json",['data']);
	gulp.watch("./js/*.js",['scripts']);
})

gulp.task("default",['watch','server']);