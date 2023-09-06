<template>
	<div id="tab-bar">
		<div class="tab-item" v-for="(item, index) in tabBarList" :key="item.text" @click="switchBar(item)">
			<div class="img">
				<img :src="activeBar === (index + 1)? `../../static/Icon/svg/${item.selectedIconPath}` : `../../static/Icon/svg/${item.iconPath}`" alt="">
			</div>
			<div>{{item.text}}</div>
		</div>
		
	</div>
</template>

<script src="./tabBar.js"></script>
<style lang="scss" src="./tabBar.scss" ></style>