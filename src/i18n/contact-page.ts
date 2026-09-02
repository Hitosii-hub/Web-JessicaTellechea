import type { Locale } from './config';

interface ContactPageContent {
	seo: {
		title: string;
		description: string;
	};
	hero: {
		eyebrow: string;
		h1: string;
		lead: string;
		imageSrc: string;
		imageAlt: string;
	};
	form: {
		name: string;
		namePlaceholder: string;
		phone: string;
		phonePlaceholder: string;
		email: string;
		emailPlaceholder: string;
		message: string;
		messagePlaceholder: string;
		privacyNote: string;
		submit: string;
	};
	contactDetails: {
		h2: string;
		addressLabel: string;
		addressFallback: string;
		phoneLabel: string;
		phoneFallback: string;
		emailLabel: string;
		emailFallback: string;
		mapLabel: string;
		mapText: string;
	};
	trust: {
		quote: string;
		author: string;
	};
}

export const contactPageContent: Record<Locale, ContactPageContent> = {
	es: {
		seo: {
			title: 'Dra. Jessica Tellechea - Solicita tu valoración',
			description:
				'Comienza tu camino hacia una belleza natural y equilibrada. En la consulta de la Dra. Jessica Tellechea, cada visita es el primer paso de un diseño artístico personalizado.',
		},
		hero: {
			eyebrow: 'Atención Personalizada',
			h1: 'Solicita tu valoración.',
			lead:
				'Comienza tu camino hacia una belleza natural y equilibrada. En la consulta de la Dra. Jessica Tellechea, cada visita es el primer paso de un diseño artístico personalizado.',
			imageSrc: '/images/home/clinic-primary.webp',
			imageAlt: 'Interior sereno de la consulta médica',
		},
		form: {
			name: 'Nombre',
			namePlaceholder: 'Tu nombre completo',
			phone: 'Teléfono',
			phonePlaceholder: '+34 000 000 000',
			email: 'Email',
			emailPlaceholder: 'ejemplo@correo.com',
			message: 'Mensaje',
			messagePlaceholder: 'Cuéntame brevemente sobre tu interés...',
			privacyNote:
				'Toda la información proporcionada es estrictamente confidencial y se procesa bajo los más altos estándares de privacidad médica.',
			submit: 'Enviar Solicitud',
		},
		contactDetails: {
			h2: 'Detalles de Contacto',
			addressLabel: 'Dirección',
			addressFallback: 'Paseo de Gracia, 12\n08007 Barcelona, España',
			phoneLabel: 'Teléfono',
			phoneFallback: '+34 932 456 789',
			emailLabel: 'Email',
			emailFallback: 'info@ajclinica.com',
			mapLabel: 'Vendrell, Centro',
			mapText: 'Vendrell, Centro',
		},
		trust: {
			quote: '"La medicina estética no debe gritar, sino susurrar la mejor versión de uno mismo."',
			author: 'Dra. Jessica Tellechea',
		},
	},
	en: {
		seo: {
			title: 'Dr. Jessica Tellechea - Request your assessment',
			description:
				'Begin your path toward natural, balanced beauty. In Dr. Jessica Tellechea\'s practice, each consultation is the first step in a personalised artistic design.',
		},
		hero: {
			eyebrow: 'Personalised Attention',
			h1: 'Request your assessment.',
			lead:
				'Begin your path toward natural, balanced beauty. In Dr. Jessica Tellechea\'s practice, each consultation is the first step in a personalised artistic design.',
			imageSrc: '/images/home/clinic-primary.webp',
			imageAlt: 'Calm interior of the medical practice',
		},
		form: {
			name: 'Name',
			namePlaceholder: 'Your full name',
			phone: 'Phone',
			phonePlaceholder: '+34 000 000 000',
			email: 'Email',
			emailPlaceholder: 'example@email.com',
			message: 'Message',
			messagePlaceholder: 'Briefly tell me what you are interested in...',
			privacyNote:
				'All information provided is strictly confidential and processed under the highest standards of medical privacy.',
			submit: 'Send Request',
		},
		contactDetails: {
			h2: 'Contact Details',
			addressLabel: 'Address',
			addressFallback: 'Paseo de Gracia, 12\n08007 Barcelona, Spain',
			phoneLabel: 'Phone',
			phoneFallback: '+34 932 456 789',
			emailLabel: 'Email',
			emailFallback: 'info@ajclinica.com',
			mapLabel: 'Vendrell, Centre',
			mapText: 'Vendrell, Centre',
		},
		trust: {
			quote: '"Aesthetic medicine should not shout, but whisper the best version of oneself."',
			author: 'Dr. Jessica Tellechea',
		},
	},
	ca: {
		seo: {
			title: 'Dra. Jessica Tellechea - Sol·licita la teva valoració',
			description:
				'Comença el teu camí cap a una bellesa natural i equilibrada. A la consulta de la Dra. Jessica Tellechea, cada visita és el primer pas d’un disseny artístic personalitzat.',
		},
		hero: {
			eyebrow: 'Atenció Personalitzada',
			h1: 'Sol·licita la teva valoració.',
			lead:
				'Comença el teu camí cap a una bellesa natural i equilibrada. A la consulta de la Dra. Jessica Tellechea, cada visita és el primer pas d’un disseny artístic personalitzat.',
			imageSrc: '/images/home/clinic-primary.webp',
			imageAlt: 'Interior serè de la consulta mèdica',
		},
		form: {
			name: 'Nom',
			namePlaceholder: 'El teu nom complet',
			phone: 'Telèfon',
			phonePlaceholder: '+34 000 000 000',
			email: 'Email',
			emailPlaceholder: 'exemple@correu.com',
			message: 'Missatge',
			messagePlaceholder: 'Explica’m breument el teu interès...',
			privacyNote:
				'Tota la informació proporcionada és estrictament confidencial i es processa sota els estàndards més alts de privacitat mèdica.',
			submit: 'Enviar Sol·licitud',
		},
		contactDetails: {
			h2: 'Detalls de Contacte',
			addressLabel: 'Adreça',
			addressFallback: 'Paseo de Gracia, 12\n08007 Barcelona, Espanya',
			phoneLabel: 'Telèfon',
			phoneFallback: '+34 932 456 789',
			emailLabel: 'Email',
			emailFallback: 'info@ajclinica.com',
			mapLabel: 'Vendrell, Centre',
			mapText: 'Vendrell, Centre',
		},
		trust: {
			quote: '"La medicina estètica no ha de cridar, sinó xiuxiuejar la millor versió d’un mateix."',
			author: 'Dra. Jessica Tellechea',
		},
	},
	fr: {
		seo: {
			title: 'Dre Jessica Tellechea - Demandez votre évaluation',
			description:
				'Commencez votre chemin vers une beauté naturelle et équilibrée. Au cabinet de la Dre Jessica Tellechea, chaque consultation est le premier pas d’un design artistique personnalisé.',
		},
		hero: {
			eyebrow: 'Attention Personnalisée',
			h1: 'Demandez votre évaluation.',
			lead:
				'Commencez votre chemin vers une beauté naturelle et équilibrée. Au cabinet de la Dre Jessica Tellechea, chaque consultation est le premier pas d’un design artistique personnalisé.',
			imageSrc: '/images/home/clinic-primary.webp',
			imageAlt: 'Intérieur serein du cabinet médical',
		},
		form: {
			name: 'Nom',
			namePlaceholder: 'Votre nom complet',
			phone: 'Téléphone',
			phonePlaceholder: '+34 000 000 000',
			email: 'Email',
			emailPlaceholder: 'exemple@email.com',
			message: 'Message',
			messagePlaceholder: 'Parlez-moi brièvement de votre intérêt...',
			privacyNote:
				'Toutes les informations fournies sont strictement confidentielles et traitées selon les plus hauts standards de confidentialité médicale.',
			submit: 'Envoyer la Demande',
		},
		contactDetails: {
			h2: 'Coordonnées',
			addressLabel: 'Adresse',
			addressFallback: 'Paseo de Gracia, 12\n08007 Barcelone, Espagne',
			phoneLabel: 'Téléphone',
			phoneFallback: '+34 932 456 789',
			emailLabel: 'Email',
			emailFallback: 'info@ajclinica.com',
			mapLabel: 'Vendrell, Centre',
			mapText: 'Vendrell, Centre',
		},
		trust: {
			quote:
				'"La médecine esthétique ne doit pas crier, mais murmurer la meilleure version de soi-même."',
			author: 'Dre Jessica Tellechea',
		},
	},
};

export const contactPageMeta: Record<Locale, { title: string; heading: string; intro: string }> = {
	es: {
		title: contactPageContent.es.seo.title,
		heading: contactPageContent.es.hero.h1,
		intro: contactPageContent.es.seo.description,
	},
	en: {
		title: contactPageContent.en.seo.title,
		heading: contactPageContent.en.hero.h1,
		intro: contactPageContent.en.seo.description,
	},
	ca: {
		title: contactPageContent.ca.seo.title,
		heading: contactPageContent.ca.hero.h1,
		intro: contactPageContent.ca.seo.description,
	},
	fr: {
		title: contactPageContent.fr.seo.title,
		heading: contactPageContent.fr.hero.h1,
		intro: contactPageContent.fr.seo.description,
	},
};
