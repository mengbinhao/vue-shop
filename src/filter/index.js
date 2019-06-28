import Vue from 'vue'
//import moment from 'moment'
import dayjs from 'dayjs'

// Vue.filter('dateFormat', (val, fmt = 'YYYY-MM-DD HH:mm:ss') => {
// 	return moment(val).format(fmt)
// })

Vue.filter('dateFormat', (val, fmt = 'YYYY-MM-DD HH:mm:ss') => {
	return dayjs(val).format(fmt) // 'YYYY 2019-01-25T00:00:00-02:00Z'
})
