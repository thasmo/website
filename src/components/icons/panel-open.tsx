import type { PropsOf } from '@builder.io/qwik';

export default function icon(properties: PropsOf<'svg'>) {
	return (
		<svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...properties}>
			<path
				d="M13 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h9zm2 18V3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM11 8.5v7L7 12z"
				fill="currentColor"
			>
			</path>
		</svg>
	);
}
