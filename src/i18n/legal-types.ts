export type LegalSlug = 'privacidad' | 'cookies' | 'aviso-legal';

export type LegalSection = { id: string; heading: string; paragraphs: string[] };

export type LegalPageModel = {
	title: string;
	sections: LegalSection[];
};

export type LegalCrossLink = { href: string; label: string };

export type LegalCrossLinks = {
	privacidad: LegalCrossLink;
	cookies: LegalCrossLink;
	avisoLegal: LegalCrossLink;
};

export type LegalFooterLabels = {
	privacy: string;
	cookies: string;
	legalNotice: string;
};