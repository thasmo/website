import { component$, type PropsOf, Slot } from '@builder.io/qwik';

import { headline } from '~/components/headline/headline.styles';
import { cx, type RecipeVariantProps } from '~/styles/css';

export type HeadlineProperties = PropsOf<'div'> &
	RecipeVariantProps<typeof headline> & {
		tag?: string;
	};

export default component$<HeadlineProperties>(({ level = 1, tag, ...properties }) => {
	const Headline = tag || `h${level}`;

	const [styleProperties, componentProperties] = headline.splitVariantProps({
		level,
		...properties,
	});

	componentProperties.class = cx(headline(styleProperties), componentProperties.class as string);

	return (
		<Headline {...componentProperties}>
			<Slot />
		</Headline>
	);
});
