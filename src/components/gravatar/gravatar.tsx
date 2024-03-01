import {component$, type PropsOf, useSignal, useTask$} from '@builder.io/qwik';
import {generateSource} from '~/components/gravatar/gravatar.utilities';

import * as styles from './gravatar.styles';

export type GravatarProperties = PropsOf<'img'> & {
	email: string;
	size: number;
};

export default component$<GravatarProperties>(({ email, size, ...props}) => {
	const low = useSignal<string>();
	const high = useSignal<string>();

	useTask$(async () => {
		low.value = 'https://thasmo.com/.netlify/images?url=' + await generateSource(email, size);
		high.value = 'https://thasmo.com/.netlify/images?url=' + await generateSource(email, size * 2);
	});

	return (
		<div class={styles.gravatar}>
			<img class={styles.image}
				 src={low.value}
				 srcset={`${low.value} 1x, ${high.value} 2x`}
				 width={size}
				 height={size}
				 decoding="async"
				 {...props} />
		</div>
	);
});
