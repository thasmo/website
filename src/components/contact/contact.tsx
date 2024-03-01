import {component$, type PropsOf } from '@builder.io/qwik';

import * as styles from './contact.styles';
import Channel from '../icons/channel';

export type ContactProperties = PropsOf<'a'> & {
	type: string;
	label: string;
	address: string;
};

export default component$<ContactProperties>(({ type, label, address, ...props}) => {
	return (
		<a class={styles.contact} href={address} rel="noopener" {...props}>
			<Channel class={styles.icon} type={type} />
			{label}
		</a>
	);
});
