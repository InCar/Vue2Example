/**
 *  作者：yeshengqiang
 *  时间：2017-06-02
 *  描述：Global filters js
 */
import tool from '@/common/js/utils/tool';

// 待安装
const install = Vue => {
    // 时间filter
    Vue.filter('formatDate', function (value) {
        if (!value) return '';
        let val = new Date(+value);
        return tool.DateFormat(val, 'yyyy-MM-dd hh:mm:ss');
    });
};

export default install;