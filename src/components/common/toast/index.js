import Toast from "./Toast";

const toast  = {
	install(Vue) {

		// 创建组件构造器
		const ToastConstructor =  Vue.extend(Toast);
		// 创建组件对象
		const toast = new ToastConstructor();
		// 挂载到元素上
		toast.$mount(document.createElement("div"));
		// 把元素添加到页面
		document.body.appendChild(toast.$el);

		Vue.prototype.$toast = toast;
	},
};

export default toast;
