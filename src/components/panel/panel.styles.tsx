import { css } from '~/styles/css';

export const panel = css({
	opacity: 0,
	visibility: 'hidden',
	overflow: 'auto',
	position: 'fixed',
	top: 0,
	bottom: 0,
	right: 0,
	zIndex: 1,
	width: '100vw',
	textAlign: 'left',
	backgroundColor: 'subtle',
	transition: 'visibility 250ms, opacity 250ms, transform 250ms',
	_active: {
		opacity: 1,
		visibility: 'visible',
	},
	_osDark: {
		backgroundColor: 'void',
	},
	sm: {
		opacity: 1,
		right: '50px',
		bottom: 0,
		width: '640px',
		maxWidth: 'calc(100vw - 50px)',
		backgroundColor: 'blank',
		transform: 'translateX(100%)',
		_active: {
			opacity: 1,
			transform: 'translateX(0)',
		},
	},
});

export const content = css({
	padding: '25px 25px 75px 25px',
	sm: {
		padding: '75px 125px 75px 75px',
	},
});
