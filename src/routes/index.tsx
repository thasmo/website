import {component$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import Profile from '~/components/profile/profile';

import profile from '~/data/profile.json';

export default component$(() => {
	return (
		<>
			<Profile/>
		</>
	);
});

export const head: DocumentHead = {
	title: `${profile.name} · ${profile.pseudonym}`,
	meta: [
		{
			name: "description",
			content: profile.biography,
		},
	],
};
