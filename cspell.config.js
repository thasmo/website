export default {
	dictionaries: [
		'en_US',
		'de-de',
		'softwareTerms',
		'typescript',
		'node',
		'html',
		'css',
		'bash',
		'misc',
		'project',
	],
	dictionaryDefinitions: [
		{
			addWords: true,
			name: 'project',
			path: './dictionary.txt',
		},
	],
	ignorePaths: [
		'/node_modules/',
		'/tmp/',
		'/dist/',
		'/server/',
		'/src/styles/',
		'package.json',
		'pnpm-lock.yaml',
	],
	import: ['@cspell/dict-de-de'],
	language: 'en',
	version: '0.2',
};
