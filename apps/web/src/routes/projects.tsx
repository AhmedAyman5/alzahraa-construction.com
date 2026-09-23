import type { Route } from './+types/projects';
import { seo } from '@/lib/seo';
import { tFromMatches } from '@/lib/t-from-matches';
import { PROJECTS } from '@/data/projects';
import { MapPin, Calendar } from 'lucide-react';
import { useT } from '@/i18n';

export function meta({ matches, location }: Route.MetaArgs) {
	const t = tFromMatches(matches);
	return seo({ matches, location }, {
		title: t.meta.projectsTitle,
		description: t.meta.projectsDescription,
		image: PROJECTS[0].image,
	});
}

export default function Projects() {
	const t = useT();

	return (
		<>
			<section className="bg-navy py-20 text-primary-foreground">
				<div className="mx-auto max-w-7xl px-4 sm:px-6">
					<p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">{t.projectsPage.kicker}</p>
					<h1 className="mt-3 text-4xl font-black sm:text-5xl">{t.projectsPage.heroTitle}</h1>
					<p className="mt-4 max-w-2xl leading-8 text-primary-foreground/70">
						{t.projectsPage.heroSubtitle}
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
					{PROJECTS.map((project, i) => (
						<article key={i} className="group">
							<div className="frame-window relative overflow-hidden">
								<img
									src={project.image}
									alt={t.projects[i].imageAlt}
									className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
									loading="lazy"
									width={800}
									height={533}
								/>
								{project.sample ? (
									<span className="absolute start-3 top-3 bg-navy px-3 py-1 text-xs font-bold text-gold">
										{t.projectsPage.sampleBadge}
									</span>
								) : null}
								<span className="index-number absolute end-3 top-2 text-5xl" aria-hidden="true">
									{String(i + 1).padStart(2, '0')}
								</span>
							</div>
							<div className="mt-5">
								<p className="text-xs font-extrabold uppercase tracking-widest text-gold">{t.projects[i].category}</p>
								<h2 className="mt-1 text-xl font-extrabold text-navy">{t.projects[i].title}</h2>
								<div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
									<span className="flex items-center gap-1">
										<MapPin className="size-4 text-gold" />
										{t.projects[i].location}
									</span>
									<span className="flex items-center gap-1">
										<Calendar className="size-4 text-gold" />
										{project.year}
									</span>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>
		</>
	);
}
