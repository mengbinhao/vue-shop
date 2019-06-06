<template>
	<div class="msite_shop_list">
		<div class="shop_header">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-settings"></use>
			</svg>
			<span class="shop_header_title">附近商家</span>
		</div>
		<ShopListItem />
	</div>
</template>
<script>
import ShopListItem from '@/components/ShopList/ShopListItem'
import { mapActions } from 'vuex'

export default {
	components: {
		ShopListItem
	},
	methods: {
		...mapActions(['getShops'])
	},
	mounted() {
		this.getShops()
	}
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl';

.msite_shop_list {
  top-border-1px(#e4e4e4);
  margin-top: 10px;
  background: #fff;

  .shop_header {
    padding: 10px 10px 0;

    .icon {
      width: 1.5em;
      height: 1.5em;
      vertical-align: -0.15em;
      fill: #999;
      overflow: hidden;
    }

    .shop_header_title {
      color: #999;
      font-size: 18px;
      line-height: 24px;
      height: 24px;
      margin-left: 5px;
    }
  }
}
</style>
