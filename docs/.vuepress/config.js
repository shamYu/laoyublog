module.exports = {
    title: '老余教你写前端', 
    description: '老余的博客',
    head:[
        
    ],
    themeConfig: {
     nav: [
         { text: 'Home', link: '/' },
         { text: 'Vue', link: '/vue/' },
         { text: 'Node', link: '/node/'},
         { text: 'React', link: '/react/' },
         { text: 'Javascript', link: '/js/' },
         { text: 'Github', link: 'https://www.github.com/shamYu' }
     ],
     sidebar:{
        '/vue/' : [
            ['','vue'],
            ['vue_1','iview跨域问题'],
            ['vue_2','uniapp']
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
        '/js/' : [
            ['','js'],
            ['js_1','es5实现Promise'],
            ['js_2','js_2']
        ]
     },
     sidebarDepth: 2,
     lastUpdated: 'Last Updated'
 }
}