import type { Locale } from './config';
import type { LegalFooterLabels } from './legal-types';

/** Etiquetas cortas del pie para enlaces legales (L-3). */
export function legalFooterLabels(lang: Locale): LegalFooterLabels {
	const map: Record<Locale, LegalFooterLabels> = {
		es: { legalNotice: 'Aviso legal', privacy: 'Privacidad', cookies: 'Cookies' },
		en: { legalNotice: 'Legal notice', privacy: 'Privacy', cookies: 'Cookies' },
		ca: { legalNotice: 'Avís legal', privacy: 'Privacitat', cookies: 'Galetes' },
		fr: { legalNotice: 'Mentions légales', privacy: 'Confidentialité', cookies: 'Cookies' },
	};
	return map[lang];
}

/** Nota breve bajo el pie legal. */
export function legalFooterPublicationNote(lang: Locale): string {
	const map: Record<Locale, string> = {
		es: 'AJ Estetics 2026 © – Todos los derechos reservados.',
		en: 'AJ Estetics 2026 © – All rights reserved.',
		ca: 'AJ Estetics 2026 © – Tots els drets reservats.',
		fr: 'AJ Estetics 2026 © – Tous droits réservés.',
	};
	return map[lang];
}
