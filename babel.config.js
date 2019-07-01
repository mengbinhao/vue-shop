module.exports = {
	//presets是一系列plugins的集合
	presets: ['@vue/app'],
	plugins: [
		[
			'component',
			{
				libraryName: 'mint-ui',
				style: true
			}
		]
	]
}
