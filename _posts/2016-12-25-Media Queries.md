---
layout: post
title:  "Media Queries"
date:   2016-12-25
desc: "Media Queries"
keywords: "CSS3 "
categories: [Css3]
tags: [CSS3,Media Queries]
icon: icon-html
---
 Media Queries
----
 Media Queries是CSS3新增加的一个模块功能，其最大的特色就是通过CSS3来查询媒体，然后调用对应的样式。常见的媒体类型引用方法：Link, @import, @media(CSS3新增)

@media被称为媒体查询，在页面中可以通过这个属性来引入媒体类型

1. 在样式文件中引入

    @media screen{

      选择器{/*你的样式代码写在这里*/}

    }

 
2. 在head标签的样式style中引用
     

###使用方法
---
当屏幕小于或等于480px时,页面中的广告区块（.ads）都将被隐藏。

    @media screen and (max-width:480)
    {
        .ads{
           display:none;
        }
    }
当屏幕大于或等于900px时，容器“.wrapper”的宽度为980px。

	@media screen and (min-width:900px){
	.wrapper{width: 980px;}
	}

当屏幕在600px~900px之间时，body的背景色渲染为“#f5f5f5”，如下所示。

	@media screen and (min-width:600px) and (max-width:900px){
	  body {background-color:#f5f5f5;}
	}

在智能设备上，例如iPhone、iPad等，还可以根据屏幕设备的尺寸来设置相应的样式（或者调用相应的样式文件）。同样的，对于屏幕设备同样可以使用“min/max”对应参数，如“min-device-width”或者“max-device-width”。这里的“max-device-width”所指的是设备的实际分辨率，也就是指可视面积分辨率

    <link rel=""stylesheet" media="screen and (max-device-width:480px)" href="iphone.css">
      
  



