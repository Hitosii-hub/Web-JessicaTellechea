import type { Locale } from '../config';

export interface TreatmentUiLabels {
	breadcrumbCapilar: string;
	primaryCta: string;
	secondaryCta: string;
	aboutEyebrow: string;
	aboutTitle: string;
	howTitle: string;
	benefitsTitle: string;
	postCareTitle: string;
	essentialsTitle: string;
	precautionsEyebrow: string;
	precautionsTitle: string;
	precautionsTrigger: string;
	descriptionTitle: string;
	beforeTitle: string;
	afterTitle: string;
	resultsEyebrow: string;
	resultsTitle: string;
	beforeLabel: string;
	afterLabel: string;
	emptySlot: string;
	dragHint: string;
	prevLabel: string;
	nextLabel: string;
	faqEyebrow: string;
	faqTitle: string;
}

export const treatmentUiLabels: Record<Locale, TreatmentUiLabels> = {
	es: {
		breadcrumbCapilar: 'Tratamiento capilar',
		primaryCta: 'Solicitar valoración',
		secondaryCta: 'Conoce el criterio médico',
		aboutEyebrow: 'Sobre el tratamiento',
		aboutTitle: '¿En qué consiste el tratamiento?',
		howTitle: '¿Cómo es el tratamiento?',
		benefitsTitle: 'Beneficios del tratamiento',
		postCareTitle: 'Recomendaciones post-tratamiento',
		essentialsTitle: 'Guías esenciales',
		precautionsEyebrow: 'Atención personalizada',
		precautionsTitle: '¿Buscando precauciones para el tratamiento?',
		precautionsTrigger: 'Ver precauciones antes y después del tratamiento',
		descriptionTitle: 'Descripción',
		beforeTitle: 'Antes del tratamiento',
		afterTitle: 'Después del tratamiento',
		resultsEyebrow: 'Resultados reales',
		resultsTitle: 'Antes y después',
		beforeLabel: 'Antes',
		afterLabel: 'Después',
		emptySlot: 'Próximamente',
		dragHint: 'Desliza para comparar',
		prevLabel: 'Anterior',
		nextLabel: 'Siguiente',
		faqEyebrow: 'Ayuda',
		faqTitle: 'Preguntas frecuentes',
	},
	en: {
		breadcrumbCapilar: 'Hair treatment',
		primaryCta: 'Request assessment',
		secondaryCta: 'Our medical approach',
		aboutEyebrow: 'About the treatment',
		aboutTitle: 'What does the treatment involve?',
		howTitle: 'What is the treatment like?',
		benefitsTitle: 'Treatment benefits',
		postCareTitle: 'Post-treatment recommendations',
		essentialsTitle: 'Essential guidelines',
		precautionsEyebrow: 'Personalised care',
		precautionsTitle: 'Looking for treatment precautions?',
		precautionsTrigger: 'View before and after precautions',
		descriptionTitle: 'Description',
		beforeTitle: 'Before treatment',
		afterTitle: 'After treatment',
		resultsEyebrow: 'Real results',
		resultsTitle: 'Before and after',
		beforeLabel: 'Before',
		afterLabel: 'After',
		emptySlot: 'Coming soon',
		dragHint: 'Drag to compare',
		prevLabel: 'Previous',
		nextLabel: 'Next',
		faqEyebrow: 'Help',
		faqTitle: 'Frequently asked questions',
	},
	ca: {
		breadcrumbCapilar: 'Tractament capil·lar',
		primaryCta: 'Sol·licitar valoració',
		secondaryCta: 'Coneix el criteri mèdic',
		aboutEyebrow: 'Sobre el tractament',
		aboutTitle: 'En què consisteix el tractament?',
		howTitle: 'Com és el tractament?',
		benefitsTitle: 'Beneficis del tractament',
		postCareTitle: 'Recomanacions post-tractament',
		essentialsTitle: 'Guies essencials',
		precautionsEyebrow: 'Atenció personalitzada',
		precautionsTitle: 'Busques precaucions per al tractament?',
		precautionsTrigger: 'Veure precaucions abans i després del tractament',
		descriptionTitle: 'Descripció',
		beforeTitle: 'Abans del tractament',
		afterTitle: 'Després del tractament',
		resultsEyebrow: 'Resultats reals',
		resultsTitle: 'Abans i després',
		beforeLabel: 'Abans',
		afterLabel: 'Després',
		emptySlot: 'Properament',
		dragHint: 'Llisca per comparar',
		prevLabel: 'Anterior',
		nextLabel: 'Següent',
		faqEyebrow: 'Ajuda',
		faqTitle: 'Preguntes freqüents',
	},
	fr: {
		breadcrumbCapilar: 'Traitement capillaire',
		primaryCta: 'Demander une évaluation',
		secondaryCta: 'Notre approche médicale',
		aboutEyebrow: 'À propos du traitement',
		aboutTitle: 'En quoi consiste le traitement ?',
		howTitle: 'Comment se déroule le traitement ?',
		benefitsTitle: 'Bénéfices du traitement',
		postCareTitle: 'Recommandations post-traitement',
		essentialsTitle: 'Guides essentiels',
		precautionsEyebrow: 'Attention personnalisée',
		precautionsTitle: 'Vous cherchez des précautions ?',
		precautionsTrigger: 'Voir les précautions avant et après',
		descriptionTitle: 'Description',
		beforeTitle: 'Avant le traitement',
		afterTitle: 'Après le traitement',
		resultsEyebrow: 'Résultats réels',
		resultsTitle: 'Avant et après',
		beforeLabel: 'Avant',
		afterLabel: 'Après',
		emptySlot: 'Bientôt',
		dragHint: 'Glissez pour comparer',
		prevLabel: 'Précédent',
		nextLabel: 'Suivant',
		faqEyebrow: 'Aide',
		faqTitle: 'Questions fréquentes',
	},
};
