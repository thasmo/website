import { component$, type PropsOf, Slot } from '@builder.io/qwik';

import * as styles from './stage.styles';

export type StageProperties = PropsOf<'div'>;

export default component$<StageProperties>(({ ...props }) => {
	return (
		<div class={styles.stage} {...props}>
			<Slot />
		</div>
	);
});
