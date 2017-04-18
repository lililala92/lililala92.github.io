---
layout: post
title:  "js没有块级作用域+EMAScript6的let命令"
date:   2017-04-15
desc: "js没有块级作用域+EMAScript6的let命令"
keywords: "javascript "
categories: [Javascript]
tags: [javascript,let]
icon: icon-html
---

# 1.js没有块级作用域 #
在C语言中，由花括号封闭的代码块是没有自己的作用域的。比如下面代码的输出结果：
     
    if(true){
         var color="bule";
    }
     alert(color);

  该段代码并不会报错，因为在javascript中，if语句中的变量声明会将变量添加到当前执行环境中（这里是全局变量），在使用for语句时尤其要牢记这一点：

    for(var i=0;i<10;i++){
       doSomething(i); 
    }
     alert(i);
   此时结果是10；

**如果初始化变量时没有使用var声明，该变量会自动添加到全局环境中**

    function add(a,b){
      var sum=num1+num2;
       return sum;
    }
    var result=add(10,20);
    alert(sum);

 会出现错误

    function add(a,b){
       sum=num1+num2;
       return sum;
    }
    var result=add(10,20);
    alert(sum);
成功输出30


# js没有块级作用域+EMAScript6的let命令 #

ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

	{
	  let a = 10;
	  var b = 1;
	}
	
	a // ReferenceError: a is not defined.
	b // 1
上面代码在代码块之中，分别用let和var声明了两个变量。然后在代码块之外调用这两个变量，结果let声明的变量报错，var声明的变量返回了正确的值。这表明，let声明的变量只在它所在的代码块有效。

for循环的计数器，就很合适使用let命令。
	for (let i = 0; i < 10; i++) {}	
	console.log(i);
	//ReferenceError: i is not defined

下面的代码如果使用var，最后输出的是10。

	var a = [];
	for (var i = 0; i < 10; i++) {
	  a[i] = function () {
	    console.log(i);
	  };
	}
	a[6](); // 10
上面代码中，变量i是var声明的，在全局范围内都有效，所以全局只有一个变量i。每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的function在运行时，会通过闭包读到这同一个变量i，导致最后输出的是最后一轮的i的值，也就是10。

而如果使用let，声明的变量仅在块级作用域内有效，最后输出的是6。

	var a = [];
	for (let i = 0; i < 10; i++) {
	  a[i] = function () {
	    console.log(i);
	  };
	}
	a[6](); // 6

上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。

另外，for循环还有一个特别之处，就是循环语句部分是一个父作用域，而循环体内部是一个单独的子作用域。

		for (let i = 0; i < 3; i++) {
		  let i = 'abc';
		  console.log(i);
		}
		// abc
		// abc
		// abc
上面代码输出了3次abc，这表明函数内部的变量i和外部的变量i是分离的。


