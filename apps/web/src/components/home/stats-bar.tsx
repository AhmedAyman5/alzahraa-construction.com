import { useT } from '@/i18n';

const STAT_VALUES = ['+15', '+280', '+120', '+50'] as const;

export function StatsBar() {
	const t = useT();
	const labels = [t.stats.experience, t.stats.projects, t.stats.clients, t.stats.equipment];

	return (
		<section className="relative z-10 mx-auto -mt-16 max-w-6xl px-4 sm:px-6" aria-label={t.stats.ariaLabel}>
			<div className="grid grid-cols-2 divide-x divide-x-reverse divide-border border border-border bg-card shadow-xl shadow-navy/10 lg:grid-cols-4">
				{STAT_VALUES.map((value, i) => (
					<div key={value} className="px-6 py-8 text-center">
						<p className="font-display text-4xl font-black text-gold sm:text-5xl" dir="ltr">{value}</p>
						<p className="mt-2 text-sm font-bold text-navy">{labels[i]}</p>
					</div>
				))}
			</div>
		</section>
	);
}
