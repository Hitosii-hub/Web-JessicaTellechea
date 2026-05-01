/**
 * Supported public locales (priority order: default first in lists).
 * @see docs/seo-and-localization.md
 */
export const locales = ['es', 'en', 'ca', 'fr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

/** UI label for the language switcher (native language names). */
export const localeLabels: Record<Locale, string> = {
	es: 'Español',
	en: 'English',
	ca: 'Català',
	fr: 'Français',
};

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}
