import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import Head from '~/components/head/head';
import '~/global.css';

export default component$(() => {
	return (
		<QwikCityProvider>
			<head>
				<Head />
			</head>

			<body lang="en">
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	);
});
