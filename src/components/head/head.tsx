import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
	const head = useDocumentHead();
	const location = useLocation();

	return (
		<>
			<meta charSet="utf-8" />

			<title>{head.title}</title>

			<meta content="width=device-width, initial-scale=1.0" name="viewport" />
			<meta content="@thasmo@mastodon.social" name="fediverse:creator" />

			{head.meta.map(meta => (
				<meta key={meta.key} {...meta} />
			))}

			<link href="https://avatar.thasmo.com/favicon.ico" rel="icon" />
			<link href="https://mastodon.social/@thasmo" rel="me" />
			<link href="/manifest.json" rel="manifest" />
			<link href={location.url.href} rel="canonical" />

			{head.links.map(link => (
				<link key={link.key} {...link} />
			))}

			{head.styles.map(style => (
				<style key={style.key} {...style.props} dangerouslySetInnerHTML={style.style} />
			))}
		</>
	);
});
