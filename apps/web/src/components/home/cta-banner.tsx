import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SITE } from '@/data/site';
import { useLocale } from '@/i18n';

export function CtaBanner() {
	const { locale, t } = useLocale();
	const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

	return (
		<section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
			<div className="frame-window overflow-hidden">
				<img
					src={SITE.banner}
					alt={t.ctaBanner.bannerAlt}
					className="w-full object-cover"
					loading="lazy"
					width={1568}
					height={512}
				/>
			</div>

			<div className="mt-16 flex flex-col items-center justify-between gap-8 border border-border bg-card p-10 text-center md:flex-row md:text-start">
				<div>
					<h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{t.ctaBanner.title}</h2>
					<p className="mt-2 leading-8 text-muted-foreground">
						{t.ctaBanner.subtitle}
					</p>
				</div>
				<Link
					to="/contact"
					className="flex min-h-11 shrink-0 items-center gap-2 rounded-sm bg-gold px-8 py-4 text-base font-extrabold text-navy transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
				>
					{t.ctaBanner.cta}
					<Arrow className="size-5" />
				</Link>
			</div>
		</section>
	);
}
