<template>
	<nav class="msite_nav">
		<div class="swiper-container" v-if="categories.length">
			<div class="swiper-wrapper">
				<div
					class="swiper-slide"
					v-for="(category, index) in categories"
					:key="index"
				>
					<a
						href="javascript:"
						class="link_to_food"
						v-for="(item, idx) in category"
						:key="idx"
					>
						<div class="food_container">
							<img :src="baseImageUrl + item.image_url" />
						</div>
						<span>{{ item.title }}</span>
					</a>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>

		<img src="./images/msite_back.svg" alt="back" v-else />
	</nav>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
	name: 'Swiper',
	data() {
		return {
			baseImageUrl: 'https://fuss10.elemecdn.com',
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
	methods: {
		buildSwiperArr(val) {
			let arr = []
			let oneSlice = []
			val.forEach(item => {
				if (oneSlice.length === 8) {
					oneSlice = []
				}
				if (oneSlice.length === 0) {
					arr.push(oneSlice)
				}
				oneSlice.push(item)
			})
			this.categories = arr
		},
		buildSwiper() {
			//data alreay fetched, and DOM has been updated, then new swiper
			this.$nextTick(() => {
				this.swiper = new Swiper('.swiper-container', this.options)
			})
		}
	},
	watch: {
		'$store.state.categories': ['buildSwiperArr', 'buildSwiper']
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
