module.exports = {
	siteName: 'Thomas Deinhamer · Thasmo',
	siteDescription: 'Web-Developer from Salzburg, Austria, pushing the web\'s boundaries at pixelart.',
	icon: false,
	plugins: [],
	titleTemplate: (title) => title ? `${title} — <siteName>` : '<siteName>',
	chainWebpack: (config) => {
		const rule = config.module.rule('svg');
		rule.uses.clear();
		rule.use('vue-svg-loader').loader('vue-svg-loader');
	}
};
