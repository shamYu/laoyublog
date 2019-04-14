## Vue无法监听到属性变化的三种情况
1. 删除对象里面的某个属性
```js
const app = new Vue({
    el:'#app',
    data() {
        userInfo: {
            name:'cherry'
        }
    },
    methods: {
        changeName () {
            delete this.userInfo.name
            //vue无法对name进行相应   get/set检测不了 
            alert(this.userInfo.name)
            //Vue提供了vm.$delete方法hack //this.$delete(this.userInfo,'name')
        }
    }
})
```
2. 修改对象的属性的值

```js
const app = new Vue({
    el:'#app',
    data() {
        userInfo: {}
    },
    created () {
        this.userInfo.name = 'mark'
        // vue无法对name进行相应因为详情已经被Observer
        // Vue提供了$set方法进行hack this.$set(this.userInfo,'name','unchange')
    }
})
```
3.修改数组下标属性的值。
  很多时候我们都会需要便利一个数组,然后还要==监听数组里面每一个对象的某个属性的值==，来判断需要显示的是哪种效果.
```html
<template>
    <div>
        <li v-click="toggleShow(index)" v-for="(item,index) in list">
            
            <div v-show="list[index].isSHow">XXX</div>
        </li>
    </div>
</template>
```
```js
//script
const app = new Vue({
    el:'#app',
    data(){
        list:[]   
    },
    created() {
        axios.get('/xxx').then(res => {
            this.list = res.list  //后台数据[{isSHow:false,name:'cherry'},{isSHow:false,name:'cherry'},{isSHow:false,name:'cherry'}]
        })
    },
    methods: {
    //点击
        toggleShow(index){
            this.list[index].isSHow = !this.list[index].isSHow
            //我想让点击当前的li，实现li下面的div显示隐藏，很明显，你会发现页面上的UI没有任何变化,根本新检测不到。
            //就算你用$watch，进行深度检测也没用.
            //这里你就只用 this.$forceUpdate()来处理页面刷新了。
        }
        
    }
})
```

