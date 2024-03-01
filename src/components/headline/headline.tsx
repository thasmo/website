import {component$, type PropsOf, Slot} from '@builder.io/qwik';
import {headline} from '~/components/headline/headline.styles';
import {cx, type RecipeVariantProps} from '~/styles/css';

export type HeadlineProperties = PropsOf<'div'> & RecipeVariantProps<typeof headline> & {
	tag?: string;
};

export default component$<HeadlineProperties>(({ level = 1, tag, ...props}) => {
	const Headline = tag || `h${level}`;
	const [styleProps, componentProps] = headline.splitVariantProps({ level, ...props });

	componentProps.class = cx(headline(styleProps), componentProps.class as string);

	return (
		<Headline {...componentProps}>
			<Slot/>
		</Headline>
	);
});
