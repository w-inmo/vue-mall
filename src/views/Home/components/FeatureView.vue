<template>
	<div class="feature">
		<a href="#">
			<h3 class="feature-title">本周流行</h3>
			<img src="~assets/images/feature.png" onlocd="$emit('featureLoaded')" />
		</a>
	</div>
</template>

<script>
</script>

<style>

	.feature {
		background-color: #fff;
		margin: 12px 0;
	}

	.feature .feature-title {
		text-align: center;
		line-height: 50px;
	}

	.feature img {
		width: 100%;
	}

</style>
