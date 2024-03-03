import { css } from '~/styles/css';

export const channel = css({
	position: 'relative',
	display: 'flex',
	flexGrow: 1,
	justifyContent: 'center',
	alignItems: 'center',
	color: '#ccc',
	fontSize: '28px',
	textDecoration: 'none',
	transition: 'color 250ms, opacity 250ms, background 250ms',
});

export const icon = css({
	width: '100%',
	maxWidth: '32px',
});
