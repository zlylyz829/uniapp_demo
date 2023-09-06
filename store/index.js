import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		activeBar: 1,
		tabBarList: [{
				name: 1,
				"pagePath": "pages/home/home",
				"text": "首页",
				"iconPath": "navbar1.svg",
				"selectedIconPath": "navbar1_active.svg"
			},
			{
				name: 2,
				"pagePath": "pages/orderGoods/orderGoods",
				"text": "订单",
				"iconPath": "navbar2.svg",
				"selectedIconPath": "navbar2_active.svg"
			},
			{
				name: 3,
				"pagePath": "pages/individualCenter/individualCenter",
				"text": "个人中心",
				"iconPath": "navbar3.svg",
				"selectedIconPath": "navbar3_active.svg"
			}
		]
	},
	mutations: {
		updateActiveBar(state, activeNum) {
			state.activeBar = activeNum;
		}
	},
	actions: {

	}
})

export default store