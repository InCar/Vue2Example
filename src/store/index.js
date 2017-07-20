import Vue from 'vue';
import Vuex from 'vuex';
import state from '@/store/src/state';
import getters from '@/store/src/getters';
import actions from '@/store/src/actions';
import mutations from '@/store/src/mutations';

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	strict: process.env.NODE_ENV !== 'production'
});