import { SectionHeading } from '@/components/section-heading';
import { IMAGES } from '@/data/site';
import { useT } from '@/i18n';

export function BeforeAfter() {
	const t = useT();

	return (
		<section className="bg-navy py-24 text-primary-foreground">
			<div className="mx-auto max-w-7xl px-4 sm:px-6">
				<div className="text-center">
					<p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">{t.beforeAfter.kicker}</p>
					<h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{t.beforeAfter.title}</h2>
					<p className="mx-auto mt-4 max-w-2xl leading-8 text-primary-foreground/70">
						{t.beforeAfter.description}
					</p>
				</div>

				<div className="mt-14 grid gap-8 md:grid-cols-2">
					<figure>
						<div className="frame-window">
							<img
								src={IMAGES.landBefore}
								alt={t.beforeAfter.beforeAlt}
								className="aspect-[3/2] w-full object-cover grayscale-[40%]"
								loading="lazy"
								width={800}
								height={533}
							/>
						</div>
						<figcaption className="mt-5 text-center text-sm font-bold tracking-widest text-primary-foreground/60">
							{t.beforeAfter.beforeCaption}
						</figcaption>
					</figure>
					<figure>
						<div className="frame-window">
							<img
								src={IMAGES.villaAfter}
								alt={t.beforeAfter.afterAlt}
								className="aspect-[3/2] w-full object-cover"
								loading="lazy"
								width={800}
								height={533}
							/>
						</div>
						<figcaption className="mt-5 text-center text-sm font-bold tracking-widest text-gold">
							{t.beforeAfter.afterCaption}
						</figcaption>
					</figure>
				</div>
			</div>
		</section>
	);
}
