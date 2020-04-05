<template>
	<div class="recommend">
		<a v-for="(item, index) in recommends" class="recommend-item" :href="item.link" :key="index">
			<img :src="item.image" class="recommend-image" onload="$emit('recommendLoaded')" />
			<p class="recommend-title">{{item.title}}</p>
		</a>
	</div>
</template>

<script>
	export default {
		name: "RecommendView",
		props: {
			recommends: {
				type: Array,
				default() {
					return [];
				}
			}
		}
	};
</script>

<style>
	.recommend {
		width: 100%;
		display: flex;
		overflow: hidden;
		text-align: center;
		background-color: #fff;
		padding: 10px 0;
	}

	.recommend .recommend-item {
		flex: 1;
	}

	.recommend-item .recommend-image {
		width: 60%;
		margin-bottom: 5px;
	}

	.recommend-item .recommend-title {
		font-size: 12px;
	}

</style>
