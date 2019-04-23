# 自定义指令“myComponent”

```js
  app.directive("myComponent",function(){
      return{
          restrict:'AE',
          scope:{
              sendMsg:'&'
          },
          templateUrl:'<div><textarea ng-model="content"></textarea><button ng-click="clicked()">提交</button></div>',
          link:function(scope,elemt,attr){
              scope.clicked = function(){
                  scope.sendMsg({msg:'this is my message'})
              }
          }
      }
  })
```
# 控制器里面的方法

```js
app.controller("myCtrl",function($scope){
 $scope.send=function(msg){
 console.log("message: "+msg);
  }
}
```

# 页面调用

```html
<my-component send-msg="send(msg)"></my-component>

```
# 关键点 
- 指令模板中的scope.sendMsg({msg:content})" 参数{msg:content}必须是一个键值对，键为：方法参数名 ，值为：传递的内容

