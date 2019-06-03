<template>
	<div class="msite_shop_list">
		<div class="shop_header">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-settings"></use>
			</svg>
			<span class="shop_header_title">附近商家</span>
		</div>
		<ShopListItem :shops="shops" />
	</div>
</template>
<script>
import ShopListItem from '@/components/ShopList/ShopListItem'

export default {
	components: {
		ShopListItem
	},
	beforeCreate() {
		this.shops = [
			{
				id: 1,
				src: require('./images/shop/1.jpg'),
				title: '锄禾日当午，汗滴禾下土',
				rating: 5,
				sales: 106
			},
			{
				id: 2,
				src: require('./images/shop/2.jpg'),
				title: '锄禾日当午，汗滴禾下土',
				rating: 4.6,
				sales: 88
			},
			{
				id: 3,
				src: require('./images/shop/3.jpg'),
				title: '锄禾日当午，汗滴禾下土',
				rating: 3.5,
				sales: 99
			},
			{
				id: 4,
				src: require('./images/shop/4.jpg'),
				title: '锄禾日当午，汗滴禾下土',
				rating: 4.2,
				sales: 106
			}
		]
	},
	data() {
		return {
			shops: this.shops
		}
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
