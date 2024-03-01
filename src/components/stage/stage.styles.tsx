import {css} from '~/styles/css';

export const stage = css({
	position: 'relative',
	overflow: 'hidden',
	height: '100vh',
	width: '100vw',
	verticalAlign: 'middle',
	backgroundColor: 'subtle',
	_before: {
		content: '""',
		display: 'inline-block',
		height: '100%',
		width: 0,
		verticalAlign: 'middle',
	},
	_osDark: {
		color: 'subtle',
		backgroundColor: 'base',
	},
});
