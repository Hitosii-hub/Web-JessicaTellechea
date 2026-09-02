import type { Locale as AppLocale } from './config';

export type Locale = AppLocale;

interface TrustSeoContent {
	title: string;
	description: string;
}

interface TrustHeroContent {
	eyebrow: string;
	h1: string;
	subtitle: string;
	text: string;
	cta: string;
	imageSrc: string;
	imageAlt: string;
}

interface TrustMeaningContent {
	eyebrow: string;
	h2: string;
	text: string[];
}

interface TrustProtocolStep {
	title: string;
	body: string;
}

interface TrustConsultationPillar {
	title: string;
	body: string;
}

interface TrustPrincipleItem {
	title: string;
	body: string;
}

export interface TrustPrinciplesContent {
	eyebrow: string;
	h2: string;
	items: TrustPrincipleItem[];
}

export interface TrustPageContent {
	seo: TrustSeoContent;
	hero: TrustHeroContent;
	meaning: TrustMeaningContent;
	valuation: {
		eyebrow: string;
		h2: string;
		intro: string;
		steps: TrustProtocolStep[];
	};
	consultation: {
		eyebrow: string;
		h2: string;
		intro: string;
		items: TrustConsultationPillar[];
	};
	principles: TrustPrinciplesContent;
	finalCta: {
		eyebrow: string;
		h2: string;
		text: string;
		cta: string;
		secondaryCta: string;
	};
}

const spanishTrustPageContent: TrustPageContent = {
	seo: {
		title: 'Criterio médico | Dra. Jessica Tellechea',
		description:
			'Entiendo la estética como una extensión de la salud. Cada intervención nace de un análisis riguroso y una visión artística equilibrada.',
	},
	hero: {
		eyebrow: 'CRITERIO MÉDICO',
		h1: 'Criterio médico para cuidar, preservar y mejorar',
		subtitle:
		  'Entiendo la medicina estética desde la valoración, la naturalidad y la evolución progresiva.',
		text:
		  'Cada tratamiento se define según la necesidad real del paciente, su anatomía, su ritmo y su objetivo.',
		cta: 'Solicitar valoración',
		imageSrc: '/images/home/clinic-primary.webp',
		imageAlt:
			'Vista interior de una consulta médica de medicina estética con acabados de microcemento, iluminación indirecta cálida y un ambiente sereno.',
	},
	meaning: {
		eyebrow: 'FILOSOFÍA',
		h2: 'Qué significa tratar con criterio médico',
		text: [
		  'Tratar con criterio médico significa valorar antes de indicar, escuchar antes de proponer y entender que no todo tratamiento es necesario para todos los pacientes.',
		  'En mi práctica, la medicina estética no parte de una tendencia, sino de una evaluación individual: anatomía, calidad de piel, expresión, antecedentes, expectativas y evolución esperada.',
		  'El objetivo no es transformar un rostro o un cuerpo, sino acompañar una mejora natural, segura y coherente con cada persona.',
		],
	},
	valuation: {
		eyebrow: 'VALORACIÓN MÉDICA',
		h2: 'Cómo se construye una valoración',
		intro:
		  'La valoración es el punto de partida de cualquier tratamiento. Permite entender qué necesita realmente cada paciente y definir un plan con sentido clínico y estético.',
		steps: [
		  {
			title: 'Escucha clínica',
			body:
			  'Comprensión del motivo de consulta, las expectativas, los antecedentes y aquello que preocupa al paciente.',
		  },
		  {
			title: 'Análisis individual',
			body:
			  'Valoración de anatomía, calidad de piel, expresión, proporciones, hábitos y evolución para entender el caso en conjunto.',
		  },
		  {
			title: 'Priorización',
			body:
			  'Definición de qué conviene tratar primero, qué puede esperar y qué no sería recomendable en ese momento.',
		  },
		  {
			title: 'Plan progresivo',
			body:
			  'Propuesta de una hoja de ruta adaptada, realista y orientada a resultados naturales, con seguimiento cuando el caso lo requiere.',
		  },
		],
	},
	consultation: {
	    eyebrow: 'EN CONSULTA',
    h2: 'Qué puede esperar el paciente',
    intro:
      'La consulta está pensada para ofrecer una experiencia clara, honesta y tranquila. El paciente debe comprender su caso antes de tomar cualquier decisión.',
    items: [
      {
        title: 'Tiempo para valorar',
        body:
          'Tiempo suficiente para entender el caso, resolver dudas y explicar las opciones disponibles.',
      },
      {
        title: 'Información clara',
        body:
          'Explicación clara de qué puede aportar cada tratamiento, sus límites, sus cuidados y el tipo de evolución esperable.',
      },
      {
        title: 'Indicación honesta',
        body:
          'Sólo se recomienda aquello que resulta adecuado para el paciente, evitando tratamientos innecesarios o poco coherentes.',
      },
      {
        title: 'Acompañamiento',
        body:
          'Cuando el tratamiento lo requiere, se realiza seguimiento para valorar la evolución y ajustar el plan si es necesario.',
      },
    ],
	},
	principles: {
		eyebrow: 'PILARES',
		h2: 'Naturalidad, seguridad y seguimiento',
		items: [
			{
				title: 'Naturalidad',
				body:
					'Resultados que respetan la identidad, la expresión y la armonía propia de cada paciente.',
			},
			{
				title: 'Seguridad médica',
				body:
					'Cada procedimiento debe indicarse con criterio, técnica adecuada y materiales autorizados para uso médico-estético.',
			},
			{
				title: 'Evolución progresiva',
				body:
					'Planes graduales, medibles y adaptados al ritmo de cada persona antes que cambios bruscos o innecesarios.',
			},
		],
	},
	finalCta: {
		eyebrow: 'PRIMER PASO',
		h2: 'Empieza con una valoración médica',
		text:
		  'El primer paso es entender tu caso, valorar tus necesidades reales y definir si existe un tratamiento adecuado para ti.',
		cta: 'Solicitar valoración',
		secondaryCta: 'Resolver dudas por WhatsApp',
	  },
};

export const trustPageContent: Record<Locale, TrustPageContent> = {
	es: spanishTrustPageContent,
	en: {
		...spanishTrustPageContent,
		hero: {
			...spanishTrustPageContent.hero,
			eyebrow: 'MEDICAL EXCELLENCE',
		},
		principles: {
			eyebrow: 'PILLARS',
			h2: 'Naturalness, safety and follow-up',
			items: [
				{
					title: 'Naturalness',
					body:
						'Outcomes that respect identity, expression and each patient\'s inherent harmony.',
				},
				{
					title: 'Medical safety',
					body:
						'Every procedure should be indicated with sound judgment, appropriate technique and materials authorised for medical aesthetic use.',
				},
				{
					title: 'Progressive evolution',
					body:
						'Gradual, measurable plans adapted to each person\'s pace rather than abrupt or unnecessary changes.',
				},
			],
		},
	},
	ca: {
		...spanishTrustPageContent,
		hero: {
			...spanishTrustPageContent.hero,
			eyebrow: 'EXCELLENCIA MEDICA',
		},
		principles: {
			eyebrow: 'PILARS',
			h2: 'Naturalitat, seguretat i seguiment',
			items: [
				{
					title: 'Naturalitat',
					body:
						'Resultats que respecten la identitat, l\'expressió i l\'harmonia pròpia de cada pacient.',
				},
				{
					title: 'Seguretat mèdica',
					body:
						'Cada procediment s\'ha d\'indicar amb criteri, tècnica adequada i materials autoritzats per a ús mèdic-estètic.',
				},
				{
					title: 'Evolució progressiva',
					body:
						'Plans graduals, mesurables i adaptats al ritme de cada persona abans que canvis bruscos o innecessaris.',
				},
			],
		},
	},
	fr: {
		...spanishTrustPageContent,
		hero: {
			...spanishTrustPageContent.hero,
			eyebrow: 'EXCELLENCE MEDICALE',
		},
		principles: {
			eyebrow: 'PILIERS',
			h2: 'Naturalité, sécurité et suivi',
			items: [
				{
					title: 'Naturalité',
					body:
						'Résultats qui respectent l\'identité, l\'expression et l\'harmonie propre à chaque patient.',
				},
				{
					title: 'Sécurité médicale',
					body:
						'Chaque acte doit être indiqué avec discernement, une technique adaptée et des matériaux autorisés pour un usage médico-esthétique.',
				},
				{
					title: 'Évolution progressive',
					body:
						'Parcours graduels, mesurés et adaptés au rythme de chacun plutôt que des changements brutaux ou inutiles.',
				},
			],
		},
	},
};
