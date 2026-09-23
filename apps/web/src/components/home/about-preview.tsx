import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { IMAGES } from '@/data/site';
import { useLocale } from '@/i18n';

export function AboutPreview() {
	const { locale, t } = useLocale();
	const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

	return (
		<section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
			<div className="grid items-center gap-12 lg:grid-cols-2">
				<div>
					<SectionHeading index="٠١" kicker={t.aboutPreview.kicker} title={t.aboutPreview.title} />
					<p className="mt-6 text-lg leading-9 text-muted-foreground">
						{t.aboutPreview.body}
					</p>
					<Link
						to="/about"
						className="mt-8 inline-flex min-h-11 items-center gap-2 border-b-2 border-gold pb-1 font-extrabold text-navy transition-colors hover:text-gold"
					>
						{t.aboutPreview.cta}
						<Arrow className="size-4" />
					</Link>
				</div>
				<div className="frame-window">
					<img
						src={IMAGES.engineerBlueprint}
						alt={t.aboutPreview.imageAlt}
						className="h-full w-full object-cover"
						loading="lazy"
						width={800}
						height={600}
					/>
				</div>
			</div>
		</section>
	);
}
