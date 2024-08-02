import { css } from '~/styles/css';

export const panel = css({
	_active: {
		opacity: 1,
		visibility: 'visible',
	},
	_osDark: {
		backgroundColor: 'void',
	},
	backgroundColor: 'subtle',
	bottom: 0,
	opacity: 0,
	overflow: 'auto',
	position: 'fixed',
	right: 0,
	sm: {
		_active: {
			opacity: 1,
			transform: 'translateX(0)',
		},
		backgroundColor: 'blank',
		bottom: 0,
		maxWidth: 'calc(100vw - 50px)',
		opacity: 1,
		right: '50px',
		transform: 'translateX(100%)',
		width: '640px',
	},
	textAlign: 'left',
	top: 0,
	transition: 'visibility 250ms, opacity 250ms, transform 250ms',
	visibility: 'hidden',
	width: '100vw',
	zIndex: 1,
});

export const content = css({
	padding: '25px 25px 75px 25px',
	sm: {
		padding: '75px 125px 75px 75px',
	},
});
