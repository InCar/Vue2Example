/**
 *  作者：yeshengqiang
 *  时间：2017-06-01
 *  描述：service
 */

// 导入baseService
import { baseService } from '@/common/js/utils/baseService';

// text
const textApi = '/users';                                  // text           method 'POST'

/**
 * text
 * @param obj       当前作用域
 * @param fnSuccess 成功回掉
 * @return void
 */
export const getText = (opt, payload, fnSuccess, fnFail) => {
	baseService('save', textApi, fnSuccess, fnFail, opt, payload);
};
