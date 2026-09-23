import { Link } from 'react-router';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE } from '@/data/site';
import { CONTACT } from '@/data/contact';
import { useLocale } from '@/i18n';

const NAV_KEYS = ['home', 'about', 'services', 'projects', 'equipment', 'contact'] as const;
const NAV_PATHS = ['/', '/about', '/services', '/projects', '/equipment', '/contact'] as const;

export function SiteFooter() {
	const { locale, t } = useLocale();

	return (
		<footer className="bg-navy-deep text-primary-foreground">
			<div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
				<div>
					<div className="inline-block rounded-sm bg-white p-2">
						<img src={SITE.logo} alt={t.logoAlt} className="h-16 w-auto" width={140} height={64} />
					</div>
					<p className="mt-4 max-w-xs text-sm leading-7 text-primary-foreground/70">
						{t.footerTagline}
					</p>
				</div>

				<nav aria-label={t.quickLinks}>
					<h3 className="text-sm font-extrabold uppercase tracking-wider text-gold">{t.quickLinks}</h3>
					<ul className="mt-4 space-y-2">
						{NAV_KEYS.map((key, i) => (
							<li key={key}>
								<Link to={NAV_PATHS[i]} className="text-sm text-primary-foreground/80 transition-colors hover:text-gold">
									{t.nav[key]}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div>
					<h3 className="text-sm font-extrabold uppercase tracking-wider text-gold">{t.contactUs}</h3>
					<ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
						<li className="flex items-center gap-2">
							<Phone className="size-4 shrink-0 text-gold" />
							<a href={CONTACT.phone.href} dir="ltr" className="transition-colors hover:text-gold">{CONTACT.phone.display}</a>
						</li>
						<li className="flex items-center gap-2">
							<Mail className="size-4 shrink-0 text-gold" />
							<a href={CONTACT.email.href} dir="ltr" className="transition-colors hover:text-gold">{CONTACT.email.display}</a>
						</li>
						<li className="flex items-start gap-2">
							<MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
							<span>{locale === 'ar' ? CONTACT.address.ar : CONTACT.address.en}</span>
						</li>
					</ul>
				</div>
			</div>

			<div className="border-t border-white/10">
				<p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/60 sm:px-6">
					{t.footerCopyright}
				</p>
			</div>
		</footer>
	);
}
