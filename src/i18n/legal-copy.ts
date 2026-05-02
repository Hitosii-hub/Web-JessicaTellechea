import type { Locale } from './config';

export type LegalSlug = 'privacidad' | 'cookies' | 'aviso-legal';

type Block = { title: string; paragraphs: string[] };

export const legalPages: Record<LegalSlug, Record<Locale, Block>> = {
	privacidad: {
		es: {
			title: 'Politica de privacidad (borrador)',
			paragraphs: [
				'Este texto es un borrador generado para desarrollo. Debe ser revisado y sustituido por un profesional antes del lanzamiento.',
				'Se describiran finalidades del tratamiento, base legal, conservacion, derechos ARCO y contacto del responsable segun RGPD.',
			],
		},
		en: {
			title: 'Privacy policy (draft)',
			paragraphs: [
				'Draft placeholder for development. Replace with counsel-reviewed policy before launch.',
				'Will cover purposes, legal basis, retention, data subject rights, and controller contact.',
			],
		},
		ca: {
			title: 'Politica de privacitat (esborrany)',
			paragraphs: [
				'Text esborrany per a desenvolupament. Cal substitucio legal abans de publicacio.',
				'S inclouran finalitats, base legal, conservacio i drets segons normativa aplicable.',
			],
		},
		fr: {
			title: 'Politique de confidentialite (brouillon)',
			paragraphs: [
				'Brouillon a usage de developpement. Faire valider par un conseil avant mise en ligne.',
				'Finalites, base juridique, durees de conservation et droits des personnes seront detaillees.',
			],
		},
	},
	cookies: {
		es: {
			title: 'Politica de cookies (borrador)',
			paragraphs: [
				'Borrador: el sitio MVP no carga analytics de terceros. Si se anaden, se actualizara esta pagina y el mecanismo de consentimiento.',
				'Se listaran cookies tecnicas necesarias y, en su caso, cookies de medicion con opt-in.',
			],
		},
		en: {
			title: 'Cookie policy (draft)',
			paragraphs: [
				'Draft: MVP ships without third-party trackers. This page will be updated if analytics are added.',
				'Necessary cookies and optional measurement cookies will be listed with consent rules.',
			],
		},
		ca: {
			title: 'Politica de galetes (esborrany)',
			paragraphs: [
				'Esborrany: sense analitiques de tercers en el MVP. Actualitzacio si s incorporen.',
			],
		},
		fr: {
			title: 'Politique cookies (brouillon)',
			paragraphs: [
				'Brouillon: pas de trackers tiers dans le MVP. Mise a jour si mesure d audience ajoutee.',
			],
		},
	},
	'aviso-legal': {
		es: {
			title: 'Aviso legal (borrador)',
			paragraphs: [
				'Borrador con datos identificativos genericos. Sustituir por datos registrales reales del titular.',
				'Incluira condiciones de uso, limitacion de responsabilidad sobre contenidos medicos generales y legislacion aplicable.',
			],
		},
		en: {
			title: 'Legal notice (draft)',
			paragraphs: [
				'Draft with generic identifying placeholders. Replace with actual registered business data.',
				'Will cover site operator, terms of use, and limits on general medical information.',
			],
		},
		ca: {
			title: 'Avís legal (esborrany)',
			paragraphs: [
				'Esborrany amb dades generiques. Cal dades reals del titular abans de publicacio.',
			],
		},
		fr: {
			title: 'Mentions legales (brouillon)',
			paragraphs: [
				'Brouillon avec informations generiques. Remplacer par les mentions exactes de l operateur.',
			],
		},
	},
};
