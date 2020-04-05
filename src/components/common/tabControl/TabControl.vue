<template>
	<div class="tab-control">
		<div class="tab-control-item"
			v-for="(item, index) in titles" :key="index"
			:class="{active: index === currentIndex}"
			@click="tabClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabControl",
		props: {
			titles: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				currentIndex: 0,
			};
		},
		methods: {
			tabClick(index) {
				//  设置当前选中的 tab
				this.currentIndex = index;
				this.$emit("tabClick", index);
			}
		}
	};
</script>

<style scoped>
	.tab-control {
		display: flex;
		background-color: #fff;
		text-align: center;
		height: 40px;
		line-height: 40px;
		margin-bottom: 6px;
	}

	.tab-control-item {
		flex: 1;
	}

	.tab-control-item span {
		border-bottom: 2px solid #fff;
		transition: all .2s;
	}

	.active {
		color: #BD2C00;
	}

	.active span {
		border-bottom-color: #BD2C00;
	}

</style>
