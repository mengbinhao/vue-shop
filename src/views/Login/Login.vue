<template>
	<div class="loginContainer">
		<div class="loginInner">
			<div class="login_header">
				<h2 class="login_logo">硅谷外卖</h2>
				<div class="login_header_title">
					<a
						href="javascript:;"
						:class="{ on: loginWay }"
						@click="loginWay = true"
						>短信登录</a
					>
					<a
						href="javascript:;"
						:class="{ on: !loginWay }"
						@click="loginWay = false"
						>密码登录</a
					>
				</div>
			</div>
			<div class="login_content">
				<form @submit.prevent="login">
					<div :class="{ on: loginWay }">
						<section class="login_message">
							<input
								v-focus
								type="tel"
								maxlength="11"
								placeholder="手机号"
								v-model="phone"
							/>
							<button
								:disabled="!rightPhone"
								class="get_verification"
								:class="{ rightPhone }"
								@click.prevent="getVerificationCode"
							>
								{{ countdown > 0 ? `已发送(${countdown}s)` : '获取验证码' }}
							</button>
						</section>
						<section class="login_verification">
							<input
								type="tel"
								maxlength="8"
								placeholder="验证码"
								v-model="verificationCode"
							/>
						</section>
						<section class="login_hint">
							温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
							<a href="javascript:;">《用户服务协议》</a>
						</section>
					</div>
					<div :class="{ on: !loginWay }">
						<section>
							<section class="login_message">
								<input
									type="tel"
									maxlength="11"
									placeholder="手机/邮箱/用户名"
									v-model="name"
								/>
							</section>
							<section class="login_verification">
								<input
									type="text"
									maxlength="8"
									v-if="showPassword"
									v-model="password"
									placeholder="密码"
								/>
								<input
									type="password"
									maxlength="8"
									placeholder="密码"
									v-model="password"
									v-else
								/>
								<div
									class="switch_button"
									:class="showPassword ? 'on' : 'off'"
									@click="showPassword = !showPassword"
								>
									<div
										class="switch_circle"
										:class="{ right: showPassword }"
									></div>
									<span class="switch_text">
										{{ showPassword ? 'abc' : '...' }}
									</span>
								</div>
							</section>
							<section class="login_message">
								<input
									type="text"
									maxlength="11"
									placeholder="验证码"
									v-model="captcha"
								/>
								<img
									class="get_verification"
									src="http://localhost:3000/captcha"
									alt="captcha"
									@click="getCaptcha"
									ref="capcha"
								/>
							</section>
						</section>
					</div>
					<button class="login_submit">登录</button>
				</form>
				<a href="javascript:;" class="about_us">关于我们</a>
			</div>
			<a href="javascript:" class="go_back" @click="$router.back()">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-arrow-left"></use>
				</svg>
			</a>
		</div>
		<AlertTip
			:show-tip-text="showTipText"
			v-if="isShowTip"
			@closeTip="closeTip"
		/>
	</div>
</template>
<script>
import AlertTip from '@/components/AlertTip'
import { reqSendCode, reqSmsLogin, reqPwdLogin } from '@/api'

export default {
	data() {
		return {
			loginWay: true,
			phone: '',
			verificationCode: '',
			name: '',
			password: '',
			captcha: '',
			countdown: 0,
			showPassword: false,
			isShowTip: false,
			showTipText: ''
		}
	},
	components: {
		AlertTip
	},
	methods: {
		async getVerificationCode(e) {
			if (!this.intervalId) {
				e.target.classList.remove('rightPhone')
				this.countdown = 10
				this.intervalId = setInterval(() => {
					this.countdown--
					if (this.countdown <= 0) {
						clearInterval(this.intervalId)
						e.target.classList.add('rightPhone')
					}
				}, 1000)

				//send Ajax
				const ret = await reqSendCode(this.phone)
				//handle exception
				if (ret.code === 1) {
					this.showTip(ret.msg)

					if (this.countdown) {
						this.countdown = 0
						clearInterval(this.intervalId)
						e.target.classList.add('rightPhone')
						this.intervalId = null
					}
				}
			}
		},
		getCaptcha() {
			this.$refs.capcha.src = `http://localhost:3000/captcha?time=${+new Date()}`
		},
		showTip(message) {
			this.isShowTip = true
			this.showTipText = message
		},
		async login() {
			let ret
			if (this.loginWay) {
				const { rightPhone, verificationCode, phone } = this
				if (!rightPhone) {
					this.showTip('need correct phone')
					return
				} else if (!/^\d{6}$/.test(verificationCode)) {
					this.showTip('need correct verificationCode')
					return
				}
				ret = await reqSmsLogin(phone, verificationCode)
			} else {
				const { name, password, captcha } = this
				if (!name) {
					this.showTip('need correct name')
					return
				} else if (!password) {
					this.showTip('need correct password')
					return
				} else if (!captcha) {
					this.showTip('need correct captcha')
					return
				}
				ret = await reqPwdLogin({ name, password, captcha })
			}

			if (ret.code === 0) {
				//restore user to vuex
				this.$store.dispatch('recordUserInfo', ret.data)
				this.$router.push('Profile')
			} else {
				this.getCaptcha()
				this.showTip(ret.msg)
			}
		},
		closeTip() {
			this.isShowTip = false
			this.showTipText = ''
		}
	},
	computed: {
		rightPhone() {
			return /^1\d{10}$/.test(this.phone)
		}
	},
	directives: {
		focus: {
			inserted(el) {
				el.focus()
			}
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl';

.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_logo {
        font-size: 40px;
        font-weight: bold;
        color: #02a774;
        text-align: center;
      }

      .login_header_title {
        padding-top: 40px;
        text-align: center;

        >a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;

          &:first-child {
            margin-right: 40px;
          }

          &.on {
            color: #02a774;
            font-weight: 700;
            border-bottom: 2px solid #02a774;
          }
        }
      }
    }

    .login_content {
      >form {
        >div {
          display: none;

          &.on {
            display: block;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 10px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;

            &:focus {
              border: 1px solid #02a774;
            }
          }

          .login_message {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .get_verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;

              &.rightPhone {
                color: black;
              }
            }
          }

          .login_verification {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .switch_button {
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              transition: background-color 0.3s, border-color 0.3s;
              padding: 0 6px;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #fff;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);

              &.off {
                background: #fff;

                .switch_text {
                  float: right;
                  color: #ddd;
                }
              }

              &.on {
                background: #02a774;
              }

              >.switch_circle {
                // transform translateX(27px)
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;

                &.right {
                  transform: translateX(30px);
                }
              }
            }
          }

          .login_hint {
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;

            >a {
              color: #02a774;
            }
          }
        }

        .login_submit {
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 30px;
          border-radius: 4px;
          background: #4cd96f;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          border: 0;
        }
      }

      .about_us {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }

    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;

      >.icon {
        font-size: 18px;
        color: #999;
        width: 1em;
        height: 1em;
      }
    }
  }
}
</style>
