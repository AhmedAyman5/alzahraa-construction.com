const LOCAL_HOSTNAMES = new Set([
	'localhost',
	'127.0.0.1',
	'0.0.0.0',
	'[::1]',
]);

const PRODUCTION_ORIGIN = 'https://alzahraa-construction.com';

export const siteOrigin = (request: Request): string => {
	const { host, hostname } = new URL(request.url);

	// React Router prerender/build runs through a temporary localhost server.
	// In that case generate production URLs.
	if (LOCAL_HOSTNAMES.has(hostname)) {
		return PRODUCTION_ORIGIN;
	}

	return `https://${host}`;
};