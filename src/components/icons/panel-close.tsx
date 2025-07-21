import type { PropsOf } from '@builder.io/qwik';

export default function icon(properties: PropsOf<'svg'>) {
	return (
		<svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...properties}>
			<path
				d="M5 5h8v14H5zm14 14h-4V5h4zM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm7 9L7 8.5v7z"
				fill="currentColor"
			>
			</path>
		</svg>
	);
}
