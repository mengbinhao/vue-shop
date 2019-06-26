<template>
	<div class="cartcontrol">
		<transition name="move">
			<div
				class="iconfont"
				v-if="food.count"
				@click.stop="updateFoodCount(false)"
			>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-remove-circle-outline"></use>
				</svg>
			</div>
		</transition>
		<div class="cart-count" v-if="food.count">{{ food.count }}</div>
		<div class="iconfont" @click.stop="updateFoodCount(true)">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-add-circle"></use>
			</svg>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		food: {
			type: Object,
			default: () => {}
		}
	},
	methods: {
		updateFoodCount(isAdd) {
			this.$store.dispatch('updateFoodCount', { isAdd, food: this.food })
		}
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../common/stylus/mixins.styl';

.cartcontrol {
  font-size: 0;

  .cart-decrease {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }

  .iconfont {
    display: inline-block;
    padding: 9px;
    line-height: 24px;
    font-size: 24px;

    &.move-enter-active, &.move-leave-active {
      transition: all 0.3s;
    }

    &.move-enter, &.move-leave-to {
      transform: translateX(30px) rotate(180deg);
    }

    .icon {
      width: 0.8em;
      fill: green;
      overflow: hidden;
    }
  }

  .cart-count {
    display: inline-block;
    vertical-align: top;
    // padding-top: 71px;
    padding-right: 8px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
}
</style>
