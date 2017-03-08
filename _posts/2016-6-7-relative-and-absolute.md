---
layout: post
title:  "relative and absolute"
date:   2016-06-07
desc: "relative and absolute"
keywords: "CSS "
categories: [Css]
tags: [CSS,relative,absolute]
icon: icon-html
---
relative的一些特性
------

- `top:0 left:0` 都是相对于其自身的定位，且没有拉伸效果

- 在overflow、z-index、位置上可以控制absolute：
     
   >  当relative的z-index为具体数值时，会新建层叠上下文对里面的元素有限制。
   
   >  当relative的z-index为auto时不会限制里面的元素，但是IE6和IE7同样会新建层叠上下文。
 

- maigin移动会影响其他元素但relative不会

-    `<div style="position:relative">`

     `<img src="pig.png" style="position:absolute">`

     `</div>` 

     此处div不占空间

absolute的一些特性
------
- absolute脱离文档流，absolute和float相斥

- 和margin配合实现一些小图标的精确定位且不影响其他元素

- 配合设置top bottom left right可以实现拉伸

- `<div><img></img></div>`   
  
>  当img设置为absolute时absolute塌陷

-    `<div><img></img></div>`
>  当div设置为absolute时把img包裹



#关系
------
**absolute受relative限制**

 
