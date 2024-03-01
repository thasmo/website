import {css} from '~/styles/css';

export const gravatar = css({
	display: 'grid',
});

export const preview = css({
	position: 'relative',
	zIndex: 0,
	gridArea: '1/-1',
	filter: 'blur(8px)',
});

export const image = css({
	position: 'relative',
	zIndex: 1,
	gridArea: '1/-1',
});
