import {type PropsOf} from '@builder.io/qwik';

export default function (props: PropsOf<'svg'>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m24 12l-5.657 5.657l-1.414-1.414L21.172 12l-4.243-4.243l1.414-1.414zM2.828 12l4.243 4.243l-1.414 1.414L0 12l5.657-5.657L7.07 7.757zm6.96 9H7.66l6.552-18h2.128z"></path></svg>
	);
}