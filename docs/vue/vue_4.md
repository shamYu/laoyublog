1. 首先配置你的vue.config.js,分多少模块就配置多少个入口文件

```js
 module.exports = {
    productionSourceMap:false,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/', //生成环境下用'./',开发环境用 '/''
    pages:{
        a: {
            // page a 的入口
            entry: 'src/pages/a/main.js',
            // 模板来源
            template: 'public/a.html',
            // 在 dist/index.html 的输出
            filename: 'a.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'a Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'a']
          },
        b: {
            // page b 的入口
            entry: 'src/pages/b/main.js',
            // 模板来源
            template: 'public/b.html',
            // 在 dist/index.html 的输出
            filename: 'b.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'b Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'b']
        }     
    }
 }

```
2. 在根目录新建pages 文件夹,然后在pages目录里面新建a模块和b模块,再分别在模块里面新建你的入口文件main.js 和 你的想要打包的模块a.vue 和b.vue。
### a模块的main.js
```js
import Vue from 'vue'
import Router from '../../router'
import a from './a.vue'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
   Router, 
  render: h => h(a),
}).$mount('#a')   //这个挂在的id是挂在public目录下面的a.html里面的id

```
### a模块的a.vue
```js
<template>
  <div >
      我是pageA
  </div> 
</template>

<script>

export default {
  name: 'a'
}
</script>

<style>


```
3.  在public目录下面新建a.html,这个就是对应你的模板来源
### a.html


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>a</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but moreentrybuild doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="a"></div>
    <!-- built files will be auto injected -->
  </body>
</html>


```
4. 删除根目录下的mian.js和app.vue 
5. 启动 和 查看页面 

```js
  npm run serve //启动
  localhost:8080/a  //查看a模块页面
  localhost:8080/b  //查看b模块页面
```
6. 打包,打包好之后你会发现根目录dist目录下面有打包好的a.html和b.html

```
npm run build 

```







