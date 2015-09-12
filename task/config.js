// config.js

var path = require('./path');

module.exports = {
	task: {
		watch: {
			exclude: /\.map$/
		}
	},

	plugin: {
		jade: {
			pretty: '\t'
		},

		htmlmin: {
			removeComments: true,
			removeCommentsFromCDATA: true,
			removeCDATASectionsFromCDATA: true,
			collapseWhitespace: true
		},

		server: {
			server: {
				baseDir: path.public.main
			},
			reloadDebounce: 250,
			online: true
		}
	}
};
