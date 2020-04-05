<template>
	<div id="detail" class="detail">
		<detail-nav-bar class="detail-navbar" ref="detailNavbar" @titleClick="titleClick" />
		<scroll class="content" :listenScroll="3" @scroll="contentScroll" ref="scroll">
			<detail-swiper :top-images="detailData.banner" ref="swiper" />
			<detail-buy-info :buy_info="buyInfo"/>
			<detail-store-info :store-info="detailData.seller" />
			<detail-item-params @click.native="isShowCover = true" />
			<detail-evaluate ref="evaluate" />
			<detail-item-info
				:images="detailData.content"
				@detailImageLoaded="detailImageLoaded"
				ref="itemInfo"
			/>
			<detail-recommend-list :recommend="detailData.recommend" ref="recommend" />
		</scroll>
		<detail-bottom-bar @addToShopCart="addToShopCart" />
		<back-top @click.native="backClick" v-show="isShowToTop" />
		<detail-cover
			v-show="isShowCover"
			@hiddenCover="isShowCover = false"
			 :coverData="detailData.detail" />
	</div>
</template>

<script>

	import DetailNavBar from "./Components/DetailNavBar";
	import DetailSwiper from "./Components/DetailSwiper";
	import DetailBuyInfo from "./Components/DetailBuyInfo";
	import DetailStoreInfo from "./Components/DetailStoreInfo";
	import DetailItemInfo from "./Components/DetailItemInfo";
	import DetailRecommendList from "./Components/DetailRecommendList";
	import DetailItemParams from "./Components/DetailItemParams";
	import DetailEvaluate from "./Components/DetailEvaluate";
	import DetailBottomBar from "./Components/DetailBottomBar";
	import DetailCover from "./Components/DetailCover";

	import BackTop from "components/content/BackTop/BackTop";
	import Scroll from "components/common/scroll/Scroll";

	import { backTopMixin } from "common/mixin.js";

	import getDetail from "network/detail.js";

	import { mapActions } from "vuex";

	export default {
		name: "Detail",
		mixins: [backTopMixin],
		data() {
			return {
				detailData: {},
				swiperHeight: 0,
				themePos: [0],
				id: null,
				isShowCover: false
			};
		},
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBuyInfo,
			DetailStoreInfo,
			Scroll,
			DetailItemInfo,
			DetailRecommendList,
			DetailItemParams,
			BackTop,
			DetailEvaluate,
			DetailBottomBar,
			DetailCover
		},
		created() {
			this.id = this.$route.query.id;

			getDetail(this.id).then( res => {
				this.detailData = res;
				this.$refs.swiper.onDataLoaded();

				this.swiperHeight = this.$refs.swiper.curWidth;
			});
		},
		computed: {
			buyInfo() {
				return {
					title: this.detailData.title,
					price: this.detailData.price,
					success: this.detailData.success
				};
			}
		},
		methods: {

			...mapActions(["addShopCart"]),

			contentScroll(pos) {
				if (pos.y >= -this.swiperHeight && pos.y <= 0) {
					this.getShowOpc(pos.y);
				}

				let temp = parseInt(-pos.y + this.$root.navbarHeight);
				if (temp < this.themePos[1]) {
					this.$refs.detailNavbar.setCurIndex(0);
				} else if (temp < this.themePos[2]) {
					this.$refs.detailNavbar.setCurIndex(1);
				} else if (temp < this.themePos[3]) {
					this.$refs.detailNavbar.setCurIndex(2);
				} else if (temp > this.themePos[3]) {
					this.$refs.detailNavbar.setCurIndex(3);
				}

				this.isShowToTop = pos.y < -1000;
			},
			detailImageLoaded() {
				this.$refs.scroll.refresh();

				this.themePos.push(this.$refs.evaluate.$el.offsetTop);
				this.themePos.push(this.$refs.itemInfo.$el.offsetTop);
				this.themePos.push(this.$refs.recommend.$el.offsetTop);
			},
			titleClick(index) {
				this.$refs.scroll.scrollTo(0, -this.themePos[index] + this.$root.navbarHeight);
				if (index > 0) {
					this.$refs.detailNavbar.changNavbar(1);
				}
			},
			getShowOpc(scrollVal) {
				this.$refs.detailNavbar.changNavbar(-Math.round((scrollVal/this.swiperHeight) * 100) / 100);
			},
			addToShopCart() {

				// 使用混入方法
				this.addShopCart({
					id: this.id,
					title: this.detailData.title,
					price: this.detailData.price * 1,
					image: this.detailData.banner[0],
					seller: this.detailData.seller.title,
					isChecked: true
				}).then( res => {
					this.$toast.show(res, 2000);
				});

				// this.$store.dispatch("addShopCart", {});
			}
		}
	}

</script>

<style scoped>

	.detail {
		height: 100vh;
		overflow: hidden;
	}

	.content {
		height: calc(100% - 46px);
	}

	.detail-navbar {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 99;
	}

</style>
