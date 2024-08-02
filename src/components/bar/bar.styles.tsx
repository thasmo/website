import { css } from '~/styles/css';

export const bar = css({
	_osDark: {
		backgroundColor: 'void',
	},
	backgroundColor: 'blank',
	bottom: 0,
	display: 'flex',
	height: '50px',
	margin: 0,
	position: 'fixed',
	right: 0,
	sm: {
		bottom: 0,
		height: '100%',
		paddingTop: '50px',
		right: 0,
		top: 0,
		width: '50px',
	},
	width: '100%',
	zIndex: 1,
});

export const social = css({
	display: 'flex',
	float: 'left',
	margin: 0,
	opacity: 1,
	overflow: 'hidden',
	sm: {
		_active: {
			opacity: 0,
			transform: 'translateX(100%)',
		},
		flexDirection: 'column',
		height: '100%',
		width: '100%',
	},
	transition: 'opacity 250ms, background 250ms, transform 250ms',
	width: '80%',
});

export const channel = css({
	_groupHover: {
		_hover: {
			backgroundColor: 'var(--color)',
			color: 'blank',
			opacity: 1,
		},
		opacity: 0,
	},
});

export const button = css({
	_active: {
		color: 'accent',
	},
	_hover: {
		color: 'accent',
	},
	alignItems: 'center',
	aspectRatio: '1',
	display: 'flex',
	flexGrow: 1,
	float: 'right',
	fontSize: '24px',
	justifyContent: 'center',
	rotate: '90deg',
	sm: {
		float: 'none',
		position: 'absolute',
		right: 0,
		rotate: '0deg',
		top: 0,
		width: '100%',
	},
	textAlign: 'center',
	transition: 'color 250ms',
	width: '20%',
});
