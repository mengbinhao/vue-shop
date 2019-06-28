import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/reset.css' /*引入公共样式*/

import store from './store'

import './mock/mockServer'
import './filter'

import { Button } from 'mint-ui'
Vue.component(Button.name, Button)

import VueLazyload from 'vue-lazyload'
import loading from '@/common/imgs/loading.gif'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
	loading
})

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
