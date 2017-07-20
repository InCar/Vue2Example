/**
 *  作者：yeshengqiang
 *  时间：2017-06-02
 *  描述：tool js
 */

// 常用方法
// const hasOwn = Object.prototype.hasOwnProperty;
// const toString = Object.prototype.toString;
// const coreType = {
// 	core_obj: '[object Object]',
// 	core_fn: '[object Function]',
// 	core_array: '[object Array]',
// 	core_num: '[object Number]',
// 	core_str: '[object String]',
// 	core_bool: '[object Boolean]'
// };

/**
 * 设置cookie
 */
const setCookie = (name, value) => {
    var Days = 7;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
};

/**
 * 获取cookie
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
const getCookie = (name) => {
	if (document.cookie.length > 0) {
	  	let start = document.cookie.indexOf(name + '=');
	  	if (start !== -1) {
		    start = start + name.length + 1;
		    let end = document.cookie.indexOf(';', start);
		    if (end === -1) {
		    	end = document.cookie.length;
		    }
		    return unescape(document.cookie.substring(start, end));
	    }
	}
	return '';
};

/**
 * 存储localStorage/sessionStorage
 */
const setStore = (name, content, deep) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	if (deep) {
		window.localStorage.setItem(name, content);
	} else {
		window.sessionStorage.setItem(name, content);
	}
};

/**
 * 获取localStorage/sessionStorage
 */
const getStore = (name, deep) => {
	if (!name) return;
	if (deep) {
		return window.localStorage.getItem(name);
	} else {
		return window.sessionStorage.getItem(name);
	}
};

/**
 * 删除localStorage/sessionStorage
 */
const removeStore = (name, deep) => {
	if (!name) return;
	if (deep) {
		window.localStorage.removeItem(name);
	} else {
		window.sessionStorage.removeItem(name);
	}
};

/**
 * 格式化日期
 * @param  {[type]} fmt [description]
 * @return {[type]}     [description]
 */
const DateFormat = (str, fmt) => {
    let o = {
        'M+': str.getMonth() + 1,
        'd+': str.getDate(),
        'h+': str.getHours(),
        'm+': str.getMinutes(),
        's+': str.getSeconds(),
        'q+': Math.floor((str.getMonth() + 3) / 3),
        'S': str.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (str.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (let k in o) {
    	if (new RegExp('(' + k + ')').test(fmt)) {
    		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    	}
    }
    return fmt;
};

// 函数节流
const throttle = (idea, action) => {
    let last = 0;
    return function () {
        let now = +new Date();
        if (now - last > idea) {
            action && action.apply(this, arguments);
            last = now;
        }
    };
};

// 函数防抖
const debounce = (idea, action) => {
    let timer = null;
    return function () {
        let that = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            action && action.apply(that, args);
        }, idea);
    };
};

// extend
const extend = (target, source) => {
    for (let attr in source) {
        target[attr] = source[attr];
    }
    return target;
};

// deepCopy
const deepCopy = (obj, cache = []) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const hit = find(cache, c => c.original === obj);
    if (hit) {
        return hit.copy;
    }

    const copy = Array.isArray(obj)
                    ? []
                    : {};
    cache.push({
        original: obj,
        copy
    });

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache);
    });
    return copy;
};

// 抛出
export default {
    setCookie,
    getCookie,
    setStore,
    getStore,
    removeStore,
    DateFormat,
    throttle,
    debounce,
    extend,
    deepCopy
};