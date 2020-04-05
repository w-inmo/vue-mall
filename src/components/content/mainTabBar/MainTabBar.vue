<template>
	<tab-bar>
		<tab-bar-item path="/home">
			<i class="iconfont icon-home" slot="item-icon"></i>
			<p slot="item-text">首页</p>
		</tab-bar-item>

		<tab-bar-item path="classify">
			<i class="iconfont icon-kinds"  slot="item-icon"></i>
			<p slot="item-text">分类</p>
		</tab-bar-item>

		<tab-bar-item path="/shopping">
			<i class="iconfont icon-ai-cart" slot="item-icon"></i>
			<p slot="item-text">购物车</p>
		</tab-bar-item>

		<tab-bar-item path="/profile">
			<i class="iconfont icon-wode" slot="item-icon"></i>
			<p slot="item-text">我的</p>
		</tab-bar-item>
	</tab-bar>
</template>

<script>

	import TabBar from "components/common/tabBar/TabBar";
	import TabBarItem from "components/common/tabBar/TabBarItem";

	export default {
		name: "MainTabBar",
		components: {
			TabBar,
			TabBarItem
		}
	};

</script>

<style>
</style>
