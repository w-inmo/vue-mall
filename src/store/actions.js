export default {
	addShopCart({state, commit}, payload) {
		return new Promise((resolve, reject) => {
			let product = state.shopCart.find(item => item.id === payload.id);
			if (product) {
				commit("addCounter", product);
				resolve("商品数量 + 1");
			} else {
				payload.count = 1;
				commit("addToShopCart", payload);
				resolve("添加新商品");
			}
		});
	}
};
