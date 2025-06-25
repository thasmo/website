export default {
	'**/*.{js,jsx,ts,tsx}': ['oxlint'],
	'**/*.{js,jsx,ts,tsx,md,json,yml,yaml}': ['prettier --check', 'cspell --no-progress --no-must-find-files'],
};
