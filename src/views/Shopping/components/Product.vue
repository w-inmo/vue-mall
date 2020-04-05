<template>
	<div class="shopping__product">

		<!-- 商店名称 -->
		<header class="shopping__product_seller">
			<div class="shopping__checkbox">
				<i class="iconfont"
					@click="toggleCheck"
					:class="{checked: (product.isChecked)}">
				</i>
			</div>
			<div class="shopping__seller_title">
				<span class="iconfont icon-dianpu"></span>
				<h4>{{ product.seller }}</h4>
			</div>
		</header>

		<!-- 商品 -->
		<div class="shopping__product_content">
			<div class="shopping__checkbox">
				<i class="iconfont"
					@click="toggleCheck"
					:class="{checked: (product.isChecked)}">
				</i>
			</div>

			<div class="shopping__img">
				<img :src="product.image" alt="" class="shopping__product_img">
			</div>

			<div class="shopping__content_container">
				<h4 class="shopping__product_title">{{ product.title }}</h4>

				<div class="shopping__price-line">
					<div class="shopping__product_price">¥ {{ product.price }}</div>
					<div class="shopping__counter">
						<div class="shopping__counter_decrease"
							@click="countDecrease"
							:class="{disable: product.count === 1}">-</div>
						<span class="shopping__counter_count">{{ product.count }}</span>
						<div class="shopping__counter_increase" @click="countIncrease">+</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>

	// import { mapGetters } from "vuex";

	export default {
		name: "Product",
		props: {
			product: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		computed: {
			// ...mapGetters(["shopCart"]),
		},
		methods: {
			countDecrease() {
				if (this.product.count > 1) {
					--this.product.count;
				}
			},
			countIncrease() {
				++this.product.count;
			},
			toggleCheck() {
				this.product.isChecked = !this.product.isChecked;
			}
		}
	};
</script>

<style scoped>

	.disable {
		background-color: #eee;
		color: #eee;
	}

	.shopping__product {
		background-color: #fff;
		border-radius: 12px;
		padding: 6px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		margin: 10px 0;
	}

	.shopping__product .shopping__product_seller {
		display: flex;
		margin-bottom: 10px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.shopping__product_seller .shopping__seller_title {
		display: flex;
		line-height: 30px;
		overflow: hidden;
	}

	.shopping__seller_title .icon-dianpu {
		font-size: 20px;
		margin-right: 4px;
	}

	.shopping__product .shopping__product_content {
		display: flex;
		padding-bottom: 4px;
	}

	.shopping__product .shopping__checkbox {
		width: 40px;
		text-align: center;
	}

	.shopping__checkbox i{
		display: inline-block;
		width: 20px;
		height: 20px;
		position: relative;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}

	.shopping__checkbox i::before {
		content: "";
		display: inline-block;
		width: 20px;
		height: 20px;
		border: 1px solid #ccc;
		border-radius: 50%;
		position: absolute;
		top: 0;
		left: 0;
		color: transparent;
		transform: scale(1);
		transition: 0.5s ease;
	}

	.shopping__checkbox i::after {
		content: "\e615";
		display: inline-block;
		width: 20px;
		height: 20px;
		position: absolute;
		top: 0;
		left: 0;
		color: transparent;
		transition: 0.5s ease;
		transform: scale(0);
	}

	.shopping__checkbox .checked::before {
		transform: scale(0);
	}

	.shopping__checkbox .checked::after {
		color: inherit;
		transform: scale(1);
	}
	
	.shopping__product_content .shopping__img {
		width: 90px;
		height: 90px;
		margin-right: 10px;
		overflow: hidden;
	}

	.shopping__img .shopping__product_img {
		display: block;
		width: 100%;
		height: auto;
	}

	.shopping__product_content .shopping__content_container {
		flex: 1;
	}

	.shopping__content_container .shopping__product_title {
		/* 超出文本隐藏 */
		overflow: hidden;
		/* 溢出省略号显示 */
		text-overflow: ellipsis;
		/* 将对象作为弹性伸缩盒子 */
		display: -webkit-box;
		/* 设置伸缩盒子的子元素排列方式-从上到下垂直排列 */
		-webkit-box-orient: vertical;
		/* 这个属性不是css的规范属性，需要组合上面两个属性，数组代表显示的行数 */
		-webkit-line-clamp: 2;

		font-size: 14px;
		font-weight: 400;
		margin-bottom: 6px;
	}

	.shopping__content_container .shopping__price-line {
		display: flex;
		justify-content: space-between;
	}

	.shopping__price-line .shopping__product_price {
		color: #DC143C;
	}

	.shopping__price-line .shopping__counter {
		display: flex;
		margin-right: 10px;
	}

	.shopping__counter .shopping__counter_count {
		width: 40px;
		height: 20px;
		text-align: center;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		font-size: 14px;
		line-height: 18px;
	}

	.shopping__counter .shopping__counter_decrease,
	.shopping__counter .shopping__counter_increase {
		width: 30px;
		height: 20px;
		text-align: center;
		border: 1px solid #ccc;
		line-height: 18px;
	}

	.shopping__counter .shopping__counter_decrease {
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}

	.shopping__counter .shopping__counter_increase {
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}


</style>
