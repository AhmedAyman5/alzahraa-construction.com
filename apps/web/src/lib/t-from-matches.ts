import type { Locale } from '@/i18n/config';
import type { Translations } from '@/i18n/types';
import ar from '@/i18n/ar';
import en from '@/i18n/en';

const dicts: Record<Locale, Translations> = { ar, en };

/**
 * Read the current locale from the root loader data that React Router
 * passes into every route's `meta()` via `matches`.
 *
 * React Router v7 match objects have `loaderData` (not `data`), so we
 * accept a very loose shape and duck-type from there.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function tFromMatches(matches: readonly any[]): Translations {
	const root = matches.find((m: Record<string, unknown>) => m?.id === 'root');
	const locale = (root?.loaderData as { locale?: Locale } | undefined)?.locale
		?? (root?.data as { locale?: Locale } | undefined)?.locale
		?? 'ar';
	return dicts[locale];
}
