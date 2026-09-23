import { CalendarCheck, UserCheck, FileText, Calculator, ShieldCheck, PhoneCall } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useT } from '@/i18n';

const REASON_ICONS = [CalendarCheck, UserCheck, FileText, Calculator, ShieldCheck, PhoneCall];

export function WhyUs() {
	const t = useT();

	return (
		<section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
			<SectionHeading
				index="٠٤"
				kicker={t.whyUs.kicker}
				title={t.whyUs.title}
				align="center"
			/>

			<div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
				{t.whyUs.reasons.map((reason, i) => {
					const Icon = REASON_ICONS[i];
					return (
						<div key={i} className="group bg-card p-8 transition-colors hover:bg-navy">
							<Icon className="size-8 text-gold" strokeWidth={1.8} />
							<h3 className="mt-4 text-lg font-extrabold text-navy transition-colors group-hover:text-white">
								{reason.title}
							</h3>
							<p className="mt-2 text-sm leading-7 text-muted-foreground transition-colors group-hover:text-white/70">
								{reason.text}
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
