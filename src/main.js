import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/router';
import utils from '@/common/js';
import mock from '@/mock';            // 模拟数据

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(utils);
Vue.use(mock);

const router = new VueRouter({
 	mode: 'history',
	routes
});

/* eslint-disable no-new */
new Vue({
	router
}).$mount('#app');
