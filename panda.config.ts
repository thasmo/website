import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	jsxFramework: 'qwik',
	preflight: true,
	include: ['./src/**/*.{js,jsx,ts,tsx}'],
	exclude: [],
	outdir: 'src/styles',
	globalCss: {
		'::selection': {
			background: 'accent',
			color: 'blank',
		},
		':root': {
			overflow: 'hidden',
			height: '100%',
			width: '100%',

			color: 'lighten($color-base, 25)',
			fontFamily: 'base',
			fontSize: '16px',
			fontWeight: 300,
			textAlign: 'center',
			lineHeight: 1.5,

			cursor: 'default',
		},
		'p': {
			marginTop: 0,
			marginBottom: '16px',
		},
		'img': {
			display: 'block',
			maxWidth: '100%',
			height: 'auto',
		},
		'svg': {
			fill: 'currentColor',
		},
		'a': {
			color: 'base',
			textDecoration: 'none',
			_active: {
				backgroundColor: 'transparent',
			},
			_hover: {
				color: 'accent',
			},
			_osDark: {
				color: 'subtle',
			},
		},
	},
	theme: {
		tokens: {
			colors: {
				blank: { value: '#ffffff' },
				subtle: { value: '#fafafa' },
				base: { value: '#222222' },
				void: { value: '#111111' },
				accent: { value: '#F6995C' },
			},
			fonts: {
				base: {
					value: ['Roboto Slab Variable', 'sans-serif'],
				},
				heading: {
					value: ['Roboto Condensed Variable', 'sans-serif'],
				},
			},
		},
		breakpoints: {
			sm: '480px',
		},
		textStyles: {
			h1: {
				value: {
					fontFamily: 'heading',
					fontSize: '48px',
					fontWeight: 300,
					textTransform: 'lowercase',
					lineHeight: 1.2,
				},
			},
			h2: {
				value: {
					fontFamily: 'heading',
					fontSize: '36px',
					fontWeight: 300,
					textTransform: 'lowercase',
					lineHeight: 1.2,
				},
			},
			h3: {
				value: {
					fontFamily: 'heading',
					fontSize: '24px',
					fontWeight: 300,
					lineHeight: 1.2,
				},
			},
		},
	},
});
