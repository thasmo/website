import type { DocumentHead } from '@builder.io/qwik-city';

import { component$ } from '@builder.io/qwik';

import Profile from '~/components/profile/profile';
import profile from '~/data/profile.json';

export default component$(() => {
	return <Profile />;
});

export const head: DocumentHead = {
	meta: [
		{
			content: profile.biography,
			name: 'description',
		},
	],
	title: `${profile.name} · ${profile.pseudonym}`,
};
