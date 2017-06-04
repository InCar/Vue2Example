/**
 *  作者：yeshengqiang
 *  时间：2017-06-02
 *  描述：Global directive js
 */
import tool from '@/common/js/utils/tool';

const install = Vue => {
    // 自动高度
	Vue.directive('autoHeight', {
		bind: (el, binding) => {
			Vue.nextTick(() => {
				// 防止闪烁
				setTimeout(() => {
					let disH = document.documentElement.clientHeight || document.body.clientHeight;
					el.style.height = disH - binding.value + 'px';
				}, 0);
				window.addEventListener('resize', tool.debounce(500, (ev) => {
					let disH = document.documentElement.clientHeight || document.body.clientHeight;
					el.style.height = disH - binding.value + 'px';
				}), false);
			});
		}
	});

	// 后退
	Vue.directive('goBack', {
		bind: (el, binding) => {
			el.addEventListener('click', () => {
				window.history.back(-1);
			}, false);
		}
	});
};

export default install;