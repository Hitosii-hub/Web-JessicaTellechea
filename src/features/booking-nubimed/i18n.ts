import type { SiteLocale } from './types';

export function vendorLocaleFromSite(lang: SiteLocale): string {
	return lang;
}

type BookingStrings = {
	loadingBootstrap: string;
	loadingDays: string;
	loadingSlots: string;
	retry: string;
	continue: string;
	next: string;
	previous: string;
	finalize: string;
	networkError: string;
	parseError: string;
	invalidResponse: string;
	invalidPreset: string;
	missingVendorTreatmentId: string;
	noDays: string;
	noSlots: string;
	selectSpecialty: string;
	selectDay: string;
	selectSlot: string;
	selectProfessional: string;
	availabilityNotice: string;
	gateBlocked: string;
	openPortal: string;
	detailsHeading: string;
	summaryHeading: string;
	patientHadVisitBefore: string;
	modeNewPatient: string;
	modeReturningPatient: string;
	fieldDni: string;
	fieldBirthDate: string;
	fieldName: string;
	fieldSurname: string;
	fieldPhonePrefix: string;
	fieldPhone: string;
	fieldEmail: string;
	privacyCheckbox: string;
	privacyRequired: string;
	fieldsRequired: string;
	loadingConfirmPage: string;
	confirmTitle: string;
	confirmIntro: string;
	confirmBackHint: string;
	confirmSubmitHint: string;
	confirmDisclaimer: string;
	submitting: string;
	submitSuccess: string;
	submitFailed: string;
	recaptchaFailed: string;
	backToSlots: string;
	serviceLabel: string;
	dateTimeLabel: string;
	/** REQ-13: resumen breve antes del consentimiento (detalle en política de privacidad). */
	bookingLegalSummaryHeading: string;
	bookingLegalSummaryBody: string;
	privacyPolicyLinkLabel: string;
	marketingCheckbox: string;
	/** Texto sustituto si se oculta la insignia reCAPTCHA (requisito Google). */
	recaptchaIntro: string;
	recaptchaPrivacyLink: string;
	recaptchaAndTerms: string;
	recaptchaTermsLink: string;
	recaptchaLegalSuffix: string;
};

const STRINGS: Record<SiteLocale, BookingStrings> = {
	es: {
		loadingBootstrap: 'Preparando agenda…',
		loadingDays: 'Cargando días disponibles…',
		loadingSlots: 'Cargando horas…',
		retry: 'Reintentar',
		continue: 'Siguiente',
		next: 'Siguiente',
		previous: 'Anterior',
		finalize: 'Finalizar',
		networkError: 'Error de red. Compruebe la conexión e inténtelo de nuevo.',
		parseError: 'La respuesta del proveedor no es reconocida.',
		invalidResponse: 'Datos de disponibilidad no válidos.',
		invalidPreset: 'La especialidad indicada no es válida. Elija una opción de la lista.',
		missingVendorTreatmentId:
			'Esta especialidad no tiene clinica_tratamiento_id en config.ts. Cópielo del panel Nubimed (parámetro en huecos_agenda).',
		noDays: 'No hay días disponibles en este momento.',
		noSlots: 'No hay franjas para este día.',
		selectSpecialty: 'Especialidad',
		selectDay: 'Día',
		selectSlot: 'Hora',
		selectProfessional: 'Profesional',
		availabilityNotice:
			'La disponibilidad puede cambiar. Complete sus datos para enviar la solicitud y la clínica le confirmará por correo o teléfono.',
		gateBlocked:
			'No se puede cargar la agenda desde este sitio (acceso bloqueado). Puede continuar en el portal oficial.',
		openPortal: 'Abrir portal de reservas',
		detailsHeading: 'Datos de la reserva',
		summaryHeading: 'Resumen',
		patientHadVisitBefore: '¿Ha tenido cita antes con la clínica?',
		modeNewPatient: 'No, es mi primera vez',
		modeReturningPatient: 'Sí, ya estoy registrado',
		fieldDni: 'DNI o pasaporte',
		fieldBirthDate: 'Fecha de nacimiento (dd/mm/aaaa)',
		fieldName: 'Nombre',
		fieldSurname: 'Apellidos',
		fieldPhonePrefix: 'Prefijo (ej. 34)',
		fieldPhone: 'Teléfono',
		fieldEmail: 'Correo electrónico',
		privacyCheckbox: 'He leído y acepto la política de privacidad y las condiciones',
		privacyRequired: 'Debe aceptar la política de privacidad para continuar.',
		fieldsRequired: 'Revise los campos obligatorios.',
		loadingConfirmPage: 'Cargando formulario de confirmación…',
		confirmTitle: 'Confirmar envío',
		confirmIntro: 'Está a punto de finalizar la solicitud de su cita.',
		confirmBackHint:
			'Al pulsar Anterior podrá revisar los datos. Al pulsar Finalizar se enviará la solicitud y la clínica le confirmará por correo (revise la carpeta de spam), teléfono, SMS o WhatsApp.',
		confirmSubmitHint: '',
		confirmDisclaimer:
			'La fecha u hora final pueden variar por planificación. Si tiene problemas, contacte con la clínica.',
		submitting: 'Enviando…',
		submitSuccess: 'Solicitud enviada correctamente. En breve le contactarán para confirmar la cita.',
		submitFailed: 'No se pudo completar la reserva. Inténtelo de nuevo o use el portal oficial.',
		recaptchaFailed: 'No se pudo verificar reCAPTCHA. Pruébelo desde el portal oficial o más tarde.',
		backToSlots: 'Volver a elegir hora',
		serviceLabel: 'Servicio',
		dateTimeLabel: 'Fecha y hora',
		bookingLegalSummaryHeading: 'Resumen del tratamiento de datos',
		bookingLegalSummaryBody:
			'El responsable es el titular identificado en la política de privacidad. Los datos se tratan para gestionar su solicitud de cita y las comunicaciones necesarias con la clínica; base legal: medidas precontractuales a su solicitud y, en su caso, interés legítimo en la seguridad del envío. Nubimed / Clínica en la nube actúa como encargado siguiendo instrucciones del responsable.',
		privacyPolicyLinkLabel: 'Política de privacidad (información ampliada)',
		marketingCheckbox: 'Deseo recibir comunicaciones comerciales (opcional).',
		recaptchaIntro: 'Este sitio está protegido por reCAPTCHA y se aplican la',
		recaptchaPrivacyLink: 'Política de privacidad de Google',
		recaptchaAndTerms: ' y los',
		recaptchaTermsLink: 'Términos de servicio de Google',
		recaptchaLegalSuffix: '.',
	},
	en: {
		loadingBootstrap: 'Preparing booking…',
		loadingDays: 'Loading available days…',
		loadingSlots: 'Loading time slots…',
		retry: 'Retry',
		continue: 'Next',
		next: 'Next',
		previous: 'Back',
		finalize: 'Submit request',
		networkError: 'Network error. Check your connection and try again.',
		parseError: 'Unrecognized response from the booking provider.',
		invalidResponse: 'Invalid availability data.',
		invalidPreset: 'The requested specialty is not valid. Please choose from the list.',
		missingVendorTreatmentId:
			'This specialty has no clinica_tratamiento_id in config.ts. Copy it from the Nubimed panel (huecos_agenda query).',
		noDays: 'No available days at the moment.',
		noSlots: 'No slots for this day.',
		selectSpecialty: 'Specialty',
		selectDay: 'Day',
		selectSlot: 'Time',
		selectProfessional: 'Professional',
		availabilityNotice:
			'Availability may change. Enter your details to submit the request and the clinic will confirm by email or phone.',
		gateBlocked:
			'The schedule cannot be loaded from this site (access blocked). You can continue on the official portal.',
		openPortal: 'Open booking portal',
		detailsHeading: 'Booking details',
		summaryHeading: 'Summary',
		patientHadVisitBefore: 'Have you visited this clinic before?',
		modeNewPatient: 'No, first time',
		modeReturningPatient: 'Yes, I am already registered',
		fieldDni: 'ID or passport',
		fieldBirthDate: 'Date of birth (dd/mm/yyyy)',
		fieldName: 'First name',
		fieldSurname: 'Last name',
		fieldPhonePrefix: 'Prefix (e.g. 34)',
		fieldPhone: 'Phone',
		fieldEmail: 'Email',
		privacyCheckbox: 'I have read and accept the privacy policy and the terms',
		privacyRequired: 'You must accept the privacy policy to continue.',
		fieldsRequired: 'Please fill in all required fields.',
		loadingConfirmPage: 'Loading confirmation form…',
		confirmTitle: 'Confirm submission',
		confirmIntro: 'You are about to submit your appointment request.',
		confirmBackHint:
			'Use Back to review your details. Use Submit request to send the request; the clinic will confirm by email (check your spam folder), phone, SMS, or WhatsApp.',
		confirmSubmitHint: '',
		confirmDisclaimer:
			'The final date or time may differ due to scheduling. If you have issues, contact the clinic.',
		submitting: 'Sending…',
		submitSuccess: 'Request sent successfully. The clinic will contact you shortly to confirm.',
		submitFailed: 'The booking could not be completed. Try again or use the official portal.',
		recaptchaFailed: 'reCAPTCHA could not be verified. Try the official portal or try again later.',
		backToSlots: 'Back to time selection',
		serviceLabel: 'Service',
		dateTimeLabel: 'Date and time',
		bookingLegalSummaryHeading: 'How we use your data (summary)',
		bookingLegalSummaryBody:
			'The controller is identified in the site privacy policy. We process your data to handle your appointment request and necessary clinic communications; legal basis: pre-contractual steps at your request and, where applicable, legitimate interest in securing the submission. Nubimed / Clinica en la nube acts as a processor on the controller’s instructions.',
		privacyPolicyLinkLabel: 'Privacy policy (full information)',
		marketingCheckbox: 'I would like to receive commercial communications (optional).',
		recaptchaIntro: 'This site is protected by reCAPTCHA. The ',
		recaptchaPrivacyLink: 'Google Privacy Policy',
		recaptchaAndTerms: ' and ',
		recaptchaTermsLink: 'Terms of Service',
		recaptchaLegalSuffix: ' apply.',
	},
	ca: {
		loadingBootstrap: 'Preparant agenda…',
		loadingDays: 'Carregant dies disponibles…',
		loadingSlots: 'Carregant franges…',
		retry: 'Tornar a intentar',
		continue: 'Següent',
		next: 'Següent',
		previous: 'Enrere',
		finalize: 'Finalitzar',
		networkError: 'Error de xarxa. Comproveu la connexió i torneu-ho a intentar.',
		parseError: 'La resposta del proveïdor no és reconeguda.',
		invalidResponse: 'Dades de disponibilitat no vàlides.',
		invalidPreset: 'L’especialitat indicada no és vàlida. Trieu una opció de la llista.',
		missingVendorTreatmentId:
			'Aquesta especialitat no té clinica_tratamiento_id a config.ts. Copieu-lo del panell Nubimed (paràmetre a huecos_agenda).',
		noDays: 'No hi ha dies disponibles ara mateix.',
		noSlots: 'No hi ha franges per aquest dia.',
		selectSpecialty: 'Especialitat',
		selectDay: 'Dia',
		selectSlot: 'Hora',
		selectProfessional: 'Professional',
		availabilityNotice:
			'La disponibilitat pot canviar. Ompliu les dades per enviar la sol·licitud i la clínica us confirmarà per correu o telèfon.',
		gateBlocked:
			'No es pot carregar l’agenda des d’aquest lloc (accés bloquejat). Podeu continuar al portal oficial.',
		openPortal: 'Obrir portal de reserves',
		detailsHeading: 'Dades de la reserva',
		summaryHeading: 'Resum',
		patientHadVisitBefore: 'Ha tingut cita abans amb la clínica?',
		modeNewPatient: 'No, és la meva primera vegada',
		modeReturningPatient: 'Sí, ja estic registrat',
		fieldDni: 'DNI o passaport',
		fieldBirthDate: 'Data de naixement (dd/mm/aaaa)',
		fieldName: 'Nom',
		fieldSurname: 'Cognoms',
		fieldPhonePrefix: 'Prefix (ex. 34)',
		fieldPhone: 'Telèfon',
		fieldEmail: 'Correu electrònic',
		privacyCheckbox: 'He llegit i accepto la política de privacitat i les condicions',
		privacyRequired: 'Cal acceptar la política de privacitat per continuar.',
		fieldsRequired: 'Reviseu els camps obligatoris.',
		loadingConfirmPage: 'Carregant el formulari de confirmació…',
		confirmTitle: 'Confirmar enviament',
		confirmIntro: 'Esteu a punt de finalitzar la sol·licitud de la cita.',
		confirmBackHint:
			'Amb Enrere podreu revisar les dades. Amb Finalitzar s’enviarà la sol·licitud i la clínica us confirmarà per correu (reviseu la carpeta de correu brossa), telèfon, SMS o WhatsApp.',
		confirmSubmitHint: '',
		confirmDisclaimer:
			'La data o l’hora finals poden variar per planificació. Si teniu problemes, contacteu la clínica.',
		submitting: 'Enviant…',
		submitSuccess: 'Sol·licitud enviada correctament. Aviat us contactaran per confirmar la cita.',
		submitFailed: 'No s’ha pogut completar la reserva. Torneu-ho a intentar o feu servir el portal oficial.',
		recaptchaFailed: 'No s’ha pogut verificar reCAPTCHA. Proveu-ho des del portal oficial o més tard.',
		backToSlots: 'Tornar a triar hora',
		serviceLabel: 'Servei',
		dateTimeLabel: 'Data i hora',
		bookingLegalSummaryHeading: 'Resum del tractament de dades',
		bookingLegalSummaryBody:
			'El responsable és el titular identificat a la política de privacitat. Les dades es tracten per gestionar la sol·licitud de cita i les comunicacions necessàries amb la clínica; base legal: mesures precontractuals a la vostra sol·licitud i, si escau, interès legítim en la seguretat de l’enviament. Nubimed / Clínica en el núvol actua com a encarregat seguint instruccions del responsable.',
		privacyPolicyLinkLabel: 'Política de privacitat (informació ampliada)',
		marketingCheckbox: 'Vull rebre comunicacions comercials (opcional).',
		recaptchaIntro: 'Aquest lloc està protegit per reCAPTCHA; s’apliquen la',
		recaptchaPrivacyLink: 'Política de privacitat de Google',
		recaptchaAndTerms: 'i els',
		recaptchaTermsLink: 'Termes de servei de Google',
		recaptchaLegalSuffix: '.',
	},
	fr: {
		loadingBootstrap: 'Préparation du planning…',
		loadingDays: 'Chargement des jours disponibles…',
		loadingSlots: 'Chargement des créneaux…',
		retry: 'Réessayer',
		continue: 'Suivant',
		next: 'Suivant',
		previous: 'Retour',
		finalize: 'Finaliser',
		networkError: 'Erreur réseau. Vérifiez la connexion et réessayez.',
		parseError: 'Réponse du prestataire non reconnue.',
		invalidResponse: 'Données de disponibilité non valides.',
		invalidPreset: 'La spécialité indiquée n’est pas valide. Choisissez une option dans la liste.',
		missingVendorTreatmentId:
			'Cette spécialité n’a pas de clinica_tratamiento_id dans config.ts. Copiez-le depuis le panneau Nubimed (paramètre huecos_agenda).',
		noDays: 'Aucun jour disponible pour le moment.',
		noSlots: 'Aucun créneau pour ce jour.',
		selectSpecialty: 'Spécialité',
		selectDay: 'Jour',
		selectSlot: 'Heure',
		selectProfessional: 'Praticien',
		availabilityNotice:
			'Les disponibilités peuvent varier. Veuillez compléter vos coordonnées pour soumettre votre demande ; la clinique vous confirmera votre disponibilité par courriel ou par téléphone.',
		gateBlocked:
			'Impossible de charger le planning depuis ce site (accès bloqué). Vous pouvez continuer sur le portail officiel.',
		openPortal: 'Ouvrir le portail de rendez-vous',
		detailsHeading: 'Détails de la réservation',
		summaryHeading: 'Résumé',
		patientHadVisitBefore: 'Avez-vous déjà eu rendez-vous dans cette clinique ?',
		modeNewPatient: 'Non, première visite',
		modeReturningPatient: 'Oui, je suis déjà enregistré',
		fieldDni: 'Pièce d’identité ou passeport',
		fieldBirthDate: 'Date de naissance (jj/mm/aaaa)',
		fieldName: 'Prénom',
		fieldSurname: 'Nom',
		fieldPhonePrefix: 'Indicatif (ex. 34)',
		fieldPhone: 'Téléphone',
		fieldEmail: 'E-mail',
		privacyCheckbox: 'J’ai lu et j’accepte la politique de confidentialité et les conditions',
		privacyRequired: 'Vous devez accepter la politique de confidentialité pour continuer.',
		fieldsRequired: 'Veuillez remplir tous les champs obligatoires.',
		loadingConfirmPage: 'Chargement du formulaire de confirmation…',
		confirmTitle: 'Confirmer l’envoi',
		confirmIntro: 'Vous êtes sur le point d’envoyer votre demande de rendez-vous.',
		confirmBackHint:
			'Retour permet de vérifier vos informations. Le bouton Finaliser envoie la demande ; la clinique confirmera par e-mail (vérifiez les courriers indésirables), téléphone, SMS ou WhatsApp.',
		confirmSubmitHint: '',
		confirmDisclaimer:
			'La date ou l’heure finale peuvent changer selon le planning. En cas de problème, contactez la clinique.',
		submitting: 'Envoi en cours…',
		submitSuccess: 'Demande envoyée avec succès. La clinique vous contactera bientôt pour confirmer.',
		submitFailed: 'La réservation n’a pas pu être finalisée. Réessayez ou utilisez le portail officiel.',
		recaptchaFailed: 'reCAPTCHA non vérifié. Essayez via le portail officiel ou plus tard.',
		backToSlots: 'Retour au choix de l’heure',
		serviceLabel: 'Service',
		dateTimeLabel: 'Date et heure',
		bookingLegalSummaryHeading: 'Résumé du traitement des données',
		bookingLegalSummaryBody:
			'Le responsable est identifié dans la politique de confidentialité. Les données sont traitées pour gérer votre demande de rendez-vous et les communications nécessaires avec la clinique ; base juridique : mesures précontractuelles à votre demande et, le cas échéant, intérêt légitime à sécuriser l’envoi. Nubimed / Clinica en la nube agit en tant que sous-traitant sur instruction du responsable.',
		privacyPolicyLinkLabel: 'Politique de confidentialité (informations détaillées)',
		marketingCheckbox: 'Je souhaite recevoir des communications commerciales (facultatif).',
		recaptchaIntro: 'Ce site est protégé par reCAPTCHA ; les',
		recaptchaPrivacyLink: 'règles de confidentialité de Google',
		recaptchaAndTerms: 'et les',
		recaptchaTermsLink: 'conditions d’utilisation de Google',
		recaptchaLegalSuffix: ' s’appliquent.',
	},
};

export function t(lang: SiteLocale): BookingStrings {
	return STRINGS[lang];
}
