// config.js

var path = require('./path');

module.exports = {
	task: {
		watch: {
			exclude: /\.map$/
		}
	},

	plugin: {
		pug: {
			pretty: '\t',
			basedir: path.source.template
		},

		htmlmin: {
			removeComments: true,
			removeCommentsFromCDATA: true,
			removeCDATASectionsFromCDATA: true,
			collapseWhitespace: true
		},

		cssnano: {
			autoprefixer: false
		},

		inlinesource: {
			attribute: 'data-inline'
		},

		server: {
			server: {
				baseDir: path.public.main
			},
			reloadDebounce: 250,
			online: true,
			https: true
		}
	}
};
