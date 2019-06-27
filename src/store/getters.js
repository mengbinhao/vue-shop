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
	},

	satisfiedSize(state) {
		return state.ratings.reduce((acc, rating) => {
			return acc + (rating.rateType === 0 ? 1 : 0)
		}, 0)
	}
}
