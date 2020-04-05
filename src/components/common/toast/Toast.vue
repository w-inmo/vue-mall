<template>
	<transition name="show-toast">
		<div class="toast" v-if="isShow">
			<div>{{ message }}</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: "Toast",
		data() {
			return {
				isShow: false,
				message: "",
			};
		},
		mounted() {
		},
		methods: {
			show(msg, duration = 2000) {
				this.message = msg;
				this.isShow = true;

				setTimeout(() => this.isShow = false, duration);
			}
		}
	};
</script>

<style scoped>

	.toast {
		padding: 10px 16px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(0, 0, 0, 0.6);
		color: #fff;
		border-radius: 10px;
	}

	.show-toast-enter-active,
	.show-toast-leave-active {
		transition: .4s;
	}

	.show-toast-enter,
	.show-toast-leave-to {
		opacity: 0;
	}


</style>
