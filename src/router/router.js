import App from '../App';

// 测试
const text = r => require.ensure([], () => r(require('../page/text/text')), 'text');

export default [{
    path: '/',
    component: App, // 顶层路由，对应index.html
    children: [ // 二级路由。对应App.vue
        // 重定向
        {
          path: '',
          redirect: '/text'
        },
        // text
        {
            path: '/text',
            component: text
        }
    ]
}];