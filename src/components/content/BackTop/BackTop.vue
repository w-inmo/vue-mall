<template>
	<div class="back-top">Top</div>
</template>

<script>
	export default {
		name: "BackTop",
	};
</script>

<style>

	.back-top {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: #fff;
		color: #BD2C00;
		font-size: 14px;
		position: absolute;
		bottom: 80px;
		right: 10px;
		z-index: 999;
		text-align: center;
		line-height: 36px;
		font-weight: bold;
		box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}
</style>
