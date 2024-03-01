import {component$, type PropsOf} from '@builder.io/qwik';
import Headline from '~/components/headline/headline';

import * as styles from './project.styles';

export type ProjectProperties = PropsOf<'article'> & {
	name: string;
	description?: string;
	address: string;
};

export default component$<ProjectProperties>(({ name, description, address, ...props }) => {
	return (
		<article class={styles.project} {...props}>
			<Headline class={styles.title} level={3}>
				<a href={address} rel="noopener">
					{name}
				</a>
			</Headline>

			{description && <p>{description}</p>}
		</article>
	);
});
