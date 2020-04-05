<template>
	<nav class="nav-bar">
		<div class="nav-left"><slot name="nav-left"></slot></div>
		<div class="nav-center"><slot name="nav-center"></slot></div>
		<div class="nav-right"><slot name="nav-right"></slot></div>
	</nav>
</template>

<script>
	export default {
		name: "NavBar",
	};
</script>

<style>

	.nav-bar {
		display: flex;
		line-height: 44px;
		text-align: center;
		/* box-shadow: 0 0 6px rgba(0, 0, 0, 0.1); */
	}

	.nav-left,
	.nav-right {
		width: 60px;
	}

	.nav-center {
		flex: 1;
	}

</style>
