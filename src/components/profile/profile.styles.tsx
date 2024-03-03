import { css } from '~/styles/css';

export const profile = css({
	position: 'relative',
	top: '-30px',
	display: 'inline-block',
	width: '256px',
	maxWidth: '99%',
	verticalAlign: 'middle',
	transition: 'opacity 250ms, filter 250ms, transform 250ms',
	sm: {
		top: 'auto',
	},
});

export const figure = css({
	position: 'relative',
	margin: 0,
});

export const link = css({
	display: 'block',
	overflow: 'hidden',
	borderRadius: '100%',
	backgroundColor: 'blank',
});

export const employer = css({
	position: 'absolute',
	right: 0,
	bottom: 0,
	opacity: 1,
	display: 'block',
	width: '72px',
	height: '72px',
	overflow: 'hidden',
	borderRadius: '2px',
	backgroundColor: 'void',
	transition: 'opacity 250ms',
});
