<template>
	<li class="swiper-item">
		<slot></slot>
	</li>
</template>

<script>
	export default {
		name: "SwiperItem",
	};
</script>

<style>

	.swiper .swiper-item {
		flex: 1;
		/* height: 200px; */
		overflow: hidden;
	}

	.swiper-item > *{
		width: 100%;
		/* height: 100%; */
		display: block;
	}

</style>
