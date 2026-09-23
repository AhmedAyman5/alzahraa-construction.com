import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { tFromMatches } from '@/lib/t-from-matches';
import { Hero } from '@/components/home/hero';
import { StatsBar } from '@/components/home/stats-bar';
import { AboutPreview } from '@/components/home/about-preview';
import { ServicesSection } from '@/components/home/services-section';
import { Process } from '@/components/home/process';
import { BeforeAfter } from '@/components/home/before-after';
import { WhyUs } from '@/components/home/why-us';
import { CtaBanner } from '@/components/home/cta-banner';
import { IMAGES, SITE } from '@/data/site';
import { CONTACT } from '@/data/contact';

export function meta({ matches, location }: Route.MetaArgs) {
	const t = tFromMatches(matches);
	return seo({ matches, location }, {
		title: t.meta.homeTitle,
		description: t.meta.homeDescription,
		image: IMAGES.hero,
		jsonLd: {
			'@context': 'https://schema.org',
			'@type': 'GeneralContractor',
			name: SITE.name,
			telephone: CONTACT.phone.display,
			email: CONTACT.email.display,
			address: { '@type': 'PostalAddress', addressLocality: t.jsonLd.addressLocality, addressCountry: 'EG' },
		},
	});
}

export default function Home() {
	return (
		<>
			<Hero />
			<StatsBar />
			<AboutPreview />
			<ServicesSection />
			<Process />
			<BeforeAfter />
			<WhyUs />
			<CtaBanner />
		</>
	);
}
