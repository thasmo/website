import { component$, type PropsOf, Slot } from '@builder.io/qwik';

import Headline from '~/components/headline/headline';

import * as styles from './section.styles';

export type SectionProperties = PropsOf<'section'> & {
	title: string;
};

export default component$<SectionProperties>(({ title, ...props }) => {
	return (
		<section class={styles.section} {...props}>
			<Headline class={styles.headline} level={2}>
				{title}
			</Headline>

			<div class={styles.content}>
				<Slot />
			</div>
		</section>
	);
});
