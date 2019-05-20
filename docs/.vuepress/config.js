module.exports = {
    title: '老余的博客', 
    description: 'Welcome to My VuePress site',
    head:[
        
    ],
    themeConfig: {
     nav: [
         { text: 'Home', link: '/' },
         { text: 'Vue', link: '/vue/' },
         { text: 'Node', link: '/node/'},
        //  { text: 'React', link: '/react/' },
         { text: 'Angular', link: '/angular/' },
         { text: 'Javascript', link: '/js/' },
         { text: 'Github', link: 'https://www.github.com/shamYu' }
     ],
     sidebar:{
        '/vue/' : [
            ['','vue'],
            ['vue_1','iview跨域问题'],
            ['vue_2','uniapp'],
            ['vue_3','vue3.0配置vue.config.js'],
            ['vue_4','vvue-cli3.0多页面打包']
        ],
        '/node/' : [
            ['','node'],
            ['node_1','快速开始'],
            ['node_1','配置']
        ],
        '/react/' : [
            ['','react'],
            ['react_1','快速开始'],
            ['react_2','配置']
        ],
         '/angular/':[
             ['','angularJS自定义directive之带参方法&传递']
         ],
        '/js/' : [
            ['','es5实现Promise']
            // ['js_1','js_1'],
            // ['js_2','js_2']
        ]
     },
     sidebarDepth: 2,
     lastUpdated: 'Last Updated'
 }
}