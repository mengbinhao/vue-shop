import Vue from 'vue'
import Router from 'vue-router'
import MSite from './views/MSite'
import Order from './views/Order/Order'
import Profile from './views/Profile'
import Search from './views/Search'
import Login from './views/Login/Login'

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
