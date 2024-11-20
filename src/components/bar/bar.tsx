import {
	component$,
	type PropsOf,
	type QRL,
	type Signal,
} from '@builder.io/qwik';

import Channel, { type ChannelProperties } from '~/components/channel/channel';
import PanelClose from '~/components/icons/panel-close';
import PanelOpen from '~/components/icons/panel-open';

import * as styles from './bar.styles';

export type BarProperties = PropsOf<'aside'> & {
	channels: ChannelProperties[];
	isActive: Signal<boolean>;
	onToggle: QRL<(event?: Event) => boolean>;
};

export default component$<BarProperties>(
	({ channels, isActive, onToggle, ...properties }) => {
		return (
			<aside class={styles.bar} data-active={isActive.value} {...properties}>
				<p class={[styles.social, 'group']} data-active={isActive.value}>
					{channels
						.filter((channel) => channel.primary)
						.map((channel) => (
							<Channel
								address={channel.address}
								class={styles.channel}
								color={channel.color}
								key={channel.address}
								title={channel.title}
								type={channel.type}
							/>
						))}
				</p>

				{!isActive.value && (
					<button
						class={styles.button}
						data-active={isActive.value}
						onClick$={() => onToggle()}
						title="more information"
						type="button">
						<PanelOpen />
					</button>
				)}

				{isActive.value && (
					<button
						class={styles.button}
						data-active={isActive.value}
						onClick$={() => onToggle()}
						title="less information"
						type="button">
						<PanelClose />
					</button>
				)}
			</aside>
		);
	},
);
