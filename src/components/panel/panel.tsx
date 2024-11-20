import { component$, type PropsOf, type Signal, Slot } from '@builder.io/qwik';

import * as styles from './panel.styles';

export type PanelProperties = PropsOf<'main'> & {
	isActive: Signal<boolean>;
};

export default component$<PanelProperties>(({ isActive, ...properties }) => {
	return (
		<main class={styles.panel} data-active={isActive.value} {...properties}>
			<section class={styles.content}>
				<Slot />
			</section>
		</main>
	);
});
