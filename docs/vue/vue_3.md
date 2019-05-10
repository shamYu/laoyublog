# vue.config.js

##  baseUrl

- 从 Vue CLI 3.3 起已弃用，请使用==publicPath==
```js
module.exports = {
    publicPath:  process.env.NODE_ENV === 'production' ? '/power-vue-ui/' : '/'， 
}
```
- 我这边生产环境默认项目是放在在域名后面的/power-vue-ui/目录下, 默认放在根目录   "/"

## productionSourceMap
```js
    module.exports = {
        productionSourceMap : false
    }

```
## css.sourceMap
- 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
```js
    module.exports = {
        css: {
            sourceMap: false
        }
    }
```

- 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建

## devServer
- 所有[++webpck-dev-server++](https://webpack.js.org/configuration/dev-server/)的选项都支持
### devServer.proxy
- 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 ==vue.config.js== 中的 ==devServer.proxy== 选项来配置。
```js
module.exports = {
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
```
- 这会告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:4000。
#### 跨域配置 

```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',   //后台服务器地址
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'//后台服务器地址
      }
    }
  }
}

```

