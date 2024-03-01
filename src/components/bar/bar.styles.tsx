import {css} from '~/styles/css';

export const bar = css({
	display: 'flex',
	position: 'fixed',
	bottom: 0,
	right: 0,
	zIndex: 1,
	width: '100%',
	height: '50px',
	margin: 0,
	backgroundColor: 'blank',
	sm: {
		top: 0,
		right: 0,
		bottom: 0,
		width: '50px',
		height: '100%',
		paddingTop: '50px',
	},
	_osDark: {
		backgroundColor: 'void',
	},
});

export const social = css({
	overflow: 'hidden',
	opacity: 1,
	display: 'flex',
	float: 'left',
	width: '80%',
	margin: 0,
	transition: 'opacity 250ms, background 250ms, transform 250ms',
	sm: {
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		_active: {
			opacity: 0,
			transform: 'translateX(100%)',
		},
	},
});

export const channel = css({
	_groupHover: {
		opacity: 0,
		_hover: {
			opacity: 1,
			color: 'blank',
			backgroundColor: 'var(--color)',
		},
	},
});

export const button = css({
	display: 'flex',
	flexGrow: 1,
	justifyContent: 'center',
	alignItems: 'center',
	float: 'right',
	width: '20%',
	fontSize: '24px',
	textAlign: 'center',
	rotate: '90deg',
	transition: 'color 250ms',
	aspectRatio: '1',
	_hover: {
		color: 'accent',
	},
	_active: {
		color: 'accent',
	},
	sm: {
		position: 'absolute',
		top: 0,
		right: 0,
		width: '100%',
		float: 'none',
		rotate: '0deg',
	},
});
