import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { Locale, Direction } from './config';
import { DEFAULT_LOCALE, directionFor, setLocaleCookie } from './config';
import type { Translations } from './types';
import ar from './ar';
import en from './en';

const dictionaries: Record<Locale, Translations> = { ar, en };

interface LocaleContextValue {
	locale: Locale;
	dir: Direction;
	t: Translations;
	setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
	initialLocale,
	children,
}: {
	initialLocale: Locale;
	children: React.ReactNode;
}) {
	const [locale, setLocaleState] = useState<Locale>(initialLocale);

	const setLocale = useCallback((l: Locale) => {
		setLocaleState(l);
		setLocaleCookie(l);
		// Update <html> attributes immediately (works on client)
		document.documentElement.lang = l;
		document.documentElement.dir = directionFor(l);
	}, []);

	const value = useMemo<LocaleContextValue>(
		() => ({
			locale,
			dir: directionFor(locale),
			t: dictionaries[locale],
			setLocale,
		}),
		[locale, setLocale],
	);

	return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
	const ctx = useContext(LocaleContext);
	if (!ctx) {
		// Fallback for usage outside provider (should not happen in normal app)
		return {
			locale: DEFAULT_LOCALE,
			dir: directionFor(DEFAULT_LOCALE),
			t: dictionaries[DEFAULT_LOCALE],
			setLocale: () => {},
		};
	}
	return ctx;
}

/** Shorthand — returns just the translation dictionary. */
export function useT(): Translations {
	return useLocale().t;
}
