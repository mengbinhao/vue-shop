<template>
	<div class="profile">
		<HeaderTop title="我的" />
		<section class="profile-number">
			<!-- <router-link to="/login" class="profile-link">
				<div class="profile_image">
					<span class="item_icon">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-person"></use>
						</svg>
					</span>
				</div>
				<div class="user-info">
					<p class="user-info-top">登录/注册</p>
					<p>
						<span class="user-icon">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-mobile"></use>
							</svg>
						</span>
						<span class="icon-mobile-number">暂无绑定手机号</span>
					</p>
				</div>
				<span class="arrow">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-arrow-right"></use>
					</svg>
				</span>
      </router-link>-->
			<a
				href="javascript:"
				class="profile-link"
				@click="
					userInfo._id
						? $router.push({ name: 'UserInfo' })
						: $router.push({ name: 'Login' })
				"
			>
				<div class="profile_image">
					<span class="item_icon">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-person"></use>
						</svg>
					</span>
				</div>
				<div class="user-info">
					<p class="user-info-top" v-if="!userInfo.phone">
						{{ userInfo.name || '登录/注册' }}
					</p>
					<p>
						<span class="user-icon">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-mobile"></use>
							</svg>
						</span>
						<span class="icon-mobile-number">
							{{ userInfo.phone || '暂无绑定手机号' }}
						</span>
					</p>
				</div>
				<span class="arrow">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-arrow-right"></use>
					</svg>
				</span>
			</a>
		</section>
		<section class="profile_info_data border-1px">
			<ul class="info_data_list">
				<a href="javascript:" class="info_data_link">
					<span class="info_data_top"> <span>0.00</span>元 </span>
					<span class="info_data_bottom">我的余额</span>
				</a>
				<a href="javascript:" class="info_data_link">
					<span class="info_data_top"> <span>0</span>个 </span>
					<span class="info_data_bottom">我的优惠</span>
				</a>
				<a href="javascript:" class="info_data_link">
					<span class="info_data_top"> <span>0</span>分 </span>
					<span class="info_data_bottom">我的积分</span>
				</a>
			</ul>
		</section>
		<section class="profile_my_order border-1px">
			<!-- 我的订单 -->
			<a href="javascript:" class="my_order">
				<span>
					<svg class="iconfont" aria-hidden="true">
						<use xlink:href="#icon-order"></use>
					</svg>
				</span>
				<div class="my_order_div">
					<span>我的订单</span>
					<span class="my_order_icon">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-arrow-right"></use>
						</svg>
					</span>
				</div>
			</a>
			<!-- 积分商城 -->
			<a href="javascript:" class="my_order">
				<span>
					<svg class="iconfont" aria-hidden="true">
						<use xlink:href="#icon-score"></use>
					</svg>
				</span>
				<div class="my_order_div">
					<span>积分商城</span>
					<span class="my_order_icon">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-arrow-right"></use>
						</svg>
					</span>
				</div>
			</a>
			<!-- 硅谷外卖会员卡 -->
			<a href="javascript:" class="my_order">
				<span>
					<svg class="iconfont" aria-hidden="true">
						<use xlink:href="#icon-vip"></use>
					</svg>
				</span>
				<div class="my_order_div">
					<span>硅谷外卖会员卡</span>
					<span class="my_order_icon">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-arrow-right"></use>
						</svg>
					</span>
				</div>
			</a>
		</section>
		<section class="profile_my_order border-1px">
			<!-- 服务中心 -->
			<a href="javascript:" class="my_order">
				<span>
					<svg class="iconfont" aria-hidden="true">
						<use xlink:href="#icon-services"></use>
					</svg>
				</span>
				<div class="my_order_div">
					<span>服务中心</span>
					<span class="my_order_icon">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-arrow-right"></use>
						</svg>
					</span>
				</div>
			</a>
		</section>

		<section class="profile_my_order border-1px">
			<mt-button
				type="danger"
				style="width:100%"
				v-if="userInfo._id"
				@click="logout"
				>logout</mt-button
			>
		</section>
	</div>
</template>
<script>
import HeaderTop from '@/components/HeaderTop'
import { mapState } from 'vuex'
import { MessageBox, Toast } from 'mint-ui'

export default {
	name: 'Profile',
	data() {
		return {}
	},
	components: {
		HeaderTop
	},
	computed: {
		...mapState(['userInfo'])
	},
	methods: {
		logout() {
			MessageBox.confirm('Are you sure?').then(
				() => {
					this.$store.dispatch('logout')
					Toast('logout successfully')
				},
				() => {}
			)
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/mixins.styl';

.profile {
  width: 100%;
  overflow: hidden; // fix scroll exist if previous page scroll down

  .header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;

    .header_search {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      width: 10%;
      height: 50%;

      .icon-sousuo {
        font-size: 25px;
        color: #fff;
      }
    }

    .header_title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      color: #fff;
      text-align: center;

      .header_title_text {
        font-size: 20px;
        color: #fff;
        display: block;
      }
    }

    .header_login {
      font-size: 14px;
      color: #fff;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);

      .header_login_text {
        color: #fff;
      }
    }
  }

  .profile-number {
    margin-top: 45.5px;

    .profile-link {
      clearFix();
      position: relative;
      display: block;
      background: #02a774;
      padding: 20px 10px;

      .profile_image {
        float: left;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        vertical-align: top;

        span {
          .icon {
            font-size: 62px;
            width: 1em;
            height: 1em;
            fill: #e4e4e4;
          }
        }
      }

      .user-info {
        float: left;
        margin-top: 8px;
        margin-left: 15px;

        p {
          font-weight: 700;
          font-size: 18px;
          color: #fff;

          &.user-info-top {
            padding-bottom: 8px;
          }

          .user-icon {
            display: inline-block;
            margin-left: -15px;
            margin-right: 5px;
            width: 20px;
            height: 20px;

            .icon {
              font-size: 20px;
              width: 1em;
              height: 1em;
              fill: currentColor;
              overflow: hidden;
              vertical-align: text-top;
            }
          }

          .icon-mobile-number {
            font-size: 14px;
            color: #fff;
          }
        }
      }

      .arrow {
        width: 12px;
        height: 12px;
        position: absolute;
        right: 15px;
        top: 40%;

        .icon {
          width: 1em;
          height: 1em;
          color: #fff;
          font-size: 5px;
        }
      }
    }
  }

  .profile_info_data {
    bottom-border-1px(#e4e4e4);
    width: 100%;
    background: #fff;
    overflow: hidden;

    .info_data_list {
      clearFix();

      .info_data_link {
        float: left;
        width: 33%;
        text-align: center;
        border-right: 1px solid #f1f1f1;

        .info_data_top {
          display: block;
          width: 100%;
          font-size: 14px;
          color: #333;
          padding: 15px 5px 10px;

          span {
            display: inline-block;
            font-size: 30px;
            color: #f90;
            font-weight: 700;
            line-height: 30px;
          }
        }

        .info_data_bottom {
          display: inline-block;
          font-size: 14px;
          color: #666;
          font-weight: 400;
          padding-bottom: 10px;
        }
      }

      .info_data_link:nth-of-type(2) {
        .info_data_top {
          span {
            color: #ff5f3e;
          }
        }
      }

      .info_data_link:nth-of-type(3) {
        border: 0;

        .info_data_top {
          span {
            color: #6ac20b;
          }
        }
      }
    }
  }

  .profile_my_order {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .my_order {
      display: flex;
      align-items: center;
      padding-left: 15px;

      >span {
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;

        >.iconfont {
          margin-left: -10px;
          width: 1.5em;
          height: 1.5em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }

        .icon-order-s {
          color: #02a774;
        }

        .icon-jifen {
          color: #ff5f3e;
        }

        .icon-vip {
          color: #f90;
        }

        .icon-fuwu {
          color: #02a774;
        }
      }

      .my_order_div {
        width: 100%;
        border-bottom: 1px solid #f1f1f1;
        padding: 18px 10px 18px 0;
        font-size: 16px;
        color: #333;
        display: flex;
        justify-content: space-between;

        span {
          display: block;
        }

        .my_order_icon {
          width: 10px;
          height: 10px;

          .icon {
            color: #bbb;
            font-size: 10px;
            width: 1.5em;
            height: 1.5em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
