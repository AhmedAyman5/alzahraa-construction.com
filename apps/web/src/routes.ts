import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('about', 'routes/about.tsx'),
	route('services', 'routes/services.tsx'),
	route('projects', 'routes/projects.tsx'),
	route('equipment', 'routes/equipment.tsx'),
	route('contact', 'routes/contact.tsx'),
	route('sitemap.xml', 'routes/sitemap.xml.ts'),
	route('robots.txt', 'routes/robots.txt.ts'),
	route('api/health', 'routes/api.health.ts'),
	route('api/*', 'routes/api.$.ts'),
] satisfies RouteConfig;
