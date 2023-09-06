import {mapState} from 'vuex';
export default {
	data() {
		return {
			activeBar: 1,
			tabBarList: []
		}
	},
	
	computed: {
		// mapState({
		// 	activeBar: state => state.activeBar,
		// 	tabBarList: state => state.tabBarList
		// })
	},
	
	mounted() {
		this.activeBar = this.$store.state.activeBar;
		this.tabBarList = this.$store.state.tabBarList;
		console.log(this.$store.state.tabBarList,888)
	},
	
	methods: {
		switchBar(item) {
			uni.switchTab({
				url: `/${item.pagePath}`
			});
		}
	}
}