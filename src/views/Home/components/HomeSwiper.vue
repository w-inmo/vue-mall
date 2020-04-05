<template>
	<swiper v-if="isLoadPage">
		<swiper-item v-for="(item, index) in banners" :key="index">
			<img :src="item.image" @load="imageLoaded" />
		</swiper-item>
	</swiper>
</template>

<script>

	import Swiper from "components/common/swiper/Swiper";
	import SwiperItem from "components/common/swiper/SwiperItem";

	export default {
		name: "HomeSwiper",
		data() {
			return {
				isLoadPage: false,
				isImageLoaded: false
			};
		},
		components: {
			Swiper,
			SwiperItem
		},
		methods: {
			loadPage(data) {
				this.banners = data;
				this.isLoadPage = true;
			},
			imageLoaded() {
				if (!this.isImageLoaded) {
					this.$emit("swiperImageLoaded");
					this.isImageLoaded = true;
				}
			}
		}
	};

</script>

<style>

</style>
