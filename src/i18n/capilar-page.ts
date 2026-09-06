import type { Locale as AppLocale } from './config';
import type { CapilarTreatmentKey } from './route-registry';

export type Locale = AppLocale;

interface CapilarSeoContent {
	title: string;
	description: string;
}

interface CapilarHeroContent {
	eyebrow: string;
	h1: string;
	subtitle: string;
	text: string;
	primaryCta: string;
	secondaryCta: string;
	imageSrc: string;
	imageAlt: string;
}

interface CapilarTextBlock {
	eyebrow: string;
	title: string;
	body: string[];
	imageSrc: string;
	imageAlt: string;
}

interface CapilarBenefit {
	icon: string;
	title: string;
	body: string;
}

interface CapilarTreatment {
	treatmentKey: CapilarTreatmentKey;
	title: string;
	body: string;
	tag: string;
	imageSrc: string;
	imageAlt: string;
}

interface CapilarProcessStep {
	title: string;
	body: string;
}

interface CapilarAuthorityItem {
	icon: string;
	title: string;
	body: string;
}

export interface CapilarPageContent {
	seo: CapilarSeoContent;
	hero: CapilarHeroContent;
	identification: { title: string; body: string[] };
	diagnosis: CapilarTextBlock;
	benefitsTitle: string;
	benefits: CapilarBenefit[];
	treatments: { title: string; linkCta: string; items: CapilarTreatment[] };
	process: { title: string; steps: CapilarProcessStep[] };
	authority: { title: string; imageSrc: string; imageAlt: string; items: CapilarAuthorityItem[] };
	finalCta: { h2: string; body: string; primary: string };
}

const spanishCapilarPageContent: CapilarPageContent = {
	seo: {
		title: 'Tratamiento capilar en Barcelona y Tarragona | Dra. Jessica Tellechea',
		description:
			'Recuperar el control sobre tu cabello es el primer paso para reencontrarte con tu imagen más auténtica.',
	},
	hero: {
		eyebrow: 'Medicina capilar',
		h1: 'Tratamiento capilar médico',
		subtitle: 'Recuperar el control sobre tu cabello',
		text: 'El tratamiento capilar comienza entendiendo la causa y definiendo un plan médico adaptado a cada caso.',
		primaryCta: 'Solicitar diagnostico capilar',
		secondaryCta: 'Conoce el criterio médico',
		imageSrc: '/images/home/treatment-capilar.webp',
		imageAlt: 'Espacio de consulta capilar en Barcelona y Tarragona',
	},
	identification: {
		title: 'El cabello forma parte de la identidad',
		body: [
			'Cada caso capilar tiene una causa, una evolución y unas necesidades propias.',
			'En el tratamiento capilar, la Dra. Jessica Tellechea aborda cada caso desde el diagnóstico, el seguimiento y un acompañamiento médico adaptado a cada persona.',
		],
	},
	diagnosis: {
		eyebrow: 'Diagnóstico capilar',
		title: 'Cada caso requiere diagnóstico y seguimiento',
		body: [
			'No todos los procesos capilares tienen el mismo origen ni evolucionan igual. Por eso, cada tratamiento comienza con una valoración clínica y un plan adaptado.',
			'La evolución capilar se acompaña desde el diagnóstico, el seguimiento y el criterio médico.',
		],
		imageSrc: '/images/home/capillary.webp',
		imageAlt: 'Diagnóstico médico capilar detallado',
	},
	benefitsTitle: 'Áreas de mejora',
	benefits: [
		{
		  icon: 'ph-shield-check',
		  title: 'Control de caída',
		  body: 'Apoyo en el control de la caída del cabello desde un enfoque médico y progresivo.',
		},
		{
		  icon: 'ph-sparkle',
		  title: 'Estimulación capilar',
		  body: 'Estimulación del crecimiento capilar según las necesidades de cada caso.',
		},
		{
		  icon: 'ph-hair-dryer',
		  title: 'Densidad y aspecto',
		  body: 'Mejora de la densidad y del aspecto general del cabello.',
		},
		{
		  icon: 'ph-leaf',
		  title: 'Salud del cuero cabelludo',
		  body: 'Fortalecimiento del cuero cabelludo y del folículo piloso.',
		},
		{
		  icon: 'ph-clipboard-text',
		  title: 'Seguimiento médico',
		  body: 'Control de la evolución para ajustar el tratamiento cuando sea necesario.',
		},
	  ],
	treatments: {
		title: 'Tratamientos médicos.',
		linkCta: 'Ver tratamiento',
		items: [
			{
				treatmentKey: 'mesoterapia-capilar',
				title: 'Mesoterapia Capilar Médica',
				body:
					'Infiltración directa de péptidos, vitaminas y fármacos antiandrógenos para nutrir el folículo desde el interior.',
				tag: 'Regenerativo',
				imageSrc: '/images/capilar/carbox/foliculo.png',
				imageAlt: 'Folículo piloso en contexto de mesoterapia capilar médica',
			},
			{
				treatmentKey: 'prp-capilar',
				title: 'PRP Capilar (Plasma Rico en Plaquetas)',
				body:
					'Utilización de los factores de crecimiento propios del paciente para regenerar tejidos y potenciar la vascularización.',
				tag: 'Autólogo',
				imageSrc: '/images/home/treatment-capilar.webp',
				imageAlt: 'Tratamiento PRP capilar con plasma rico en plaquetas',
			},
			{
				treatmentKey: 'carboxiterapia-capilar',
				title: 'Carboxiterapia Capilar',
				body: 'Mejora de la microcirculación mediante la aplicación de CO2 medicinal, facilitando la llegada de nutrientes.',
				tag: 'Circulatorio',
				imageSrc: '/images/capilar/carbox/carboxitherapy-3.png',
				imageAlt: 'Paciente revisando su cabello tras carboxiterapia capilar',
			},
			{
				treatmentKey: 'transplante-capilar',
				title: 'Transplante Capilar',
				body:
					'Reposición de densidad mediante extracción e implantación de folículos bajo criterio médico, con valoración previa y plan personalizado.',
				tag: 'Quirúrgico',
				imageSrc: '/images/capilar/transplant/transplant-planification.png',
				imageAlt: 'Planificación de transplante capilar con el paciente en consulta',
			},
		],
	},
	process: {
		title: 'El proceso capilar',
		steps: [
			{
				title: 'Diagnóstico capilar',
				body: 'Valoración del cuero cabelludo, el cabello y la historia clínica para entender el punto de partida.',
			},
			{
				title: 'Identificación de la causa',
				body: 'Análisis de los factores que pueden influir en la caída o el debilitamiento capilar.',
			},
			{
				title: 'Plan de tratamiento',
				body: 'Propuesta médica adaptada a cada caso, con objetivos realistas y progresivos.',
			},
			{
				title: 'Seguimiento y control',
				body: 'Acompañamiento de la evolución para ajustar el tratamiento según la respuesta de cada paciente.',
			},
		],
	},
	authority: {
		title: 'Diagnóstico, evolución y seguimiento',
		imageSrc: '/images/home/clinic-primary.webp',
		imageAlt: 'Profesional médico en entorno clínico premium',
		items: [
			{
				icon: 'ph-magnifying-glass',
				title: 'VALORACIÓN CLÍNICA',
				body: 'Cada tratamiento comienza con una valoración médica orientada a comprender el origen y la evolución del problema capilar.',
			},
			{
				icon: 'ph-sliders-horizontal',
				title: 'TRATAMIENTO ADAPTADO',
				body: 'Protocolos personalizados según las necesidades, el diagnóstico y la evolución de cada caso.',
			},
			{
				icon: 'ph-chart-line-up',
				title: 'SEGUIMIENTO MÉDICO',
				body: 'Acompañamiento de la evolución capilar para ajustar el tratamiento de forma progresiva y coherente.',
			},
		],
	},
	finalCta: {
		h2: 'Empieza con un diagnóstico capilar',
		body: 'El primer paso es entender tu caso y definir un plan adecuado.',
		primary: 'Solicitar diagnostico capilar',
	},
};

export const capilarPageContent: Record<Locale, CapilarPageContent> = {
	es: spanishCapilarPageContent,
	en: {
		...spanishCapilarPageContent,
		seo: {
			title: 'Hair treatment in Barcelona and Tarragona | Dr. Jessica Tellechea',
			description: 'Regaining control over your hair is the first step toward reconnecting with your most authentic image.',
		},
		hero: {
			...spanishCapilarPageContent.hero,
			eyebrow: 'ADVANCED MEDICINE',
			h1: 'Medical hair treatment',
			subtitle: 'Regain control over your hair',
			text: 'Hair treatment starts by understanding the cause and defining a medical plan tailored to each case.',
			primaryCta: 'Request hair diagnosis',
			secondaryCta: 'See the medical criteria',
			imageAlt: 'Hair consultation space in Barcelona and Tarragona',
		},
		identification: {
			title: 'Hair is part of identity',
			body: [
				'Every hair case has its own cause, progression, and needs.',
				'In hair treatment, Dr. Jessica Tellechea approaches each case through diagnosis, follow-up and medical guidance adapted to each person.',
			],
		},
		diagnosis: {
			eyebrow: 'Hair diagnosis',
			title: 'Every case requires diagnosis and follow-up',
			body: [
				'Not all hair conditions share the same origin or evolution. That is why each treatment starts with a clinical assessment and a tailored plan.',
				'Hair evolution is accompanied through diagnosis, follow-up and medical criteria.',
			],
			imageSrc: '/images/home/capillary.webp',
			imageAlt: 'Detailed medical hair diagnosis',
		},
		benefitsTitle: 'Areas of improvement',
		benefits: [
			{
				icon: 'ph-shield-check',
				title: 'Hair loss control',
				body: 'Support for controlling hair loss through a progressive medical approach.',
			},
			{
				icon: 'ph-sparkle',
				title: 'Hair stimulation',
				body: 'Stimulation of hair growth according to each case needs.',
			},
			{
				icon: 'ph-hair-dryer',
				title: 'Density and appearance',
				body: 'Improvement in density and overall hair appearance.',
			},
			{
				icon: 'ph-leaf',
				title: 'Scalp health',
				body: 'Strengthening of the scalp and hair follicle.',
			},
			{
				icon: 'ph-clipboard-text',
				title: 'Medical follow-up',
				body: 'Progress monitoring to adjust treatment when needed.',
			},
		],
		treatments: {
			title: 'Medical treatments.',
			linkCta: 'View treatment',
			items: [
				{
					...spanishCapilarPageContent.treatments.items[0],
					title: 'Medical Hair Mesotherapy',
					body: 'Direct infiltration of peptides, vitamins, and anti-androgen drugs to nourish the follicle from within.',
					tag: 'Regenerative',
					imageAlt: 'Hair follicle in medical capillary mesotherapy context',
				},
				{
					...spanishCapilarPageContent.treatments.items[1],
					title: 'Hair PRP (Platelet-Rich Plasma)',
					body: 'Use of the patient\'s own growth factors to regenerate tissue and enhance vascularization.',
					tag: 'Autologous',
					imageAlt: 'Hair PRP treatment with platelet-rich plasma',
				},
				{
					...spanishCapilarPageContent.treatments.items[2],
					title: 'Capilar Carboxytherapy',
					body: 'Improved microcirculation through medical CO2 application, facilitating nutrient delivery.',
					tag: 'Circulatory',
					imageAlt: 'Patient checking hair after capillary carboxytherapy',
				},
				{
					...spanishCapilarPageContent.treatments.items[3],
					title: 'Hair Transplant',
					body:
						'Density restoration through follicle extraction and implantation under medical criteria, with prior assessment and a personalised plan.',
					tag: 'Surgical',
					imageAlt: 'Hair transplant planning with patient in consultation',
				},
			],
		},
		process: {
			title: 'The hair process',
			steps: [
				{
					title: 'Hair diagnosis',
					body: 'Evaluation of scalp, hair, and medical history to understand the starting point.',
				},
				{
					title: 'Cause identification',
					body: 'Analysis of factors that may influence hair loss or weakening.',
				},
				{
					title: 'Treatment plan',
					body: 'Medical proposal tailored to each case, with realistic and progressive goals.',
				},
				{
					title: 'Follow-up and control',
					body: 'Ongoing support during evolution to adjust treatment according to each patient response.',
				},
			],
		},
		authority: {
			title: 'Diagnosis, progression, and follow-up',
			imageSrc: '/images/home/clinic-primary.webp',
			imageAlt: 'Medical professional in a premium clinical setting',
			items: [
				{
					icon: 'ph-magnifying-glass',
					title: 'CLINICAL ASSESSMENT',
					body: 'Every treatment begins with a medical assessment focused on understanding the origin and evolution of the hair condition.',
				},
				{
					icon: 'ph-sliders-horizontal',
					title: 'ADAPTED TREATMENT',
					body: 'Personalised protocols according to each case needs, diagnosis and evolution.',
				},
				{
					icon: 'ph-chart-line-up',
					title: 'MEDICAL FOLLOW-UP',
					body: 'Ongoing support during hair evolution to adjust treatment progressively and coherently.',
				},
			],
		},
		finalCta: {
			h2: 'Start your transformation today.',
			body: 'Book your first diagnostic consultation and discover the potential of your hair health.',
			primary: 'Book Medical Appointment',
		},
	},
	ca: {
		...spanishCapilarPageContent,
		seo: {
			title: 'Tractament capil·lar a Barcelona i Tarragona | Dra. Jessica Tellechea',
			description: 'Recuperar el control sobre el teu cabell és el primer pas per reconnectar amb la teva imatge més autèntica.',
		},
		hero: {
			...spanishCapilarPageContent.hero,
			eyebrow: 'MEDICINA D AVANGUARDA',
			h1: 'Tractament capil·lar mèdic',
			subtitle: 'Recuperar el control sobre el teu cabell',
			text: 'El tractament capil·lar comença entenent la causa i definint un pla mèdic adaptat a cada cas.',
			primaryCta: 'Sol·licitar diagnòstic capil·lar',
			secondaryCta: 'Coneix el criteri mèdic',
			imageAlt: 'Espai de consulta capil·lar a Barcelona i Tarragona',
		},
		identification: {
			title: 'El cabell forma part de la identitat',
			body: [
				'Cada cas capil·lar té una causa, una evolució i unes necessitats pròpies.',
				'En el tractament capil·lar, la Dra. Jessica Tellechea aborda cada cas des del diagnòstic, el seguiment i un acompanyament mèdic adaptat a cada persona.',
			],
		},
		diagnosis: {
			eyebrow: 'Diagnòstic capil·lar',
			title: 'Cada cas requereix diagnòstic i seguiment',
			body: [
				'No tots els processos capil·lars tenen el mateix origen ni evolucionen igual. Per això, cada tractament comença amb una valoració clínica i un pla adaptat.',
				'L\'evolució capil·lar s\'acompanya des del diagnòstic, el seguiment i el criteri mèdic.',
			],
			imageSrc: '/images/home/capillary.webp',
			imageAlt: 'Diagnòstic mèdic capil·lar detallat',
		},
		benefitsTitle: 'Àrees de millora',
		benefits: [
			{
				icon: 'ph-shield-check',
				title: 'Control de la caiguda',
				body: 'Suport en el control de la caiguda del cabell des d un enfocament mèdic i progressiu.',
			},
			{
				icon: 'ph-sparkle',
				title: 'Estimulació capil·lar',
				body: 'Estimulació del creixement capil·lar segons les necessitats de cada cas.',
			},
			{
				icon: 'ph-hair-dryer',
				title: 'Densitat i aspecte',
				body: 'Millora de la densitat i de l aspecte general del cabell.',
			},
			{
				icon: 'ph-leaf',
				title: 'Salut del cuir cabellut',
				body: 'Enfortiment del cuir cabellut i del fol·licle pilós.',
			},
			{
				icon: 'ph-clipboard-text',
				title: 'Seguiment mèdic',
				body: 'Control de l evolució per ajustar el tractament quan sigui necessari.',
			},
		],
		treatments: {
			title: 'Tractaments mèdics.',
			linkCta: 'Veure tractament',
			items: [
				{
					...spanishCapilarPageContent.treatments.items[0],
					title: 'Mesoteràpia capil·lar mèdica',
					body: 'Infiltració directa de pèptids, vitamines i fàrmacs antiandrògens per nodrir el fol·licle des de l interior.',
					tag: 'Regeneratiu',
					imageAlt: 'Fol·licle pilós en context de mesoteràpia capil·lar mèdica',
				},
				{
					...spanishCapilarPageContent.treatments.items[1],
					title: 'PRP capil·lar (plasma ric en plaquetes)',
					body: 'Utilització dels factors de creixement propis del pacient per regenerar teixits i potenciar la vascularització.',
					tag: 'Autòleg',
					imageAlt: 'Tractament PRP capil·lar amb plasma ric en plaquetes',
				},
				{
					...spanishCapilarPageContent.treatments.items[2],
					title: 'Carboxiteràpia capil·lar',
					body: 'Millora de la microcirculació mitjançant l aplicació de CO2 medicinal, facilitant l arribada de nutrients.',
					tag: 'Circulatòri',
					imageAlt: 'Pacient revisant el cabell després de carboxiteràpia capil·lar',
				},
				{
					...spanishCapilarPageContent.treatments.items[3],
					title: 'Trasplantament capil·lar',
					body:
						'Reposició de densitat mitjançant extracció i implantació de fol·licles sota criteri mèdic, amb valoració prèvia i pla personalitzat.',
					tag: 'Quirúrgic',
					imageAlt: 'Planificació de transplant capil·lar amb el pacient en consulta',
				},
			],
		},
		process: {
			title: 'El procés capil·lar',
			steps: [
				{
					title: 'Diagnòstic capil·lar',
					body: 'Valoració del cuir cabellut, el cabell i la història clínica per entendre el punt de partida.',
				},
				{
					title: 'Identificació de la causa',
					body: 'Anàlisi dels factors que poden influir en la caiguda o l afebliment capil·lar.',
				},
				{
					title: 'Pla de tractament',
					body: 'Proposta mèdica adaptada a cada cas, amb objectius realistes i progressius.',
				},
				{
					title: 'Seguiment i control',
					body: 'Acompanyament de l evolució per ajustar el tractament segons la resposta de cada pacient.',
				},
			],
		},
		authority: {
			title: 'Diagnòstic, evolució i seguiment',
			imageSrc: '/images/home/clinic-primary.webp',
			imageAlt: 'Professional mèdic en un entorn clínic premium',
			items: [
				{
					icon: 'ph-magnifying-glass',
					title: 'VALORACIÓ CLÍNICA',
					body: 'Cada tractament comença amb una valoració mèdica orientada a comprendre l origen i l evolució del problema capil·lar.',
				},
				{
					icon: 'ph-sliders-horizontal',
					title: 'TRACTAMENT ADAPTAT',
					body: 'Protocols personalitzats segons les necessitats, el diagnòstic i l evolució de cada cas.',
				},
				{
					icon: 'ph-chart-line-up',
					title: 'SEGUIMENT MÈDIC',
					body: 'Acompanyament de l evolució capil·lar per ajustar el tractament de manera progressiva i coherent.',
				},
			],
		},
		finalCta: {
			h2: 'Comença avui la teva transformació.',
			body: 'Reserva la teva primera consulta diagnòstica i descobreix el potencial de la teva salut capil·lar.',
			primary: 'Agendar visita mèdica',
		},
	},
	fr: {
		...spanishCapilarPageContent,
		seo: {
			title: 'Traitement capillaire a Barcelone et Tarragone | Dre Jessica Tellechea',
			description: 'Retrouver le controle sur vos cheveux est la premiere etape pour renouer avec votre image la plus authentique.',
		},
		hero: {
			...spanishCapilarPageContent.hero,
			eyebrow: 'MEDECINE DE POINTE',
			h1: 'Traitement capillaire medical',
			subtitle: 'Retrouver le controle sur vos cheveux',
			text: 'Le traitement capillaire commence par la comprehension de la cause et la definition d un plan medical adapte a chaque cas.',
			primaryCta: 'Demander un diagnostic capillaire',
			secondaryCta: 'Voir le critere medical',
			imageAlt: 'Espace de consultation capillaire a Barcelone et Tarragone',
		},
		benefitsTitle: 'Zones d\'amelioration',
		identification: {
			title: 'Les cheveux font partie de l identite',
			body: [
				'Chaque cas capillaire a sa cause, son evolution et ses besoins propres.',
				'Dans le traitement capillaire, la Dre Jessica Tellechea aborde chaque cas par le diagnostic, le suivi et un accompagnement medical adapte a chaque personne.',
			],
		},
		diagnosis: {
			eyebrow: 'Diagnostic capillaire',
			title: 'Chaque cas requiert diagnostic et suivi',
			body: [
				'Tous les processus capillaires n ont pas la meme origine ni la meme evolution. C est pourquoi chaque traitement commence par une evaluation clinique et un plan adapte.',
				'L\'evolution capillaire s\'accompagne par le diagnostic, le suivi et le critere medical.',
			],
			imageSrc: '/images/home/capillary.webp',
			imageAlt: 'Diagnostic medical capillaire detaille',
		},
		benefits: [
			{
				icon: 'ph-shield-check',
				title: 'Controle de la chute',
				body: 'Soutien au controle de la chute des cheveux avec une approche medicale et progressive.',
			},
			{
				icon: 'ph-sparkle',
				title: 'Stimulation capillaire',
				body: 'Stimulation de la croissance capillaire selon les besoins de chaque cas.',
			},
			{
				icon: 'ph-hair-dryer',
				title: 'Densite et apparence',
				body: 'Amelioration de la densite et de l apparence generale des cheveux.',
			},
			{
				icon: 'ph-leaf',
				title: 'Sante du cuir chevelu',
				body: 'Renforcement du cuir chevelu et du follicule pileux.',
			},
			{
				icon: 'ph-clipboard-text',
				title: 'Suivi medical',
				body: 'Controle de l evolution pour ajuster le traitement lorsque necessaire.',
			},
		],
		treatments: {
			title: 'Traitements médicaux.',
			linkCta: 'Voir le traitement',
			items: [
				{
					...spanishCapilarPageContent.treatments.items[0],
					title: 'Mesotherapie capillaire medicale',
					body: 'Infiltration directe de peptides, vitamines et medicaments antiandrogenes pour nourrir le follicule de l interieur.',
					tag: 'Regeneratif',
					imageAlt: 'Follicule pileux en contexte de mésothérapie capillaire médicale',
				},
				{
					...spanishCapilarPageContent.treatments.items[1],
					title: 'PRP capillaire (plasma riche en plaquettes)',
					body: 'Utilisation des facteurs de croissance du patient pour regenerer les tissus et renforcer la vascularisation.',
					tag: 'Autologue',
					imageAlt: 'Traitement PRP capillaire avec plasma riche en plaquettes',
				},
				{
					...spanishCapilarPageContent.treatments.items[2],
					title: 'Carboxytherapie capillaire',
					body: 'Amelioration de la microcirculation par application de CO2 medical, facilitant l apport en nutriments.',
					tag: 'Circulatoire',
					imageAlt: 'Patient vérifiant ses cheveux après carboxythérapie capillaire',
				},
				{
					...spanishCapilarPageContent.treatments.items[3],
					title: 'Greffe capillaire',
					body:
						'Restauration de la densite par extraction et implantation de follicules sous critere medical, avec evaluation prealable et plan personnalise.',
					tag: 'Chirurgical',
					imageAlt: 'Planification de greffe capillaire avec le patient en consultation',
				},
			],
		},
		process: {
			title: 'Le processus capillaire',
			steps: [
				{
					title: 'Diagnostic capillaire',
					body: 'Evaluation du cuir chevelu, des cheveux et de l historique clinique pour comprendre le point de depart.',
				},
				{
					title: 'Identification de la cause',
					body: 'Analyse des facteurs pouvant influencer la chute ou l affaiblissement capillaire.',
				},
				{
					title: 'Plan de traitement',
					body: 'Proposition medicale adaptee a chaque cas, avec des objectifs realistes et progressifs.',
				},
				{
					title: 'Suivi et controle',
					body: 'Accompagnement de l evolution pour ajuster le traitement selon la reponse de chaque patient.',
				},
			],
		},
		authority: {
			title: 'Diagnostic, evolution et suivi',
			imageSrc: '/images/home/clinic-primary.webp',
			imageAlt: 'Professionnel medical dans un environnement clinique premium',
			items: [
				{
					icon: 'ph-magnifying-glass',
					title: 'EVALUATION CLINIQUE',
					body: 'Chaque traitement commence par une evaluation medicale visant a comprendre l origine et l evolution du probleme capillaire.',
				},
				{
					icon: 'ph-sliders-horizontal',
					title: 'TRAITEMENT ADAPTE',
					body: 'Protocoles personnalises selon les besoins, le diagnostic et l evolution de chaque cas.',
				},
				{
					icon: 'ph-chart-line-up',
					title: 'SUIVI MEDICAL',
					body: 'Accompagnement de l evolution capillaire pour ajuster le traitement de facon progressive et coherente.',
				},
			],
		},
		finalCta: {
			h2: 'Commencez votre transformation des aujourd hui.',
			body: 'Reservez votre premiere consultation diagnostique et decouvrez le potentiel de votre sante capillaire.',
			primary: 'Prendre rendez-vous medical',
		},
	},
};
