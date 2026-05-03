import type { LegalControllerResolved } from './legal-placeholders';
import type { LegalPageModel, LegalSection } from './legal-types';

function fill(text: string, ph: LegalControllerResolved): string {
	return text
		.replace(/__LEGAL_NAME__/g, ph.legalName)
		.replace(/__LEGAL_NIF__/g, ph.legalNif)
		.replace(/__LEGAL_ADDRESS__/g, ph.legalAddress)
		.replace(/__LEGAL_EMAIL__/g, ph.legalEmail)
		.replace(/__DPO_EMAIL__/g, ph.dpoEmail);
}

function fillSection(section: LegalSection, ph: LegalControllerResolved): LegalSection {
	return {
		...section,
		heading: fill(section.heading, ph),
		paragraphs: section.paragraphs.map((p) => fill(p, ph)),
	};
}

export function interpolateLegalPage(model: LegalPageModel, ph: LegalControllerResolved): LegalPageModel {
	return {
		title: fill(model.title, ph),
		sections: model.sections.map((s) => fillSection(s, ph)),
	};
}