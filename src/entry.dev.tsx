import { render, type RenderOptions } from '@builder.io/qwik';

import Root from './root';

export default function entry(options: RenderOptions) {
	return render(document, <Root />, options);
}
