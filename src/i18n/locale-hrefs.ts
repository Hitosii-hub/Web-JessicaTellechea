import type { Locale } from './config';
import { href, type IaKey } from './route-registry';

/** Equivalent URL when switching locale (matches `LanguageSwitcher.astro`). */
export function localeEquivalentHref(
	targetLocale: Locale,
	context: {
		currentIaKey: IaKey;
		pathWithinLocale: string;
		useLegacyLocalePaths: boolean;
	},
): string {
	const { currentIaKey, pathWithinLocale, useLegacyLocalePaths } = context;
	if (!useLegacyLocalePaths) {
		return href(targetLocale, currentIaKey);
	}
	const tail = pathWithinLocale.replace(/^\/+/, '');
	return tail ? `/${targetLocale}/${tail}` : `/${targetLocale}/`;
}
