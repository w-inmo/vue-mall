<template>
	<div class="detail-buy iconfont">
		<h3 class="detail-price"><span class="detail-price-symbol">￥</span>{{ buy_info.price }}</h3>
		<div class="detail-title">
			<p><span class="icon-tianmaotmall"></span>{{ buy_info.title }}</p>
			<span class="detail-title-tip"><i class="icon-fenxiang"></i>分享</span>
		</div>
		<div class="detail-info">
			<span>快递: 包邮</span>
			<span>月销: {{ buy_info.success }}</span>
			<span>发货地: 广东深圳</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailBuyInfo",
		props: {
			buy_info: {
				type: Object,
				default() {return {}}
			}
		}
	};
</script>

<style>

	.detail-buy {
		background-color: #fff;
		padding: 0 6px;
		overflow: hidden;
		position: relative;
	}

	.detail-title {
		width: 100%;
		padding-right: 50px;
		word-break: break-all;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		line-height: 24px;
	}

	.detail-title-tip {
		display: block;
		padding-left: 6px;
		line-height: 20px;
		position: absolute;
		right: 0;
		top: 50%;
		background-color: #eee;
		font-size: 12px;
		transform: translateY(-50%);
		border-top-left-radius: 16px;
		border-bottom-left-radius: 16px;
	}

	.detail-price {
		font-size: 20px;
		color: orangered;
		line-height: 36px;
	}

	.detail-price-symbol {
		font-size: 14px;
	}

	.detail-info {
		font-size: 12px;
		line-height: 36px;
		display: flex;
	}

	.detail-info span { flex: 2; }
	.detail-info span:nth-child(3) { text-align: right; }
	.detail-info span:nth-child(2) { flex: 1; }

	.icon-fenxiang {
		font-size: 12px;
	}

	.icon-tianmaotmall {
		display: inline-block;
		background-color: #FF4500;
		color: #fff;
		padding: 0 4px;
		border-radius: 8px;
		margin-right: 4px;
		height: 16px;
		width: 34px;
		line-height: 16px;
	}

</style>
