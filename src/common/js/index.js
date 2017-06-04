/**
 *  作者：yeshengqiang
 *  时间：2017-06-01
 *  描述：基于vue的扩展
 */
import axios from 'axios';

import _hyEvent from './utils/event';                             // 兼容Ev
import _hyDom from './utils/dom';                                 // 常用DOM
import _hyTool from './utils/tool';                               // 常用工具
import _hyGlobal from './constant/constant';                      // 全局常量文件
import _hyDirectives from './directives/directives';              // 全局指令文件
import _hyFilters from './filters/filters';                       // 全局过滤文件

const install = function (Vue, options = {}) {
	// 静态方法
	if (install.installed) return;
	install.installed = true;
	// axios
	Vue.prototype.$http = Vue.$http = Vue.prototype.$http || axios;
	// 工具
	Vue.prototype._hyEvent = Vue._hyEvent = Vue.prototype._hyEvent || _hyEvent;
	Vue.prototype._hyDom = Vue._hyDom = Vue.prototype._hyDom || _hyDom;
	Vue.prototype._hyTool = Vue._hyTool = Vue.prototype._hyTool || _hyTool;
	// 常量
	Vue.prototype._hyGlobal = Vue._hyGlobal = Vue.prototype._hyGlobal || _hyGlobal;
	// 指令
	Vue.use(_hyDirectives);
	// 过滤
	Vue.use(_hyFilters);
};

// 工具类
const util = {
	install
};

/**
 * 自动安装控件
 */
let GlobalVue = null;
if (window.Vue !== undefined) {
	GlobalVue = window.Vue;
} else if (global.Vue !== undefined) {
	GlobalVue = global.Vue;
}

if (GlobalVue) {
	GlobalVue.use(util);
}

export default util;