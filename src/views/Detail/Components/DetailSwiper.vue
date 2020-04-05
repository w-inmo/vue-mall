<template>
	<div class="detail-swiper-wrap">
		<swiper v-if="isLoadedPage">
			<swiper-item v-for="(item, index) in topImages" :key="index">
				<img :src="item" alt="" />
			</swiper-item>
		</swiper>
	</div>
</template>

<script>

	import { Swiper, SwiperItem } from "components/common/swiper";

	export default {
		name: "DetailSwiper",
		data() {
			return {
				isLoadedPage: false,
				curWidth: 0
			};
		},
		props: {
			topImages: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		components: {
			Swiper,
			SwiperItem
		},
		methods: {
			onDataLoaded() {
				this.isLoadedPage = true;
			}
		},
		mounted() {
			this.curWidth = document.body.clientWidth;
			document.querySelector(".detail-swiper-wrap").style.height = this.curWidth + "px";
		}
	};

</script>

<style scoped>

	.detail-swiper-wrap {
		width: 100%;
		overflow: hidden;
	}

</style>
