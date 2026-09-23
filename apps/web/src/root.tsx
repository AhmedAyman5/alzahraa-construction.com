import {
	data,
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router';
import type { Route } from './+types/root';
import stylesheet from '@/index.css?url';
import { siteOrigin } from '@/lib/site-origin.server';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { WhatsappFloat } from '@/components/whatsapp-float';
import { HorizonsPreviewScripts } from './horizons-preview-scripts';
import { LocaleProvider, useLocale } from '@/i18n';
import { localeFromCookie, directionFor, DEFAULT_LOCALE } from '@/i18n/config';
import type { Locale } from '@/i18n/config';

export const links: Route.LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet },
	{ rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&family=Tajawal:wght@400;500;700&display=swap',
	},
];

/**
 * Publishes the site's public origin, which `seo()` reads to build canonical and
 * `og:url` tags, and advertises the sitemap to crawlers that read response
 * headers rather than HTML.
 *
 * Also reads the `lang` cookie to determine the active locale.
 */
export function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);
	const cookieHeader = request.headers.get('Cookie') ?? '';
	const locale = localeFromCookie(cookieHeader);

	return data(
		{ origin, locale },
		{ headers: { Link: `<${origin}/sitemap.xml>; rel="sitemap"; type="application/xml"` } },
	);
}

export function headers({ loaderHeaders }: Route.HeadersArgs) {
	return loaderHeaders;
}

export function Layout({ children }: { children: React.ReactNode }) {
	// During SSR we don't have the context yet — read from __reactRouterManifest or fall back.
	// The provider will sync document attributes on the client.
	return (
		<html lang="ar" dir="rtl">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				<HorizonsPreviewScripts />
			</head>
			<body>
				<div id="root">{children}</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App({ loaderData }: Route.ComponentProps) {
	const locale = (loaderData?.locale as Locale) ?? DEFAULT_LOCALE;

	return (
		<LocaleProvider initialLocale={locale}>
			<HtmlAttrSync />
			<div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
				<SiteHeader />
				<main className="flex-1">
					<Outlet />
				</main>
				<SiteFooter />
				<WhatsappFloat />
			</div>
		</LocaleProvider>
	);
}

/**
 * Syncs <html lang> and dir attributes on mount and locale change.
 * This avoids SSR mismatch by doing it in an effect-like component.
 */
function HtmlAttrSync() {
	const { locale, dir } = useLocale();
	if (typeof document !== 'undefined') {
		document.documentElement.lang = locale;
		document.documentElement.dir = dir;
	}
	return null;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'عذراً!';
	let details = 'حدث خطأ غير متوقع.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'خطأ';
		details =
			error.status === 404
				? 'الصفحة المطلوبة غير موجودة.'
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="mx-auto max-w-2xl px-6 py-24 text-center">
			<h1 className="text-4xl font-extrabold text-navy">{message}</h1>
			<p className="mt-4 text-muted-foreground">{details}</p>
			{stack ? (
				<pre className="mt-6 overflow-auto text-start text-xs">
					<code>{stack}</code>
				</pre>
			) : null}
		</main>
	);
}
