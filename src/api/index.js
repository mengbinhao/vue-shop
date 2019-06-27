import ajax from './ajax'
const base = '/api'
/**
 * 获取地址信息(根据经纬度串)
 */
export const reqAddress = geohash => ajax(`${base}/position/${geohash}`)
/**
 * 获取 msite 页面食品分类列表
 */
export const reqCategorys = () => ajax(`${base}/index_category`)
/**
 * 获取 msite 商铺列表(根据经纬度)
 */
export const reqShops = (longitude, latitude) =>
	ajax(`${base}/shops`, { longitude, latitude })
/**
 * 账号密码登录
 */
export const reqPwdLogin = ({ name, pwd, captcha }) =>
	ajax(
		`${base}/login_pwd`,
		{
			name,
			pwd,
			captcha
		},
		'POST'
	)
/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax(`${base}/sendcode`, { phone })
/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) =>
	ajax(`${base}/login_sms`, { phone, code }, 'POST')
/**
 * 获取用户信息(根据会话)
 */
export const reqUserInfo = () => ajax(`${base}/userinfo`)
/*** 请求登出
 */
export const reqLogout = () => ajax(`${base}/logout`)

export const reqShopGoods = () => ajax('/goods')

export const reqShopRating = () => ajax('/ratings')

export const reqShopInfo = () => ajax('/info')

export const reqSearchShops = (geohash, keyword) =>
	ajax(`${base}/search_shops`, { geohash, keyword })
