import Vue from 'vue'
import Router from 'vue-router'
import MSite from './views/MSite/MSite'
import Order from './views/Order/Order'
import Profile from './views/Profile/Profile'
import Search from './views/Search/Search'

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
			component: MSite
		},
		{
			path: '/order',
			name: 'Order',
			component: Order
		},
		{
			path: '/profile',
			name: 'Profile',
			component: Profile
		},
		{
			path: '/search',
			name: 'Search',
			component: Search
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
