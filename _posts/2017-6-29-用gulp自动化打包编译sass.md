---
layout: post
title:  "用gulp自动化打包编译sass"
date:   2017-06-29
desc: "gulp编译sass"
keywords: "gulp sass "
categories: [Sass]
tags: [sass,gulp]
icon: icon-html
---

第一步
-----

进入项目根目录，在gulp环境下安装sass
执行语句：cnpm install --save-dev node-sass


第二步
-----
在gulpfile.js文件中
添加：

	var sass = require('gulp-sass');
	
	gulp.task('sass', function(){
	   return gulp.src([appName + '/css/*.scss'])
	          .pipe(sass())
	          .pipe(gulp.dest(appNameDist + '/css'));
	});
	//正式构建
	gulp.task('build', function (done) {
	  runSequence(
	    ['clean'],
	    ['scripts', 'styles', 'templates', 'copyimg','sass'],
	    ['replaceHtml', 'replaceJs'],
	    ['replaceIndex'],
	    ['copylib'],
	    ['image'],
	  done);
	});
