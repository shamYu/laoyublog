### 1.在webpack.dev.config.js 配置

```
module.exports = merge(webpackBaseConfig, {
    devtool: '#source-map',
    .....
    .....
    //设置跨域代理
    devServer: {
        proxy: {
            //匹配代理的url
            '/src': {
            // 请求的后台服务器地址
              target: 'http://172.16.10.187:8787',
              //路径重写
              pathRewrite: {'^/src' : '/'},
              changeOrigin : true //允许跨域
            }
         }
    }
});
```

### 2.Login.vue

```
import  Axios  from 'axios'
        Axios({
                method:'post',
                url:'/src/api/client/auth',   //这个src就是webpack.dev.config.js配置的src
                data:{
                    app_id:'bsmart.app.service',
                    refresh:refresh
                }
            }).then((res) =>{
                if(res.data.code == 1){
                    resolve(res.data)
                }else{
                    reject(res.data)
                } 
            })
```

