<template>
	<div class="footer_guide">
		<a
			href="javascript:;"
			@click="goto('/msite')"
			class="guide_item"
			:class="{ on: $route.path === '/msite' || $route.path === '' }"
		>
			<span class="item_icon">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-takeaway"></use>
				</svg>
			</span>
			<span>外卖</span>
		</a>
		<a
			href="javascript:;"
			@click="goto('/search')"
			class="guide_item"
			:class="{ on: $route.path === '/search' }"
		>
			<span class="item_icon">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-search"></use>
				</svg>
			</span>
			<span>搜索</span>
		</a>
		<a
			href="javascript:;"
			@click="goto('/order')"
			class="guide_item"
			:class="{ on: $route.path === '/order' }"
		>
			<span class="item_icon">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-order"></use>
				</svg>
			</span>
			<span>订单</span>
		</a>
		<a
			href="javascript:;"
			@click="goto('/profile')"
			class="guide_item"
			:class="{ on: $route.path === '/profile' }"
		>
			<span class="item_icon">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-profile"></use>
				</svg>
			</span>
			<span>我的</span>
		</a>
	</div>
</template>
<script>
export default {
	data() {
		return {}
	},
	methods: {
		goto(path) {
			this.$router.push(path)
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl';

.footer_guide {
  top-border-1px(#e4e4e4);
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;

  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;

    &.on {
      color: #02a774;
    }

    span {
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;

      .icon {
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
  }
}
</style>
