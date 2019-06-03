<template>
	<div class="msite">
		<HeaderTop title="昌平区北七家宏福科技园(337省道北)">
			<template #left>
				<span class="header_search">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-find"></use>
					</svg>
				</span>
			</template>
			<template #right>
				<span class="header_login">
					<span class="header_login_text">登录|注册</span>
				</span>
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
			}
		}
	}
}
</script>
<style lang="stylus" scoped>
.msite {
  width: 100%;
}
</style>
