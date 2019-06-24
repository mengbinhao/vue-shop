import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORIES,
	RECEIVE_SHOPS,
	RECEIVE_USERINFO,
	RESET_USERINFO
} from './mutation-type'

import {
	reqAddress,
	reqCategorys,
	reqShops,
	reqUserInfo,
	reqLogout
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
	}
}
