import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import './assets/style/main.scss';

const resources = {
	manifest: '/application.webmanifest',
	fonts: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700%7cRoboto+Slab:300,400&display=swap',
	icon: 'https://gravatar.com/avatar/39263d15a3b0838a938aaaa59dde5c06?s=256',
};

export default (Vue, {
	head,
}) => {
	Sentry.init({
		dsn: 'https://63e0d3ab99474ad899aaaec764cc7962@sentry.io/1493240',
		integrations: [new Integrations.Vue({
			Vue,
			attachProps: true,
		})],
	});

	head.link.push({
		rel: 'manifest',
		href: resources.manifest,
	});

	head.link.push({
		rel: 'preload',
		href: resources.fonts,
		as: 'style',
		crossorigin: 'anonymous',
	});

	head.link.push({
		rel: 'stylesheet',
		href: resources.fonts,
	});

	head.link.push({
		rel: 'icon',
		href: resources.icon,
	});

	if (process.isClient) {
		window.addEventListener('load', () => import('pwacompat'));
	}
};
