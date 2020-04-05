import Vue from "vue";
import App from "./App";
import router from "./router/router.js";
import store from "./store/index.js";

import fastClick from "fastclick";
import VueLazyload from "vue-lazyload";

import toast from "components/common/toast";

Vue.use(toast);
Vue.use(VueLazyload, {
	loading: require("assets/images/loading.gif")
});


Vue.config.productionTip = false;

fastClick.attach(document.body);

Vue.prototype.$bus = new Vue();

const app = new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");

app.navbarHeight = 44;
