<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>

<script>

	import TabBarItem from "./TabBarItem";

	export default {
		name: "TabBar",
		components: {
			TabBarItem,
		}

	};

</script>

<style>

	.tabbar {
		display: flex;
		position: fixed;
		bottom: 10px;
		left: 10px;
		right: 10px;
		box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
		border-radius: 6px;
		background-color: #fff;
	}

</style>
