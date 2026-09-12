import type { Locale } from '../config';
import { treatmentUiLabels } from './labels';
import type { BeforeAfterSlide, TreatmentImageSlot, TreatmentPageContent } from './types';

export interface TreatmentContentParts {
	seo: { title: string; description: string };
	heroH1: string;
	aboutBody: string[];
	howBody: string[];
	benefits: string[];
	postCareBody: string[];
	essentials: string[];
	precautionsDescription: string;
	precautionsBefore: string[];
	precautionsAfter: string[];
	faq: { q: string; a: string }[];
	resultsDisclaimer?: string;
	images: {
		hero?: TreatmentImageSlot;
		about: TreatmentImageSlot;
		how: TreatmentImageSlot;
		postCare: TreatmentImageSlot;
		beforeAfter?: { before: TreatmentImageSlot; after: TreatmentImageSlot };
		beforeAfterExtra?: { before: TreatmentImageSlot; after: TreatmentImageSlot }[];
	};
}

export function buildTreatmentContent(
	locale: Locale,
	parts: TreatmentContentParts,
): TreatmentPageContent {
	const ui = treatmentUiLabels[locale];
	const maxPairsPerSlide = 4;
	const emptySlide: BeforeAfterSlide = {
		pairs: Array.from({ length: maxPairsPerSlide }, () => null),
	};
	const slides: BeforeAfterSlide[] = [emptySlide];

	if (parts.images.beforeAfter || parts.images.beforeAfterExtra?.length) {
		const allPairs = [
			parts.images.beforeAfter ?? null,
			...(parts.images.beforeAfterExtra ?? []),
		].filter((pair): pair is NonNullable<typeof pair> => pair !== null);
		const pairs: BeforeAfterSlide['pairs'] = allPairs.slice(0, maxPairsPerSlide);
		while (pairs.length < maxPairsPerSlide) pairs.push(null);
		slides[0] = { pairs };
	}

	return {
		seo: parts.seo,
		breadcrumbCapilar: ui.breadcrumbCapilar,
		hero: {
			h1: parts.heroH1,
			primaryCta: ui.primaryCta,
			secondaryCta: ui.secondaryCta,
			...(parts.images.hero ? { image: parts.images.hero } : {}),
		},
		about: {
			eyebrow: ui.aboutEyebrow,
			title: ui.aboutTitle,
			body: parts.aboutBody,
			cta: ui.primaryCta,
			image: parts.images.about,
		},
		how: {
			title: ui.howTitle,
			body: parts.howBody,
			benefitsTitle: ui.benefitsTitle,
			benefits: parts.benefits,
			image: parts.images.how,
		},
		postCare: {
			title: ui.postCareTitle,
			body: parts.postCareBody,
			essentialsTitle: ui.essentialsTitle,
			essentials: parts.essentials,
			image: parts.images.postCare,
		},
		precautions: {
			eyebrow: ui.precautionsEyebrow,
			title: ui.precautionsTitle,
			trigger: ui.precautionsTrigger,
			descriptionTitle: ui.descriptionTitle,
			description: parts.precautionsDescription,
			beforeTitle: ui.beforeTitle,
			before: parts.precautionsBefore,
			afterTitle: ui.afterTitle,
			after: parts.precautionsAfter,
		},
		results: {
			eyebrow: ui.resultsEyebrow,
			title: ui.resultsTitle,
			beforeLabel: ui.beforeLabel,
			afterLabel: ui.afterLabel,
			emptySlot: ui.emptySlot,
			dragHint: ui.dragHint,
			...(parts.resultsDisclaimer ? { disclaimer: parts.resultsDisclaimer } : {}),
			prevLabel: ui.prevLabel,
			nextLabel: ui.nextLabel,
			slides,
		},
		faq: {
			eyebrow: ui.faqEyebrow,
			title: ui.faqTitle,
			items: parts.faq,
		},
	};
}
