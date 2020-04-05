import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

Vue.use(Vuex);

const state = {
	isShowMainTabbar: true,
	shopCart: []
};

const store = new Vuex.Store({
	state,
	// mutations 职责尽量单一
	mutations,
	// actions 处理逻辑
	actions,
	getters,
});

export default store;
