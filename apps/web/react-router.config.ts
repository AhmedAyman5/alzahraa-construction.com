import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: 'src',
	buildDirectory: '../../dist/apps/web',

	// مهم: يمنع طلب /__manifest أثناء التنقل
	routeDiscovery: {
		mode: 'initial',
	},

	async prerender() {
		return [
			'/',
			'/about',
			'/services',
			'/projects',
			'/equipment',
			'/contact',
		];
	},
} satisfies Config;