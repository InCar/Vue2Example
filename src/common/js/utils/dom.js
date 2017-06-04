/**
 *  作者：yeshengqiang
 *  时间：2017-06-02
 *  描述：Dom js
 */
'use strict';

/* eslint no-shadow-restricted-names: 0 */
const _hyDom = (function (global, undefined) {
    // 添加绑定
    const addHandler = (obj, type, handler) => {
        if (obj.addEventListener) {
            // 兼容火狐
            if (type === 'mousewheel' && document.mozFullScreen !== undefined) {
                type = 'DOMMouseScroll';
            }
            obj.addEventListener(type, handler, false);
        } else if (obj.attachEvent) {
            obj.attachEvent('on' + type, handler);
        } else {
            obj['on' + type] = handler;
        }
    };

    // 取消绑定
    const removeHandler = (obj, type, handler) => {
        if (obj.removeEventListener) {
            // 兼容火狐
            if (type === 'mousewheel' && document.mozFullScreen !== undefined) {
                type = 'DOMMouseScroll';
            }
            obj.removeEventListener(type, handler, false);
        } else if (obj.attachEvent) {
            obj.detachEvent('on' + type, handler);
        } else {
            obj['on' + type] = null;
        }
    };

    // 绑定一次
    const addHandlerOnce = (obj, type, handler) => {
        let linsten = function () {
            handler && handler.apply(this, arguments);
            removeHandler(obj, type, linsten);
        };
        addHandler(obj, type, linsten);
    };

    let hyDom = {
        addHandler,
        removeHandler,
        addHandlerOnce
    };
    return hyDom;
}.call(window));

export default _hyDom;