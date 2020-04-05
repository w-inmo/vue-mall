<template>
	<div id="detail_item_info" >
		<div class="item-info-title">商品详情</div>
		<ul class="detail-image-wrap">
			<li v-for="(item, index) in images" :key="index">
				<img :src="item" alt="" class="detail-image" @load="imageLoaded">
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "DetailItemInfo",
		data() {
			return {
				imageLoadedCount: 0
			};
		},
		props: {
			images: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		methods: {
			imageLoaded() {
				if (++this.imageLoadedCount === this.images.length) {
					this.$emit("detailImageLoaded");
				}
			}
		}
	};
</script>

<style scoped>
	.detail-image {
		width: 100%;
		display: block;
	}
	
	.item-info-title {
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background-color: none;
	}
</style>
