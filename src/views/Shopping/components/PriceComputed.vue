<template>
	<div class="price__computed" v-if="">
		<div class="price__computed_check" @click="toggleCheck">
			<i :class="{checked: isCheckedAll}" class="iconfont"></i>
			<span>全选</span>
		</div>

		<div class="price__computed_cmp">
			<p class="price__computed_total">
				<span>总计: </span>
				<span>¥ {{ totalPrice }}</span>
			</p>
			<div class="price__computed_selttle-act" @click="buyProduct">去结算({{ curSelectCount }}件)</div>
		</div>
	</div>
</template>

<script>

	import { mapGetters } from "vuex";

	export default {
		name: "PriceComputed",
		data() {
			return {
				curSelectCount: 0
			}
		},
		methods: {
			toggleCheck() {
				// 购物车必须有东西
				if (this.shopCart.length === 0) return;

				// 取当前选中的状态的反状态
				const curState = this.isCheckedAll;
				for (let item of this.shopCart) item.isChecked = !curState;
			},
			buyProduct() {
				if (!this.curSelectCount) {
					this.$toast.show("当前没有商品选中");
				} else {
					this.$toast.show("别想了！你是买不到的...");
				}
			}
		},
		computed: {
			...mapGetters(["shopCart"]),
			isCheckedAll() {
				if (this.shopCart.length === 0) return false;

				return this.shopCart.every(item => item.isChecked);
			},
			totalPrice() {
				let count = 0;
				this.curSelectCount = 0;
				for (let item of this.shopCart) {
					if (item.isChecked) {
						if (item.count > 1) {
							count += item.price * item.count
							this.curSelectCount += item.count;
						} else {
							count += item.price;
							++this.curSelectCount;
						}
					}
				}
				return parseFloat(count).toFixed(2);
			}
		}
	};

</script>

<style scoped>

	.price__computed {
		margin: 0 auto;
		padding: 6px 0 6px 6px;
		width: calc(100% - 20px);
		height: 50px;
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		line-height: 50px;
		overflow: hidden;
		position: relative;
	}

	.price__computed_check {
		display: flex;
		align-items: center;
	}

	.price__computed_check > i{
		width: 20px;
		height: 20px;
		position: relative;
		margin-right: 6px;
		border: 1px solid #ccc;
		border-radius: 50%;
		overflow: hidden;
	}

	.price__computed_check > i::before {
		content: "\e615";
		width: 100%;
		height: 100%;
		position: absolute;
		left: 8%;
		top: -90%;
		transition: transform 0.6s ease;
		transform: scale(0);
	}

	.price__computed_check .checked::before {
		transform: scale(1);
	}

	.price__computed .price__computed_cmp {
		display: flex;
	}

	.price__computed_cmp .price__computed_total {
		margin-right: 6px;
	}

	.price__computed_total span:first-child {
		font-weight: 700;
	}

	.price__computed_total span:last-child {
		color: #DC143C;
	}

	.price__computed_selttle-act {
		background-color: #DC143C;
		color: #fff;
		padding: 0 6px;
		font-size: 14px;
	}

</style>
