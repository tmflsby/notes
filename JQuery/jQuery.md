<!-- TOC -->

- [1. jQuery 第一天](#1-jquery-第一天)
  - [1.1. jQuery基本概念](#11-jquery基本概念)
    - [1.1.1. jQuery初体验](#111-jquery初体验)
    - [1.1.2. 什么是jQuery？](#112-什么是jquery)
    - [1.1.3. jQuery的版本](#113-jquery的版本)
    - [1.1.4. jQuery的入口函数](#114-jquery的入口函数)
    - [1.1.5. jQuery对象与DOM对象的区别（重点）](#115-jquery对象与dom对象的区别重点)
  - [1.2. 选择器](#12-选择器)
    - [1.2.1. 什么是jQuery选择器](#121-什么是jquery选择器)
    - [1.2.2. 基本选择器](#122-基本选择器)
    - [1.2.3. 层级选择器](#123-层级选择器)
    - [1.2.4. 过滤选择器](#124-过滤选择器)
    - [1.2.5. 筛选选择器(方法)](#125-筛选选择器方法)
- [2. jQuery第二天](#2-jquery第二天)
  - [2.1. jQuery操作样式](#21-jquery操作样式)
    - [2.1.1. css操作](#211-css操作)
    - [2.1.2. class操作](#212-class操作)
  - [2.2. jQuery操作属性](#22-jquery操作属性)
    - [2.2.1. attr()](#221-attr)
    - [2.2.2. prop()](#222-prop)
    - [2.2.3. removeAttr()](#223-removeattr)
  - [2.3. jQuery动画](#23-jquery动画)
    - [2.3.1. 三组基本动画](#231-三组基本动画)
    - [2.3.2. 自定义动画](#232-自定义动画)
    - [2.3.3. 动画队列与停止动画](#233-动画队列与停止动画)
  - [2.4. jQuery节点操作](#24-jquery节点操作)
    - [2.4.1. 创建节点](#241-创建节点)
    - [2.4.2. 添加节点](#242-添加节点)
    - [2.4.3. 清空节点与删除节点](#243-清空节点与删除节点)
    - [2.4.4. 克隆节点](#244-克隆节点)
- [3. jQuery第三天](#3-jquery第三天)
  - [3.1. jQuery特殊属性操作](#31-jquery特殊属性操作)
    - [3.1.1. val方法](#311-val方法)
    - [3.1.2. html方法与text方法](#312-html方法与text方法)
    - [3.1.3. width方法与height方法](#313-width方法与height方法)
    - [3.1.4. scrollTop与scrollLeft](#314-scrolltop与scrollleft)
    - [3.1.5. offset方法与position方法](#315-offset方法与position方法)
  - [3.2. jQuery事件机制](#32-jquery事件机制)
    - [3.2.1. jQuery事件发展历程(了解)](#321-jquery事件发展历程了解)
    - [3.2.2. on注册事件(重点)](#322-on注册事件重点)
    - [3.2.3. 事件解绑](#323-事件解绑)
    - [3.2.4. 触发事件](#324-触发事件)
    - [3.2.5. jQuery事件对象](#325-jquery事件对象)
  - [3.3. jQuery补充知识点](#33-jquery补充知识点)
    - [3.3.1. 链式编程](#331-链式编程)
    - [3.3.2. each方法](#332-each方法)
    - [3.3.3. 多库共存](#333-多库共存)
- [4. jQuery第四天](#4-jquery第四天)
  - [4.1. 插件](#41-插件)
    - [4.1.1. 常用插件](#411-常用插件)
      - [4.1.1.1. jquery.color.js](#4111-jquerycolorjs)
      - [4.1.1.2. jquery.lazyload.js](#4112-jquerylazyloadjs)
      - [4.1.1.3. jquery.ui.js插件](#4113-jqueryuijs插件)
    - [4.1.2. 制作jquery插件](#412-制作jquery插件)

<!-- /TOC -->

# 1. jQuery 第一天

## 1.1. jQuery基本概念

> 学习目标：学会如何使用jQuery，掌握jQuery的常用api，能够使用jQuery实现常见的效果。

### 1.1.1. jQuery初体验

```javascript
$(document).ready(function () {
    $("#btn1").click(function () {
        //隐式迭代：偷偷的遍历，在jQuery中，不需要手动写for循环了，会自动进行遍历。
        $("div").show(200);
    });

    $("#btn2").click(function () {
        $("div").text("我是内容");
    });


    console.log($("li").css("fontSize","20px"));// 所有li都设置
    console.log($("li").css("fontSize"));// 获取第一个li的fontSize值

});
```

> **`隐式迭代`**:  
> 设置操作的时候：会给jq内部的所有对象都设置上相同的值。  
> 获取的时候：只会返回第一个元素对应的值。

### 1.1.2. 什么是jQuery？

> jQuery的官网 [http://jquery.com/](http://jquery.com/)
>
> jQuery就是一个js库，使用jQuery的话，会比使用JavaScript更简单。
>
> js库：把一些常用到的方法写到一个单独的js文件，使用的时候直接去引用这js文件就可以了。（animate.js、common.js）
>
> 我们知道了，jQuery其实就是一个js文件，里面封装了一大堆的方法方便我们的开发，其实就是一个加强版的common.js，因此我们学习jQuery，其实就是学习jQuery这个js文件中封装的一大堆方法。

### 1.1.3. jQuery的版本

> 官网下载地址：[http://jquery.com/download/](http://jquery.com/download/)
> jQuery版本有很多，分为1.x 2.x 3.x

大版本分类：

> 1.x版本：能够兼容IE678浏览器
> 2.x版本：不兼容IE678浏览器
> 1.x和2.x版本jquery都不再更新版本了，现在只更新3.x版本。
>
> 3.x版本：不兼容IE678，更加的精简（在国内不流行，因为国内使用jQuery的主要目的就是兼容IE678）

关于压缩版和未压缩版

```javascript
jquery-1.12.4.min.js:压缩版本，适用于生产环境，因为文件比较小，去除了注释、换行、空格等东西，但是基本没有可阅读性。
jquery-1.12.4.js:未压缩版本，适用于学习与开发环境，源码清晰，易阅读。
```

### 1.1.4. jQuery的入口函数

使用jQuery的三个步骤：

```javascript
1. 引入jQuery文件
2. 入口函数
3. 功能实现
```

关于jQuery的入口函数：

```javascript
//第一种写法
$(document).ready(function() {

});
//第二种写法  (推荐)  ---    $() === jQuery()
$(function() {

});

// js入口函数  
window.onload = function(){}
```

jQuery入口函数与js入口函数的对比

```javascript
jQuery入口函数执行时间更早。
1. JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。
2. jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。
```

### 1.1.5. jQuery对象与DOM对象的区别（重点）

```javascript
1. DOM对象：使用JavaScript中的方法获取页面中的元素返回的对象就是dom对象。
2. jQuery对象：jquery对象就是使用jquery的方法获取页面中的元素返回的对象就是jQuery对象。
3. jQuery对象其实就是DOM对象的包装集（包装了DOM对象的集合（伪数组））
4. DOM对象与jQuery对象的方法不能混用。
```

DOM对象转换成jQuery对象：【联想记忆：花钱】

```javascript
var $obj = $(domObj);
// $(document).ready(function(){});就是典型的DOM对象转jQuery对象

```

jQuery对象转换成DOM对象：

```javascript
var $li = $(“li”);
//第一种方法（推荐使用）
$li[0]
//第二种方法
$li.get(0)

```

【练习：隔行变色案例.html】

## 1.2. 选择器

### 1.2.1. 什么是jQuery选择器

jQuery选择器是jQuery为我们提供的一组方法，让我们更加方便的获取到页面中的元素。注意：jQuery选择器返回的是jQuery对象。

jQuery选择器有很多，基本兼容了CSS1到CSS3所有的选择器，并且jQuery还添加了很多更加复杂的选择器。

jQuery选择器虽然很多，但是选择器之间可以相互替代，就是说获取一个元素，你会有很多种方法获取到。所以我们平时真正能用到的只是少数的最常用的选择器。

[jQuery速查文档](http://jquery.cuishifeng.cn/)

[jQuery官方API](https://api.jquery.com/)

### 1.2.2. 基本选择器

| 名称    | 用法                 | 描述                     |
| ----- | ------------------ | :--------------------- |
| ID选择器 | $(“#id”);          | 获取指定ID的元素              |
| 类选择器  | $(“.class”);       | 获取同一类class的元素          |
| 标签选择器 | $(“div”);          | 获取同一类标签的所有元素           |
| 并集选择器 | $(“div,p,li”);     | 使用逗号分隔，只要符合条件之一就可。     |
| 交集选择器 | $(“div.redClass”); | 获取class为redClass的div元素 |

> 总结：跟css的选择器用法一模一样。

### 1.2.3. 层级选择器

| 名称    | 用法          | 描述                              |
| ----- | ----------- | :------------------------------ |
| 子代选择器 | $(“ul>li”); | 使用>号，获取儿子层级的元素，注意，并不会获取孙子层级的元素  |
| 后代选择器 | $(“ul li”); | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等 |
| 选择兄弟 | $(“ul~li”); | 获取ul的兄弟元素中所有li元素 |
| 后面第一个兄弟元素 | $(“ul+li”); | 获取ul后面的第一个兄弟并且是li元素，否则获取不到 |

> prevAll()   nextAll()

```js
// prevAll() 和 nextAll() 实现排它
function onCheck(obj){
  $(obj).nextAll().removeClass("cur");
  $(obj).prevAll().removeClass("cur");
  $(obj).addClass("cur");
}

解释说明： $(obj)获取点击的元素
  nextAll() 获取点击元素之前的所有同级元素
  prevAll() 获取点击元素之后的所有同级元素
  removeClass("cur")移除class="cur" 这个元素（移除css）
  addClass("cur")给该元素添加class="cur"
效果：点击哪个框该框就就带有class="cur" 效果 其他框消失
```

### 1.2.4. 过滤选择器

> 过滤选择器都带冒号:

| 名称         | 用法                                 | 描述                                 |
| ---------- | ---------------------------------- | :--------------------------------- |
| :eq(index) | $(“li:eq(2)”).css(“color”, ”red”); | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始。 |
| :odd       | $(“li:odd”).css(“color”, ”red”);   | 获取到的li元素中，选择索引号为`奇数`的元素              |
| :even      | $(“li:even”).css(“color”, ”red”);  | 获取到的li元素中，选择索引号为`偶数`的元素              |

    :first  第一个
    :last  最后一个

【案例：隔行变色】

### 1.2.5. 筛选选择器(方法)

> 筛选选择器的功能与过滤选择器有点类似，但是用法不一样，筛选选择器主要是方法。

| 名称                 | 用法                          | 描述                         |
| ------------------ | --------------------------- | :------------------------- |
| children(selector) | $(“ul”).children(“li”)      | 相当于$(“ul>li”)，子类选择器        |
| find(selector)     | $(“ul”).find(“li”);         | 相当于$(“ul li”),后代选择器        |
| siblings(selector) | $(“#first”).siblings(“li”); | 查找兄弟节点，不包括自己本身。            |
| parent()           | $(“#first”).parent();       | 查找父亲                       |
| eq(index)          | $(“li”).eq(2);              | 相当于$(“li:eq(2)”),index从0开始 |
| next()             | $(“li”).next()              | 找下一个兄弟                     |
| prev()             | $(“li”).prev()              | 找上一次兄弟                     |

    :gt  大于
    :lt  小于
    :eq  等于



```javascript
【案例：下拉菜单】this+children+mouseenter+mouseleave
【案例：突出展示】siblings+find
【案例：手风琴】next+parent
【案例：淘宝精品】index+eq
```


常用的方法总结：

```js
//  css属性  参数有多种写法
$("div").css("color","green")
$("div").css("left","200px")  //  
$("div").css("left",200)  //  
//  value属性，不传参是获取属性，传参是设置属性
$("#btn").val("关灯")  
$("#btn").val("关灯").trim() // 去除val值前后的空格
//  .text() 相当于 .innerText属性
$("p").text("这是P元素")  // jQuery会隐式迭代设置每个p
//  .html() 相当于 .innerHTML属性
$("p").html("<p>这是P标签</p>")
//  .index() 返回当前li在li兄弟元素中的索引。
$("ul>li").index()

// 清空一个元素
$("div").html("")  // 内存泄露
$("div").empty()  // 清空子元素
$("div").remove()  // 移除后返回被移除的元素

// 复制元素 clone()  参数true表示会复制元素的事件，false不复制事件
$(".des").clone(true)
```



# 2. jQuery第二天

## 2.1. jQuery操作样式

### 2.1.1. css操作

```js
css(name,value); //设置单个样式、
css(obj); // 设置多个样式、 obj -- json对象
css(name); // 获取样式
```

```js
//css(name[,value]);
// name:进行操作的样式
// value:对应样式的值

$("#one").css("backgroundColor","gray");  // 设置背景色 灰色

$("#one").css({"color":"red","fontFamily":"console"}); // 设置字体和字体颜色
$("#one").css("fontSize"); // 获取字体大小
```

### 2.1.2. class操作

```js
addClass(name) -- 添加类
removeClass(name) -- 移除类
hasClass(name) -- 判断类
toggleClass(name) -- 切换
```

## 2.2. jQuery操作属性

    attr()
    prop()
    removeAttr()

### 2.2.1. attr()

设置单个属性、设置多个属性、获取属性

```js
attr(name[,value]);
// name: 操作的属性
// value: 对应的属性值

$("img").attr("title","学习笔记");  //  返回img的jq对象
$("img").attr({"title":"学习笔记","alt":"图片"}); // 返回img的jq对象
$("img").attr("title"); // 获取title  返回属性值
```

> width/height 可以写在css中，也可写在属性中。 css()方法 和 arrt()方法 都可以操作，尽量使用一种。

### 2.2.2. prop()

> 布尔类型的属性，要用 `prop()`，不能用 `attr`。 如 `disabled`  `selected`  `checked`

```js
$("#ck").prop("checked", true);
```

### 2.2.3. removeAttr()

`removeAttr(name)`  移除某个属性

## 2.3. jQuery动画

```js
  show() / hide()
  slideDown() / slideUp()  /  slideToggle()
  fadeIn() / fadeOut()  /  fadeToggle()

  animate({params},[speed],[swing/linear],[callback]);

  stop(clearQueue,jumpToEnd);
```

### 2.3.1. 三组基本动画

```js
show()        hide()
slideDown()   slideUp()   slideToggle()
fadeIn()      fadeOut()   fadeToggle()

参数：([speed][,callback]);
/**
 * speed: 动画执行时间。不传参则默认normal。 slow(200),normal(400),fast(600)
 * */
```

### 2.3.2. 自定义动画

```js
$(selector).animate({params},[speed],[swing/linear],[callback]);
// 参数：要操作的属性,动画时长,运动方式,回调函数
```

`css 动画` -- `animation`:`动画名称` `动画时间` `运动曲线`  `何时开始`  `播放次数`  `是否反方向`;

### 2.3.3. 动画队列与停止动画

```js
// stop方法：停止动画效果
stop(clearQueue,jumpToEnd)  
/** clearQueue: 是否清除队列
 *  jumpToEnd: 是否跳转到最终效果
 *  不传参默认： stop(false,false);
 * */

stop(false,true);
```

【案例：手风琴特效】【案例：音乐导航】

## 2.4. jQuery节点操作

```js
创建节点    $("<span></span>")

添加节点    append / appendTo    prepend / prependTo    before / after

删除节点    remove()    // 自杀

克隆节点    clone(Events)  // Events是一个布尔值 false:只复制内容，不复制注册的事件； true:复制内容和事件
```

### 2.4.1. 创建节点

```js
//  $(htmlStr)      htmlStr：html格式的字符串  
$("<span></span>")

$("<span>这是一个span元素</span>");
```

### 2.4.2. 添加节点


```js
 append    appendTo
 prepend   prependTo
 before
 after

//  appendTo, prependTo, insertBefore, insertAfter, 和 replaceAll这个几个方法成为一个破坏性操作，返回值是所有被追加的内容，而不仅仅是先前所选中的元素。所以，要选择先前选中的元素，需要使用end()方法

// A.append(B)     B.appendTo(A)  都是在A元素后面追加B元素
```

【案例：城市选择】

### 2.4.3. 清空节点与删除节点

> `empty()` : 清空指定节点的所有元素，保留自身  
> `remove()` : 删除节点,返回该节点(注册的事件都已清空)  

```js
$("div").empty();  // 清空div的所有内容(推荐使用，会清除子元素上绑定的内容、源码)
$("div").html(""); // 使用html方法来清空元素(不推荐使用。会造成内存泄漏，绑定的事件不会被清除)
```

### 2.4.4. 克隆节点

```js
clone(Events)  // Events是一个布尔值 false:只复制内容，不复制注册的事件； true:复制内容和事件

let B = A.clone(true)
```

# 3. jQuery第三天

## 3.1. jQuery特殊属性操作

### 3.1.1. val方法

> `val()`方法用于`设置和获取`表单元素的值，例如input、textarea的值  
> 即 操作value值

```javascript
//设置值
$("#name").val("张三");
//获取值
$("#name").val();
```

【案例：京东搜索.html】

### 3.1.2. html方法与text方法

> html方法相当于innerHTML,  text方法相当于innerText

```javascript
//设置内容
$(“div”).html(“<span>这是一段内容</span>”);
//获取内容
$(“div”).html()

//设置内容
$(“div”).text(“<span>这是一段内容</span>”);
//获取内容
$(“div”).text()
```

区别：html方法会识别html标签，text方法会那内容直接当成字符串，并不会识别html标签。

### 3.1.3. width方法与height方法

> 设置或者获取高度

```javascript
//带参数表示设置高度
$(“img”).height(200);
//不带参数获取高度
$(“img”).height();
```

获取网页的可视区宽高

```javascript
//获取可视区宽度
$(window).width();
//获取可视区高度
$(window).height();
```

### 3.1.4. scrollTop与scrollLeft

DOM三大家族 offset  scroll  client

> 设置或者获取垂直滚动条的位置

```javascript
//获取页面被卷曲的高度
$(window).scrollTop();
//获取页面被卷曲的宽度
$(window).scrollLeft();
```

【案例：仿腾讯固定菜单栏案例】
【案例：小火箭返航案例】

### 3.1.5. offset方法与position方法

> offset方法获取元素距离document的位置，position方法获取的是元素距离有定位的父元素的位置。

```javascript
//获取元素距离document的位置,返回值为对象：{left:100, top:100}
$(selector).offset();
//获取相对于其最近的有定位的父元素的位置。
$(selector).position();
```

## 3.2. jQuery事件机制

> JavaScript中已经学习过了事件，但是jQuery对JavaScript事件进行了封装，增加并扩展了事件处理机制。jQuery不仅提供了更加优雅的事件处理语法，而且极大的增强了事件的处理能力。

### 3.2.1. jQuery事件发展历程(了解)

简单事件绑定>>bind事件绑定>>delegate事件绑定>>**`on事件绑定`**(推荐)

> 简单事件注册

```javascript
click(handler)			单击事件
mouseenter(handler)		鼠标进入事件
mouseleave(handler)		鼠标离开事件
```
缺点：不能同时注册多个事件

> bind方式注册事件

```javascript
//第一个参数：事件类型
//第二个参数：事件处理程序
$("p").bind("click mouseenter", function(){
    //事件响应方法
});
```
缺点：不支持动态事件绑定

> `delegate`注册委托事件

```javascript
// 第一个参数：selector，要绑定事件的元素
// 第二个参数：事件类型
// 第三个参数：事件处理函数
$(".parentBox").delegate("p", "click", function(){
    //为 .parentBox下面的所有的p标签绑定事件
});
```

缺点：只能注册委托事件，因此注册事件需要记得方法太多了

> **`on`注册事件 (重要)**

```js
// 1. 给自己注册事件 (简单事件)
$("p").on("click",function(){
    alert("000");
});

// 2. 注册委托事件
$("div").on("click","p",function(){
    // 参数：事件，操作的对象，执行函数
    alert("---");
});
$("#btn").on("click",function(){
    $("<p>新增的p元素</p>").appendTo("div")
})
```

> 委托事件位于事件列表的最前面，所以先执行

### 3.2.2. on注册事件(重点)

> jQuery1.7之后，jQuery用on统一了所有事件的处理方法。
>
> 最现代的方式，兼容**zepto**(移动端类似jQuery的一个库)，强烈建议使用。

on注册简单事件
```javascript
// 表示给$(selector)绑定事件，并且由自己触发，不支持动态绑定。
$(selector).on( "click", function() {});
```

on注册委托事件
```javascript
// 表示给$(selector)绑定代理事件，必须是它的内部元素span才能触发这个事件，支持动态绑定
$(selector).on( "click","span", function() {});
```

on注册事件的语法：
```javascript
// 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）
// 第二个参数：selector, 执行事件的后代元素(可选)，如果没有后代元素，那么事件将有自己执行。
// 第三个参数：data，传递给处理函数的数据(可选)，事件触发的时候通过event.data来使用（不常使用）
// 第四个参数：handler，事件处理函数
$(selector).on(events[,selector][,data],handler);
```

### 3.2.3. 事件解绑

> unbind方式（不用）

```javascript
$(selector).unbind(); //解绑所有的事件
$(selector).unbind("click"); //解绑指定的事件
```

> undelegate方式（不用）

```javascript
$( selector ).undelegate(); //解绑所有的delegate事件
$( selector).undelegate( “click” ); //解绑所有的click事件
```

> **off** 方式（推荐）

```javascript
// 解绑匹配元素的所有事件
$(selector).off();
// 解绑匹配元素的所有click事件
$(selector).off("click");
```

### 3.2.4. 触发事件

`trigger()方法`

```javascript
$(selector).click(); //触发 click事件
$(selector).trigger("click");
```

### 3.2.5. jQuery事件对象

jQuery事件对象其实就是js事件对象的一个封装，处理了兼容性。
```javascript
screenX和screenY	对应屏幕最左上角的值
clientX和clientY	距离页面左上角的位置（忽视滚动条）
pageX和pageY	距离页面最顶部的左上角的位置（会计算滚动条的距离）

event.keyCode	按下的键盘代码
event.data	存储绑定事件时传递的附加数据

event.stopPropagation()	阻止事件冒泡行为
event.preventDefault()	阻止浏览器默认行为
return false;  既能阻止事件冒泡，又能阻止浏览器默认行为。
```

【案例：钢琴版导航（加强）.html】

## 3.3. jQuery补充知识点

### 3.3.1. 链式编程

> 通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 jQuery对象。
>
> end() 方法返回上一次操作的对象

```javascript
end(); // 筛选选择器会改变jQuery对象的DOM对象，想要回复到上一次的状态，并且返回匹配元素之前的状态。
```
【案例：五角星评分案例.html】

### 3.3.2. each方法

> jQuery的隐式迭代会对所有的DOM对象设置相同的值，但是如果我们需要给每一个对象设置不同的值的时候，就需要自己进行迭代了。

作用：遍历jQuery对象集合，为每个匹配的元素执行一个函数
```javascript
// 参数一：表示当前元素在所有匹配元素中的索引号
// 参数二：表示当前元素（DOM对象）
$(selector).each(function(index,element){});
```
【案例：不同的透明度.html】

### 3.3.3. 多库共存

> jQuery使用$作为标示符，但是如果与其他框架中的$冲突时，jQuery可以释放$符的控制权.

```javascript
var c = $.noConflict();//释放$的控制权,并且把$的能力给了c
```



# 4. jQuery第四天

## 4.1. 插件

### 4.1.1. 常用插件

> 插件：jquery不可能包含所有的功能，我们可以通过插件扩展jquery的功能。
>
> jQuery有着丰富的插件，使用这些插件能给jQuery提供一些额外的功能。

#### 4.1.1.1. jquery.color.js

> animate不支持颜色的渐变，但是使用了jquery.color.js后，就可以支持颜色的渐变了。

使用插件的步骤
```javascript
1. 引入jQuery文件
2. 引入插件（如果有用到css的话，需要引入css）
3. 使用插件

```

#### 4.1.1.2. jquery.lazyload.js

```html
//懒加载插件：出现在可视区，才去加载

<img class="lazy" data-original="../images/1.png" alt="">
<script src="jquery-1.12.4.js"></script>
<script src="jquery.lazyload.js"></script>
<script>
    $(function(){
        $(".lazy").lazyload();
    })
</script>
```

#### 4.1.1.3. jquery.ui.js插件

jQueryUI专指由jQuery官方维护的UI方向的插件。

官方API：[http://api.jqueryui.com/category/all/](http://api.jqueryui.com/category/all/)

其他教程：[jQueryUI教程](http://www.runoob.com/jqueryui/jqueryui-tutorial.html)

基本使用:

```javascript
1.  引入jQuery文件
2.  引入jQueryUI的js文件
3.  使用jQueryUI功能
```

【使用jquery.ui.js实现新闻模块的案例】

### 4.1.2. 制作jquery插件

> 原理：jquery插件其实说白了就是给jquery对象的原型增加一个新的方法，让jquery对象拥有某一个功能。 
>
> jQuery.fn = jQuery.prototype

```javascript
//通过给$.fn添加方法就能够扩展jquery对象
$.fn. pluginName = function() {};
```

【制作手风琴插件】

