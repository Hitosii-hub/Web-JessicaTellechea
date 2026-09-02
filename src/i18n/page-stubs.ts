import type { Locale } from './config';

export type PageStub = {
	title: string;
	heading: string;
	lead: string;
};

/** Dynamic pillar/utility segments only (blog has a dedicated route tree). */
export type StubSegment = 'facial' | 'corporal' | 'capilar' | 'criterio-medico' | 'reservar-cita';

export const stubSegments: StubSegment[] = [
	'facial',
	'corporal',
	'capilar',
	'criterio-medico',
	'reservar-cita',
];

export function isStubSegment(s: string): s is StubSegment {
	return (stubSegments as readonly string[]).includes(s);
}

export const pageStubsHome: Record<Locale, PageStub> = {
	es: {
		title: 'Dra. Jessica Tellechea - Medicina estetica y capilar',
		heading: 'Medicina estética premium con criterio médico',
		lead:
			'La Dra. Jessica Tellechea ofrece una práctica fundamentada en juicio clínico, resultados naturales y seguimiento progresivo. Tres pilares — Facial, Corporal y Capilar — con valoración antes de recomendar protocolo.',
	},
	en: {
		title: 'Dr. Jessica Tellechea - Aesthetic and hair medicine',
		heading: 'Premium aesthetic medicine grounded in medical judgment',
		lead:
			'Medical assessment first, calm and credible tone, natural outcomes over hype. Three pillars — Face, Body, and Hair — with evaluation before any protocol recommendation.',
	},
	ca: {
		title: 'Dra. Jessica Tellechea - Medicina estètica i capil·lar',
		heading: 'Medicina estètica premium amb criteri mèdic',
		lead:
			'Llenguatge clar i responsable, resultats naturals i seguiment progressiu. Tres pilars — Facial, Corporal i Capil·lar — amb valoració prèvia.',
	},
	fr: {
		title: 'Dre Jessica Tellechea - Médecine esthétique et capillaire',
		heading: 'Medicina esthétique premium ancrée dans le jugement médical',
		lead:
			'Évaluation médicale d\'abord, ton calme et crédible, résultats naturels. Trois piliers — visage, corps et cheveux — avec bilan avant protocole.',
	},
};

export const pageStubsBySegment: Record<StubSegment, Record<Locale, PageStub>> = {
	facial: {
		es: {
			title: 'Dra. Jessica Tellechea - Facial',
			heading: 'Tratamientos faciales',
			lead:
				'Rejuvenecimiento y armonía con transparencia: beneficios realistas, sin urgencia comercial ni promesas absolutas. Siempre enmarcado en criterio médico.',
		},
		en: {
			title: 'Dr. Jessica Tellechea - Facial',
			heading: 'Facial treatments',
			lead:
				'Facial rejuvenation explained with medical framing—progressive, individualised outcomes rather than cosmetic hype.',
		},
		ca: {
			title: 'Dra. Jessica Tellechea - Facial',
			heading: 'Tractaments facials',
			lead:
				'Benestar facial amb criteri mèdic, sense sobrepromeses ni llenguatge agressiu.',
		},
		fr: {
			title: 'Dre Jessica Tellechea - Visage',
			heading: 'Soins du visage',
			lead:
				'Approche clinique responsable : résultats progressifs, attentes réalistes, sans marketing pressant.',
		},
	},
	corporal: {
		es: {
			title: 'Dra. Jessica Tellechea - Corporal',
			heading: 'Tratamientos corporales',
			lead:
				'Enfoque corporal supervisado: valoración previa y beneficios claros, sin catálogo agresivo en la entrada.',
		},
		en: {
			title: 'Dr. Jessica Tellechea - Body',
			heading: 'Body treatments',
			lead:
				'Medically supervised body care—assessment-first messaging and concise sections that transition clearly to action.',
		},
		ca: {
			title: 'Dra. Jessica Tellechea - Corporal',
			heading: 'Tractaments corporals',
			lead:
				'Propostes corporals amb supervisió mèdica i valoració prèvia.',
		},
		fr: {
			title: 'Dre Jessica Tellechea - Corps',
			heading: 'Soins corps',
			lead:
				'Parcours corps encadré : évaluation avant recommandation, langage premium mais accessible.',
		},
	},
	capilar: {
		es: {
			title: 'Dra. Jessica Tellechea - Capilar',
			heading: 'Salud capilar',
			lead:
				'Diagnóstico y protocolos personalizados, autoridad clínica en seguimiento. Sin discurso de "milagros rápidos".',
		},
		en: {
			title: 'Dr. Jessica Tellechea - Hair',
			heading: 'Hair health',
			lead:
				'Diagnosis-led hair protocols tied to medical follow-up authority—education over discount-driven claims.',
		},
		ca: {
			title: 'Dra. Jessica Tellechea - Capil·lar',
			heading: 'Salut capil·lar',
			lead:
				'Diagnòstic i protocols amb seguiment clínic; missatge educatiu.',
		},
		fr: {
			title: 'Dre Jessica Tellechea - Capillaire',
			heading: 'Santé capillaire',
			lead:
				'Démarche diagnostique et protocoles personnalisés, fortement liés au suivi médical.',
		},
	},
	'criterio-medico': {
		es: {
			title: 'Dra. Jessica Tellechea - Criterio médico',
			heading: 'Criterio médico',
			lead:
				'Etiqueta pública de confianza: cómo se decide el siguiente paso — valoración, transparencia y expectativas realistas antes de compromiso.',
		},
		en: {
			title: 'Dr. Jessica Tellechea - Medical criteria',
			heading: 'Medical criteria',
			lead:
				'How next steps are decided: assessment, transparency, and realistic outcomes—valuation as the primary conversion path.',
		},
		ca: {
			title: 'Dra. Jessica Tellechea - Criteri mèdic',
			heading: 'Criteri mèdic',
			lead:
				'Valoració i criteris clínics abans de proposar tractament; coherència amb el model de confiança.',
		},
		fr: {
			title: 'Dre Jessica Tellechea - Critères médicaux',
			heading: 'Critères médicaux',
			lead:
				'Évaluation et transparence avant tout engagement ; la valorisation reste l\'action dominante.',
		},
	},
	'reservar-cita': {
		es: {
			title: 'Dra. Jessica Tellechea - Reservar cita',
			heading: 'Reserva tu cita por WhatsApp',
			lead:
				'Coordina tu valoración por WhatsApp: cuéntame qué necesitas y confirmo día y hora directamente.',
		},
		en: {
			title: 'Dr. Jessica Tellechea - Book appointment',
			heading: 'Book your appointment via WhatsApp',
			lead:
				'Arrange your assessment on WhatsApp: tell me what you need and I confirm date and time directly.',
		},
		ca: {
			title: 'Dra. Jessica Tellechea - Reservar cita',
			heading: 'Reserva la teva cita per WhatsApp',
			lead:
				'Coordina la teva valoració per WhatsApp: explica\'m què necessites i et confirmo dia i hora directament.',
		},
		fr: {
			title: 'Dre Jessica Tellechea - Prendre rendez-vous',
			heading: 'Prenez rendez-vous par WhatsApp',
			lead:
				'Organisez votre bilan sur WhatsApp : dites-moi ce dont vous avez besoin et je confirme date et heure directement.',
		},
	},
};

/** Release-1 booking placeholder CTA labels (see `defer-booking-cta-to-whatsapp`). */
export const bookingPlaceholderCta: Record<Locale, { whatsapp: string; contact: string }> = {
	es: { whatsapp: 'Escribir por WhatsApp', contact: 'Ver otras vías de contacto' },
	en: { whatsapp: 'Message me on WhatsApp', contact: 'See other ways to contact me' },
	ca: { whatsapp: 'Escriu-me per WhatsApp', contact: 'Veure altres vies de contacte' },
	fr: { whatsapp: 'M\'écrire sur WhatsApp', contact: 'Voir d\'autres moyens de contact' },
};
