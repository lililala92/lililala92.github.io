---
layout: post
title:  "js设置元素class"
date:   2016-06-07
desc: "js中设置元素class的三种方法小结"
keywords: "js"
categories: [Javascript]
tags: [js,Javascript]
icon: icon-html

一.el.setAttribute("class","abc")适合IE8以上、Firefox、chrome、Safari、Opera 
------
	<!DOCTYPE HTML> 
	<HTML> 
	<head> 
	<meta charset="utf-8" /> 
	<title>setAttribute('class', 'abc')</title> 
	<style type="text/css"> 
	.abc { 
	background: red; 
	} 
	</style> 
	</head> 
	<body> 
	<div id="d1">test div</div> 
	<script> 
       var div=document.getElementByID("d1");
       div.setAttribute("class",'abc');
    </script>
    </body>
    </HTML>
>IE8以下div不是红色


二、el.setAttribute("className","abc")适合IE8以下
------
    <!DOCTYPE HTML> 
	<HTML> 
	<head> 
	<meta charset="utf-8" /> 
	<title>setAttribute('className', 'abc')</title> 
	<style type="text/css"> 
	.abc { 
	background: red; 
	} 
	</style> 
	</head> 
	<body> 
	<div id="d1">test div</div> 
	<script> 
       var div=document.getElementByID("d1");
       div.setAttribute("className",'abc');
    </script>
    </body>
    </HTML>
>此时只有IE8以下div是红色

三、el.className='abc'
------
    <!DOCTYPE HTML> 
	<HTML> 
	<head> 
	<meta charset="utf-8" /> 
	<title>setAttribute('className', 'abc')</title> 
	<style type="text/css"> 
	.abc { 
	background: red; 
	} 
	</style> 
	</head> 
	<body> 
	<div id="d1" class="ab">test div</div> 
	<script> 
       var div=document.getElementByID("d1");
       div.className='abc';
    </script>
    </body>
    </HTML>
>所有浏览器适用,但是这样会将'ab'给覆盖掉

>如果是累加就用 div.className=+' '+abc;