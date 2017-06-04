/**
 *  作者：yeshengqiang
 *  时间：2017-06-02
 *  描述：mock login
 */
import Mock from 'mockjs';

let data = Mock.mock({
                'number|1-100': 100
            });
const install = (mockApi) => {
    mockApi.onPost('/users').reply(200, {
        users: [
            data
        ]
    });
};

export default install;
