---
layout: post
title:  "js 原型模式（prototype）"
date:   2017-03-10
desc: "js 原型模式（prototype）"
keywords: "javascript "
categories: [Javascript]
tags: [javascript,prototype,原型模式]
icon: icon-html
---

原型模式
---  
1.理解原型对象
--- 
   我们创建的每一个函数都有prototype属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以有特定类型的所有实例共享的属性和方法。

   简单来讲就是prototype就是通过调用构造函数而创建的那个对象实例的原型对象。可有让所有实例共享原型对象中的属性和方法。 对于构造函数来说，每创建一个实例，函数里的方法都要被重写一遍，那么我们可以直接将一些方法添加到原型对象中，让所有实例共享该方法。
 
   无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个prototype属性，这个属性指向函数的原型对象，在默认情况下，所有原型对象都会自动获得一个constructor属性，这个属性是一个指向prototype所在的函数的指针
2.原型与in操作符
--- 
   hasOwnProperty()方法检测一个属性是存在于实例中还是原型中
   in 操作符：通过对象能够访问给定属性时返回true
   	
    function Person(){}
	Person.prototype.name="Nicholas";
	Person.prototype.age=29;

	var person1 =new Person();
	person.name="Greg";
	alert(person1.name);//"Greg"来自实例化
	alert(person1.hasOwnProperty("name"));//true
	alert("name" in person1);//true

	var person2 =new Person();
	alert(person2.name);//"Nicholas"来自原型对象
	alert(person2.hasOwnProperty("name"));//false
	alert("name" in person2);//true

3.更简单的原型语法
--- 
    function Person(){}
    Person.prototype={
       name:"Nicholas",
       age:29,
    }
Person.prototype设置为等于一个以对象字面量形式创建的新对象，最终结果相同，但是有一个意外，就是constructor不在指向Person了。这里的语法本质上完全重写了默认的Prototype对象。

4.原型的动态性
--- 

		var friend=new Person();
		Person.prototype.sayHi=function(){
		   alert("Hi");
		}
		friend.sayHi();//"hi"没问题
但是如果新建了实例然后又重写了原型对象就不行


        var friend=new Person();
		Person.prototype={
           constructor :Person
		   sayName:function(){
           alert("Hi");
        }
		}
		friend.sayHi();//error;中心创建的原型，friend指向的原型不是新创建的原型。

5原生对象Array Object String等等都有原型，可以修改他们的原型往里面添加方法。
--- 

6原型对象的问题
--- 

     function Person(){}
     Person.prototype{
          constructor :Person,
		  friends：["shelby","Court"]
		}
    var person1 =new Person();
    var person2 =new Person();
    person1.friends.push("Van");
    alert(person2.name);//"shelby","Court", "Van"
    alert(person1.name);//"shelby","Court", "Van"
会互相影响！！！所以应该结合构造函数和原型模式创建对象
--- 
    

