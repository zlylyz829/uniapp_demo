<template>
	<view id="individual-center">
		个人中心
		<view class="tab-bar">
			<tab-bar></tab-bar>
		</view>
	</view>
	
	
</template>

<script>
	import tabBar from '@/components/tabBar/tabBar.vue'
	export default {
		components: {tabBar},
		data() {
			return {
				
			};
		},
		
		onShow() {
			
		}
	}
</script>

<style lang="scss">
#individual-center {
	width: 100%;
	height: 100%;
	background: #EAECEE;
	position:relative;
}
</style>
