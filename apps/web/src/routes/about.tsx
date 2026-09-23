import type { Route } from './+types/about';
import { seo } from '@/lib/seo';
import { tFromMatches } from '@/lib/t-from-matches';
import { SectionHeading } from '@/components/section-heading';
import { IMAGES } from '@/data/site';
import { Eye, Target, HeartHandshake, Users } from 'lucide-react';
import { useT } from '@/i18n';

export function meta({ matches, location }: Route.MetaArgs) {
	const t = tFromMatches(matches);
	return seo({ matches, location }, {
		title: t.meta.aboutTitle,
		description: t.meta.aboutDescription,
		image: IMAGES.team,
	});
}

const VALUE_ICONS = [Eye, Target, HeartHandshake];

export default function About() {
	const t = useT();

	return (
		<>
			<section className="bg-navy py-20 text-primary-foreground">
				<div className="mx-auto max-w-7xl px-4 sm:px-6">
					<p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">{t.aboutPage.kicker}</p>
					<h1 className="mt-3 text-4xl font-black sm:text-5xl">{t.aboutPage.heroTitle}</h1>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div>
						<SectionHeading index="٠١" kicker={t.aboutPage.storyKicker} title={t.aboutPage.storyTitle} />
						<p className="mt-6 text-lg leading-9 text-muted-foreground">
							{t.aboutPage.storyBody}
						</p>
					</div>
					<div className="frame-window">
						<img
							src={IMAGES.team}
							alt={t.aboutPage.teamImageAlt}
							className="h-full w-full object-cover"
							loading="lazy"
							width={800}
							height={600}
						/>
					</div>
				</div>

				<div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-3">
					{t.aboutPage.values.map((value, i) => {
						const Icon = VALUE_ICONS[i];
						return (
							<div key={i} className="bg-card p-8">
								<Icon className="size-8 text-gold" strokeWidth={1.8} />
								<h2 className="mt-4 text-xl font-extrabold text-navy">{value.title}</h2>
								<p className="mt-2 leading-8 text-muted-foreground">{value.text}</p>
							</div>
						);
					})}
				</div>
			</section>

			<section className="bg-secondary/60 py-20">
				<div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
					<div className="frame-window order-last lg:order-first">
						<img
							src={IMAGES.scaffolding}
							alt={t.aboutPage.scaffoldingAlt}
							className="h-full w-full object-cover"
							loading="lazy"
							width={800}
							height={600}
						/>
					</div>
					<div>
						<SectionHeading index="٠٢" kicker={t.aboutPage.teamKicker} title={t.aboutPage.teamTitle} />
						<ul className="mt-8 space-y-4">
							{t.aboutPage.teamList.map(item => (
								<li key={item} className="flex items-center gap-3 border-b border-border pb-4 text-lg font-bold text-navy">
									<Users className="size-5 shrink-0 text-gold" />
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
