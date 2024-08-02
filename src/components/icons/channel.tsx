import { component$, type PropsOf } from '@builder.io/qwik';

import Email from '~/components/icons/channels/email';
import GitHub from '~/components/icons/channels/github';
import LinkedIn from '~/components/icons/channels/linkedin';
import StackOverflow from '~/components/icons/channels/stackoverflow';
import Twitter from '~/components/icons/channels/twitter';
import Xing from '~/components/icons/channels/xing';

export type ChannelProperties = {
	type: string;
} & PropsOf<'svg'>;

export default component$<ChannelProperties>(({ type, ...properties }) => {
	switch (type) {
		case 'email': {
			return <Email {...properties} />;
		}

		case 'github': {
			return <GitHub {...properties} />;
		}

		case 'linkedin': {
			return <LinkedIn {...properties} />;
		}

		case 'stackoverflow': {
			return <StackOverflow {...properties} />;
		}

		case 'twitter': {
			return <Twitter {...properties} />;
		}

		case 'xing': {
			return <Xing {...properties} />;
		}
	}
});
