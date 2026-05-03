import { locales, type Locale } from './config';
import { avisoByLocale } from './legal-content/aviso';
import { cookiesByLocale } from './legal-content/cookies';
import { privacyByLocale } from './legal-content/privacy';
import { interpolateLegalPage } from './legal-interpolate';
import { legalControllerResolved } from './legal-placeholders';
import type { LegalCrossLinks, LegalPageModel, LegalSlug } from './legal-types';

export type { LegalCrossLinks, LegalFooterLabels, LegalPageModel, LegalSection, LegalSlug } from './legal-types';

const phStatic = legalControllerResolved();

function allLocales(from: Record<Locale, LegalPageModel>): Record<Locale, LegalPageModel> {
	const out = {} as Record<Locale, LegalPageModel>;
	for (const loc of locales) {
		out[loc] = interpolateLegalPage(from[loc], phStatic);
	}
	return out;
}

/** Paginas legales por slug e idioma (placeholders del responsable resueltos en build). */
export const legalPages: Record<LegalSlug, Record<Locale, LegalPageModel>> = {
	privacidad: allLocales(privacyByLocale),
	cookies: allLocales(cookiesByLocale),
	'aviso-legal': allLocales(avisoByLocale),
};

/** Enlaces entre las tres paginas legales en el idioma activo (L-2). */
export function legalCrossLinks(lang: Locale): LegalCrossLinks {
	const base = `/${lang}`;
	return {
		privacidad: { href: `${base}/privacidad/`, label: crossLinkLabel(lang, 'privacidad') },
		cookies: { href: `${base}/cookies/`, label: crossLinkLabel(lang, 'cookies') },
		avisoLegal: { href: `${base}/aviso-legal/`, label: crossLinkLabel(lang, 'aviso') },
	};
}

function crossLinkLabel(lang: Locale, key: 'privacidad' | 'cookies' | 'aviso'): string {
	const m: Record<Locale, Record<string, string>> = {
		es: { privacidad: 'Politica de privacidad', cookies: 'Politica de cookies', aviso: 'Aviso legal' },
		en: { privacidad: 'Privacy policy', cookies: 'Cookie policy', aviso: 'Legal notice' },
		ca: { privacidad: 'Politica de privacitat', cookies: 'Politica de galetes', aviso: 'Avis legal' },
		fr: {
			privacidad: 'Politique de confidentialité',
			cookies: 'Politique relative aux cookies',
			aviso: 'Mentions légales',
		},
	};
	return m[lang][key];
}
