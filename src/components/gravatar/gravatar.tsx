import {component$, type PropsOf, useSignal, useTask$} from '@builder.io/qwik';
import {generatePlaceholder} from '~/components/gravatar/gravatar.utilities';

import * as styles from './gravatar.styles';

export type GravatarProperties = PropsOf<'img'> & {
	email: string;
	size: number;
};

export default component$<GravatarProperties>(({ email, size, ...props}) => {
	const source = useSignal<string>();

	useTask$(async () => {
		source.value = await generatePlaceholder(email, size);
	});

	return (
		<div class={styles.gravatar}>
			<img class={styles.image}
				 src={`data:image/png;base64,${source.value}`}
				 width={size}
				 height={size}
				 decoding="async"
				 {...props} />
		</div>
	);
});
