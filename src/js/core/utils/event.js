/**
 *  作者：yeshengqiang
 *  时间：2017-06-02
 *  描述：eventCom js
 */
'use strict';

/* eslint no-shadow-restricted-names: 0 */
const _hyEvent = (function (global, undefined) {
    const _hyEventCom = (ev) => {
        ev = ev || global.event;

        // 兼容滑轮事件
        let type = event.type;
        if (type === 'DOMMouseScroll' || type === 'mousewheel') {
            ev.delta = (ev.wheelDelta)
                            ? ev.wheelDelta / 120
                            : -(ev.detail || 0) / 3;
        }

        // 兼容获取元素
        if (ev.srcElement && !ev.target) {
            ev.target = ev.srcElement;
        }

        // 兼容默认事件
        if (!ev.preventDefault && ev.returnValue !== undefined) {
            ev.preventDefault = function () {
                ev.returnValue = false;
            };
        }

        // 兼容冒泡事件
        if (!ev.stopPropagation && ev.cancelBubble !== undefined) {
    		ev.stopPropagation = function () {
				ev.cancelBubble = true;
			};
        }

        return ev;
    };
    return _hyEventCom;
}.call(window));

export default {
    _hyEvent
};