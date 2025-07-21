export async function generateHash(email: string): Promise<string> {
	const value = new TextEncoder().encode(email);
	const buffer = await crypto.subtle.digest('SHA-256', value);
	const items = [...new Uint8Array(buffer)];

	return items.map(b => b.toString(16).padStart(2, '0')).join('');
}
