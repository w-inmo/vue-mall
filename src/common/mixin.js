import BackTop from "components/content/BackTop/BackTop";

export const itemListenerMixin = {
	mounted() {
		// 执行的代码
	}
};

export const backTopMixin = {
	data() {
		return {
			isShowToTop: false,
		}
	},
	components: {
		BackTop
	},
	methods: {
		// 回到顶部
		backClick() {
			this.$refs.scroll.scrollTo(0, 0, 500);
		}
	}
};
