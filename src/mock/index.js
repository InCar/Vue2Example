/**
 *  作者：yeshengqiang
 *  时间：2017-06-02
 *  描述：mock
 */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// api
import login from './src/login';
import text from './src/text/text';

// apilist
const apiList = [
    login,
    text
];
// MockRun
class MockApi {
    constructor () {
        this.mockApi = new MockAdapter(axios);
    };
    static add (plugin) {
        this.handlers.push(plugin);
    };
    install () {
        MockApi.handlers.forEach(fn => {
            if (fn instanceof Function) {
                fn(this.mockApi);
            }
        });
        MockApi.handlers = [];
    };
}
// 添加静态方法
MockApi.handlers = [];
apiList.forEach(api => {
    MockApi.add(api);
});

export default new MockApi();
