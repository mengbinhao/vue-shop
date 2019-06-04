<template>
	<nav class="msite_nav">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<a
						href="javascript:"
						class="link_to_food"
						v-for="(category, index) in categories"
						:key="index"
					>
						<div
							class="food_container"
							v-for="(item, idx) in category"
							:key="idx"
						>
							<img src="item." />
						</div>
						<span>甜品饮品</span>
					</a>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
		</div>
	</nav>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
	name: 'Swiper',
	data() {
		return {
			categories: []
		}
	},
	props: {
		options: {
			type: Object,
			default: function() {
				return {
					loop: true,
					centeredSlides: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false
					},
					pagination: {
						el: '.swiper-pagination'
					}
				}
			}
		}
	},
	mounted() {
		this.swiper = new Swiper('.swiper-container', this.options)
	},
	watch: {
		'$store.state.categories': 'buildCategoriesArr'
	},
	methods: {
		buildCategoriesArr(val) {
			console.log('-----' + val)
			let arr = []
			let oneSlice = []
			val.forEach(item => {
				if (oneSlice.length === 0) {
					oneSlice = []
				}
				if (oneSlice.length === 8) {
					arr.push(oneSlice)
				}
				oneSlice.push(item)
			})
			this.categories = arr
			console.log(this.categories)
		}
	},
	beforeDestroy() {
		this.swiper.destroy()
		this.swiper = null
	}
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl';

.msite_nav {
  bottom-border-1px(#e4e4e4);
  margin-top: 45px;
  height: 200px;
  background: #fff;

  .swiper-container {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      width: 100%;
      height: 100%;

      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;

        .link_to_food {
          width: 25%;

          .food_container {
            display: block;
            width: 100%;
            text-align: center;
            padding-bottom: 10px;
            font-size: 0;

            img {
              display: inline-block;
              width: 50px;
              height: 50px;
            }
          }

          span {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 13px;
            color: #666;
          }
        }
      }
    }

    .swiper-pagination {
      >span.swiper-pagination-bullet-active {
        background: #02a774;
      }
    }
  }
}
</style>
