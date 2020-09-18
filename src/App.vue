<template>
	<div id="app" class="app">
		<transition :name="toggleAnima">
			<keep-alive exclude="Detail">
				<router-view class="router" :key="$route.fullPath"></router-view>
			</keep-alive>
		</transition>
		<MainTabBar v-if="isShowTabbar" />
	</div>
</template>

<script>
	import MainTabBar from "./components/content/mainTabBar/MainTabBar";


	export default {
		components: {
			MainTabBar,
		},
		data: () => ({
			toggleAnima: "back"
		}),
		watch: {
			'$route'(to, from) {
				if (this.$router) {
					this.toggleAnima = 'back';
				} else {
					this.toggleAnima = 'forward';
				}
				// this.$router.isBack = false;
			}
		},
		computed: {
			isShowTabbar() {
				return this.$route.fullPath === "/home" ||
					this.$route.fullPath === "/classify" ||
					this.$route.fullPath === "/shopping" ||
					this.$route.fullPath === "/profile";
			}
		}
	};
</script>

<style>

	@import "./assets/style/base.css";

	.app {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.router {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		transition: all 0.6s ease;
	}

	.forward-enter,
	.back-leave-active {
		opacity: 0;
		transform: translateY(400px);
	}

	.forward-leave-active,
	.back-enter {
		opacity: 0;
		transform: translateY(-400px);
	}

</style>
