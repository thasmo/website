import type { PropsOf } from '@builder.io/qwik';

export default function icon(properties: PropsOf<'svg'>) {
	return (
		<svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...properties}>
			<path
				d="M18.001 20.003v-5.334h2v7.334h-16v-7.334h2v5.334zM7.6 14.736l.313-1.98l8.837 1.7l-.113 1.586zm1.2-4.532l.732-1.6l7.998 3.733l-.733 1.6zm2.265-3.932l1.133-1.333l6.798 5.665l-1.133 1.333zm4.332-4.132l5.265 7.064l-1.4 1.067l-5.264-7.065zM7.333 18.668v-2h9.33v2z"
				fill="currentColor"
			>
			</path>
		</svg>
	);
}
