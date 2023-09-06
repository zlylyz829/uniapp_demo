<template>
	<view id="home">
		<view class="address-con">
			四川省成都市
		</view>

		<view class="banner-con">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				indicator-color="rgba(255, 255, 255, .8)" indicator-active-color="#00a0e9" :duration="duration">
				<swiper-item>
					<view class="swiper-item banner1"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item banner2"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item banner3"></view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="tab-bar">
			<tab-bar></tab-bar>
		</view>
		

	</view>
</template>

<script>
	import tabBar from '@/components/tabBar/tabBar.vue'
	import {mapState} from 'vuex'
	
	export default {
		components: {tabBar},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				activeBar: 1,
				tabBarList: []
			}
		},
		
		computed: {
			// mapState({
				// activeBar: state => state.activeBar,
				// tabBarList: state => state.tabBarList
			// })
		},
		
		onShow() {
			console.log(this.$store.state.activeBar, 555)
			this.activeBar = this.$store.state.activeBar;
			this.tabBarList = this.$store.state.tabBarList;
			uni.setNavigationBarTitle({
				title: '丽丽洗衣'
			});
			// uni.setBackgroundColor({
			//     backgroundColor: '#ffffff',
			//     backgroundColorTop: '#222222',
			//     backgroundColorBottom: '#333333'
			// });
		},

		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	#home {
		width: 100%;
		height: 100%;
		background: #EAECEE;
		position:relative;
		

		.address-con {
			width: 750rpx;
			height: 70rpx;
			line-height: 70rpx;
			padding: 0 24rpx;
			box-sizing: border-box;
		}

		.banner-con {
			width: 750rpx;
			height: 300rpx;
			padding: 0 15rpx;
			box-sizing: border-box;
			margin-bottom: 45rpx;

			.banner1,
			.banner2,
			.banner3 {
				width: 100%;
				height: 100%;
				background: url(/static/images/banner/banner1.png) no-repeat 0 0;
				background-size: 100% 100%;
			}

			.banner2 {
				background: url(/static/images/banner/banner2.png) no-repeat 0 0;
				background-size: 100% 100%;
			}

			.banner3 {
				background: url(/static/images/banner/banner3.png) no-repeat 0 0;
				background-size: 100% 100%;
			}
		}

	}
	
	
</style>