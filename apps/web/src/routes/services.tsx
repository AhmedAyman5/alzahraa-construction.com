import type { Route } from './+types/services';
import { Link } from 'react-router';
import { seo } from '@/lib/seo';
import { tFromMatches } from '@/lib/t-from-matches';
import { SERVICES } from '@/data/services';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from '@/i18n';

export function meta({ matches, location }: Route.MetaArgs) {
	const t = tFromMatches(matches);
	return seo({ matches, location }, {
		title: t.meta.servicesTitle,
		description: t.meta.servicesDescription,
		image: SERVICES[0].image,
	});
}

export default function Services() {
	const { locale, t } = useLocale();
	const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

	return (
		<>
			<section className="bg-navy py-20 text-primary-foreground">
				<div className="mx-auto max-w-7xl px-4 sm:px-6">
					<p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">{t.servicesPage.kicker}</p>
					<h1 className="mt-3 text-4xl font-black sm:text-5xl">{t.servicesPage.heroTitle}</h1>
					<p className="mt-4 max-w-2xl leading-8 text-primary-foreground/70">
						{t.servicesPage.heroSubtitle}
					</p>
				</div>
			</section>

			<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
				{SERVICES.map((service, i) => (
					<section
						key={service.id}
						id={service.id}
						className={cn(
							'grid scroll-mt-28 items-center gap-10 py-14 lg:grid-cols-2',
							i > 0 && 'border-t border-border',
						)}
					>
						<div className={cn(i % 2 === 1 && 'lg:order-last')}>
							<span className="index-number text-7xl" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
							<h2 className="mt-2 text-3xl font-extrabold text-navy">{t.services[i].title}</h2>
							<p className="mt-4 text-lg leading-9 text-muted-foreground">{t.services[i].details}</p>
							<ul className="mt-6 grid gap-3 sm:grid-cols-2">
								{t.services[i].points.map(point => (
									<li key={point} className="flex items-start gap-2 text-sm font-bold text-navy">
										<Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={3} />
										{point}
									</li>
								))}
							</ul>
							<Link
								to="/contact"
								className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-extrabold text-navy transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
							>
								{t.servicesPage.requestQuote}
								<Arrow className="size-4" />
							</Link>
						</div>
						<div className="frame-window">
							<img
								src={service.image}
								alt={t.services[i].imageAlt}
								className="aspect-[3/2] w-full object-cover"
								loading="lazy"
								width={800}
								height={533}
							/>
						</div>
					</section>
				))}
			</div>
		</>
	);
}
