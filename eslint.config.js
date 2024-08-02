import config from '@somehow-digital/eslint-config/typescript';

export default [
	...config,
	{
		ignores: ['src/styles/', 'dist/', 'server/', 'tmp/'],
	},
	{
		rules: {
			'unicorn/no-null': 'off',
			'unicorn/prevent-abbreviations': 'off',
		},
	},
];
