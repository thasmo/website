import { css } from '~/styles/css';

export const stage = css({
	_before: {
		content: '""',
		display: 'inline-block',
		height: '100%',
		verticalAlign: 'middle',
		width: 0,
	},
	_osDark: {
		backgroundColor: 'base',
		color: 'subtle',
	},
	backgroundColor: 'subtle',
	height: '100vh',
	overflow: 'hidden',
	position: 'relative',
	verticalAlign: 'middle',
	width: '100vw',
});
