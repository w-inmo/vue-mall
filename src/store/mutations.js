import {
	ADD_COUNTER,
	ADD_TO_SHOP_CART,
	HIDDEN_MAIN_TABBAR,
	SHOW_MAIN_TABBAR
} from "./mutations-types.js";

export default {
	[HIDDEN_MAIN_TABBAR](state, payload) {
		state.isShowMainTabbar = false;
	},
	[SHOW_MAIN_TABBAR](state, payload) {
		state.isShowMainTabbar = true;
	},
	[ADD_COUNTER](state, product) {
		++product.count;
	},
	[ADD_TO_SHOP_CART](state, newProduct) {
		state.shopCart.push(newProduct);
	}
};
