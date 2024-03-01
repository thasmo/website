import {component$, type PropsOf} from '@builder.io/qwik';
import profile from "~/data/profile.json";
import Gravatar from '~/components/gravatar/gravatar';

import Code from '~/components/icons/code';

import * as styles from './profile.styles';

export type ProfileProperties = PropsOf<'div'>;

export default component$<ProfileProperties>(({...props}) => {
	return (
		<div class={styles.profile} {...props}>
			<figure class={styles.figure}>
				<span class={styles.link}>
					<Gravatar email={profile.email} size={256} alt={`Photo of ${profile.name}`}/>
				</span>

				<a class={styles.employer}
				   href={profile.employer.website}
				   rel="noopener">
					<Gravatar email={profile.employer.email} size={72} alt={`Photo of ${profile.employer.name}`}/>
				</a>
			</figure>

			<p class={styles.quote}>
				<Code class={styles.icon}/>

				<span>
					web matters,<br/>
					online and offline.
				</span>
			</p>
		</div>
	);
});
