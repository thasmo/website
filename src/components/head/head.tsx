import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
	const head = useDocumentHead();
	const location = useLocation();

	return (
		<>
			<meta charSet={'utf-8'} />

			<title>{head.title}</title>

			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			{head.meta.map((meta) => (
				<meta key={meta.key} {...meta} />
			))}

			<link rel="icon" href="https://avatar.thasmo.com/favicon.ico" />
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
