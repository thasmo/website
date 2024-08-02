import { component$, type PropsOf } from '@builder.io/qwik';

import Gravatar from '~/components/gravatar/gravatar';
import profile from '~/data/profile.json';

import * as styles from './profile.styles';

export type ProfileProperties = PropsOf<'div'>;

export default component$<ProfileProperties>(({ ...properties }) => {
	return (
		<div class={styles.profile} {...properties}>
			<figure class={styles.figure}>
				<span class={styles.link}>
					<Gravatar
						alt={`Photo of ${profile.name}`}
						email={profile.email}
						size={256}
					/>
				</span>

				<a
					class={styles.employer}
					href={profile.employer.website}
					rel="noopener">
					<Gravatar
						alt={`Photo of ${profile.employer.name}`}
						email={profile.employer.email}
						size={72}
					/>
				</a>
			</figure>
		</div>
	);
});
