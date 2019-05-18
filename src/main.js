import './assets/style/main.scss';

const resources = {
	manifest: '/application.webmanifest',
	fonts: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700%7cRoboto+Slab:300,400&display=swap',
	icon: 'https://gravatar.com/avatar/39263d15a3b0838a938aaaa59dde5c06?s=256',
};

export default (Vue, {
	head,
}) => {
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
