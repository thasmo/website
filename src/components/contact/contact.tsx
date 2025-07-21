import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import Channel from '../icons/channel';
import * as styles from './contact.styles';

export type ContactProperties = PropsOf<'a'> & {
	address: string;
	label: string;
	type: string;
};

export default component$<ContactProperties>(({ address, label, type, ...properties }) => {
	return (
		<a class={styles.contact} href={address} rel="noopener" {...properties}>
			<Channel class={styles.icon} type={type} />
			{label}
		</a>
	);
});
