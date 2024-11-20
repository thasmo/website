import { component$, type PropsOf } from '@builder.io/qwik';

import Channel from '~/components/icons/channel';

import * as styles from './channel.styles';

export type ChannelProperties = PropsOf<'a'> & {
	address: string;
	color: string;
	primary?: boolean;
	title: string;
	type: string;
};

export default component$<ChannelProperties>(
	({ address, class: classes, color, title, type, ...properties }) => {
		return (
			<a
				class={[styles.channel, classes]}
				href={address}
				rel="me noopener"
				style={`--color: ${color};`}
				title={title}
				{...properties}>
				<Channel type={type} />
			</a>
		);
	},
);
