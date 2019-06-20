<template>
	<div class="msite">
		<HeaderTop :title="address.name">
			<template #left>
				<router-link class="header_search" to="/search">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-find"></use>
					</svg>
				</router-link>
			</template>
			<template #right>
				<router-link
					class="header_login"
					:to="userInfo._id ? '/userinfo' : 'login'"
				>
					<span class="header_login_text" v-if="userInfo._id">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-person"></use>
						</svg>
					</span>
					<span class="header_login_text" v-else>登录|注册</span>
				</router-link>
			</template>
		</HeaderTop>

		<Swiper :options="options" />

		<ShopList />
	</div>
</template>
<script>
import HeaderTop from '@/components/HeaderTop'
import Swiper from '@/components/Swiper/Swiper'
import ShopList from '@/components/ShopList/ShopList'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'MSite',
	components: {
		HeaderTop,
		Swiper,
		ShopList
	},
	data() {
		return {
			options: {
				loop: true,
				centeredSlides: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false
				},
				pagination: {
					el: '.swiper-pagination'
				}
			},
			shops: []
		}
	},
	methods: {
		...mapActions(['getCategories'])
	},
	mounted() {
		this.getCategories()
	},
	computed: {
		...mapState(['address', 'userInfo'])
	}
}
</script>
<style lang="stylus" scoped>
.msite {
  width: 100%;
}
</style>
