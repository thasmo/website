export const generateHash = async (email: string): Promise<string> => {
	const value = new TextEncoder().encode(email);
	const buffer = await crypto.subtle.digest('SHA-256', value);
	const items = Array.from(new Uint8Array(buffer));

	return items.map((b) => b.toString(16).padStart(2, '0')).join('');
};

export const generateSource = async (
	email: string,
	size = 256,
): Promise<string> => {
	const hash = await generateHash(email);
	return `https://gravatar.com/avatar/${hash}?s=${size}`;
};

export const generatePlaceholder = async (
	email: string,
	size = 256,
): Promise<string> => {
	const source = await generateSource(email, size);
	const response = await fetch(source);
	const buffer = await response.arrayBuffer();

	return Buffer.from(buffer).toString('base64');
};
