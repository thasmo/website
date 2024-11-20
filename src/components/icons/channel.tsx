import { component$, type PropsOf } from '@builder.io/qwik';

import Bluesky from '~/components/icons/channels/bluesky';
import Email from '~/components/icons/channels/email';
import GitHub from '~/components/icons/channels/github';
import LinkedIn from '~/components/icons/channels/linkedin';
import StackOverflow from '~/components/icons/channels/stackoverflow';
import Xing from '~/components/icons/channels/xing';

export type ChannelProperties = PropsOf<'svg'> & {
	type: string;
};

export default component$<ChannelProperties>(({ type, ...properties }) => {
	switch (type) {
		case 'bluesky': {
			return <Bluesky {...properties} />;
		}

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

		case 'xing': {
			return <Xing {...properties} />;
		}
	}
});
