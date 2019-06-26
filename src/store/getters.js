export default {
	totalCount(state) {
		return state.cartGoods.reduce((acc, good) => {
			return acc + good.count
		}, 0)
	},

	totalPrice(state) {
		return state.cartGoods.reduce((acc, good) => {
			return acc + good.count * good.price
		}, 0)
	}
}
