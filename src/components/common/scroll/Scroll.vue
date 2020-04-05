<template>
	<div class="wrapper" ref="wrap">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script scoped>

	import BScroll from "better-scroll";

	export default {
		name: "Scroll",
		props: {
			listenScroll: {
				type: Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			},
			isBounce: {
				tyep: Boolean,
				default: true
			}
		},
		data() {
			return {
				scroll: null,
			};
		},
		mounted() {

			this.scroll = new BScroll(this.$refs.wrap, {
				click: true,
				probeType: this.listenScroll,
				pullUpLoad: this.pullUpLoad,
				//开启硬件加速
				// HWCompositing: true,
				bindToWrapper: true,
				bounce: this.isBounce,
			});

			// 监听滚动位置
			if (scroll) {
				this.scroll.on("scroll", pos => {
					this.$emit("scroll", pos);
				});
			}

			// 监听滚动到底部
			if (this.pullUpLoad) {
				this.scroll.on("pullingUp", () => {
					this.$emit("pullingUp");
				});
			}

		},
		methods: {
			scrollTo(x, y, time = 300) {
				// 防止scroll组件没加载完成
				this.scroll && this.scroll.scrollTo(x, y, time);
			},
			refresh() {
				// 防止scroll组件没加载完成
				this.scroll && this.scroll.refresh();
			},
			finishPullUp() {
				this.scroll && this.scroll.finishPullUp();
			},
			getScrollY() {
				return this.scroll ? this.scroll.y : 0;
			}
		}
	};
</script>

<style>
</style>
