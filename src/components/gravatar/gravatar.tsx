import {
	component$,
	type PropsOf,
	useSignal,
	useTask$,
} from '@builder.io/qwik';
import { generateHash } from '~/components/gravatar/gravatar.utilities';

import * as styles from './gravatar.styles';

export type GravatarProperties = PropsOf<'img'> & {
	email: string;
	size: number;
};

export default component$<GravatarProperties>(({ email, size, ...props }) => {
	const low = useSignal<string>();
	const high = useSignal<string>();

	useTask$(async () => {
		const hash = await generateHash(email);

		low.value = `https://avatar.thasmo.com/${hash}/${size}`;
		high.value = `https://avatar.thasmo.com/${hash}/${size * 2}`;
	});

	return (
		<div class={styles.gravatar}>
			<img
				class={styles.image}
				src={low.value}
				srcset={`${low.value} 1x, ${high.value} 2x`}
				width={size}
				height={size}
				decoding="async"
				{...props}
			/>
		</div>
	);
});
