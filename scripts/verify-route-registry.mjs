/**
 * Keep segment table in sync with src/i18n/route-registry.ts (OpenSpec task 1.3).
 * Run: node scripts/verify-route-registry.mjs
 */
const locales = ['es', 'en', 'ca', 'fr'];
const matrix = {
	facial: { es: 'facial', en: 'facial', ca: 'facial', fr: 'visage' },
	corporal: { es: 'corporal', en: 'body', ca: 'corporal', fr: 'corporel' },
	capilar: { es: 'capilar', en: 'hair', ca: 'capillar', fr: 'capillaire' },
	trust: { es: 'criterio-medico', en: 'medical-criteria', ca: 'criteri-medic', fr: 'critere-medical' },
	blog: { es: 'blog', en: 'blog', ca: 'blog', fr: 'blog' },
	contact: { es: 'contacto', en: 'contact', ca: 'contacte', fr: 'contact' },
	booking: { es: 'reservar-cita', en: 'book-appointment', ca: 'reservar-cita', fr: 'reserver-rendez-vous' },
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
console.log('verify-route-registry.mjs: OK');
