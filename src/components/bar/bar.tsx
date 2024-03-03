import {
	component$,
	type PropsOf,
	type QRL,
	type Signal,
} from '@builder.io/qwik';
import Channel, { type ChannelProperties } from '~/components/channel/channel';
import PanelOpen from '~/components/icons/panel-open';
import PanelClose from '~/components/icons/panel-close';

import * as styles from './bar.styles';

export type BarProperties = PropsOf<'aside'> & {
	channels: ChannelProperties[];
	isActive: Signal<boolean>;
	onToggle: QRL<(event?: Event) => boolean>;
};

export default component$<BarProperties>(
	({ channels, isActive, onToggle, ...props }) => {
		return (
			<aside class={styles.bar} data-active={isActive.value} {...props}>
				<p class={[styles.social, 'group']} data-active={isActive.value}>
					{channels
						.filter((channel) => channel.primary)
						.map((channel) => (
							<Channel
								class={styles.channel}
								key={channel.address}
								address={channel.address}
								title={channel.title}
								type={channel.type}
								color={channel.color}
							/>
						))}
				</p>

				{!isActive.value && (
					<button
						class={styles.button}
						title="more information"
						type="button"
						onClick$={() => onToggle()}
						data-active={isActive.value}>
						<PanelOpen />
					</button>
				)}

				{isActive.value && (
					<button
						class={styles.button}
						title="less information"
						type="button"
						onClick$={() => onToggle()}
						data-active={isActive.value}>
						<PanelClose />
					</button>
				)}
			</aside>
		);
	},
);
