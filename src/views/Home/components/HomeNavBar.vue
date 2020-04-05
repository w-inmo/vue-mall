<template>
	<nav-bar class="home-nav">
		<div slot="nav-left">RE</div>
		<input type="text" slot="nav-center" class="home-search" placeholder="输入搜索的内容">
		<div slot="nav-right">FR</div>
	</nav-bar>
</template>

<script>
	import NavBar from "components/common/navBar/NavBar";

	export default {
		name: "HomeNavBar",
		components: {
			NavBar,
		}
	};
</script>

<style>

	.home-search {
		outline: none;
		background-color: #fff;
		border-radius: 4px;
		border: none;
		line-height: 26px;
		width: 100%;
		font-size: 12px;
		text-indent: 4px;
	}

</style>
