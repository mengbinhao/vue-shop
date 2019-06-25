import Vue from 'vue'
import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORIES,
	RECEIVE_SHOPS,
	RECEIVE_USERINFO,
	RESET_USERINFO,
	RECEIVE_GOODS,
	RECEIVE_RATINGS,
	RECEIVE_INFO,
	INCREASE_FOOD_COUNT,
	DECREASE_FOOD_COUNT
} from './mutation-type'

export default {
	[RECEIVE_ADDRESS](state, { address }) {
		state.address = address
	},

	[RECEIVE_CATEGORIES](state, { categories }) {
		state.categories = categories
	},

	[RECEIVE_SHOPS](state, { shops }) {
		state.shops = shops
	},

	[RECEIVE_USERINFO](state, { userInfo }) {
		state.userInfo = userInfo
	},
	[RESET_USERINFO](state) {
		state.userInfo = {}
	},
	[RECEIVE_GOODS](state, { goods }) {
		state.goods = goods
	},
	[RECEIVE_RATINGS](state, { ratings }) {
		state.ratings = ratings
	},
	[RECEIVE_INFO](state, { info }) {
		state.info = info
	},
	[INCREASE_FOOD_COUNT](state, { food }) {
		if (!food.count) {
			//food.count = 1
			//count does not exist at first
			Vue.set(food, 'count', 1)
		} else {
			food.count++
		}
	},
	[DECREASE_FOOD_COUNT](state, { food }) {
		if (food.count) {
			food.count--
		}
	}
}
