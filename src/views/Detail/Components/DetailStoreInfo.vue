<template>
	<div id="store_info" class="store-info" v-if="Object.keys(storeInfo).length !== 0">
		<div class="store-wrap">
			<div class="store-info-wrap">
				<div class="store-logo">
					<img :src="storeInfo.logo" alt="">
				</div>
				<div class="store-title">
					<h3>{{ storeInfo.title }}</h3>
					<div class="store-star-wrap">
						<i class="iconfont icon-tianmaotmall"></i>
						<span class="store-star">综合体验指数: 5</span>
					</div>
				</div>
			</div>
			<div class="store-goto">
				<div class="store-all">全部宝贝</div>
				<div class="store-to">进店逛逛</div>
			</div>
		</div>
		<div class="store-score">
			<p class="store-scpt">
				<span class="store-scpt-text">宝贝描述</span>
				<span class="store-scpt-score"> {{ storeInfo.description }} </span>
				<span class="store-scpt-level">{{ getLevel(storeInfo.description) }}</span>
			</p>
			<p class="store-service">
				<span class="store-scpt-text">卖家服务</span>
				<span class="store-scpt-score"> {{ storeInfo.service }} </span>
				<span class="store-scpt-level">{{ getLevel(storeInfo.service) }}</span>
			</p>
			<p class="store-express">
				<span class="store-scpt-text">物流服务</span>
				<span class="store-scpt-score"> {{ storeInfo.express }} </span>
				<span class="store-scpt-level">{{ getLevel(storeInfo.express) }}</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailStoreInfo",
		props: {
			storeInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			getLevel(score) {
				return score >= 4.8 ? "高" : "中";
			}
		}
	};
</script>

<style scoped>

	.store-info {
		margin-top: 10px;
		background-color: #fff;
		padding: 10px 6px;
	}

	.store-info .store-wrap {
		display: flex;
		justify-content: space-between;
		align-content: flex-start;
	}

	.store-wrap .store-info-wrap {
		display: flex;
	}

	.store-info-wrap .store-logo{
		border-radius: 8px;
		overflow: hidden;
		width: 50px;
		height: 50px;
		margin-right: 6px;
	}

	.store-info-wrap .store-logo img {
		width: 100%;
	}

	.store-info-wrap .store-title {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.store-info-wrap .store-title h3 {
		font-size: 14px;
		font-weight: 400;
		text-align: left;
		line-height: 20px;
	}

	.store-title .store-star-wrap {
		display: flex;
		font-size: 12px;
	}

	.store-star-wrap .icon-tianmaotmall {
		width: 28px;
		height: 14px;
		font-size: 10px;
	}

	.store-star-wrap .store-star {
		border-radius: 8px;
		background-color: #999;
		color: #fff;
		padding: 0 4px;
	}

	.store-wrap .store-goto {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.store-wrap .store-all,
	.store-wrap .store-to {
		border-radius: 14px;
		font-size: 12px;
		text-align: center;
		padding: 4px 6px;
	}

	.store-wrap .store-all {
		margin-right: 10px;
		border: 1px solid #DF5000;
		color: #DF5000;
	}

	.store-wrap .store-to {
		background: linear-gradient(to right, #ff8100, #f12711);
		color: #fff;
	}


	.store-info .store-score {
		display: flex;
		margin-top: 10px;
		color: #666;
		font-size: 12px;
	}

	.store-info .store-score p { flex: 1;}

	.store-scpt-level {
		padding: 4px;
		display: inline-block;
		background-color: #eee;
		border-radius: 50%;
	}

	.store-score p:nth-child(3) { text-align: right; }
	.store-score p:nth-child(2) { text-align: center; }

</style>
