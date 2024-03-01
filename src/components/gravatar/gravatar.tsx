import {component$, type PropsOf, useSignal, useTask$} from '@builder.io/qwik';
import {generatePlaceholder, generateSource} from '~/components/gravatar/gravatar.utilities';

import * as styles from './gravatar.styles';

export type GravatarProperties = PropsOf<'img'> & {
	email: string;
	size: number;
};

export default component$<GravatarProperties>(({ email, size, ...props}) => {
	const preview = useSignal<string>();
	const image = useSignal<string>();

	useTask$(async () => {
		preview.value = await generatePlaceholder(email, size / 10);
	});

	useTask$(async () => {
		image.value = await generateSource(email, size);
	});

	return (
		<div class={styles.gravatar}>
			<img class={styles.preview}
				 src={`data:image/png;base64,${preview.value}`}
				 width={size}
				 height={size}
				 decoding="async"
				 {...props} />

			<img class={styles.image}
				 src={image.value}
				 width={size}
				 height={size}
				 decoding="async"
				 {...props} />
		</div>
	);
});
