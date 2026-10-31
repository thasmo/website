import { defineConfig } from 'void/config';

export default defineConfig({
	cloudflare: {
		compatibility_date: '2026-06-04',
		compatibility_flags: [
			'nodejs_als',
		],
		name: 'thasmo-website',
		observability: {
			enabled: true,
		},
		preview_urls: true,
		routes: [
			{
				pattern: 'thasmo.com',
				custom_domain: true,
			},
			{
				pattern: 'www.thasmo.com',
				custom_domain: true,
			},
		],
		workers_dev: false,
	},
	inference: {
		appType: 'static',
		build: 'pnpm build',
		outputDir: 'dist/client',
	},
});
