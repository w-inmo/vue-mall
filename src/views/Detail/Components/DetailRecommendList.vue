<template>
	<div>
		<div class="goods-list-title">推荐商品</div>
		<goods-list :goods="recommend" />
	</div>
</template>

<script>

	import GoodsList from "components/content/goods/GoodsList";

	export default {
		name: "DetailRecommendList",
		props: {
			recommend: {
				type: Array,
				default() { return [] }
			}
		},
		components: {
			GoodsList
		}
	};
</script>

<style>
	.goods-list-title {
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background-color: none;
	}
</style>
