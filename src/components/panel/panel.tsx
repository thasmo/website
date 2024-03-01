import {component$, type PropsOf, type Signal, Slot} from '@builder.io/qwik';

import * as styles from './panel.styles';

export type PanelProperties = PropsOf<'div'> & {
	isActive: Signal<boolean>;
};

export default component$<PanelProperties>(({ isActive, ...props }) => {
	return (
		<div class={styles.panel} role="main" data-active={isActive.value} {...props}>
			<section class={styles.content}>
				<Slot/>
			</section>
		</div>
	);
});
