import type { RequestHandler } from '@builder.io/qwik-city';

import {
	$,
	component$,
	Slot,
	useOnDocument,
	useSignal,
} from '@builder.io/qwik';
import '@fontsource-variable/roboto-condensed/wght.css';
import '@fontsource-variable/roboto-slab/wght.css';

import Bar from '~/components/bar/bar';
import Contact from '~/components/contact/contact';
import Headline from '~/components/headline/headline';
import Panel from '~/components/panel/panel';
import Project from '~/components/project/project';
import Section from '~/components/section/section';
import Stage from '~/components/stage/stage';
import channels from '~/data/channels.json';
import profile from '~/data/profile.json';
import projects from '~/data/projects.json';

import * as styles from './layout.styles';

export const onGet: RequestHandler = async ({ cacheControl }) => {
	cacheControl({
		maxAge: 5,
		staleWhileRevalidate: 60 * 60 * 24 * 7,
	});
};

export default component$(() => {
	const bar = useSignal<Element>();
	const panel = useSignal<Element>();
	const isActive = useSignal(false);

	useOnDocument(
		'click',
		$((event) => {
			if (
				!panel.value?.contains(event.target as Node) &&
				!bar.value?.contains(event.target as Node)
			) {
				isActive.value = false;
			}
		}),
	);

	return (
		<Stage>
			<Slot />

			<Panel isActive={isActive} ref={panel}>
				<header class={styles.header}>
					<Headline class={styles.headline} level={1}>
						{profile.name}
					</Headline>

					<p>
						<b>
							{profile.position} from {profile.location},
						</b>
						<wbr />
						pushing the web's boundaries at
						<wbr />
						<a href={profile.employer.website} rel="noopener">
							{profile.employer.name}
						</a>
						.
					</p>
				</header>

				<Section title="Side Projects">
					{projects.map((project) => (
						<Project
							address={project.address}
							description={project.description}
							key={project.address}
							name={project.name}
						/>
					))}
				</Section>

				<Section title="Contact">
					{channels.map((channel) => (
						<p key={channel.type}>
							<Contact
								address={channel.address}
								label={channel.label}
								type={channel.type}
							/>
						</p>
					))}
				</Section>
			</Panel>

			<Bar
				channels={channels}
				isActive={isActive}
				onToggle={$(() => (isActive.value = !isActive.value))}
				ref={bar}
			/>
		</Stage>
	);
});
