import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORIES,
	RECEIVE_SHOPS,
	RECEIVE_USERINFO
} from './mutation-type'

import { reqAddress, reqCategorys, reqShops } from '../api'

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
	}
}
