import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { SITE } from '@/data/site';
import { CONTACT } from '@/data/contact';
import { cn } from '@/lib/utils';
import { useLocale } from '@/i18n';

const NAV_KEYS = ['home', 'about', 'services', 'projects', 'equipment', 'contact'] as const;
const NAV_PATHS = ['/', '/about', '/services', '/projects', '/equipment', '/contact'] as const;

export function SiteHeader() {
	const [open, setOpen] = useState(false);
	const { locale, t, setLocale } = useLocale();

	const toggleLang = () => setLocale(locale === 'ar' ? 'en' : 'ar');

	return (
		<header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
				<Link to="/" className="flex items-center gap-3" aria-label={t.siteName}>
					<img src={SITE.logo} alt={t.logoAlt} className="h-14 w-auto" width={120} height={56} />
				</Link>

				<nav className="hidden items-center gap-1 lg:flex" aria-label={t.mainNav}>
					{NAV_KEYS.map((key, i) => (
						<NavLink
							key={key}
							to={NAV_PATHS[i]}
							className={({ isActive }) =>
								cn(
									'rounded-sm px-4 py-2 text-sm font-bold transition-colors hover:text-gold',
									isActive ? 'text-gold' : 'text-navy',
								)
							}
						>
							{t.nav[key]}
						</NavLink>
					))}
				</nav>

				<div className="hidden items-center gap-3 lg:flex">
					<button
						type="button"
						onClick={toggleLang}
						className="flex items-center gap-1.5 rounded-sm border border-border px-3 py-2 text-sm font-bold text-navy transition-colors hover:border-gold hover:text-gold"
						aria-label={t.langSwitch}
					>
						<Globe className="size-4" />
						{t.langSwitch}
					</button>
					<a
						href={CONTACT.phone.href}
						className="flex items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-gold"
					>
						<Phone className="size-4" strokeWidth={2} />
						<span dir="ltr">{CONTACT.phone.display}</span>
					</a>
					<Link
						to="/contact"
						className="rounded-sm bg-gold px-5 py-2.5 text-sm font-extrabold text-navy transition-transform hover:-translate-y-px active:scale-[0.98]"
					>
						{t.freeQuote}
					</Link>
				</div>

				<button
					type="button"
					className="flex size-11 items-center justify-center rounded-sm text-navy lg:hidden"
					onClick={() => setOpen(v => !v)}
					aria-label={open ? t.closeMenu : t.openMenu}
					aria-expanded={open}
				>
					{open ? <X className="size-6" /> : <Menu className="size-6" />}
				</button>
			</div>

			{open ? (
				<nav className="border-t border-border bg-background px-4 pb-6 pt-2 lg:hidden" aria-label={t.mobileNav}>
					{NAV_KEYS.map((key, i) => (
						<NavLink
							key={key}
							to={NAV_PATHS[i]}
							onClick={() => setOpen(false)}
							className={({ isActive }) =>
								cn(
									'block rounded-sm px-3 py-3 text-base font-bold',
									isActive ? 'text-gold' : 'text-navy',
								)
							}
						>
							{t.nav[key]}
						</NavLink>
					))}
					<button
						type="button"
						onClick={() => { toggleLang(); setOpen(false); }}
						className="mt-1 flex w-full items-center gap-2 rounded-sm px-3 py-3 text-base font-bold text-navy transition-colors hover:text-gold"
					>
						<Globe className="size-5" />
						{t.langSwitch}
					</button>
					<Link
						to="/contact"
						onClick={() => setOpen(false)}
						className="mt-3 block rounded-sm bg-gold px-5 py-3 text-center text-base font-extrabold text-navy"
					>
						{t.freeQuoteLong}
					</Link>
				</nav>
			) : null}
		</header>
	);
}
