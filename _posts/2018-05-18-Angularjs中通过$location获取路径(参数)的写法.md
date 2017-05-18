---
layout: post
title:  "Angularjs中通过$location获取路径(参数)的写法"
date:   2017-05-18
desc: "Angularjs中通过$location获取路径(参数)的写法"
keywords: "angular url $location"
categories: [Angularjs]
tags: [Angularjs,url,$location]
icon: icon-html
---
获取不修改URL
---
//1.获取当前完整的url路径  
var absurl = $location.absUrl();  
//结果http://172.16.0.88:8100/#/homePage?id=10&a=100  
  
//2. 获取当前url路径(当前url#后面的内容,包括参数和哈希值):  
 var url = $location.url();  
 // 结果：/homePage?id=10&a=100  
   
  
 //3. 获取当前url的子路径(也就是当前url#后面的内容,不包括参数)  
var pathUrl = $location.path()  
//结果：/homePage  
  
  
//4.获取当前url的协议(比如http,https)  
var protocol = $location.protocol();  
//结果：http  
  
  
//5.获取主机名  
var localhost = $location.host();  
//结果：172.16.0.88  
  
  
//6.获取当前url的端口  
var port = $location.port();  
//结果：8100  
  
  
//7.获取当前url的哈希值  
var hash = $location.hash()  
//结果：http://172.16.088  
   
  
 //8.获取当前url的参数的序列化json对象  
 var search = $location.search();  
 //结果：{id: "10", a: "100"}  

修改 (改变URL相关内容)
---
//1 修改url的子路径部分(也就是当前url#后面的内容,不包括参数):  
 $location.url('/validation');  
//结果：http://172.16.0.88:8100/#/validation  
  
 //2 修改url的哈希值部分  
$location.hash('myhash3');  
//结果:http://172.16.0.88:8100/#/homePage?id=10&a=100#myhash3  
  
//3 修改url的参数部分(第一个参数表示url参数的属性名,第二个参数是该属性名的属性值,如果是已有属性名,则修改,如果不是已有属性,则新增)  
$location.search('id','111')  
// 结果(修改参数值)：http://172.16.0.88:8100/#/homePage?id=111&a=100  
  
$location.search('ids','111')  
// 结果（新增ids参数): http://172.16.0.88:8100/#/homePage?id=111&a=100&ids=111  
  
//4.一次性修改多个参数  
$location.search({id:'55','a':'66'})  
//结果：http://172.16.0.88:8100/#/homePage?id=55&a=66#myhash3  
  
 //5.第一个值表示url参数的属性名,如果是已有属性名,则删除该属性,如果不是已有属性,那就等于没改过  
 $location.search('age',null)  

修改URL但不存入历史记录
---
 在上面的修改url的方法的时候,每修改一次,url都会被存入历史记录,可以使用后退按钮回到修改前的url,如果不想要这种效果,而仅仅是替换当前的记录,可以使用  $location.path('/validation').replace();

