import type { Locale } from '../config';
import type { CapilarTreatmentKey } from '../route-registry';

export interface TreatmentImageSlot {
	alt: string;
	recraftPrompt?: string;
	src?: string;
	tone?: 'silent-luxury';
	aspect?: 'portrait' | 'landscape' | 'square';
	fit?: 'cover' | 'contain';
}

export interface BeforeAfterPair {
	before: TreatmentImageSlot;
	after: TreatmentImageSlot;
}

export interface BeforeAfterSlide {
	pairs: (BeforeAfterPair | null)[];
}

export interface TreatmentPageContent {
	seo: { title: string; description: string };
	breadcrumbCapilar: string;
	hero: { h1: string; primaryCta: string; secondaryCta: string; image?: TreatmentImageSlot };
	about: {
		eyebrow: string;
		title: string;
		body: string[];
		cta: string;
		image: TreatmentImageSlot;
	};
	how: {
		title: string;
		body: string[];
		benefitsTitle: string;
		benefits: string[];
		image: TreatmentImageSlot;
	};
	postCare: {
		title: string;
		body: string[];
		essentialsTitle: string;
		essentials: string[];
		image: TreatmentImageSlot;
	};
	precautions: {
		eyebrow: string;
		title: string;
		trigger: string;
		descriptionTitle: string;
		description: string;
		beforeTitle: string;
		before: string[];
		afterTitle: string;
		after: string[];
	};
	results: {
		eyebrow: string;
		title: string;
		beforeLabel: string;
		afterLabel: string;
		emptySlot: string;
		dragHint: string;
		prevLabel: string;
		nextLabel: string;
		slides: BeforeAfterSlide[];
	};
	faq: {
		eyebrow: string;
		title: string;
		items: { q: string; a: string }[];
	};
}

export type CapilarTreatmentContentMap = Record<Locale, TreatmentPageContent>;

export type CapilarTreatmentCatalog = Record<CapilarTreatmentKey, CapilarTreatmentContentMap>;
