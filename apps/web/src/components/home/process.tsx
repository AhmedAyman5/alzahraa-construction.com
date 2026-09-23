import { ClipboardCheck, DraftingCompass, HardHat, KeyRound } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { useT } from '@/i18n';

const STEP_ICONS = [ClipboardCheck, DraftingCompass, HardHat, KeyRound];

export function Process() {
	const t = useT();

	return (
		<section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
			<SectionHeading
				index="٠٣"
				kicker={t.process.kicker}
				title={t.process.title}
				align="center"
			/>

			<ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
				{t.process.steps.map((step, i) => {
					const Icon = STEP_ICONS[i];
					return (
						<li key={i} className="relative text-center">
							<span className="index-number text-7xl" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
							<div className="mx-auto -mt-6 flex size-16 items-center justify-center rounded-full border-2 border-gold bg-background">
								<Icon className="size-7 text-navy" strokeWidth={1.8} />
							</div>
							<h3 className="mt-4 text-lg font-extrabold text-navy">{step.title}</h3>
							<p className="mt-2 text-sm leading-7 text-muted-foreground">{step.text}</p>
						</li>
					);
				})}
			</ol>
		</section>
	);
}
