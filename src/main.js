/**
 * 作者：yeshengqiang
 * 时间：2017-07-20
 * 描述：入口文件
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/router';
import store from './store/';
import core from '@/js/core';       // 公共指令及filter

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(core);

const router = new VueRouter({
 	mode: 'history',
	routes,
	strict: process.env.NODE_ENV !== 'production'
});

// 路由未登录拦截
router.beforeEach((to, from, next) => {
  let info = Vue._hyTool.getStore('loginInfo') || 1;
  if (to.path !== '/login' && !info) {
  	alert('暂无登录信息, 请登录');
  	next({
	    path: '/login'
	  });
  } else {
      next();
  }
});

/* eslint-disable no-new */
new Vue({
	router,
	store
}).$mount('#app');
