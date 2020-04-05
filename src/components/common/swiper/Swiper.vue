<template>
	<div class="swiper-wrapper" id="home_swiper">
		<ul class="swiper">
			<slot></slot>
		</ul>
		<ul class="swiper-point"></ul>
	</div>
</template>

<script>

	export default {
		name: "Swiper",
		props: {
			touchPercentage: {
				type: Number,
				default: 0.3
			},
			timerTime: {
				type: Number,
				default: 3000
			},
			isAutoPlayer: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				itemCount: 1,
				currentIndex: 1,
				isAddAnimation: true,
				swiper: null,
				swiperPointWrap: null,
				swiperItemWidth: 0,
				timer: null,
				offsetPos: 0,
				currenPointIndex: 0
			};
		},
		methods: {
			handleDom() {

				this.swiperItemWidth = document.body.clientWidth;
				this.swiper = this.$el.firstChild;
				this.initSwiperList();
				this.swiper.style.width = this.swiperItemWidth * this.swiper.children.length + "px";
				this.swiper.style.transform = `translateX(${ -this.swiperItemWidth }px)`;
				this.itemCount = this.swiper.children.length - 2;
				this.swiperPointWrap = this.$el.lastChild;

				this.onTouchstartEvent();
				this.onTouchendEvent();
				this.onTransitionEvent();
			},
			moveCard() {

				this.currentIndex++;
				if (this.isAddAnimation) {
					this.swiper.style.transition = "all .8s";
					this.isAddAnimation = false;
				}

				this.swiper.style.transform = `translateX(${-this.currentIndex * this.swiperItemWidth}px)`;
			},
			timerFun() {
				this.moveCard();
			},
			initSwiperPoint() {
				for (let i = 0; i < this.itemCount; ++i) {
					let temp = document.createElement("li");
					temp.classList.add("point-item");
					if (i === 0) {
						temp.classList.add("active-point");
					}
					this.swiperPointWrap.appendChild(temp);
				}
			},
			updatePoint() {
				this.swiperPointWrap.children[this.currenPointIndex].classList.remove("active-point");
				this.currenPointIndex = this.currentIndex - 1;
				this.swiperPointWrap.children[this.currenPointIndex].classList.add("active-point");
			},
			initSwiperList() {
				let firstChild = this.swiper.children[0].cloneNode(true),
					lastChild = this.swiper.children[this.swiper.children.length - 1].cloneNode(true);

				this.swiper.insertBefore(lastChild, this.swiper.children[0]);
				this.swiper.appendChild(firstChild);
			},
			onTouchstartEvent() {
				this.swiper.ontouchstart = startEvent => {

					if (this.isAutoPlayer) clearInterval(this.timer);

					let start = startEvent.changedTouches[0].clientX,
						currentOffset = -this.currentIndex * this.swiperItemWidth;

					this.swiper.ontouchmove = moveEvent => {
						this.swiper.style.transition = "none";
						this.offsetPos = moveEvent.changedTouches[0].clientX - start + currentOffset;
						this.swiper.style.transform = `translateX(${this.offsetPos}px)`;
						this.isAddAnimation = true;
					};

				};
			},
			onTransitionEvent() {
				this.swiper.addEventListener("transitionend", () => {

					if (this.currentIndex > this.itemCount) {
						this.swiper.style.transition = "none";
						this.swiper.style.transform = `translateX(${-this.swiperItemWidth}px)`;
						this.currentIndex = 1;
						this.isAddAnimation = true;
					} else if (this.currentIndex < 1) {
						this.swiper.style.transition = "none";
						this.swiper.style.transform = `translateX(${-this.swiperItemWidth * this.itemCount}px)`;
						this.currentIndex = this.itemCount;
						this.isAddAnimation = true;
					}

					this.updatePoint();

				});
			},
			onTouchendEvent() {
				this.swiper.ontouchend = () => {
					let offset = this.offsetPos + this.currentIndex * this.swiperItemWidth;

					if (offset < -this.swiperItemWidth * this.touchPercentage) {
						this.moveCard();
					} else if (offset > this.swiperItemWidth * this.touchPercentage ) {
						this.currentIndex -= 2;
						this.moveCard();
					} else {
						this.currentIndex--;
						this.moveCard();
					}

					if (this.isAutoPlayer) this.timer = setInterval(this.timerFun, this.timerTime);

				};
			}
		},
		mounted() {
			this.handleDom();
			this.initSwiperPoint();
			if (this.isAutoPlayer) this.timer = setInterval(this.timerFun, this.timerTime);
		}
	};
</script>

<style>
	.swiper-wrapper {
		width: 100%;
		overflow: hidden;
		position: relative;
	}

	.swiper-wrapper .swiper {
		height: 100%;
		display: flex;
		list-style: none;
	}

	.swiper-wrapper .swiper-point {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		list-style: none;
	}

	.swiper-point .point-item {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: #999;
		margin: 0 2px;
	}

	.point-item.active-point {
		background-color: #fff;
	}

</style>
