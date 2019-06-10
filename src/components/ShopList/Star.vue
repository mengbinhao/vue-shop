<template>
	<div class="star" :class="`star-${size}`">
		<span
			class="star-item"
			v-for="(sc, index) in starClasses"
			:class="sc"
			:key="index"
		></span>
	</div>
</template>
<script>
const STAR_ON = 'on'
const STAR_HALF = 'half'
const STAR_OFF = 'off'

export default {
	props: {
		scores: {
			type: Number,
			default: 3
		},
		size: {
			type: Number,
			default: 24
		}
	},
	computed: {
		starClasses() {
			const { scores } = this
			const scs = []
			const scoreInteger = Math.floor(scores)
			for (let i = 0; i < scoreInteger; i++) {
				scs.push(STAR_ON)
			}
			//push 0/1 STAR_HALF
			//fix decimal issue
			if (scores * 10 - scoreInteger * 10 >= 5) {
				scs.push(STAR_HALF)
			}
			//completion length
			while (scs.length < 5) {
				scs.push(STAR_OFF)
			}
			return scs
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl';

.star {
  float: left;
  font-size: 0;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/stars/star48_on');
      }

      &.half {
        bg-image('./images/stars/star48_half');
      }

      &.off {
        bg-image('./images/stars/star48_off');
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/stars/star36_on');
      }

      &.half {
        bg-image('./images/stars/star36_half');
      }

      &.off {
        bg-image('./images/stars/star36_off');
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/stars/star24_on');
      }

      &.half {
        bg-image('./images/stars/star24_half');
      }

      &.off {
        bg-image('./images/stars/star24_off');
      }
    }
  }
}
</style>
