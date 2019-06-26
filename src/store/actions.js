import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORIES,
	RECEIVE_SHOPS,
	RECEIVE_USERINFO,
	RESET_USERINFO,
	RECEIVE_INFO,
	RECEIVE_GOODS,
	INCREASE_FOOD_COUNT,
	DECREASE_FOOD_COUNT,
	CLEAR_CART
} from './mutation-type'

import {
	reqAddress,
	reqCategorys,
	reqShops,
	reqUserInfo,
	reqLogout,
	reqShopInfo,
	reqShopGoods
} from '../api'

export default {
	async getAddress({ commit, state }) {
		const { longitude, latitude } = state
		const ret = await reqAddress(`${latitude},${longitude}`)
		if (ret.code === 0) {
			const address = ret.data
			commit(RECEIVE_ADDRESS, { address })
		}
	},
	async getCategories({ commit }) {
		const ret = await reqCategorys()
		if (ret.code === 0) {
			const categories = ret.data
			commit(RECEIVE_CATEGORIES, { categories })
		}
	},
	async getShops({ commit, state }) {
		const { longitude, latitude } = state
		const ret = await reqShops(longitude, latitude)
		if (ret.code === 0) {
			const shops = ret.data
			commit(RECEIVE_SHOPS, { shops })
		}
	},
	recordUserInfo({ commit }, userInfo) {
		commit(RECEIVE_USERINFO, { userInfo })
	},
	async getUserInfo({ commit }) {
		const ret = await reqUserInfo()
		if (ret.code === 0) {
			const userInfo = ret.data
			commit(RECEIVE_USERINFO, { userInfo })
		}
	},
	async logout({ commit }) {
		const ret = await reqLogout()
		if (ret.code === 0) {
			commit(RESET_USERINFO)
		}
	},
	async getShopInfo({ commit }) {
		const ret = await reqShopInfo()
		if (ret.code === 0) {
			const info = ret.data
			commit(RECEIVE_INFO, { info })
		}
	},
	async getShopGoods({ commit }, cb) {
		const ret = await reqShopGoods()
		if (ret.code === 0) {
			const goods = ret.data
			commit(RECEIVE_GOODS, { goods })
			cb && cb()
		}
	},
	updateFoodCount({ commit }, { isAdd, food }) {
		if (isAdd) {
			commit(INCREASE_FOOD_COUNT, { food })
		} else {
			commit(DECREASE_FOOD_COUNT, { food })
		}
	},
	clearCart({ commit }) {
		commit(CLEAR_CART)
	}
}
