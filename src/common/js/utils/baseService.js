/**
 *  作者：yeshengqiang
 *  时间：2017-06-04
 *  描述：基于baseService
 *  get: {method: 'GET'},
 *	save: {method: 'POST'},
 *	query: {method: 'GET'},
 *	update: {method: 'PUT'},
 *	remove: {method: 'DELETE'},
 *	delete: {method: 'DELETE'}
 */

// 封装axios
import Vue from 'vue';

// 定义快捷请求方式
const methodList = {
    opt: ['get', 'head', 'delete'],
    payload: ['save', 'update', 'patch']
};

// 常用配置
const defaultMethod = {
    get: 'get',
    delete: 'delete',
    head: 'head',
    save: 'post',
    update: 'put',
    patch: 'patch'
};

// baseSer
const baseSer = (method, url, options) => {
    let config = {
        method: defaultMethod[method.toLowerCase()] || 'get'
    };
    if (options) {
        config = Vue._hyTool.extend(config, options);
    }
    let res = Vue.$http(url, config);
    return res;
};

// 导出service
export const baseService = (method, url, fnSuccess, fnFail, opt, payload) => {
    if (methodList.opt.some(item => item === method)) {
    	baseSer(method, url, {params: opt}).then((response) => {
			console.log(response);
			// if (response.errorInfo === null) {
			// 	fnSuccess && fnSuccess(response);
			// } else {
			// 	fnFail && fnFail(response.errorInfo);
			// }
		}).catch(function (error) {
            fnFail && fnFail(error);
        });
    } else if (methodList.payload.some(item => item === method)) {
        baseSer(method, url, {params: opt, data: payload}).then((response) => {
            console.log(response);
			// if (response.errorInfo === null) {
			// 	fnSuccess && fnSuccess(response);
			// } else {
			// 	fnFail && fnFail(response.errorInfo);
			// }
		}).catch(function (error) {
            fnFail && fnFail(error);
        });
    }
};