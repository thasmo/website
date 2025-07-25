import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import * as styles from './stage.styles';

export type StageProperties = PropsOf<'div'>;

export default component$<StageProperties>(({ ...properties }) => {
	return (
		<div class={styles.stage} {...properties}>
			<Slot />
		</div>
	);
});
