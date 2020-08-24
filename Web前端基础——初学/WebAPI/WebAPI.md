<!-- TOC -->

- [1. Web API](#1-web-api)
  - [1.1. Web API介绍](#11-web-api介绍)
    - [1.1.1. Web API的概念](#111-web-api的概念)
    - [1.1.2. JavaScript的组成](#112-javascript的组成)
      - [1.1.2.1. ECMAScript - JavaScript的核心](#1121-ecmascript---javascript的核心)
      - [1.1.2.2. BOM - 浏览器对象模型](#1122-bom---浏览器对象模型)
      - [1.1.2.3. DOM - 文档对象模型](#1123-dom---文档对象模型)
  - [1.2. BOM](#12-bom)
    - [1.2.1. BOM的概念](#121-bom的概念)
    - [1.2.2. BOM的顶级对象window](#122-bom的顶级对象window)
    - [1.2.3. 对话框](#123-对话框)
    - [1.2.4. 页面加载事件](#124-页面加载事件)
    - [1.2.5. 定时器](#125-定时器)
      - [1.2.5.1. setTimeout()和clearTimeout()](#1251-settimeout和cleartimeout)
      - [1.2.5.2. setInterval()和clearInterval()](#1252-setinterval和clearinterval)
    - [1.2.6. location对象](#126-location对象)
      - [1.2.6.1. location对象的一些属性和方法](#1261-location对象的一些属性和方法)
      - [1.2.6.2. URL](#1262-url)
      - [1.2.6.3. location有哪些成员？](#1263-location有哪些成员)
      - [1.2.6.4. 案例](#1264-案例)
    - [1.2.7. history对象](#127-history对象)
    - [1.2.8. navigator对象](#128-navigator对象)
  - [1.3. DOM](#13-dom)
    - [1.3.1. DOM的概念](#131-dom的概念)
    - [1.3.2. 模拟文档树结构](#132-模拟文档树结构)
    - [1.3.3. DOM经常进行的操作](#133-dom经常进行的操作)
  - [1.4. 获取页面元素](#14-获取页面元素)
    - [1.4.1. 根据id获取元素](#141-根据id获取元素)
    - [1.4.2. 根据标签名获取元素](#142-根据标签名获取元素)
    - [1.4.3. 根据name获取元素](#143-根据name获取元素)
    - [1.4.4. 根据类名获取元素](#144-根据类名获取元素)
    - [1.4.5. 根据选择器获取元素](#145-根据选择器获取元素)
  - [1.5. 事件](#15-事件)
    - [1.5.1. 事件三要素](#151-事件三要素)
    - [1.5.2. 事件的基本使用](#152-事件的基本使用)
    - [1.5.3. 案例](#153-案例)
  - [1.6. 属性操作](#16-属性操作)
    - [1.6.1. 非表单元素的属性](#161-非表单元素的属性)
    - [1.6.2. 表单元素属性](#162-表单元素属性)
    - [1.6.3. 案例1](#163-案例1)
    - [1.6.4. 自定义属性操作](#164-自定义属性操作)
    - [1.6.5. 样式操作](#165-样式操作)
    - [1.6.6. 类名操作](#166-类名操作)
    - [1.6.7. 案例2](#167-案例2)
  - [1.7. 创建元素的三种方式](#17-创建元素的三种方式)
    - [1.7.1. document.write()](#171-documentwrite)
    - [1.7.2. innerHTML](#172-innerhtml)
    - [1.7.3. document.createElement()](#173-documentcreateelement)
    - [1.7.4. 性能问题](#174-性能问题)
    - [1.7.5. 案例3](#175-案例3)
  - [1.8. 节点操作](#18-节点操作)
    - [1.8.1. 节点层级](#181-节点层级)
  - [1.9. 事件详解](#19-事件详解)
    - [1.9.1. 注册/移除事件的三种方式](#191-注册移除事件的三种方式)
    - [1.9.2. 兼容代码](#192-兼容代码)
    - [1.9.3. 事件的三个阶段](#193-事件的三个阶段)
    - [1.9.4. 事件对象的属性和方法](#194-事件对象的属性和方法)
    - [1.9.5. 阻止事件传播的方式](#195-阻止事件传播的方式)
    - [阻止超链接跳转](#阻止超链接跳转)
    - [1.9.6. 常用的鼠标和键盘事件](#196-常用的鼠标和键盘事件)
  - [1.10. 特效](#110-特效)
    - [1.10.1. 偏移量](#1101-偏移量)
    - [1.10.2. 客户区大小](#1102-客户区大小)
    - [1.10.3. 滚动偏移](#1103-滚动偏移)
    - [1.10.4. 案例](#1104-案例)
  - [1.11. 附录](#111-附录)
    - [1.11.1. 元素的类型](#1111-元素的类型)

<!-- /TOC -->

# 1. Web API

## 1.1. Web API介绍

### 1.1.1. Web API的概念

浏览器提供的一套操作浏览器功能和页面元素的API(BOM和DOM)

此处的Web API特指浏览器提供的API(一组方法)，Web API在后面的课程中有其它含义

常见的浏览器提供的API的调用方式：[MDN-Web API](https://developer.mozilla.org/zh-CN/docs/Web/API)

### 1.1.2. JavaScript的组成

![1496912475691](media/1496912475691.png)

#### 1.1.2.1. ECMAScript - JavaScript的核心

定义了javascript的语法规范  
JavaScript的核心，描述了语言的基本语法和数据类型，ECMAScript是一套标准，定义了一种语言的标准与具体实现无关

#### 1.1.2.2. BOM - 浏览器对象模型

一套操作浏览器功能的API  
通过BOM可以操作浏览器窗口，比如：弹出框、控制浏览器跳转、获取分辨率等

#### 1.1.2.3. DOM - 文档对象模型

一套操作页面元素的API  
DOM可以把HTML看做是文档树，通过DOM提供的API可以对树上的节点进行操作

## 1.2. BOM

### 1.2.1. BOM的概念

BOM(Browser Object Model) 是指浏览器对象模型，浏览器对象模型提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。BOM由多个对象组成，其中代表浏览器窗口的Window对象是BOM的顶层对象，其他对象都是该对象的子对象。

我们在浏览器中的一些操作都可以使用BOM的方式进行编程处理，  
比如：刷新浏览器、后退、前进、在浏览器中输入URL等

### 1.2.2. BOM的顶级对象window

window是浏览器的顶级对象，当调用window下的属性和方法时，可以省略window  
注意：window下一个特殊的属性 `window.name`

### 1.2.3. 对话框

- alert()
- prompt()
- confirm()

### 1.2.4. 页面加载事件

- onload

```javascript
window.onload = function () {
  // 当页面加载完成执行
  // 当页面完全加载所有内容（包括图像、脚本文件、CSS 文件等）执行
}
```

- onunload

```javascript
window.onunload = function () {
  // 当用户退出页面时执行
}
```

### 1.2.5. 定时器

#### 1.2.5.1. setTimeout()和clearTimeout()

在指定的毫秒数到达之后执行指定的函数，只执行一次

```javascript
// 创建一个定时器，1000毫秒后执行，返回定时器的标示
var timerId = setTimeout(function () {
  console.log('Hello World');
}, 1000);

// 取消定时器的执行
clearTimeout(timerId);
```

#### 1.2.5.2. setInterval()和clearInterval()

定时调用的函数，可以按照给定的时间(单位毫秒)周期调用函数

```javascript
// 创建一个定时器，每隔1秒调用一次
var timerId = setInterval(function () {
  var date = new Date();
  console.log(date.toLocaleTimeString());
}, 1000);

// 取消定时器的执行
clearInterval(timerId);
```

### 1.2.6. location对象

location对象是window对象下的一个属性，使用的时候可以省略window对象  
location可以获取或者设置浏览器地址栏的URL

#### 1.2.6.1. location对象的一些属性和方法

`window.location` 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面

>- 以下是window.location的属性:

`window.location.host` 返回`主机名`和`端口号`  
`window.location.hostname` 返回`主机名`  
`window.location.pathname` 返回`当前页面的目录和文件名`  
`window.location.hash` 返回锚点部分`hash值`  
`window.location.href` 整个URL字符串(在浏览器中就是完整的地址栏),不能新打开页面，只能在当前页面跳转。location对象的toString()方法也返回这个值。  
`window.location.search` 返回URL的查询字符串。这个字符串以问号开头。  
`window.location.port` 返回URL中指定的端口号。如果URL中不包含端口号，则返回空字符串。  
`window.location.protocol` 返回页面使用的协议。通常是"http:"或"https:"。  

![location对象](media/location对象.png)

`window.open` (window对象的方法)打开一个新的浏览器窗口或查找一个已命名的窗口。
人为主动触发时候才不会被拦截。如果不是人为触发事件，高版本浏览器会拦截。  

>- 下面是window.location对象的一些方法

`location.reload()` 重新加载当前页面。默认不传参如果存在缓存会从浏览器缓存中加载；如果传入Boolean类型的true，则会强制从服务器加载。  
`location.assign()` 在浏览器的历史记录中增加一条新纪录。  
`location.replace()` 使用新URL覆盖浏览器的当前历史记录。  

`location.assign('http://www.baidu.com')`  
`location.reload()`   // 可能从浏览器缓存加载  
`location.reload(true)`   // 强制从服务器端加载  
PS：每次修改location的属性（除hash外），页面都会以新URL重新加载；  
虽然修改location.hash页面不会重新加载，但是会在浏览器中生成一条新的历史记录

#### 1.2.6.2. URL

统一资源定位符 (Uniform Resource Locator, URL)

```
URL的组成
scheme://host:port/path?query#fragment
scheme:通信协议
	常用的http,ftp,maito等
host:主机
	服务器(计算机)域名系统 (DNS) 主机名或 IP 地址。
port:端口号
	整数，可选，省略时使用方案的默认端口，如http的默认端口为80。
path:路径
	由零或多个'/'符号隔开的字符串，一般用来表示主机上的一个目录或文件地址。
query:查询
	可选，用于给动态网页传递参数，可有多个参数，用'&'符号隔开，每个参数的名和值用'='符号隔开。例如：name=zs
fragment:信息片断
	字符串，锚点.
```

#### 1.2.6.3. location有哪些成员？

- 使用chrome的控制台查看

- 查MDN [Location](https://developer.mozilla.org/zh-CN/docs/Web/API/Location)

- 成员
  - assign()/reload()/replace()
  - hash/host/hostname/search/href……

#### 1.2.6.4. 案例

解析URL中的query，并返回对象的形式

```javascript
// 解析URL中的查询字符串，以对象的形式返回
function getQuery(queryStr) {
  var query = {};
  if (queryStr.indexOf('?') > -1) {
    var index = queryStr.indexOf('?');
    queryStr = queryStr.substr(index + 1);
    var array = queryStr.split('&');
    for (var i = 0; i < array.length; i++) {
      var tmpArr = array[i].split('=');
      if (tmpArr.length === 2) {
        query[tmpArr[0]] = tmpArr[1];
      }
    }
  }
  return query;
}
console.log(getQuery(location.search));
console.log(getQuery(location.href));
```

### 1.2.7. history对象

- length 返回浏览器历史列表中的 URL 数量。  
- back() 加载 history 列表中的前一个 URL。
- forward() 加载 history 列表中的下一个 URL。
- go() 加载 history 列表中的某个具体页面。

```js
history.back()     // 相当于单击后退按钮
history.forward()  // 相当于单击前进按钮
history.go(-2)     // 相当于单击2次后退按钮
```

### 1.2.8. navigator对象

- userAgent  
返回由客户机发送服务器的 user-agent 头部的值。  
通过userAgent可以判断用户浏览器的类型

- platform  
返回运行浏览器的操作系统平台。

## 1.3. DOM

### 1.3.1. DOM的概念

文档对象模型（Document Object Model，简称DOM），是[W3C](http://baike.baidu.com/item/W3C)组织推荐的处理可扩展标志语言的标准编程接口。在网页上，组织页面（或文档）的对象被组织在一个树形结构中，用来表示文档中对象的标准模型就称为DOM。Document Object Model的历史可以追溯至1990年代后期微软与[Netscape](http://baike.baidu.com/item/Netscape)的“浏览器大战”，双方为了在[JavaScript](http://baike.baidu.com/item/JavaScript)与[JScript](http://baike.baidu.com/item/JScript)一决生死，于是大规模的赋予浏览器强大的功能。微软在网页技术上加入了不少专属事物，既有[VBScript](http://baike.baidu.com/item/VBScript)、[ActiveX](http://baike.baidu.com/item/ActiveX)、以及微软自家的[DHTML](http://baike.baidu.com/item/DHTML)格式等，使不少网页使用非微软平台及浏览器无法正常显示。DOM即是当时蕴酿出来的杰作。

DOM又称为文档树模型

![1497154623955](media/1497154623955.png)

- 文档：一个网页可以称为文档
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释等）
- 元素：网页中的标签
- 属性：标签的属性

### 1.3.2. 模拟文档树结构

![1497165666684](media/1497165666684.png)

```javascript
function Element(option) {
  this.id = option.id || '';
  this.nodeName = option.nodeName || '';
  this.nodeValue = option.nodeValue || '';
  this.nodeType = 1;
  this.children = option.children || [];
}

var doc = new Element({
  nodeName: 'html'
});
var head = new Element({
  nodeName: 'head'
});
var body = new Element({
  nodeName: 'body'
})
doc.children.push(head);
doc.children.push(body);

var div = new Element({
  nodeName: 'div',
  nodeValue: 'haha',
});

var p = new Element({
  nodeName: 'p',
  nodeValue: '段落'
})
body.children.push(div);
body.children.push(p);

function getChildren(ele) {
  for(var i = 0; i < ele.children.length; i++) {
    var child = ele.children[i];
    console.log(child.nodeName);
    getChildren(child);
  }
}
getChildren(doc);
```

### 1.3.3. DOM经常进行的操作

- 获取元素
- 动态创建元素
- 对元素进行操作(设置其属性或调用其方法)
- 事件(什么时机做相应的操作)

## 1.4. 获取页面元素

```js
// 掌握
	getElementById()
	getElementsByTagName()
// 了解
	getElementsByName()
	getElementsByClassName()
	querySelector()
	querySelectorAll()
```

案例

1.点击按钮弹出对话框  
2.点击按钮修改超链接的地址和热点文字  
3.点击(每个)图片弹出对话框  
4.点击图片设置自身宽和高  
5.点击按钮修改每个图片的title属性  
6.点击按钮显示哈哈(排他功能)  
7.点击按钮显示和隐藏div  
8.显示和隐藏二维码  
9.点击按钮修改所有p标签内容  
10.点击按钮修改所有文本框内容  
11.点击按钮切换图片  
12.点击超链接停止跳转页面  
13.点击小图显示大图  
14.美女相册  
15.点击按钮选中性别和兴趣  

### 1.4.1. 根据id获取元素

```javascript
var div = document.getElementById('main');
console.log(div);

// 获取到的数据类型 HTMLDivElement，对象都是有类型的
// HTMLDivElement <-- HTMLElement <-- Element  <-- Node  <-- EventTarget
```

注意：由于id名具有唯一性，部分浏览器支持直接使用id名访问元素，但不是标准方式，不推荐使用。

### 1.4.2. 根据标签名获取元素

```javascript
var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
  var div = divs[i];
  console.log(div);
}
```

### 1.4.3. 根据name获取元素

```javascript
var inputs = document.getElementsByName('hobby');
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  console.log(input);
}
```

### 1.4.4. 根据类名获取元素

```javascript
var mains = document.getElementsByClassName('main');
for (var i = 0; i < mains.length; i++) {
  var main = mains[i];
  console.log(main);
}
```

### 1.4.5. 根据选择器获取元素

```javascript
var text = document.querySelector('#text');
console.log(text);

var boxes = document.querySelectorAll('.box');
for (var i = 0; i < boxes.length; i++) {
  var box = boxes[i];
  console.log(box);
}
```

## 1.5. 事件

事件：触发-响应机制

Event接口表示在DOM中发生的任何事件，一些是用户生成的（例如鼠标或键盘事件），而其他由API生成。

### 1.5.1. 事件三要素

- 事件源:触发(被)事件的元素
- 事件类型:事件的触发方式(例如鼠标点击或键盘点击)
- 事件处理程序:事件触发后要执行的代码(函数形式)

### 1.5.2. 事件的基本使用

```javascript
var box = document.getElementById('box');
box.onclick = function() {
  console.log('代码会在box被点击后执行');  
};
```

### 1.5.3. 案例
- 点击按钮弹出提示框
- 点击按钮修改元素的样式

## 1.6. 属性操作

### 1.6.1. 非表单元素的属性

**`href、title、id、src、className`**

```javascript
var link = document.getElementById('link');
console.log(link.href);
console.log(link.title);

var pic = document.getElementById('pic');
console.log(pic.src);
```

案例：

点击按钮，切换img标签里的图片  
点击按钮显示隐藏div

- `innerHTML`和`innerText`

```javascript
var box = document.getElementById('box');
box.innerHTML = '我是文本<p>我会生成为标签</p>';
console.log(box.innerHTML);
box.innerText = '我是文本<p>我不会生成为标签</p>';
console.log(box.innerText);
```

- `HTML转义符`

```h
"    &quot;
‘    &apos;
&    &amp;
<    &lt;    //less than  小于
>    &gt;   // greater than  大于
空格  &nbsp;
©    &copy;
```

- innerHTML和innerText的区别  
- innerText的兼容性处理(不支持就使用 textContent)

### 1.6.2. 表单元素属性

- value 用于大部分表单元素的内容获取(option除外)
- type 可以获取input标签的类型(输入框或复选框等)
- disabled 禁用属性
- checked 复选框选中属性
- selected 下拉菜单选中属性

### 1.6.3. 案例1

- 给文本框赋值，获取文本框的值
- 点击按钮禁用文本框
- 搜索文本框
- 检测用户名是否是3-6位，密码是否是6-8位，如果不满足要求高亮显示文本框
- 设置下拉框中的选中项
- 全选反选

### 1.6.4. 自定义属性操作

- getAttribute() 获取标签行内属性
- setAttribute() 设置标签行内属性
- removeAttribute() 移除标签行内属性
- 与element.属性的区别: 上述三个方法用于`获取任意的行内属性`。

### 1.6.5. 样式操作

- 使用style方式设置的样式显示在标签行内

```javascript
var box = document.getElementById('box');
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'red';
```

- 注意  
  通过样式属性设置宽高、位置的属性类型是字符串，需要加上px

### 1.6.6. 类名操作

- 修改标签的className属性相当于直接修改标签的类名

```javascript
var box = document.getElementById('box');
box.className = 'clearfix';
```

### 1.6.7. 案例2

- 开关灯
- 点击按钮变色
- 图片切换二维码案例
- 当前输入的文本框高亮显示
- 点击按钮改变div的大小和位置
- 列表隔行变色、高亮显示
- 京东商品展示
- tab选项卡切换

## 1.7. 创建元素的三种方式

### 1.7.1. document.write()

```javascript
document.write('新设置的内容<p>标签也可以生成</p>');
// 会覆盖body的所有内容。慎用！
```

### 1.7.2. innerHTML

```javascript
var box = document.getElementById('box');
box.innerHTML = '新内容<p>新标签</p>';
```

### 1.7.3. document.createElement()

```javascript
var div = document.createElement('div');
document.body.appendChild(div);
```

### 1.7.4. 性能问题

- innerHTML方法由于会对字符串进行解析，需要避免在循环内多次使用。
- 可以借助字符串或数组的方式进行替换，再设置给innerHTML
- 优化后与document.createElement性能相近

### 1.7.5. 案例3

- 动态创建列表，高亮显示
- 根据数据动态创建表格
- 模拟百度搜索文本框

## 1.8. 节点操作

```js
// 节点操作，方法
	appendChild(newNode)   // 添加子元素
	insertBefore(newNode)  // 在前面插入元素
	removeChild(newNode)   // 移除子元素
	replaceChild(newNode,oldNode)  // 替换子元素
// 节点层次，属性
	parentNode
	childNodes
	children
	nextSibling/previousSibling
	firstChild/lastChild
```

```javascript
var body = document.body;
var div = document.createElement('div');
body.appendChild(div);

var firstEle = body.children[0];
body.insertBefore(div,firstEle);

body.removeChild(firstEle);

var text = document.createElement('p');
body.replaceChild(text, div);
```

案例：​ 权限选择

### 1.8.1. 节点层级

重点讲父子属性  

```javascript
var box = document.getElementById('box');

console.log(box.parentNode);  // 父节点
console.log(box.parentElement); // 父元素
console.log(box.childNodes);  // 子节点
console.log(box.children);    // 子元素

// 以下方法在IE中有兼容问题
console.log(box.firstChild);  // 第一个子节点
console.log(box.firstElementChild); // 第一个子元素
console.log(box.lastChild);   // 最后一个子节点
console.log(box.lastElementChild);  // 最后一个子元素
console.log(box.previousSibling);   // 前一个兄弟节点
console.log(box.previousElementSibling); // 前一个兄弟元素
console.log(box.nextSibling);   // 后一个兄弟节点
console.log(box.nextElementSibling); // 后一个兄弟元素
```

## 1.9. 事件详解

### 1.9.1. 注册/移除事件的三种方式

```javascript
var box = document.getElementById('box');
// 1:  on + 事件名
box.onclick = function () {
  console.log('点击后执行');
};
box.onclick = null;
// 2:  addEventListener()
box.addEventListener('click', eventCode, false);
box.removeEventListener('click', eventCode, false);
// 3:  attachEvent()
box.attachEvent('onclick', eventCode);
box.detachEvent('onclick', eventCode);

function eventCode() {
  console.log('点击后执行');
}
```

`事件捕获`过程要先于`事件冒泡`过程。
`addEventListener`当第三个参数设置为true就在捕获过程中执行，反之就在冒泡过程中执行处理函数。

![event](media/event.gif)

### 1.9.2. 兼容代码

```javascript
function addEventListener(element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent){
    element.attachEvent('on' + type,fn);
  } else {
    element['on'+type] = fn;
  }
}

function removeEventListener(element, type, fn) {
  if (element.removeEventListener) {
    element.removeEventListener(type, fn, false);
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, fn);
  } else {
    element['on'+type] = null;
  }
}
```

### 1.9.3. 事件的三个阶段

1. 捕获阶段

2. 当前目标阶段

3. 冒泡阶段

   事件对象.eventPhase属性可以查看事件触发时所处的阶段

### 1.9.4. 事件对象的属性和方法

- `event.type ` 获取事件类型
- `clientX`/`clientY `    所有浏览器都支持，窗口位置
- `pageX`/`pageY `      IE8以前不支持，页面位置
- `event.target` || `event.srcElement ` 用于获取触发事件的元素
- `event.preventDefault()` 取消默认行为 (如超链接跳转)

案例

- 跟着鼠标飞的天使
- 鼠标点哪图片飞到哪里
- 获取鼠标在div内的坐标

### 1.9.5. 阻止事件传播的方式

- 标准方式 `event.stopPropagation()`;
- IE低版本 event.cancelBubble = true; 标准中已废弃

### 阻止超链接跳转

- 事件处理函数 `return false`;
- 事件处理函数 `event.preventDefault()`

### 1.9.6. 常用的鼠标和键盘事件

- `onmouseup` 鼠标按键放开时触发
- `onmousedown` 鼠标按键按下触发
- `onmousemove` 鼠标移动触发
- `onkeyup` 键盘按键按下触发
- `onkeydown` 键盘按键抬起触发


## 1.10. 特效

### 1.10.1. 偏移量

- offsetParent用于获取定位的父级元素
- offsetParent和parentNode的区别

```javascript
var box = document.getElementById('box');
console.log(box.offsetParent);
console.log(box.offsetLeft);
console.log(box.offsetTop);
console.log(box.offsetWidth);
console.log(box.offsetHeight);
```

![1498743216279](media/1498743216279.png)

### 1.10.2. 客户区大小

```javascript
var box = document.getElementById('box');
console.log(box.clientLeft);
console.log(box.clientTop);
console.log(box.clientWidth);
console.log(box.clientHeight);
```

![1498743269100](media/1498743269100.png)

### 1.10.3. 滚动偏移

```javascript
var box = document.getElementById('box');
console.log(box.scrollLeft)
console.log(box.scrollTop)
console.log(box.scrollWidth)
console.log(box.scrollHeight)
```

![1498743288621](media/1498743288621.png)

### 1.10.4. 案例 

- 匀速动画函数
- 变速动画函数
- 回到顶部
- 无缝轮播图
- 模拟滚动条
- 拖拽案例
- 放大镜案例


## 1.11. 附录

### 1.11.1. 元素的类型

![1497169919418](media/1497169919418.png)