export type Locale = 'ar' | 'en';
export type Direction = 'rtl' | 'ltr';

export const LOCALES: readonly Locale[] = ['ar', 'en'] as const;
export const DEFAULT_LOCALE: Locale = 'ar';
export const LOCALE_COOKIE = 'lang';

export function directionFor(locale: Locale): Direction {
	return locale === 'ar' ? 'rtl' : 'ltr';
}

/** Read locale from cookie string (server or document.cookie). */
export function localeFromCookie(cookieString: string): Locale {
	const match = cookieString.match(/(?:^|;\s*)lang=(ar|en)/);
	return (match?.[1] as Locale) ?? DEFAULT_LOCALE;
}

/** Set locale in a cookie (client-side). */
export function setLocaleCookie(locale: Locale) {
	document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
	try {
		localStorage.setItem(LOCALE_COOKIE, locale);
	} catch {
		// localStorage may be unavailable
	}
}
