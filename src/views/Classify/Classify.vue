<template>
	<div>
		<nav-bar class="home-nav">
			<div slot="nav-center">分类</div>
		</nav-bar>
	</div>
</template>


<script>

	import NavBar from "components/common/navBar/NavBar.vue";

	export default {
		name: "Classify",
		components: {
			NavBar,
		}
	};

</script>

<style>

	.home-nav {
		background-color: rgb(238, 103, 126);
		color: #fff;
	}

</style>
