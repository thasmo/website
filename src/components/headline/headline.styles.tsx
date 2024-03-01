import {cva} from '~/styles/css';

export const headline = cva({
	base: {},
	variants: {
		level: {
			1: {
				textStyle: 'h1',
			},
			2: {
				textStyle: 'h2',
			},
			3: {
				textStyle: 'h3',
			},
		},
	},
});
