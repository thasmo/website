import { css } from '~/styles/css';

export const profile = css({
	display: 'inline-block',
	maxWidth: '99%',
	position: 'relative',
	sm: {
		top: 'auto',
	},
	top: '-30px',
	transition: 'opacity 250ms, filter 250ms, transform 250ms',
	verticalAlign: 'middle',
	width: '256px',
});

export const figure = css({
	margin: 0,
	position: 'relative',
});

export const link = css({
	backgroundColor: 'blank',
	borderRadius: '100%',
	display: 'block',
	overflow: 'hidden',
});

export const employer = css({
	backgroundColor: 'void',
	borderRadius: '2px',
	bottom: 0,
	display: 'block',
	height: '72px',
	opacity: 1,
	overflow: 'hidden',
	position: 'absolute',
	right: 0,
	transition: 'opacity 250ms',
	width: '72px',
});
