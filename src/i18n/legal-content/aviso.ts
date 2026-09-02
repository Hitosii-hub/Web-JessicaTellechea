import type { Locale } from '../config';
import type { LegalPageModel } from '../legal-types';

/**
 * Aviso legal / CGU inspirado en estructura habitual (datos, objeto, menores,
 * servicios, privacidad, PI, obligaciones, responsabilidad, enlaces, ley).
 * Texto generico para el titular del sitio; se recomienda revision juridica antes de publicar.
 */
const es: LegalPageModel = {
	title: 'Aviso legal y condiciones generales de uso',
	sections: [
		{
			id: 'datos-responsable',
			heading: 'Datos del responsable',
			paragraphs: [
				'El sitio web (en adelante, el "Sitio Web") es titularidad de __LEGAL_NAME__, con NIF __LEGAL_NIF__ y domicilio social en __LEGAL_ADDRESS__. Para comunicaciones: __LEGAL_EMAIL__.',
				'Le damos la bienvenida y le invitamos a leer con atención estas condiciones generales de uso. El uso del Sitio Web se ajusta a criterios de transparencia, claridad y sencillez.',
			],
		},
		{
			id: 'objeto',
			heading: 'Objeto',
			paragraphs: [
				'Las presentes condiciones regulan la relación entre los usuarios del Sitio Web y __LEGAL_NAME__.',
				'__LEGAL_NAME__ podrá modificar estas condiciones en cualquier momento. Cuando se produzcan cambios sustanciales, se informará al usuario mediante un aviso razonable en el Sitio Web. Si no está de acuerdo con alguno de los términos, deberá abstenerse de usar el Sitio Web.',
			],
		},
		{
			id: 'menores',
			heading: 'Usuarios menores de edad',
			paragraphs: [
				'Los contenidos y servicios ofrecidos a través del Sitio Web están dirigidos a personas mayores de 16 años. Si es menor de edad, no utilice el Sitio Web sin la supervisión de quien ejerza la patria potestad o tutela.',
			],
		},
		{
			id: 'servicios',
			heading: 'Servicios',
			paragraphs: [
				'En el Sitio Web podrá encontrar información sobre la actividad profesional del responsable, servicios, localización y medios de contacto. Pueden existir formularios o funciones adicionales (por ejemplo, solicitud de información o reserva de cita en línea) según lo habilitado en cada momento.',
				'La información publicada tiene carácter general e informativo. La relación clínica, prescripción o contratación de servicios sanitarios se regirá por las reglas aplicables fuera de este entorno digital y, en su caso, por lo acordado directamente con el responsable.',
			],
		},
		{
			id: 'privacidad-tratamiento',
			heading: 'Privacidad y tratamiento de datos personales',
			paragraphs: [
				'Cuando se soliciten datos de carácter personal, usted garantizará que la información facilitada es veraz, exacta y está actualizada en la medida razonable.',
				'El tratamiento de datos personales se describe en la Política de privacidad de este Sitio Web, accesible desde el pie de página. __LEGAL_NAME__ tratará los datos conforme a la normativa aplicable y a las finalidades indicadas en dicha política.',
			],
		},
		{
			id: 'propiedad-intelectual',
			heading: 'Propiedad industrial e intelectual',
			paragraphs: [
				'Los contenidos del Sitio Web (incluidos, entre otros, diseños, textos, imágenes, logotipos, iconos, software, nombres comerciales y, en general, cualquier creación o signo susceptible de protección) son titularidad de __LEGAL_NAME__ o de terceros que hayan autorizado su uso, y quedan protegidos por la normativa de propiedad intelectual e industrial.',
				'Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier explotación sin la autorización previa y por escrito de __LEGAL_NAME__, salvo las excepciones legales (cita, reproducción temporal, etc.). El acceso al Sitio Web no implica licencia alguna sobre dichos derechos, salvo indicación expresa en contrario.',
				'Queda prohibido suprimir, eludir o manipular dispositivos técnicos de protección o metadatos de titularidad. Cualquier uso no autorizado podrá dar lugar a las acciones legales que procedan.',
			],
		},
		{
			id: 'obligaciones-usuario',
			heading: 'Obligaciones del usuario',
			paragraphs: [
				'El usuario se compromete a:', '(i) hacer un uso lícito y diligente del Sitio Web;', '(ii) no vulnerar derechos de terceros ni la normativa aplicable;', '(iii) no introducir virus, malware o realizar actividades que perturben el funcionamiento del Sitio Web o de sistemas de terceros;', '(iv) no intentar acceder a zonas restringidas sin autorización;', '(v) no utilizar el Sitio Web para fines ilícitos, difamatorios, discriminatorios o contrarios al orden público.',
				'Cuando cumplimente formularios, la información facilitada deberá ser veraz. El usuario será responsable frente a __LEGAL_NAME__ y frente a terceros por los datos inexactos o fraudulentos que proporcione.',
			],
		},
		{
			id: 'responsabilidades',
			heading: 'Responsabilidades',
			paragraphs: [
				'__LEGAL_NAME__ no garantiza la disponibilidad continua ni la ausencia de errores en el Sitio Web. El acceso puede verse afectado por causas ajenas al titular (redes, equipos del usuario, mantenimiento, etc.).',
				'__LEGAL_NAME__ podrá suspender o limitar el acceso si detecta un uso contrario a estas condiciones. No responderá, en la medida permitida por la ley, por daños indirectos o lucro cesante derivados del uso o imposibilidad de uso del Sitio Web, sin perjuicio de las responsabilidades que resulten imperativas.',
			],
		},
		{
			id: 'hipervinculos',
			heading: 'Hipervínculos',
			paragraphs: [
				'El Sitio Web puede incluir enlaces a sitios web de terceros con fines informativos. __LEGAL_NAME__ no controla esos sitios ni asume responsabilidad por sus contenidos o servicios. Si tuviera conocimiento de ilicitud, podrá retirar o desactivar el enlace cuando proceda.',
				'Respecto a enlaces desde sitios externos hacia el Sitio Web: no se autoriza un uso que induzca a error sobre la relación con __LEGAL_NAME__, que utilice signos distintivos sin permiso o que asocie el Sitio Web a contenidos ilícitos u ofensivos. __LEGAL_NAME__ se reserva el derecho a exigir la retirada de enlaces que incumplan lo anterior.',
			],
		},
		{
			id: 'ley-jurisdiccion',
			heading: 'Resolución de controversias, ley aplicable y jurisdicción',
			paragraphs: [
				'Las presentes condiciones y el uso del Sitio Web se regirán por la legislación española vigente.',
				'Salvo norma imperativa en contrario (por ejemplo, en materia de consumo), las partes someten las controversias a los juzgados y tribunales de España, concretamente a los que correspondan según la normativa procesal aplicable.',
				'Si alguna cláusula fuera declarada nula o ineficaz, ello no afectará a la validez del resto en la medida en que puedan mantenerse de forma autónoma; __LEGAL_NAME__ podrá sustituir la cláusula afectada por otra válida y ajustada a la finalidad original.',
			],
		},
	],
};

const en: LegalPageModel = {
	title: 'Legal notice and general terms of use',
	sections: [
		{
			id: 'datos-responsable',
			heading: 'Controller details',
			paragraphs: [
				'This website (the "Site") is operated by __LEGAL_NAME__, tax ID __LEGAL_NIF__, registered office __LEGAL_ADDRESS__, contact email __LEGAL_EMAIL__.',
				'Please read these general terms of use carefully. We aim for transparent and straightforward rules for using the Site.',
			],
		},
		{
			id: 'objeto',
			heading: 'Purpose',
			paragraphs: [
				'These terms govern the relationship between Site users and __LEGAL_NAME__.',
				'__LEGAL_NAME__ may change these terms at any time. Material changes will be announced on the Site in a reasonable manner. If you do not agree, you must stop using the Site.',
			],
		},
		{
			id: 'menores',
			heading: 'Users under 18',
			paragraphs: [
				'The Site is intended for people aged 16 or over. If you are a minor, do not use the Site without supervision by a parent or guardian.',
			],
		},
		{
			id: 'servicios',
			heading: 'Services',
			paragraphs: [
				'The Site may provide information about the controller\'s professional practice, services, location, and contact options. Additional features (for example, contact or online booking) may be enabled from time to time.',
				'Information is general in nature. Clinical care, prescriptions, or healthcare contracts are governed by applicable rules and any separate agreement with the controller.',
			],
		},
		{
			id: 'privacidad-tratamiento',
			heading: 'Privacy and personal data',
			paragraphs: [
				'Where personal data are requested, you warrant that the information you provide is accurate and kept reasonably up to date.',
				'Processing is described in this Site privacy policy, linked in the footer. __LEGAL_NAME__ will process data in accordance with applicable law and the purposes stated in that policy.',
			],
		},
		{
			id: 'propiedad-intelectual',
			heading: 'Intellectual and industrial property',
			paragraphs: [
				'Site content (including designs, text, images, logos, software, trade names, and other protectable material) belongs to __LEGAL_NAME__ or third parties who authorised its use, and is protected by intellectual and industrial property laws.',
				'You may not reproduce, distribute, publicly communicate, transform, or otherwise exploit such content without prior written consent from __LEGAL_NAME__, except as permitted by law. Access does not grant any licence unless expressly stated.',
				'Removing or circumventing technical protection measures or rights metadata is prohibited. Unauthorised use may lead to legal action.',
			],
		},
		{
			id: 'obligaciones-usuario',
			heading: 'User obligations',
			paragraphs: [
				'You agree to:', '(i) use the Site lawfully and in good faith;', '(ii) respect third-party rights and applicable law;', '(iii) not introduce malware or disrupt the Site or third-party systems;', '(iv) not attempt unauthorised access to restricted areas;', '(v) not use the Site for unlawful, defamatory, discriminatory, or public-order offences.',
				'When completing forms, information must be truthful. You are responsible to __LEGAL_NAME__ and third parties for inaccurate or fraudulent data you supply.',
			],
		},
		{
			id: 'responsabilidades',
			heading: 'Liability',
			paragraphs: [
				'__LEGAL_NAME__ does not guarantee uninterrupted availability or error-free operation. Access may be affected by factors outside our reasonable control (networks, user equipment, maintenance).',
				'We may suspend access if use breaches these terms. To the extent permitted by law, we are not liable for indirect damages or loss of profit arising from use or inability to use the Site, without prejudice to non-waivable liability.',
			],
		},
		{
			id: 'hipervinculos',
			heading: 'Hyperlinks',
			paragraphs: [
				'The Site may include links to third-party websites for information. __LEGAL_NAME__ does not control those sites and is not responsible for their content or services. If we become aware of unlawful content, we may remove or disable the link where appropriate.',
				'Inbound links must not misrepresent a relationship with __LEGAL_NAME__, use our distinctive signs without permission, or associate the Site with unlawful or offensive content. We may require removal of links that breach these rules.',
			],
		},
		{
			id: 'ley-jurisdiccion',
			heading: 'Disputes, governing law, and jurisdiction',
			paragraphs: [
				'These terms and use of the Site are governed by the laws of Spain.',
				'Unless mandatory rules provide otherwise (for example, consumer law), disputes shall be submitted to the courts of Spain as determined by applicable procedural law.',
				'If any clause is held invalid, the remaining terms remain valid to the fullest extent possible; __LEGAL_NAME__ may replace the invalid clause with a valid one that reflects the original intent.',
			],
		},
	],
};

const ca: LegalPageModel = {
	title: 'Avís legal i condicions generals dús',
	sections: [
		{
			id: 'datos-responsable',
			heading: 'Dades del responsable',
			paragraphs: [
				'Aquest lloc web (el "Lloc Web") es titularitat de __LEGAL_NAME__, amb NIF __LEGAL_NIF__ i domicili social a __LEGAL_ADDRESS__. Contacte: __LEGAL_EMAIL__.',
				'Us convidem a llegir amb atencio aquestes condicions generals dús. Lús del Lloc Web es regeix per criteris de transparencia i claredat.',
			],
		},
		{
			id: 'objeto',
			heading: 'Objecte',
			paragraphs: [
				'Aquestes condicions regulen la relacio entre els usuaris del Lloc Web i __LEGAL_NAME__.',
				'__LEGAL_NAME__ pot modificar les condicions en qualsevol moment. Si hi ha canvis substancials, sinformara al Lloc Web. Si no hi esta dacord, ha dabstenir-se dutilitzar el Lloc Web.',
			],
		},
		{
			id: 'menores',
			heading: 'Usuaris menors dedat',
			paragraphs: [
				'Els continguts i serveis estan dirigits a persones majors de 16 anys. Si es menor, no utilitzi el Lloc Web sense supervisio parental o de tutela.',
			],
		},
		{
			id: 'servicios',
			heading: 'Serveis',
			paragraphs: [
				'Al Lloc Web hi pot haver informacio sobre lactivitat professional del responsable, serveis i contacte. Poden habilitar-se formularis o reserves en linia segons el cas.',
				'La informacio es general. La relacio clinica o contractacio sanitaria es regeix per les normes aplicables fora daquest entorn i, si escau, pel que sacordi directament amb el responsable.',
			],
		},
		{
			id: 'privacidad-tratamiento',
			heading: 'Privacitat i tractament de dades',
			paragraphs: [
				'Quan es sollicitin dades personals, garanteix que la informacio es verac i raonablement actualitzada.',
				'El tractament es descriu a la Politica de privacitat del Lloc Web (enllaç al peu). __LEGAL_NAME__ tractara les dades segons la normativa i les finalitats indicades.',
			],
		},
		{
			id: 'propiedad-intelectual',
			heading: 'Propietat intel·lectual i industrial',
			paragraphs: [
				'Els continguts del Lloc Web (disseny, textos, imatges, logotips, programari, etc.) son titularitat de __LEGAL_NAME__ o de tercers amb autoritzacio, amb les proteccions legals que escaiguin.',
				'Queda prohibida lexplotacio sense autoritzacio previa per escrit, llevat dexcepcions legals. Lacces no atorga llicencia si no sindica expressament.',
			],
		},
		{
			id: 'obligaciones-usuario',
			heading: 'Obligacions de lusuari',
			paragraphs: [
				'Lusuari scompromet a un ús licit, a no introduir programari malicios, a no accedir a zones restringides sense permis i a no fer un ús il·licit o contrari a lordre public.',
				'En els formularis, la informacio ha de ser veridica. Lusuari respon per les dades falses o fraudulentes.',
			],
		},
		{
			id: 'responsabilidades',
			heading: 'Responsabilitats',
			paragraphs: [
				'__LEGAL_NAME__ no garanteix la disponibilitat continua ni labsencia derrores. Es pot suspendre lacces si lús es contrari a aquestes condicions.',
				'En la mesura que permeti la llei, no es respon per danys indirectes derivats de lús del Lloc Web.',
			],
		},
		{
			id: 'hipervinculos',
			heading: 'Hipervincles',
			paragraphs: [
				'El Lloc Web pot incloure enllaços a tercers amb finalitat informativa. __LEGAL_NAME__ no controla aquests llocs. Es podra retirar lenllaç si escau.',
				'Els enllaços entrants no poden induir a error sobre la relacio amb __LEGAL_NAME__ ni utilitzar signes distintius sense permis.',
			],
		},
		{
			id: 'ley-jurisdiccion',
			heading: 'Controversies, llei aplicable i jurisdicció',
			paragraphs: [
				'Aquestes condicions es regeixen per la legislacio espanyola vigent.',
				'Salvo norma imperativa contraria, les controversies es sotmetran als jutjats i tribunals dEspanya que corresponguin.',
				'Si alguna clausula fos nul·la, la resta mantindra la seva validesa en la mesura possible.',
			],
		},
	],
};

const fr: LegalPageModel = {
	title: 'Mentions légales et conditions générales d\'utilisation',
	sections: [
		{
			id: 'datos-responsable',
			heading: 'Informations sur l\'éditeur',
			paragraphs: [
				'Le présent site (le « Site ») est édité par __LEGAL_NAME__, numéro __LEGAL_NIF__, siège __LEGAL_ADDRESS__, courriel __LEGAL_EMAIL__.',
				'Nous vous invitons à lire attentivement les présentes conditions. L\'utilisation du Site vise la transparence et la simplicité.',
			],
		},
		{
			id: 'objeto',
			heading: 'Objet',
			paragraphs: [
				'Les présentes conditions régissent la relation entre les utilisateurs du Site et __LEGAL_NAME__.',
				'__LEGAL_NAME__ peut modifier les conditions à tout moment. En cas de changement substantiel, un avis raisonnable sera affiché sur le Site. Si vous n\'acceptez pas les termes, vous devez cesser d\'utiliser le Site.',
			],
		},
		{
			id: 'menores',
			heading: 'Mineurs',
			paragraphs: [
				'Le Site s\'adresse aux personnes âgées d\'au moins 16 ans. Si vous êtes mineur, n\'utilisez pas le Site sans supervision parentale.',
			],
		},
		{
			id: 'servicios',
			heading: 'Services',
			paragraphs: [
				'Le Site peut présenter des informations sur l\'activité professionnelle du responsable, les services et les contacts. Des formulaires ou une prise de rendez-vous en ligne peuvent être proposés selon les fonctionnalités actives.',
				'Les informations sont générales. Les soins ou contrats de santé sont régis par les règles applicables en dehors du Site et, le cas échéant, par ce qui est convenu directement avec le responsable.',
			],
		},
		{
			id: 'privacidad-tratamiento',
			heading: 'Vie privée et données personnelles',
			paragraphs: [
				'Lorsque des données personnelles sont demandées, vous garantissez leur exactitude et leur mise à jour raisonnable.',
				'Le traitement est décrit dans la politique de confidentialité du Site (lien en pied de page). __LEGAL_NAME__ traitera les données conformément à la loi et aux finalités indiquées.',
			],
		},
		{
			id: 'propiedad-intelectual',
			heading: 'Propriété intellectuelle et industrielle',
			paragraphs: [
				'Les contenus du Site (designs, textes, images, logos, logiciels, etc.) appartiennent à __LEGAL_NAME__ ou à des tiers ayant autorisé leur usage, et bénéficient des protections légales applicables.',
				'Toute exploitation sans autorisation écrite préalable est interdite, sauf exceptions légales. L\'accès ne confère aucune licence sauf mention expresse.',
			],
		},
		{
			id: 'obligaciones-usuario',
			heading: 'Obligations de l\'utilisateur',
			paragraphs: [
				'L\'utilisateur s\'engage à un usage licite, à ne pas introduire de logiciels malveillants, à ne pas accéder sans autorisation à des zones restreintes et à ne pas utiliser le Site à des fins illicites.',
				'Les informations fournies dans les formulaires doivent être sincères. L\'utilisateur répond des données inexactes ou frauduleuses.',
			],
		},
		{
			id: 'responsabilidades',
			heading: 'Responsabilité',
			paragraphs: [
				'__LEGAL_NAME__ ne garantit pas une disponibilité continue ni l\'absence d\'erreurs. L\'accès peut être suspendu en cas d\'usage contraire aux présentes conditions.',
				'Dans les limites autorisées par la loi, la responsabilité pour dommages indirects est exclue.',
			],
		},
		{
			id: 'hipervinculos',
			heading: 'Liens hypertextes',
			paragraphs: [
				'Le Site peut contenir des liens vers des sites tiers à titre informatif. __LEGAL_NAME__ ne contrôle pas ces sites ni n\'assume de responsabilité pour leurs contenus ou services. En cas de connaissance d\'un contenu illicite, elle pourra retirer ou désactiver le lien lorsque cela sera justifié.',
				'Les liens entrants ne doivent pas induire en erreur sur la relation avec __LEGAL_NAME__ ni utiliser des signes distinctifs sans autorisation.',
			],
		},
		{
			id: 'ley-jurisdiccion',
			heading: 'Litiges, droit applicable et juridiction',
			paragraphs: [
				'Les présentes conditions et l\'utilisation du Site sont régies par le droit espagnol en vigueur.',
				'Sauf disposition impérative contraire, les litiges seront portés devant les tribunaux compétents en Espagne.',
				'Si une clause est invalide, les autres clauses demeurent applicables dans toute la mesure du possible.',
			],
		},
	],
};

export const avisoByLocale: Record<Locale, LegalPageModel> = {
	es,
	en,
	ca,
	fr,
};
