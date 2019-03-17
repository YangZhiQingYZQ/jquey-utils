const gulp = require("gulp"),
	  uglify = require("gulp-uglify"),
	  browserSync = require("browser-sync").create(),
	  watch = require("gulp-watch");
	 
gulp.task("build",function(done){
	gulp.src("src/*.js")
	.pipe(uglify())
	.pipe(gulp.dest("dist/"))
	done();
})
gulp.task("server",function(){
	browserSync.init({
		server:{
			baseDir:"src"
		},
		post:8050
	})
	watch(["src/*.*"],browserSync.reload);
})
