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
		title: 'WebAJ - Clinica estetica y capilar',
		heading: 'Clinica premium con criterio medico',
		lead:
			'Presentamos AJ como una clinica fundamentada en juicio clinico, resultados naturales y seguimiento progresivo. Tres pilares — Facial, Corporal y Capilar — con valoracion antes de recomendar protocolo.',
	},
	en: {
		title: 'WebAJ - Aesthetic and hair clinic',
		heading: 'Premium clinic grounded in medical judgment',
		lead:
			'Medical assessment first, calm and credible tone, natural outcomes over hype. Three pillars — Face, Body, and Hair — with evaluation before any protocol recommendation.',
	},
	ca: {
		title: 'WebAJ - Clinica estetica i capil·lar',
		heading: 'Clinica premium amb criteri medic',
		lead:
			'Llenguatge clar i responsable, resultats naturals i seguiment progressiu. Tres pilars — Facial, Corporal i Capil·lar — amb valoracio previa.',
	},
	fr: {
		title: 'WebAJ - Clinique esthetique et capillaire',
		heading: 'Clinique premium ancree dans le jugement medical',
		lead:
			'Evaluation medicale d\'abord, ton calme et credible, resultats naturels. Trois piliers — visage, corps et cheveux — avec bilan avant protocole.',
	},
};

export const pageStubsBySegment: Record<StubSegment, Record<Locale, PageStub>> = {
	facial: {
		es: {
			title: 'WebAJ - Facial',
			heading: 'Tratamientos faciales',
			lead:
				'Rejuvenecimiento y armonia con transparencia: beneficios realistas, sin urgencia comercial ni promesas absolutas. Siempre enmarcado en criterio medico.',
		},
		en: {
			title: 'WebAJ - Facial',
			heading: 'Facial treatments',
			lead:
				'Facial rejuvenation explained with medical framing—progressive, individualized outcomes rather than cosmetic hype.',
		},
		ca: {
			title: 'WebAJ - Facial',
			heading: 'Tractaments facials',
			lead:
				'Benestar facial amb criteri medic, sense sobrepromeses ni llenguatge agressiu.',
		},
		fr: {
			title: 'WebAJ - Facial',
			heading: 'Soins du visage',
			lead:
				'Approche clinique responsable: resultats progressifs, attentes realistes, sans marketing pressant.',
		},
	},
	corporal: {
		es: {
			title: 'WebAJ - Corporal',
			heading: 'Tratamientos corporales',
			lead:
				'Enfoque corporal supervisado: valoracion previa y benefit families claras, sin catalogo agresivo en la entrada.',
		},
		en: {
			title: 'WebAJ - Body',
			heading: 'Body treatments',
			lead:
				'Medically supervised body care—assessment-first messaging and concise sections that transition clearly to action.',
		},
		ca: {
			title: 'WebAJ - Corporal',
			heading: 'Tractaments corporals',
			lead:
				'Propostes corporals amb supervisio medica i valoracio previa.',
		},
		fr: {
			title: 'WebAJ - Corps',
			heading: 'Soins corps',
			lead:
				'Parcours corps encadre: evaluation avant recommandation, langage premium mais accessible.',
		},
	},
	capilar: {
		es: {
			title: 'WebAJ - Capilar',
			heading: 'Salud capilar',
			lead:
				'Diagnostico y protocolos personalizados, autoridad clinica en seguimiento. Evitamos el discurso de “milagros rapidos”.',
		},
		en: {
			title: 'WebAJ - Hair',
			heading: 'Hair health',
			lead:
				'Diagnosis-led hair protocols tied to medical follow-up authority—education over discount-driven claims.',
		},
		ca: {
			title: 'WebAJ - Capil·lar',
			heading: 'Salut capil·lar',
			lead:
				'Diagnostic i protocols amb seguiment clinic; missatge educatiu.',
		},
		fr: {
			title: 'WebAJ - Capillaire',
			heading: 'Sante capillaire',
			lead:
				'Demarche diagnostic et protocoles personnalises, fortement lies au suivi medical.',
		},
	},
	'criterio-medico': {
		es: {
			title: 'WebAJ - Criterio medico',
			heading: 'Criterio medico',
			lead:
				'Etiqueta publica de confianza: como decidimos el siguiente paso — valoracion, transparencia y expectativas realistas antes de compromiso.',
		},
		en: {
			title: 'WebAJ - Medical criteria',
			heading: 'Medical criteria',
			lead:
				'How we decide next steps: assessment, transparency, and realistic outcomes—valuation as the primary conversion path.',
		},
		ca: {
			title: 'WebAJ - Criteri medic',
			heading: 'Criteri medic',
			lead:
				'Valoracio i criteris clinics abans de proposar tractament; coherencia amb el model de confianca.',
		},
		fr: {
			title: 'WebAJ - Criteres medicaux',
			heading: 'Criteres medicaux',
			lead:
				'Evaluation et transparence avant tout engagement; la valorisation reste l action dominante.',
		},
	},
	'reservar-cita': {
		es: {
			title: 'WebAJ - Reservar cita',
			heading: 'Reserva tu cita por WhatsApp',
			lead:
				'Coordinamos tu valoración por WhatsApp: contanos qué necesitás y te confirmamos día y hora directamente con el equipo.',
		},
		en: {
			title: 'WebAJ - Book appointment',
			heading: 'Book your appointment via WhatsApp',
			lead:
				'We arrange your assessment on WhatsApp: tell us what you need and we confirm date and time directly with the team.',
		},
		ca: {
			title: 'WebAJ - Reservar cita',
			heading: 'Reserva la teva cita per WhatsApp',
			lead:
				'Coordinem la teva valoració per WhatsApp: explica què necessites i et confirmem dia i hora directament amb l\'equip.',
		},
		fr: {
			title: 'WebAJ - Prendre rendez-vous',
			heading: 'Prenez rendez-vous par WhatsApp',
			lead:
				'Nous organisons votre bilan sur WhatsApp : dites-nous ce dont vous avez besoin et nous confirmons la date et l\'heure directement avec l\'équipe.',
		},
	},
};

/** Release-1 booking placeholder CTA labels (see `defer-booking-cta-to-whatsapp`). */
export const bookingPlaceholderCta: Record<Locale, { whatsapp: string; contact: string }> = {
	es: { whatsapp: 'Escribir por WhatsApp', contact: 'Ver otras vías de contacto' },
	en: { whatsapp: 'Message us on WhatsApp', contact: 'See other ways to contact us' },
	ca: { whatsapp: 'Escriu-nos per WhatsApp', contact: 'Veure altres vies de contacte' },
	fr: { whatsapp: 'Nous écrire sur WhatsApp', contact: 'Voir d\'autres moyens de contact' },
};
