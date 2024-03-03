import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

import { generateSource } from '~/components/gravatar/gravatar.utilities';

import profile from '~/data/profile.json';

export default component$(() => {
	const icon = useSignal<string>();

	const head = useDocumentHead();
	const location = useLocation();

	useTask$(async () => {
		icon.value = await generateSource(profile.email);
	});

	return (
		<>
			<meta charSet={'utf-8'} />

			<title>{head.title}</title>

			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			{head.meta.map((meta) => (
				<meta key={meta.key} {...meta} />
			))}

			<link rel="icon" href={icon.value} />
			<link rel="manifest" href="/manifest.json" />
			<link rel="canonical" href={location.url.href} />

			{head.links.map((link) => (
				<link key={link.key} {...link} />
			))}

			{head.styles.map((style) => (
				<style
					key={style.key}
					{...style.props}
					dangerouslySetInnerHTML={style.style}
				/>
			))}
		</>
	);
});
