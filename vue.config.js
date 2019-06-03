module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				ws: true,
				changeOrigin: true,
				// 重写路径: 去掉路径中开头的'/api'
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}
