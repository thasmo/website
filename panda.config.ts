import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	exclude: [],
	globalCss: {
		'::selection': {
			background: 'accent',
			color: 'blank',
		},
		':root': {
			color: 'lighten($color-base, 25)',
			cursor: 'default',
			fontFamily: 'base',

			fontSize: '16px',
			fontWeight: 300,
			height: '100%',
			lineHeight: 1.5,
			overflow: 'hidden',
			textAlign: 'center',

			width: '100%',
		},
		'a': {
			_active: {
				backgroundColor: 'transparent',
			},
			_hover: {
				color: 'accent',
			},
			_osDark: {
				color: 'subtle',
			},
			color: 'base',
			textDecoration: 'none',
		},
		'img': {
			display: 'block',
			height: 'auto',
			maxWidth: '100%',
		},
		'p': {
			marginBottom: '16px',
			marginTop: 0,
		},
		'svg': {
			fill: 'currentColor',
		},
	},
	include: ['./src/**/*.{js,jsx,ts,tsx}'],
	jsxFramework: 'qwik',
	outdir: 'src/styles',
	preflight: true,
	theme: {
		breakpoints: {
			sm: '480px',
		},
		textStyles: {
			h1: {
				value: {
					fontFamily: 'heading',
					fontSize: '48px',
					fontWeight: 300,
					lineHeight: 1.2,
					textTransform: 'lowercase',
				},
			},
			h2: {
				value: {
					fontFamily: 'heading',
					fontSize: '36px',
					fontWeight: 300,
					lineHeight: 1.2,
					textTransform: 'lowercase',
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
		tokens: {
			colors: {
				accent: { value: '#F6995C' },
				base: { value: '#222222' },
				blank: { value: '#ffffff' },
				subtle: { value: '#fafafa' },
				void: { value: '#111111' },
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
	},
});
