import { type PropsOf } from '@builder.io/qwik';

export default function icon(properties: PropsOf<'svg'>) {
	return (
		<svg
			height="1em"
			viewBox="0 0 24 24"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
			{...properties}>
			<path
				d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
				fill="currentColor"></path>
		</svg>
	);
}
