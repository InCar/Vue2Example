/**
 *  作者：yeshengqiang
 *  时间：2017-06-02
 *  描述：mock login
 */
const install = (mockApi) => {
    mockApi.onGet('/users1').reply(200, {
        users: [
            { id: 2, name: 'John Smith1' }
        ]
    });
};

export default install;