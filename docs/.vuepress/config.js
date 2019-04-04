module.exports = {
    title: '老余教你写前端', 
    description: '老余的博客',
    head:[
        
    ],
    themeConfig: {
     nav: [
         { text: '主页', link: '/' },
         { text: 'vue', link: '/zh/home/vue' },
         { text: 'node', link: '/node' },
         { text: 'react', link: '/zh/home/react' },
         { text: 'angular', link: '/angular' },
         { text: 'vue', link: '/uniapp' },
         { text: 'Github', link: 'https://www.github.com/shamYu' }
     ],
     sidebar: [
         {
            title: '老余前端',
            collapsable: false,
            children:[
                ['/zh/home/','首页'],
                ['/zh/home/blog','博客'],
                ['/zh/home/vue','VUE'],
                ['/zh/home/react','react'],
                ['/zh/Proxy','跨域问题'],
                ['/zh/uniapp','uniapp'],
                ['/zh/Promise-es5','es5实现Promise']
            ]
         }
    ],
     sidebarDepth: 2,
     lastUpdated: 'Last Updated'
 }
}