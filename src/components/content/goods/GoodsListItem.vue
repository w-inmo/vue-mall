<template>
	<li class="goods-list-item" @click="itemClick">
		<div  class="item-image">
			<img v-lazy="goodsItem.image" @load="imageLoad"/>
		</div>
		<div class="list-item-desc">
			<p>{{ goodsItem.title }}</p>
			<span class="desc-price">￥{{goodsItem.price}}</span>
			<span class="desc-collect">star: {{goodsItem.collection}}</span>
		</div>
	</li>
</template>

<script>
import { log } from 'util';
	export default {
		props: {
			goodsItem: {
				type: Object,
				default() {
					return {};
				}
			}
		},
		methods: {
			imageLoad() {
				if(this.$route.path.indexOf("/home") !== -1) {
					this.$bus.$emit("homeRecommendImageLoaded");
				}
			},
			itemClick() {
				// this.$store.commit("hiddenMainTabbar");
				this.$router.push({
					path: "/detail",
					query: {
						id: this.goodsItem.id
					}
				});
			}
		}
	};
</script>

<style>
	.goods-list-item {
		width: 48%;
		background-color: #fff;
		border-radius: 10px;
		overflow: hidden;
		margin-bottom: 10px;
		box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
		max-width: 170px;
	}

	.goods-list-item .item-image {
		width: 100%;
		height: 260px;
		text-align: center;
		overflow: hidden;
	}

	.item-image img {
		/* width: 100%; */
		height: 100%;
	}

	.goods-list-item .list-item-desc {
		padding: 6px;
	}

	.list-item-desc p {
		font-size: 12px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		margin-bottom: 4px;
	}

	.list-item-desc .desc-price {
		font-size: 14px;
		color: #BD2C00;
		display: inline-block;
		width: 50%;
	}

	.list-item-desc .desc-collect {
		font-size: 12px;
		color: #333;
		display: inline-block;
		width: 50%;
		text-align: right;
	}

</style>
