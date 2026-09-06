/**
 * Keep segment table in sync with src/i18n/route-registry.ts (OpenSpec task 1.3).
 * Run: node scripts/verify-route-registry.mjs
 */
const locales = ['es', 'en', 'ca', 'fr'];
const matrix = {
	facial: {
		es: 'medicina-estetica-facial-barcelona',
		en: 'facial-aesthetic-medicine-barcelona',
		ca: 'medicina-estetica-facial-barcelona',
		fr: 'medecine-esthetique-faciale-barcelona',
	},
	corporal: {
		es: 'medicina-estetica-corporal-barcelona',
		en: 'body-aesthetic-medicine-barcelona',
		ca: 'medicina-estetica-corporal-barcelona',
		fr: 'medecine-esthetique-corporelle-barcelona',
	},
	capilar: {
		es: 'tratamiento-capilar-barcelona',
		en: 'hair-treatment-barcelona',
		ca: 'tractament-capillar-barcelona',
		fr: 'traitement-capillaire-barcelona',
	},
	trust: {
		es: 'filosofia-medica',
		en: 'medical-philosophy',
		ca: 'filosofia-medica',
		fr: 'philosophie-medicale',
	},
	blog: { es: 'blog', en: 'blog', ca: 'blog', fr: 'blog' },
	contact: { es: 'contacto', en: 'contact', ca: 'contacte', fr: 'contact' },
	booking: { es: 'reservar-cita', en: 'book-appointment', ca: 'reservar-cita', fr: 'reserver-rendez-vous' },
};

const capilarTreatmentMatrix = {
	'mesoterapia-capilar': {
		es: 'mesoterapia-capilar-medica',
		en: 'capillary-mesotherapy',
		ca: 'mesoterapia-capilar-medica',
		fr: 'mesotherapie-capillaire',
	},
	'prp-capilar': {
		es: 'prp-capilar',
		en: 'capillary-prp',
		ca: 'prp-capilar',
		fr: 'prp-capillaire',
	},
	'carboxiterapia-capilar': {
		es: 'carboxiterapia-capilar',
		en: 'capillary-carboxytherapy',
		ca: 'carboxiterapia-capilar',
		fr: 'carboxitherapie-capillaire',
	},
	'transplante-capilar': {
		es: 'transplante-capilar',
		en: 'capillary-hair-transplant',
		ca: 'transplante-capilar',
		fr: 'greffe-capillaire',
	},
};

const keys = Object.keys(matrix);
for (const loc of locales) {
	const rev = new Map();
	for (const k of keys) {
		const seg = matrix[k][loc];
		if (rev.has(seg)) throw new Error('Collision ' + loc + ': ' + seg);
		rev.set(seg, k);
	}
	for (const k of keys) {
		const seg = matrix[k][loc];
		if (rev.get(seg) !== k) throw new Error('Roundtrip ' + loc + ' ' + k);
	}
}

const capilarParent = matrix.capilar;
const treatmentKeys = Object.keys(capilarTreatmentMatrix);
for (const loc of locales) {
	const parentSeg = capilarParent[loc];
	const rev = new Map();
	for (const key of treatmentKeys) {
		const seg = capilarTreatmentMatrix[key][loc];
		if (rev.has(seg)) throw new Error('Capilar treatment collision ' + loc + ': ' + seg);
		rev.set(seg, key);
		const expectedPath = `/${loc}/${parentSeg}/${seg}/`;
		if (!expectedPath.includes(`/${loc}/`)) throw new Error('Bad capilar treatment path ' + expectedPath);
	}
	for (const key of treatmentKeys) {
		const seg = capilarTreatmentMatrix[key][loc];
		if (rev.get(seg) !== key) throw new Error('Capilar treatment roundtrip ' + loc + ' ' + key);
	}
}

console.log('verify-route-registry.mjs: OK');
