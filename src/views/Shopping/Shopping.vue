<template>
	<div class="shopping">
		<nav-bar>
			<div slot="nav-center">购物车 ({{ products.length }})</div>
		</nav-bar>
		<scroll class="content">
			<product v-for="(product, index) in products" :product="product" :key="index" />
		</scroll>
		<price-computed />
	</div>
</template>

<script>

	import NavBar from "components/common/navBar/NavBar";
	import Scroll from "components/common/scroll/Scroll";

	import PriceComputed from "./components/PriceComputed";
	import Product from "./components/Product";

	import { mapGetters } from "vuex";

	export default {
		name: "Shopping",
		components: {
			NavBar,
			Scroll,
			Product,
			PriceComputed
		},
		computed: {
			...mapGetters({
				length: "cartLength",
				products: "shopCart"
			}),
		},
	};

</script>

<style scoped>

	.nav-bar {
		background-color: rgb(238, 103, 126);
		color: #fff;
		overflow: hidden;
		box-shadow: 0 44px 0 56px rgb(238, 103, 126);
	}

	.shopping {
		height: 100vh;
	}

	.content {
		height: calc(100% - 110px);
		overflow: hidden;
		padding: 10px;
	}

	.price__computed {
		bottom: 56px;
	}

</style>
