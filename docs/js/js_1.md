##  css 滚动条设置

```css
.test-1::-webkit-scrollbar {/*滚动条整体样式*/
        width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
.test-1::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #535353;
    }
.test-1::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }

```
## 强制IE使用最高版本

```
//在header里面加上这一句话
<meta http-equiv="X-UA-Compatible" content="edge" />
```
## 验证是不是array
- 前提是toString（）方法没有被重写过

```js
  function isArray (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]'   
  }
```
## 手动实现new

```js
function create(){
  //创建一个空对象
  let obj = new Object();
  //获取构造函数
  let Constructor = [].shift.call(arguments);
  //链接到原型
  obj.__proto__ = Constructor.prototype;
  //绑定this值
  let result = Constructor.apply(obj,arguments);//使用apply，将构造函数中的this指向新对象，这样新对象就可以访问构造函数中的属性和方法
  //返回新对象
  return typeof result === "object" ? result : obj;//如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
}
```
## 防抖

```js
// 防抖
function debounce(fn, wait) {    
    var timeout = null;    
    return function() {        
        if(timeout !== null)   clearTimeout(timeout);        
        timeout = setTimeout(fn, wait);    
    }
}
// 处理函数
function handle() {    
    console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));
```

## 冒泡排序
==原理==
依次比较相邻的两个值，如果后面的比前面的小，则将小的元素排到前面。依照这个规则进行多次并且递减的迭代，直到顺序正确。

```js
var examplearr=[8,94,15,88,55,76,21,39];
function sortarr(arr){
    for(i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
sortarr(examplearr);
console.log(examplearr);

```
## 快速排序


```js
    var arr = [8,94,15,88,55,76,21,39]
    function quickSort (arr) {
        if(arr.length <= 1){
            return arr;
        }
    }

```
## new做了啥

对于 const a = new Foo()；
```js
const o = new Object()
o.__proto__ = Foo.prototype;
Foo.call(o)
a = o;

```







