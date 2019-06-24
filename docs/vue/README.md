### vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的.
```js

    const  Observe = function(data){
     if(data && typeof data !== 'object'){
          return
     }
     //取出所有属性，进行便利
      Object.keys(data).forEach(function(key){
          defineReactive(data,key,data[key])
      })
    }
    
    function defineReactive(data,key,val){
        //递归办理监听子属性
        var dep = new Dep();
        Observe(val)
        Object.defineProperty(data,key,{
               enumerable: true, // 可枚举
               configurable: false, // 不能再define
               get:function(){
                    // 由于需要在闭包内添加watcher，所以通过Dep定义一个全局target属性，暂存watcher, 添加完移除
                    Dep.target && Dep.addDep(Dep.target)
                    return val
               },
               set:function(newVal){
                    if(val === newVal) return
                    val = newVal;
                    dep.notify(); //通知所有订阅者
               }
        })
    }
    
    
    function Dep(){
        this.subs = [];
    }
    Dep.prototype = {
        addSub:function(sub){
            //添加订阅者信息
            this.subs.push(sub)
        },
        notify:function(){
          //视图更新
            this.subs.forEach(function(sub){
                sub.update()
            })
        }
    }

```