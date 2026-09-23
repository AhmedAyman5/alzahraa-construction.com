import type { Route } from './+types/equipment';
import { seo } from '@/lib/seo';
import { tFromMatches } from '@/lib/t-from-matches';
import { EQUIPMENT_GALLERY } from '@/data/equipment';
import { SectionHeading } from '@/components/section-heading';
import { Tractor } from 'lucide-react';
import { useT } from '@/i18n';

export function meta({ matches, location }: Route.MetaArgs) {
	const t = tFromMatches(matches);
	return seo({ matches, location }, {
		title: t.meta.equipmentTitle,
		description: t.meta.equipmentDescription,
		image: EQUIPMENT_GALLERY[0].image,
	});
}

export default function Equipment() {
	const t = useT();

	return (
		<>
			<section className="bg-navy py-20 text-primary-foreground">
				<div className="mx-auto max-w-7xl px-4 sm:px-6">
					<p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">{t.equipmentPage.kicker}</p>
					<h1 className="mt-3 text-4xl font-black sm:text-5xl">{t.equipmentPage.heroTitle}</h1>
					<p className="mt-4 max-w-2xl leading-8 text-primary-foreground/70">
						{t.equipmentPage.heroSubtitle}
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
				<div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
					{t.equipment.map((item, i) => (
						<div key={i} className="bg-card p-8">
							<Tractor className="size-8 text-gold" strokeWidth={1.8} />
							<h2 className="mt-4 text-lg font-extrabold text-navy">{item.name}</h2>
							<p className="mt-1 font-display text-2xl font-black text-gold">{item.count}</p>
							<p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
						</div>
					))}
				</div>
			</section>

			<section className="bg-secondary/60 py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6">
					<SectionHeading index="٠١" kicker={t.equipmentPage.galleryKicker} title={t.equipmentPage.galleryTitle} align="center" />
					<div className="mt-14 grid gap-10 md:grid-cols-3">
						{EQUIPMENT_GALLERY.map((item, i) => (
							<figure key={i}>
								<div className="frame-window">
									<img
										src={item.image}
										alt={t.equipmentGallery[i].alt}
										className="aspect-[3/2] w-full object-cover"
										loading="lazy"
										width={800}
										height={533}
									/>
								</div>
								<figcaption className="mt-5 text-center text-sm font-bold text-navy">{t.equipmentGallery[i].caption}</figcaption>
							</figure>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
