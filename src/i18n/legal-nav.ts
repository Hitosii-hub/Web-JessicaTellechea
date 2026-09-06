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
		es: 'Jessica Tellechea 2026 © – Todos los derechos reservados.',
		en: 'Jessica Tellechea 2026 © – All rights reserved.',
		ca: 'Jessica Tellechea 2026 © – Tots els drets reservats.',
		fr: 'Jessica Tellechea 2026 © – Tous droits réservés.',
	};
	return map[lang];
}

/** Crédito de estudio — tipografía discreta en el pie. */
export function footerStudioCredit(lang: Locale): { lead: string; name: string } {
	const map: Record<Locale, { lead: string; name: string }> = {
		es: { lead: 'Diseñado y desarrollado por ', name: 'Umbral' },
		en: { lead: 'Designed and developed by ', name: 'Umbral' },
		ca: { lead: 'Dissenyat i desenvolupat per ', name: 'Umbral' },
		fr: { lead: 'Conçu et développé par ', name: 'Umbral' },
	};
	return map[lang];
}
