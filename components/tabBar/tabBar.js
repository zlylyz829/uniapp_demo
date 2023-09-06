import {
	mapState,
	mapMutations
} from 'vuex';
export default {
	data() {
		return {
			activeBar: this.$store.state.activeBar,
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
	},

	methods: {
		...mapMutations({
			updateActiveBar: 'updateActiveBar'
		}),
		switchBar(item) {
			this.updateActiveBar(item.name);
			uni.switchTab({
				url: `/${item.pagePath}`
			});
			
			this.activeBar = this.$store.state.activeBar;

		}
	}
}