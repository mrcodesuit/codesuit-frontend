// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'codesuit',
	siteDescription: 'Webdesign aus Köln',
	siteUrl: '',
	icon: {
		favicon: './static/favicon.png',
	},
	plugins: [],
	chainWebpack: (config) => {
		config.module
			.rule('pug')
			.test(/\.pug$/)
			.use('pug-plain-loader')
			.loader('pug-plain-loader');
		config.resolve.alias.set('@images', '@/assets/img');
	},
};
