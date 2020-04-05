<template>
	<transition>
		<div class="detail__cover_bg">
			<scroll class="content" :isBounce="false">
				<h4 class="detail__cover_title">基本信息</h4>
				<ul class="detail__cover_content">
					<li v-for="(item, key, index) in coverData"
						:key="index" class="detail__cover_row">
						<p class="detail__cover_item"><span>{{ key }}</span><span>{{ item }}</span></p>
					</li>
				</ul>
			</scroll>
			<div class="detail__cover_back" @click="hiddenCover">确定</div>
		</div>
	</transition>
</template>

<script>

	import Scroll from "components/common/scroll/Scroll";

	export default {
		name: "DetailCover",
		props: {
			coverData: {
				type: Object,
			}
		},
		components: {
			Scroll,
		},
		methods: {
			hiddenCover() {
				this.$emit("hiddenCover");
			}
		}
	};

</script>

<style scoped>

	.v-enter,
	.v-leave-to {
		transform: translateY(100%);
		opacity: 0;
	}

	.v-leave-active,
	.v-enter-active {
		transition: 0.4s;
	}

	.content {
		height: 70%;
		overflow: hidden;
		background-color: #fff;
	}

	.detail__cover_title {
		background-color: #fff;
		padding-left: 16px;
	}

	.detail__cover_bg {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.6);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99999;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		line-height: 46px;
	}

	.detail__cover_content {
		height: 70%;
	}

	.detail__cover_back {
		width: 100%;
		height: 50px;
		background-color: crimson;
		text-align: center;
		line-height: 50px;
		color: #fff;
	}

	.detail__cover_row {
		padding: 0 10px;
	}

	.detail__cover_item {
		display: flex;
		border-top: 1px solid #eee;
		overflow: hidden;
		font-size: 14px;
	}

	.detail__cover_item span:first-child {
		flex: 3;
		color: #888;
		text-indent: 6px;
	}

	.detail__cover_item span:last-child {
		flex: 7;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: #444;
	}

</style>
