<template>
	<nav-bar class="detai-navbar">
		<div slot="nav-left" class="nav-left-slot" >
			<div class="iconfont icon-back" @click="backClick" ></div>
		</div>
		<ul slot="nav-center" class="title">
			<li class="title-item"
				v-for="(item, index) in titles"
				:key="index"
				:class="{active: index === currentIndex}"
				@click="titleClick(index)"
			>{{ item }}</li>
		</ul>
		<div slot="nav-right" class="nav-right-slot">
			<div class="iconfont icon-more"></div>
		</div>
	</nav-bar>
</template>

<script>

	import NavBar from "components/common/navBar/NavBar";

	export default {
		name: "DetailNavBar",
		data() {
			return {
				titles: ["商品", "评价", "详情", "推荐"],
				currentIndex: 0,
				backBtn: null,
				menuBtn: null,
				titleBtn: null,
				btnOpc: 0.5,
				titleOpc: 0,
			};
		},
		components: {
			NavBar,
		},
		methods: {
			titleClick(index) {
				if (this.titleOpc) {
					this.currentIndex = index;
					this.$emit("titleClick", index);
				}
			},
			backClick() {
				this.$router.back();
			},
			changNavbar(opc) {

				if (!this.backBtn) {
					this.backBtn = document.querySelector(".icon-back");
					this.menuBtn = document.querySelector(".icon-more");
					this.titleBtn = document.querySelector(".title");
				}

				if (opc <= 0.5 && opc >= 0) {
					this.backBtn.style.backgroundColor = `rgba(0, 0, 0, ${this.btnOpc - opc})`;
					this.backBtn.style.color = `rgba(255, 255, 255, ${1 - opc * 2})`;

					this.menuBtn.style.backgroundColor = `rgba(0, 0, 0, ${this.btnOpc - opc})`;
					this.menuBtn.style.color = `rgba(255, 255, 255, ${1 - opc * 2})`;

				} else {
					this.backBtn.style.color = `rgba(102, 102, 102, ${opc * 2 - 1})`;
					this.menuBtn.style.color = `rgba(102, 102, 102, ${opc * 2 - 1})`;
				}

				this.titleBtn.style.opacity = `${opc}`;
				this.$el.style.backgroundColor = `rgba(248, 248, 248, ${opc})`;
				this.titleOpc = opc;
			},
			changNavbarNoTrans(opc) {
				this.backBtn.style.color = `rgba(102, 102, 102, ${opc * 2 - 1})`;
				this.menuBtn.style.color = `rgba(102, 102, 102, ${opc * 2 - 1})`;

				this.titleBtn.style.opacity = `${opc}`;
				this.$el.style.backgroundColor = `rgba(248, 248, 248, ${opc})`;
				this.titleOpc = opc;

				return true;
			},
			setCurIndex(index) {
				if (index === -1) return;
				this.currentIndex = index;
			}
		}
	};

</script>

<style scoped>

	.title {
		display: flex;
		font-size: 14px;
		font-weight: 600;

		opacity: 0;
	}

	.title .title-item {
		flex: 1;
		text-align: center;
	}

	.active {
		color: rgb(238, 103, 126);
	}

	.nav-left-slot,
	.nav-right-slot {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.icon-back,
	.icon-more {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 30px;
		height: 30px;
		background-color: rgba(0, 0, 0, 0.5);
		line-height: 30px;
		border-radius: 50%;
		color: rgba(255, 255, 255, 1);
	}

	.icon-more {
		font-size: 20px;
	}

</style>
