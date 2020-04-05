<template>
	<div class="detail-evaluate">
		<span>宝贝评价</span>
		<span>全部信息</span>
	</div>
</template>

<script>
	export default {
		name: "DetailEvaluate",
		props: {
			evaluate: {
				type: String,
				default: null
			}
		}
	};
</script>

<style>

	.detail-evaluate {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		background-color: #fff;
		padding: 10px;
	}

</style>
