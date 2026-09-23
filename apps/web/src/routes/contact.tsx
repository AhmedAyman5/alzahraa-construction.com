import type { Route } from './+types/contact';
import { seo } from '@/lib/seo';
import { tFromMatches } from '@/lib/t-from-matches';
import { ContactForm } from '@/components/contact/contact-form';
import { CONTACT } from '@/data/contact';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLocale } from '@/i18n';

export function meta({ matches, location }: Route.MetaArgs) {
	const t = tFromMatches(matches);
	return seo({ matches, location }, {
		title: t.meta.contactTitle,
		description: t.meta.contactDescription,
	});
}

export default function Contact() {
	const { locale, t } = useLocale();

	return (
		<>
			<section className="bg-navy py-20 text-primary-foreground">
				<div className="mx-auto max-w-7xl px-4 sm:px-6">
					<p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">{t.contactPage.kicker}</p>
					<h1 className="mt-3 text-4xl font-black sm:text-5xl">{t.contactPage.heroTitle}</h1>
					<p className="mt-4 max-w-2xl leading-8 text-primary-foreground/70">
						{t.contactPage.heroSubtitle}
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
				<div className="grid gap-12 lg:grid-cols-5">
					<div className="lg:col-span-3">
						<ContactForm />
					</div>

					<aside className="lg:col-span-2">
						<div className="border border-border bg-navy p-8 text-primary-foreground">
							<h2 className="text-xl font-extrabold text-gold">{t.contactPage.contactInfoTitle}</h2>
							<ul className="mt-6 space-y-5 text-sm">
								<li className="flex items-center gap-3">
									<Phone className="size-5 shrink-0 text-gold" />
									<a href={CONTACT.phone.href} dir="ltr" className="font-bold transition-colors hover:text-gold">
										{CONTACT.phone.display}
									</a>
								</li>
								<li className="flex items-center gap-3">
									<Mail className="size-5 shrink-0 text-gold" />
									<a href={CONTACT.email.href} dir="ltr" className="font-bold transition-colors hover:text-gold">
										{CONTACT.email.display}
									</a>
								</li>
								<li className="flex items-start gap-3">
									<MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
									<span className="font-bold">{locale === 'ar' ? CONTACT.address.ar : CONTACT.address.en}</span>
								</li>
							</ul>
							<a
								href={CONTACT.whatsapp}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-8 flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-6 py-3.5 text-sm font-extrabold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
							>
								<MessageCircle className="size-5" />
								{t.contactPage.whatsappCta}
							</a>
						</div>

						<div className="mt-6 border border-gold/40 bg-card p-6">
							<p className="text-sm font-extrabold text-navy">{t.contactPage.workingHoursTitle}</p>
							<p className="mt-2 text-sm leading-7 text-muted-foreground">
								{t.contactPage.workingHoursBody}
								<br />
								{t.contactPage.siteVisitNote}
							</p>
						</div>
					</aside>
				</div>
			</section>
		</>
	);
}
