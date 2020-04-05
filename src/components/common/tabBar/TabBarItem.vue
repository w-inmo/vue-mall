<template>
	<div class="tabbar-item" :style="activeStyle" @click="activeClick">
		<slot name="item-icon"></slot>
		<slot name="item-text"></slot>
	</div>
</template>

<script>

	export default {
		props: {
			path: String,
			activeColor: {
				type: String,
				default: "rgb(238, 103, 126)"
			}
		},
		methods: {
			activeClick() {
				if (this.$route.path.indexOf(this.path) !== -1) {
					return;
				}
				this.$router.replace(this.path);
			},
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1;
			},
			activeStyle() {
				return this.isActive ? {color: this.activeColor} : {};
			}
		}
	};

</script>

<style>

	.tabbar .tabbar-item {
		flex: 1;
		text-align: center;
		padding: 8px 0;
	}

	.tabbar-item p {
		margin-top: 4px;
	}

</style>
