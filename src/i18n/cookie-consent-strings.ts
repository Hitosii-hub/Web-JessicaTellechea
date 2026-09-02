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
			'Se utiliza sólo lo estrictamente necesario para el sitio y la seguridad; su elección queda registrada aquí. Si reserva cita, Google reCAPTCHA puede aplicar su propia política.',
		accept: 'Aceptar',
		reject: 'Rechazar no esenciales',
		configure: 'Configurar',
		panelTitle: 'Preferencias',
		panelNecessaryTitle: 'Necesarias / técnicas',
		panelNecessaryBody:
			'Activas para el funcionamiento básico del sitio (por ejemplo, recordar esta decisión). No se pueden desactivar desde este panel.',
		panelSecurityTitle: 'Seguridad (reCAPTCHA)',
		panelSecurityBody:
			'Sólo si abre el formulario de reserva: Google puede tratar datos técnicos para prevenir abuso. Consulte la política de cookies y la de Google.',
		panelMeasurementTitle: 'Medición / analítica',
		panelMeasurementBody:
			'En el estado actual del sitio no se cargan analíticas de terceros. Si se añaden, aparecerán aquí y pedirán consentimiento previo.',
		savePrefs: 'Guardar preferencias',
		policyLink: 'Política de cookies completa',
		closePanel: 'Cerrar',
	},
	en: {
		bannerTitle: 'Cookies and similar data',
		bannerBody:
			'Only what is strictly necessary for the site and security is used; your choice is stored here. If you use booking, Google reCAPTCHA may apply its own policy.',
		accept: 'Accept',
		reject: 'Reject non-essential',
		configure: 'Configure',
		panelTitle: 'Preferences',
		panelNecessaryTitle: 'Necessary / technical',
		panelNecessaryBody:
			'Required for basic site operation (including remembering this choice). Cannot be turned off here.',
		panelSecurityTitle: 'Security (reCAPTCHA)',
		panelSecurityBody:
			'Only when the booking form is shown: Google may process technical data to prevent abuse. See the cookie policy and Google policy.',
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
			'S\'utilitza només allò estrictament necessari per al lloc i la seguretat; la seva elecció queda registrada aquí. Si reserva cita, Google reCAPTCHA pot aplicar la seva política.',
		accept: 'Acceptar',
		reject: 'Rebutjar no essencials',
		configure: 'Configurar',
		panelTitle: 'Preferències',
		panelNecessaryTitle: 'Necessàries / tècniques',
		panelNecessaryBody:
			'Actives per al funcionament bàsic (per exemple, recordar aquesta decisió). No es poden desactivar des d’aquest panell.',
		panelSecurityTitle: 'Seguretat (reCAPTCHA)',
		panelSecurityBody:
			'Només si obre el formulari de reserva: Google pot tractar dades tècniques. Vegeu la política de galetes i la de Google.',
		panelMeasurementTitle: 'Mesura / analítica',
		panelMeasurementBody:
			'En l’estat actual no es carreguen analítiques de tercers. Si s’afegeixen, es mostraran aquí i demanaran consentiment previ.',
		savePrefs: 'Desar preferències',
		policyLink: 'Política de galetes completa',
		closePanel: 'Tancar',
	},
	fr: {
		bannerTitle: 'Cookies et données similaires',
		bannerBody:
			'Seul le strictement nécessaire au site et à la sécurité est utilisé ; votre choix est enregistré ici. Si vous réservez, Google reCAPTCHA peut appliquer sa propre politique.',
		accept: 'Accepter',
		reject: 'Refuser le non essentiel',
		configure: 'Configurer',
		panelTitle: 'Préférences',
		panelNecessaryTitle: 'Strictement nécessaires',
		panelNecessaryBody:
			'Indispensables au fonctionnement de base (y compris mémoriser ce choix). Non désactivables ici.',
		panelSecurityTitle: 'Sécurité (reCAPTCHA)',
		panelSecurityBody:
			'Uniquement si le formulaire de réservation est affiché : Google peut traiter des données techniques. Voir la politique relative aux cookies et celle de Google.',
		panelMeasurementTitle: 'Mesure d’audience',
		panelMeasurementBody:
			'Le MVP ne charge pas d’analytique tierce. Si elle est ajoutée, elle apparaîtra ici avec consentement préalable.',
		savePrefs: 'Enregistrer les préférences',
		policyLink: 'Politique de cookies complète',
		closePanel: 'Fermer',
	},
};
