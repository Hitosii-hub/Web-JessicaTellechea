import type { Locale } from './config';

export type CookieConsentCopy = {
	bannerTitle: string;
	bannerBody: string;
	accept: string;
	reject: string;
	configure: string;
	panelTitle: string;
	panelNecessaryTitle: string;
	panelNecessaryBody: string;
	panelSecurityTitle: string;
	panelSecurityBody: string;
	panelMeasurementTitle: string;
	panelMeasurementBody: string;
	savePrefs: string;
	policyLink: string;
	closePanel: string;
};

export const cookieConsentByLocale: Record<Locale, CookieConsentCopy> = {
	es: {
		bannerTitle: 'Uso de cookies y datos similares',
		bannerBody:
			'Usamos lo estrictamente necesario para el sitio y la seguridad, y recordamos su eleccion aqui. Si reserva cita, Google reCAPTCHA puede aplicar su propia politica.',
		accept: 'Aceptar',
		reject: 'Rechazar no esenciales',
		configure: 'Configurar',
		panelTitle: 'Preferencias',
		panelNecessaryTitle: 'Necesarias / tecnicas',
		panelNecessaryBody:
			'Activas para el funcionamiento basico del sitio (por ejemplo, recordar esta decision). No se pueden desactivar desde este panel.',
		panelSecurityTitle: 'Seguridad (reCAPTCHA)',
		panelSecurityBody:
			'Solo si abre el formulario de reserva: Google puede tratar datos tecnicos para prevenir abuso. Consulte la politica de cookies y la de Google.',
		panelMeasurementTitle: 'Medicion / analitica',
		panelMeasurementBody:
			'En el estado actual del sitio no cargamos analiticas de terceros. Si se anaden, apareceran aqui y pediran consentimiento previo.',
		savePrefs: 'Guardar preferencias',
		policyLink: 'Politica de cookies completa',
		closePanel: 'Cerrar',
	},
	en: {
		bannerTitle: 'Cookies and similar data',
		bannerBody:
			'We use what is strictly necessary for the site and security, and store your choice here. If you use booking, Google reCAPTCHA may apply its own policy.',
		accept: 'Accept',
		reject: 'Reject non-essential',
		configure: 'Configure',
		panelTitle: 'Preferences',
		panelNecessaryTitle: 'Necessary / technical',
		panelNecessaryBody:
			'Required for basic site operation (including remembering this choice). Cannot be turned off here.',
		panelSecurityTitle: 'Security (reCAPTCHA)',
		panelSecurityBody:
			'Only when the booking form is shown: Google may process technical data to prevent abuse. See our cookie policy and Google policy.',
		panelMeasurementTitle: 'Measurement / analytics',
		panelMeasurementBody:
			'This MVP does not load third-party analytics. If added later, they will appear here and require prior consent.',
		savePrefs: 'Save preferences',
		policyLink: 'Full cookie policy',
		closePanel: 'Close',
	},
	ca: {
		bannerTitle: 'Galetes i dades similars',
		bannerBody:
			'Utilitzem allo estrictament necessari per al lloc i la seguretat, i recordem la seva eleccio aqui. Si reserva cita, Google reCAPTCHA pot aplicar la seva politica.',
		accept: 'Acceptar',
		reject: 'Rebutjar no essencials',
		configure: 'Configurar',
		panelTitle: 'Preferencies',
		panelNecessaryTitle: 'Necessaries / tecniques',
		panelNecessaryBody:
			'Actives per al funcionament basic (per exemple, recordar aquesta decisio). No es poden desactivar des d’aquest panell.',
		panelSecurityTitle: 'Seguretat (reCAPTCHA)',
		panelSecurityBody:
			'Només si obre el formulari de reserva: Google pot tractar dades tecniques. Vegeu la politica de galetes i la de Google.',
		panelMeasurementTitle: 'Mesura / analitica',
		panelMeasurementBody:
			'En l’estat actual no carreguem analitiques de tercers. Si s’afegeixen, es mostraran aqui i demanaran consentiment previ.',
		savePrefs: 'Desar preferencies',
		policyLink: 'Politica de galetes completa',
		closePanel: 'Tancar',
	},
	fr: {
		bannerTitle: 'Cookies et données similaires',
		bannerBody:
			'Nous utilisons le strictement nécessaire au site et à la sécurité, et mémorisons votre choix ici. Si vous réservez, Google reCAPTCHA peut appliquer sa propre politique.',
		accept: 'Accepter',
		reject: 'Refuser le non essentiel',
		configure: 'Configurer',
		panelTitle: 'Préférences',
		panelNecessaryTitle: 'Strictement nécessaires',
		panelNecessaryBody:
			'Indispensables au fonctionnement de base (y compris mémoriser ce choix). Non désactivables ici.',
		panelSecurityTitle: 'Sécurité (reCAPTCHA)',
		panelSecurityBody:
			'Uniquement si le formulaire de réservation est affiché : Google peut traiter des données techniques. Voir notre politique relative aux cookies et celle de Google.',
		panelMeasurementTitle: 'Mesure d’audience',
		panelMeasurementBody:
			'Le MVP ne charge pas d’analytique tierce. Si elle est ajoutée, elle apparaîtra ici avec consentement préalable.',
		savePrefs: 'Enregistrer les préférences',
		policyLink: 'Politique de cookies complète',
		closePanel: 'Fermer',
	},
};
