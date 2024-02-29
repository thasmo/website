import {component$, type PropsOf } from '@builder.io/qwik';
import Channel from '~/components/icons/channel';

import * as styles from './channel.styles';

export type ChannelProperties = PropsOf<'a'> & {
	title: string;
	address: string;
	type: string;
	color: string;
	primary?: boolean;
};

export default component$<ChannelProperties>(({ title, address, type, color, class: classes, ...props }) => {
	return (
		<a class={[styles.channel, classes]}
		   href={address}
		   title={title}
		   rel="me noopener"
		   style={`--color: ${color};`}
		   {...props}>
			<Channel type={type} />
		</a>
	);
});
