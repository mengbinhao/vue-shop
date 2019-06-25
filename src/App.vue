<template>
	<div id="app">
		<router-view />
		<FooterGuide v-show="$route.meta.showFooter" />
	</div>
</template>
<script>
import FooterGuide from './components/FooterGuide'
import { mapActions } from 'vuex'

export default {
	components: {
		FooterGuide
	},
	mounted() {
		this.getAddress()
		this.getUserInfo()
	},
	methods: {
		...mapActions(['getAddress', 'getUserInfo'])
	}
}
</script>

<style lang="stylus" scoped>
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}
</style>
