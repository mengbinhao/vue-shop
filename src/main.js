import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/reset.css' /*引入公共样式*/

import store from './store'

import { Button } from 'mint-ui'
Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
