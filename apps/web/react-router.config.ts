import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: 'src',
	buildDirectory: '../../dist/apps/web',
	async prerender() {
		return ['/', '/about', '/services', '/projects', '/equipment', '/contact'];
	},
} satisfies Config;
