import {
	mapMutations
} from 'vuex';
export default {
	data() {
		return {

		}
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
		}
	}
}