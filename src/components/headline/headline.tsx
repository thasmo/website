import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import type { RecipeVariantProps } from '~/styles/css';
import { headline } from '~/components/headline/headline.styles';
import { cx } from '~/styles/css';

export type HeadlineProperties = PropsOf<'div'>
	& RecipeVariantProps<typeof headline> & {
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
