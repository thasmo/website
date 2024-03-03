import { component$, type PropsOf } from '@builder.io/qwik';

import Email from '~/components/icons/channels/email';
import Xing from '~/components/icons/channels/xing';
import GitHub from '~/components/icons/channels/github';
import LinkedIn from '~/components/icons/channels/linkedin';
import StackOverflow from '~/components/icons/channels/stackoverflow';
import Twitter from '~/components/icons/channels/twitter';

export type ChannelProperties = PropsOf<'svg'> & {
	type: string;
};

export default component$<ChannelProperties>(({ type, ...props }) => {
	switch (type) {
		case 'email':
			return <Email {...props} />;
		case 'xing':
			return <Xing {...props} />;
		case 'github':
			return <GitHub {...props} />;
		case 'linkedin':
			return <LinkedIn {...props} />;
		case 'stackoverflow':
			return <StackOverflow {...props} />;
		case 'twitter':
			return <Twitter {...props} />;
	}
});
