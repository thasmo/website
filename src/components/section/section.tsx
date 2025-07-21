import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import Headline from '~/components/headline/headline';
import * as styles from './section.styles';

export type SectionProperties = PropsOf<'section'> & {
	title: string;
};

export default component$<SectionProperties>(({ title, ...properties }) => {
	return (
		<section class={styles.section} {...properties}>
			<Headline class={styles.headline} level={2}>
				{title}
			</Headline>

			<div class={styles.content}>
				<Slot />
			</div>
		</section>
	);
});
