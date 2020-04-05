<template>
	<div class="home">
		<home-nav-bar />
		<tab-control :titles="['流行', '新款', '精选']"
			@tabClick="tabClick"
			ref="fixedTabControl" class="fixed-tab-control" v-show="isTabFixed" />

		<scroll class="content" ref="scroll" :listenScroll="3"
				@scroll="contentScroll"
				:pull-up-load="true" @pullingUp="loadMore">
			<home-swiper ref="swiper" @swiperImageLoaded="calcCtlOffset" />
			<recommend-view :recommends="recommend" @recommendLoaded="calcCtlOffset" />
			<feature-view @featureLoaded="calcCtlOffset" />
			<tab-control :titles="['流行', '新款', '精选']"
				@tabClick="tabClick"
				ref="tabControl" />
			<goods-list :goods="showGoods" />
		</scroll>

		<back-top @click.native="backClick" v-show="isShowToTop" />

	</div>
</template>

<script>

	import TabControl from "components/common/tabControl/TabControl";
	import Scroll from "components/common/scroll/Scroll";
	import GoodsList from "components/content/goods/GoodsList";

	import RecommendView from "./components/RecommendView";
	import HomeNavBar from "./components/HomeNavBar";
	import HomeSwiper from "./components/HomeSwiper";
	import FeatureView from "./components/FeatureView";

	import { backTopMixin } from "common/mixin.js";

	import {
		getHomeMultidata,
		getHomeGoods
	} from "network/home";
	import { debounce } from "common/utils.js";

	export default {
		name: "Home",
		mixins: [backTopMixin],
		data() {
			return {
				banner: [],
				recommend: [],
				goods: {
					popular: { page: 0, list: [] },
					new: { page: 0, list: [] },
					choice: { page: 0, list: []}
				},
				goodsCurPage: "popular",
				tabOffsetTop: 0,
				isTabFixed: false,
				leaveScrollState: 0
			};
		},
		components: {
			TabControl,
			Scroll,
			GoodsList,
			RecommendView,
			HomeNavBar,
			HomeSwiper,
			FeatureView,
		},
		created() {
			this.getHomeMultidata();
			this.getHomeGoods("popular");
			this.getHomeGoods("new");
			this.getHomeGoods("choice");
		},
		mounted() {
			// 图片加载完成
			const refresh = debounce(this.$refs.scroll.refresh, 50);
			this.$bus.$on("homeRecommendImageLoaded", () => refresh());
		},
		computed: {
			showGoods() {
				return this.goods[this.goodsCurPage].list;
			}
		},
		methods: {
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banner = res.swiper;
					this.recommend = res.nav;

					this.$refs.swiper.loadPage(this.banner);
				});
			},
			// 是否显示回到顶部的的按钮
			contentScroll(pos) {
				this.isShowToTop = pos.y < -1000;
				this.isTabFixed = (-pos.y) > this.tabOffsetTop;
			},
			// 获取首页的数据
			getHomeGoods(type) {
				getHomeGoods(type)
				.then(res => {
					this.goods[type].list.push(...res);
					this.$refs.scroll.finishPullUp();
				});
			},
			// 切换显示的 tabBar
			tabClick(index) {
				console.log();
				switch (index){
					case 0: this.goodsCurPage = "popular"; break;
					case 1: this.goodsCurPage = "new"; break;
					case 2: this.goodsCurPage = "choice";
				}

				// 防止两个 tabControl 选项不统一
				this.$refs.tabControl.currentIndex = index;
				this.$refs.fixedTabControl.currentIndex = index;
			},
			// 加载更多
			loadMore() {
				this.getHomeGoods(this.goodsCurPage);
			},
			calcCtlOffset() {
				this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop - 44;
			}
		},
		activated() {
			this.$refs.scroll.refresh();
			this.$refs.scroll.scrollTo(0, this.leaveScrollState, 0);
		},
		deactivated() {
			this.$refs.scroll.refresh();
			this.leaveScrollState = this.$refs.scroll.getScrollY();

		}
	};
</script>

<style scoped>

	.home {
		/* padding-top: 44px; */
		height: 100vh;
		position: relative;
	}

	.home-nav {
		color: #fff;
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
		background-color: rgb(238, 103, 126) !important;
	}

	.space {
		width: 100%;
		height: 800px;
		background-color: transparent;
	}

	.content {
		height: calc(100% - 56px);
	}

	.fixed-tab-control {
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
		z-index: 9;
	}

</style>
