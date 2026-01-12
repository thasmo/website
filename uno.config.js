import presetBasic from '@somehow-digital/unocss-preset';
import presetFonts from '@unocss/preset-web-fonts';
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local';
import {
	defineConfig,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	presets: [
		presetBasic(),
		presetFonts({
			fonts: {
				base: {
					name: 'Roboto Slab',
					weights: ['300', '400'],
				},
				heading: {
					name: 'Roboto Condensed',
					weights: ['300', '400'],
				},
			},
			processors: createLocalFontProcessor({
				cacheDir: 'node_modules/.cache/unocss/fonts/',
				fontAssetsDir: 'public/assets/fonts/',
				fontServeBaseUrl: '/assets/fonts/',
			}),
			provider: 'google',
		}),
	],
	shortcuts: [
		{
			h1: 'font-heading text-48px font-400 lh-[1.2] lowercase',
			h2: 'font-heading text-36px font-400 lh-[1.2] lowercase',
			h3: 'font-heading text-24px font-400 lh-[1.2]',
		},
	],
	theme: {
		colors: {
			accent: '#F6995C',
			base: '#222222',
			blank: '#ffffff',
			subtle: '#fafafa',
			void: '#111111',
		},
		breakpoints: {
			sm: '480px',
		},
	},
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
	],
	preflights: [
		{
			getCSS: ({ theme }) => `
				::selection {
				  background-color: ${theme.colors?.accent};
				  color: ${theme.colors?.blank};
				}
				:root {
				  color: ${theme.colors?.base};
				  cursor: default;
				  font-family: "Roboto Slab", sans-serif;
				  font-size: 16px;
				  font-weight: 300;
				  height: 100%;
				  line-height: 1.5;
				  overflow: hidden;
				  text-align: center;
				  width: 100%;
				}
				a {
				  color: ${theme.colors?.base};
				  text-decoration: none;
				}
				a:hover {
				  color: ${theme.colors?.accent};
				}
				@media (prefers-color-scheme: dark) {
				  :root {
					color: ${theme.colors?.subtle};
				  }
				  a {
					color: ${theme.colors?.subtle};
				  }
				  a:hover {
					color: ${theme.colors?.accent};
				  }
				}
				img {
				  display: block;
				  height: auto;
				  max-width: 100%;
				}
				p {
				  line-height: 1.5;
				  margin-bottom: 16px;
				  margin-top: 0;
				}
				p:last-child {
				  margin-bottom: 0;
				}
				svg {
				  fill: currentColor;
				}
				wbr {
				  @media (min-width: 480px) {
					display: block;
				  }
				}
		   `,
		},
	],
});
