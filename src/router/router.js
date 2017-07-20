/**
 * 作者：yeshengqiang
 * 时间：2017-07-20
 * 描述：路由文件
 */
import App from '../App';

// 404
const _404 = r => require.ensure([], () => r(require('../page/404/404')), '_404');

// text
const text = r => require.ensure([], () => r(require('../page/text/text')), 'text');

export default [
    // 未匹配到则404页面
    {
        path: '*',
        component: _404
    },
    {
        path: '/',
        component: App,
        children: [
            {
            path: '',
            redirect: 'text'
            },
            {
                path: '404',
                component: _404
            },
            {
                path: 'text',
                component: text
            }
        ]
    }
];
