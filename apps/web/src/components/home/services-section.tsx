import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { SERVICES } from '@/data/services';
import { useLocale } from '@/i18n';

export function ServicesSection() {
	const { locale, t } = useLocale();
	const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

	return (
		<section className="bg-secondary/60 py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6">
				<SectionHeading
					index="٠٢"
					kicker={t.servicesHome.kicker}
					title={t.servicesHome.title}
					description={t.servicesHome.description}
				/>

				<div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
					{SERVICES.map((service, i) => (
						<Link
							key={service.id}
							to={`/services#${service.id}`}
							className="group relative block overflow-hidden bg-card"
						>
							<div className="relative h-52 overflow-hidden">
								<img
									src={service.image}
									alt={t.services[i].imageAlt}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									loading="lazy"
									width={600}
									height={400}
								/>
								<span className="index-number absolute end-4 top-3 text-5xl" aria-hidden="true">
									{String(i + 1).padStart(2, '0')}
								</span>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-extrabold text-navy transition-colors group-hover:text-gold">
									{t.services[i].title}
								</h3>
								<p className="mt-2 text-sm leading-7 text-muted-foreground">{t.services[i].summary}</p>
								<span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold">
									{t.servicesHome.detailsLink}
									<Arrow className={`size-4 transition-transform ${locale === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
