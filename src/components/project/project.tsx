import { component$, type PropsOf } from '@builder.io/qwik';

import Headline from '~/components/headline/headline';

import * as styles from './project.styles';

export type ProjectProperties = PropsOf<'article'> & {
	address: string;
	description?: string;
	name: string;
};

export default component$<ProjectProperties>(({ address, description, name, ...properties }) => {
	return (
		<article class={styles.project} {...properties}>
			<Headline class={styles.title} level={3}>
				<a href={address} rel="noopener">
					{name}
				</a>
			</Headline>

			{description && <p>{description}</p>}
		</article>
	);
});
