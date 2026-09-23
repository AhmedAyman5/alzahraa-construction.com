import { Link } from 'react-router';
import { ArrowLeft, ArrowRight, FolderKanban } from 'lucide-react';
import { IMAGES } from '@/data/site';
import { useLocale } from '@/i18n';

export function Hero() {
	const { locale, t } = useLocale();
	const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

	return (
		<section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-navy-deep">
			<img
				src={IMAGES.hero}
				alt={t.hero.imageAlt}
				className="absolute inset-0 h-full w-full object-cover"
				fetchPriority="high"
				width={1600}
				height={900}
			/>
			<div className={`absolute inset-0 ${locale === 'ar' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-navy-deep/95 via-navy-deep/70 to-navy-deep/30`} />

			<div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
				<div className="max-w-2xl">
					<p className="inline-flex items-center gap-2 border border-gold/50 px-4 py-1.5 text-xs font-bold tracking-widest text-gold">
						{t.hero.badge}
					</p>
					<h1 className="mt-6 text-4xl font-black leading-[1.25] text-white sm:text-5xl lg:text-6xl">
						{t.hero.titleMain} <span className="text-gold">{t.hero.titleAccent}</span>
					</h1>
					<p className="mt-6 text-lg leading-9 text-white/85 sm:text-xl">
						{t.hero.subtitle}
					</p>
					<div className="mt-10 flex flex-col gap-4 sm:flex-row">
						<Link
							to="/contact"
							className="flex min-h-11 items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-base font-extrabold text-navy transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
						>
							{t.hero.ctaPrimary}
							<Arrow className="size-5" />
						</Link>
						<Link
							to="/projects"
							className="flex min-h-11 items-center justify-center gap-2 rounded-sm border border-white/40 px-8 py-4 text-base font-extrabold text-white transition-colors hover:border-gold hover:text-gold active:scale-[0.98]"
						>
							<FolderKanban className="size-5" />
							{t.hero.ctaSecondary}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
