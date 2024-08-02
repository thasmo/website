import { component$, type PropsOf, type Signal, Slot } from '@builder.io/qwik';

import * as styles from './panel.styles';

export type PanelProperties = {
	isActive: Signal<boolean>;
} & PropsOf<'main'>;

export default component$<PanelProperties>(({ isActive, ...properties }) => {
	return (
		<main class={styles.panel} data-active={isActive.value} {...properties}>
			<section class={styles.content}>
				<Slot />
			</section>
		</main>
	);
});
