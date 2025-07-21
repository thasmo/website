import type { UserConfig } from 'vite';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { macroPlugin } from '@builder.io/vite-plugin-macro';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig((): UserConfig => {
	return {
		plugins: [macroPlugin({ preset: 'pandacss' }), qwikCity(), qwikVite(), tsconfigPaths()],
		preview: {
			headers: {
				'Cache-Control': 'public, max-age=600',
			},
		},
		server: {
			headers: {
				'Cache-Control': 'public, max-age=0',
			},
		},
	};
});
