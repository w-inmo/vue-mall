<template>
	<div class="detail__bottom-bar">
		<div class="detail__bottom-bar_left iconfont">
			<div class="detail__bottom_left-item"><i class="icon-kefuwangwang"></i><p>客服</p></div>
			<div class="detail__bottom_left-item"><i class="icon-dianpu"></i><p>进店</p></div>
			<div class="detail__bottom_left-item" @click="goToShopCart"><i class="icon-icon--"></i><p>购物车</p></div>
		</div>

		<div class="detail__bottom-bar_right">
			<div class="detail__button_add-to-shop" @click="addToShop">加入购物车</div>
			<div class="detail__button_now-buy">立即购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailBottomBar",
		methods: {
			addToShop() {
				this.$emit("addToShopCart");
			},
			goToShopCart() {
				this.$router.replace("/shopping");
			}
		}

	};
</script>

<style>

	.detail__bottom-bar {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		display: flex;
		height: 50px;
		box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.1);
		padding: 0 6px;
	}

	.detail__bottom-bar_left,
	.detail__bottom-bar_right {
		flex: 1;
		display: flex;
		overflow: hidden;
		font-size: 12px;
		text-align: center;
		align-items: center;
	}

	.detail__bottom_left-item {
		flex: 1;
	}

	.detail__bottom_left-item > i {
		font-size: 20px;
		font-style: normal;
	}

	.detail__bottom-bar_right {
		flex: 1.6;
	}

	.detail__button_now-buy,
	.detail__button_add-to-shop {
		flex: 1;
		height: 34px;
		line-height: 34px;
		background-image: linear-gradient(to right, #ff0844 0%, #f10844 100%);
		border-radius: 24px;
		color: #fff;
		margin-left: 6px;
	}

	.detail__button_now-buy {
		background-image: linear-gradient(to right, #f96023 0%, #f9a123 100%);
	}

</style>
