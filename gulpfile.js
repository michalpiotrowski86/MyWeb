var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task("tusk",function(){
	console.log("Zielona wyspa!");
});

gulp.task("sass",function(){
	return gulp.src("scss/main.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({
		errLogToConsole:true,
		outputStyle: 'expanded',
		sourceComments: 'map'
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("css"))
});

gulp.task("lint",function(){
	return gulp.src("js/app.js")
	.pipe(jshint())
	.pipe(jshint.reporter())
});
	
gulp.task("watch",function(){
	gulp.watch("scss/*.scss",["sass","lint"]);
})
