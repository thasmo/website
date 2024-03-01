import {$, component$, Slot, useOnDocument, useSignal} from "@builder.io/qwik";
import type {RequestHandler} from "@builder.io/qwik-city";

import Stage from '~/components/stage/stage';
import Panel from '~/components/panel/panel';
import Bar from '~/components/bar/bar';
import Section from '~/components/section/section';
import Project from '~/components/project/project';
import Contact from '~/components/contact/contact';
import Headline from "~/components/headline/headline";

import * as styles from './layout.styles';

import profile from '~/data/profile.json';
import channels from '~/data/channels.json';
import projects from '~/data/projects.json';

import '@fontsource-variable/roboto-condensed/wght.css';
import '@fontsource-variable/roboto-slab/wght.css';

export const onGet: RequestHandler = async ({cacheControl}) => {
	cacheControl({
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		maxAge: 5,
	});
};

export default component$(() => {
	const bar = useSignal<Element>();
	const panel = useSignal<Element>();
	const isActive = useSignal(false);

	useOnDocument('click', $((event) => {
		if (
			!panel.value?.contains(event.target as Node) &&
			!bar.value?.contains(event.target as Node)
		) {
			isActive.value = false;
		}
	}));

	return (
		<Stage>
			<Slot/>

			<Panel ref={panel} isActive={isActive}>
				<header class={styles.header}>
					<Headline class={styles.headline} level={1}>
						{profile.name}
					</Headline>

					<p>
						<b>{profile.position} from {profile.location},</b>
						<wbr/>
						pushing the web's boundaries at
						<wbr/>
						<a href={profile.employer.website} rel="noopener">{profile.employer.name}</a>.
					</p>
				</header>

				<Section title="Side Projects">
					{projects.map((project) => (
						<Project
							key={project.address}
							name={project.name}
							address={project.address}
							description={project.description}/>
					))}
				</Section>

				<Section title="Contact">
					{channels.map((channel) => (
						<p key={channel.type}>
							<Contact
								type={channel.type}
								address={channel.address}
								label={channel.label}/>
						</p>
					))}
				</Section>
			</Panel>

			<Bar
				ref={bar}
				channels={channels}
				isActive={isActive}
				onToggle={$(() => isActive.value = !isActive.value)}
			/>
		</Stage>
	);
});
