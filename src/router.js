import Vue from 'vue'
import Router from 'vue-router'
import MSite from './views/MSite'
import Order from './views/Order/Order'
import Profile from './views/Profile'
import Search from './views/Search'
import Login from './views/Login/Login'
import UserInfo from './views/UserInfo'
import Shop from './views/Shop/Shop'
import ShopGoods from './views/Shop/ShopGoods'
import ShopRatings from './views/Shop/ShopRatings'
import ShopInfo from './views/Shop/ShopInfo'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: '/msite'
		},
		{
			path: '/msite',
			name: 'MSite',
			meta: {
				showFooter: true
			},
			component: MSite
		},
		{
			path: '/order',
			name: 'Order',
			meta: {
				showFooter: true
			},
			component: Order
		},
		{
			path: '/profile',
			name: 'Profile',
			meta: {
				showFooter: true
			},
			component: Profile
		},
		{
			path: '/search',
			name: 'Search',
			meta: {
				showFooter: true
			},
			component: Search
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/userinfo',
			name: 'UserInfo',
			component: UserInfo
		},
		{
			path: '/shop',
			component: Shop,
			children: [
				{
					path: '/shop/goods',
					name: 'ShopGoods',
					component: ShopGoods
				},
				{
					path: '/shop/ratings',
					name: 'ShopRatings',
					component: ShopRatings
				},
				{
					path: '/shop/info',
					name: 'ShopInfo',
					component: ShopInfo
				},
				{
					path: '',
					redirect: '/shop/goods'
				}
			]
		}
		// {
		// 	path: '/about',
		// 	name: 'about',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (about.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: () =>
		// 		import(/* webpackChunkName: "about" */ './views/About.vue')
		// }
	]
})
