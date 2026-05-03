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
		loadingDays: 'Cargando dias disponibles…',
		loadingSlots: 'Cargando horas…',
		retry: 'Reintentar',
		continue: 'Siguiente',
		next: 'Siguiente',
		previous: 'Anterior',
		finalize: 'Finalizar',
		networkError: 'Error de red. Compruebe la conexion e intente de nuevo.',
		parseError: 'Respuesta del proveedor no reconocida.',
		invalidResponse: 'Datos de disponibilidad invalidos.',
		invalidPreset: 'Especialidad indicada no valida. Elija una opcion de la lista.',
		missingVendorTreatmentId:
			'Esta especialidad no tiene clinica_tratamiento_id en config.ts. Copielo del panel Nubimed (parametro en huecos_agenda).',
		noDays: 'No hay dias disponibles en este momento.',
		noSlots: 'No hay franjas para este dia.',
		selectSpecialty: 'Especialidad',
		selectDay: 'Dia',
		selectSlot: 'Hora',
		selectProfessional: 'Profesional',
		availabilityNotice:
			'La disponibilidad puede cambiar. Complete sus datos para enviar la peticion; la clinica confirmara por correo o telefono.',
		gateBlocked:
			'No se puede cargar la agenda desde este sitio (acceso bloqueado). Puede continuar en el portal oficial.',
		openPortal: 'Abrir portal de reservas',
		detailsHeading: 'Datos de la reserva',
		summaryHeading: 'Resumen',
		patientHadVisitBefore: 'Ha tenido cita antes con la clinica?',
		modeNewPatient: 'No, es mi primera vez',
		modeReturningPatient: 'Si, ya estoy registrado',
		fieldDni: 'DNI o pasaporte',
		fieldBirthDate: 'Fecha de nacimiento (dd/mm/aaaa)',
		fieldName: 'Nombre',
		fieldSurname: 'Apellidos',
		fieldPhonePrefix: 'Prefijo (ej. 34)',
		fieldPhone: 'Telefono',
		fieldEmail: 'Email',
		privacyCheckbox: 'He leido y acepto la politica de privacidad y condiciones',
		privacyRequired: 'Debe aceptar la politica de privacidad para continuar.',
		fieldsRequired: 'Revise los campos obligatorios.',
		loadingConfirmPage: 'Cargando formulario de confirmacion…',
		confirmTitle: 'Confirmar envio',
		confirmIntro: 'Esta a punto de finalizar la peticion de su cita.',
		confirmBackHint:
			'Pulsando Anterior podra revisar los datos. Pulsando Finalizar se enviara la peticion y la clinica le confirmara por correo (revise spam), telefono, SMS o WhatsApp.',
		confirmSubmitHint: '',
		confirmDisclaimer:
			'La fecha u hora final pueden variar por planificacion. Si tiene problemas, contacte con la clinica.',
		submitting: 'Enviando…',
		submitSuccess: 'Peticion enviada correctamente. En breve le contactaran para confirmar la cita.',
		submitFailed: 'No se pudo completar la reserva. Intente de nuevo o use el portal oficial.',
		recaptchaFailed: 'No se pudo verificar reCAPTCHA. Pruebe desde el portal oficial o mas tarde.',
		backToSlots: 'Volver a elegir hora',
		serviceLabel: 'Servicio',
		dateTimeLabel: 'Fecha y hora',
		recaptchaIntro: 'Este sitio esta protegido por reCAPTCHA; aplican la',
		recaptchaPrivacyLink: 'Politica de privacidad de Google',
		recaptchaAndTerms: 'y los',
		recaptchaTermsLink: 'Terminos de servicio de Google',
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
			'Availability may change. Enter your details to submit the request; the clinic will confirm by email or phone.',
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
		privacyCheckbox: 'I have read and accept the privacy policy and terms',
		privacyRequired: 'You must accept the privacy policy to continue.',
		fieldsRequired: 'Please fill in all required fields.',
		loadingConfirmPage: 'Loading confirmation form…',
		confirmTitle: 'Confirm submission',
		confirmIntro: 'You are about to submit your appointment request.',
		confirmBackHint:
			'Use Back to review your details. Use Submit to send the request; the clinic will confirm by email (check spam), phone, SMS or WhatsApp.',
		confirmSubmitHint: '',
		confirmDisclaimer:
			'The final date or time may differ due to scheduling. If you have issues, contact the clinic.',
		submitting: 'Sending…',
		submitSuccess: 'Request sent successfully. The clinic will contact you shortly to confirm.',
		submitFailed: 'The booking could not be completed. Try again or use the official portal.',
		recaptchaFailed: 'reCAPTCHA could not be verified. Try the official portal or later.',
		backToSlots: 'Back to time selection',
		serviceLabel: 'Service',
		dateTimeLabel: 'Date and time',
		recaptchaIntro: 'This site is protected by reCAPTCHA and the Google',
		recaptchaPrivacyLink: 'Privacy Policy',
		recaptchaAndTerms: 'and',
		recaptchaTermsLink: 'Terms of Service',
		recaptchaLegalSuffix: ' apply.',
	},
	ca: {
		loadingBootstrap: 'Preparant agenda…',
		loadingDays: 'Carregant dies disponibles…',
		loadingSlots: 'Carregant franges…',
		retry: 'Tornar a intentar',
		continue: 'Seguent',
		next: 'Seguent',
		previous: 'Enrere',
		finalize: 'Finalitzar',
		networkError: 'Error de xarxa. Comproveu la connexio.',
		parseError: 'Resposta del proveidor no reconeguda.',
		invalidResponse: 'Dades de disponibilitat no valides.',
		invalidPreset: 'Especialitat no valida. Trieu una opcio de la llista.',
		missingVendorTreatmentId:
			'Aquesta especialitat no te clinica_tratamiento_id a config.ts. Copieu-lo del panel Nubimed.',
		noDays: 'No hi ha dies disponibles ara mateix.',
		noSlots: 'No hi ha franges per aquest dia.',
		selectSpecialty: 'Especialitat',
		selectDay: 'Dia',
		selectSlot: 'Hora',
		selectProfessional: 'Professional',
		availabilityNotice:
			'La disponibilitat pot canviar. Ompli les dades per enviar la peticio; la clinica confirmara per correu o telefon.',
		gateBlocked:
			'No es pot carregar l\'agenda des d\'aquest lloc (acces bloquejat). Podeu continuar al portal oficial.',
		openPortal: 'Obrir portal de reserves',
		detailsHeading: 'Dades de la reserva',
		summaryHeading: 'Resum',
		patientHadVisitBefore: 'Ha tingut cita abans amb la clinica?',
		modeNewPatient: 'No, es la meva primera vegada',
		modeReturningPatient: 'Si, ja estic registrat',
		fieldDni: 'DNI o passaport',
		fieldBirthDate: 'Data de naixement (dd/mm/aaaa)',
		fieldName: 'Nom',
		fieldSurname: 'Cognoms',
		fieldPhonePrefix: 'Prefix (ex. 34)',
		fieldPhone: 'Telefon',
		fieldEmail: 'Correu',
		privacyCheckbox: 'He llegit i accepto la politica de privacitat i les condicions',
		privacyRequired: 'Cal acceptar la politica de privacitat per continuar.',
		fieldsRequired: 'Reviseu els camps obligatoris.',
		loadingConfirmPage: 'Carregant formulari de confirmacio…',
		confirmTitle: 'Confirmar enviament',
		confirmIntro: 'Esteu a punt de finalitzar la peticio de la cita.',
		confirmBackHint:
			'Amb Enrere podeu revisar les dades. Amb Finalitzar s\'enviara la peticio i la clinica us confirmara per correu (reviseu spam), telefon, SMS o WhatsApp.',
		confirmSubmitHint: '',
		confirmDisclaimer:
			'La data o hora finals poden variar per planificacio. Si teniu problemes, contacteu la clinica.',
		submitting: 'Enviant…',
		submitSuccess: 'Peticio enviada correctament. Aviat us contactaran per confirmar la cita.',
		submitFailed: 'No s\'ha pogut completar la reserva. Torneu-ho a provar o useu el portal oficial.',
		recaptchaFailed: 'No s\'ha pogut verificar reCAPTCHA. Proveu des del portal oficial o mes tard.',
		backToSlots: 'Tornar a triar hora',
		serviceLabel: 'Servei',
		dateTimeLabel: 'Data i hora',
		recaptchaIntro: 'Aquest lloc esta protegit per reCAPTCHA; s\'apliquen la',
		recaptchaPrivacyLink: 'Politica de privacitat de Google',
		recaptchaAndTerms: 'i els',
		recaptchaTermsLink: 'Termes de servei de Google',
		recaptchaLegalSuffix: '.',
	},
	fr: {
		loadingBootstrap: 'Preparation du planning…',
		loadingDays: 'Chargement des jours disponibles…',
		loadingSlots: 'Chargement des creneaux…',
		retry: 'Reessayer',
		continue: 'Suivant',
		next: 'Suivant',
		previous: 'Retour',
		finalize: 'Finaliser',
		networkError: 'Erreur reseau. Verifiez la connexion.',
		parseError: 'Reponse du prestataire non reconnue.',
		invalidResponse: 'Donnees de disponibilite invalides.',
		invalidPreset: 'Specialite demandee invalide. Choisissez dans la liste.',
		missingVendorTreatmentId:
			'Cette specialite ne possede pas de clinica_tratamiento_id dans config.ts. Copiez-le depuis le panneau Nubimed.',
		noDays: 'Aucun jour disponible pour le moment.',
		noSlots: 'Aucun creneau pour ce jour.',
		selectSpecialty: 'Specialite',
		selectDay: 'Jour',
		selectSlot: 'Heure',
		selectProfessional: 'Praticien',
		availabilityNotice:
			'La disponibilite peut changer. Saisissez vos coordonnees pour envoyer la demande; la clinique confirmera par e-mail ou telephone.',
		gateBlocked:
			'Impossible de charger le planning depuis ce site (acces bloque). Vous pouvez continuer sur le portail officiel.',
		openPortal: 'Ouvrir le portail de rendez-vous',
		detailsHeading: 'Details de la reservation',
		summaryHeading: 'Resume',
		patientHadVisitBefore: 'Avez-vous deja consulte a cette clinique?',
		modeNewPatient: 'Non, premiere visite',
		modeReturningPatient: 'Oui, je suis deja enregistre',
		fieldDni: 'Piece d identite ou passeport',
		fieldBirthDate: 'Date de naissance (jj/mm/aaaa)',
		fieldName: 'Prenom',
		fieldSurname: 'Nom',
		fieldPhonePrefix: 'Indicatif (ex. 34)',
		fieldPhone: 'Telephone',
		fieldEmail: 'E-mail',
		privacyCheckbox: 'J ai lu et j accepte la politique de confidentialite et les conditions',
		privacyRequired: 'Vous devez accepter la politique de confidentialite pour continuer.',
		fieldsRequired: 'Veuillez remplir tous les champs obligatoires.',
		loadingConfirmPage: 'Chargement du formulaire de confirmation…',
		confirmTitle: 'Confirmer l envoi',
		confirmIntro: 'Vous etes sur le point d envoyer votre demande de rendez-vous.',
		confirmBackHint:
			'Retour permet de verifier vos informations. Finaliser envoie la demande; la clinique confirmera par e-mail (verifiez les spams), telephone, SMS ou WhatsApp.',
		confirmSubmitHint: '',
		confirmDisclaimer:
			'La date ou l heure finale peuvent changer selon le planning. En cas de probleme, contactez la clinique.',
		submitting: 'Envoi…',
		submitSuccess: 'Demande envoyee avec succes. La clinique vous contactera bientot pour confirmer.',
		submitFailed: 'La reservation n a pas pu etre finalisee. Reessayez ou utilisez le portail officiel.',
		recaptchaFailed: 'reCAPTCHA non verifie. Essayez via le portail officiel ou plus tard.',
		backToSlots: 'Retour au choix de l heure',
		serviceLabel: 'Service',
		dateTimeLabel: 'Date et heure',
		recaptchaIntro: 'Ce site est protege par reCAPTCHA; les',
		recaptchaPrivacyLink: 'regles de confidentialite de Google',
		recaptchaAndTerms: 'et les',
		recaptchaTermsLink: 'conditions d utilisation de Google',
		recaptchaLegalSuffix: ' s\'appliquent.',
	},
};

export function t(lang: SiteLocale): BookingStrings {
	return STRINGS[lang];
}
