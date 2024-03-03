export default {
	'*': 'pnpm run spellcheck',
	'*.{js,mjs,cjs,jsx,ts,tsx}': 'pnpm run lint',
	'*.{css,json,md,toml,txt}': 'pnpm run fmt.check',
};
