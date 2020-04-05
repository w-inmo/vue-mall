<template>
	<div class="item-params">
		<span>商品参数</span>
		<span>详情</span>
	</div>
</template>

<script>
	export default {
		name: "DetailItemParams",
		props: {
			params: {
				type: Object,
				default() {return {}}
			}
		}
	};
</script>

<style>

	.item-params {
		width: 100%;
		padding: 10px;
		margin-top: 10px;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
	}

</style>
