import type { Locale } from '../config';
import type { LegalPageModel } from '../legal-types';

/**
 * Politica de cookies alineada con LSSI art. 22 y marco RGPD/LOPDGDD,
 * sin listar tecnologias que este sitio no use. Revisar con asesoramiento juridico.
 */
const es: LegalPageModel = {
	title: 'Política de cookies y tecnologías similares',
	sections: [
		{
			id: 'marco-responsable',
			heading: '1. Marco normativo y responsable',
			paragraphs: [
				'En cumplimiento del artículo 22 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), en relación con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de protección de datos personales y garantía de los derechos digitales (LOPDGDD), se informa del uso de cookies y tecnologías similares en este sitio web.',
				'El responsable del sitio es __LEGAL_NAME__, con NIF __LEGAL_NIF__ y domicilio en __LEGAL_ADDRESS__. Para consultas sobre esta política o sobre datos personales puede contactar en __LEGAL_EMAIL__.',
			],
		},
		{
			id: 'que-son',
			heading: '2. Qué son las cookies y tecnologías similares',
			paragraphs: [
				'Una cookie es un fichero que el servidor envía al navegador y que puede almacenarse en su equipo. Permiten, entre otras cosas, recordar preferencias o mantener una sesión. Según su configuración y el tiempo de conservación, pueden aportar información sobre el uso del sitio o contribuir a identificar el dispositivo.',
				'Existen tecnologías análogas (por ejemplo el almacenamiento local del navegador, “localStorage”) que cumplen funciones parecidas para guardar datos en el terminal sin depender de un servidor propio del sitio.',
			],
		},
		{
			id: 'tipologia',
			heading: '3. Tipología orientativa (criterios habituales)',
			paragraphs: [
				'Según la entidad que las gestiona: cookies propias (establecidas por este dominio) y cookies de terceros (establecidas por otro dominio, por ejemplo un proveedor de seguridad).',
				'Según su finalidad: cookies técnicas o necesarias (permiten la navegación o el uso de funciones esenciales); de preferencias o personalización (recuerdan opciones como el idioma cuando exista ese mecanismo); de análisis o medición (permiten estadísticas de uso). En el estado actual del sitio no se cargan cookies de análisis o medición de terceros con fines estadísticos; si se incorporaran, se informará y solicitará el consentimiento previo cuando la ley lo exija, antes de cargarlas de forma no esencial.',
				'Según su duración: de sesión (se eliminan al cerrar el navegador o al poco tiempo) o persistentes (permanecen un plazo definido salvo que usted las borre antes).',
			],
		},
		{
			id: 'uso-actual',
			heading: '4. Tecnologías utilizadas en este sitio',
			paragraphs: [
				'Cookies o datos técnicos necesarios para la navegación y la carga del sitio (por ejemplo, sesión o recursos asociados a la tecnología del sitio, como las transiciones de vista de Astro si están activas).',
				'Preferencia sobre el aviso de cookies: se utiliza la clave local del navegador `webaj_cookie_consent_v1` (o una versión posterior acordada en el código) para recordar si aceptó, rechazó o configuró el banner. Es un dato almacenado en su equipo por este origen; permanece hasta que lo borre desde el navegador o cambie su elección desde el banner.',
				'Seguridad (Google reCAPTCHA): cuando se muestra el formulario de reserva integrado, Google puede establecer cookies o datos técnicos propios de Google para evaluar el riesgo de abuso. Los nombres y duraciones concretos los determina Google; puede consultar la información que Google publica sobre cookies y privacidad para ese producto.',
			],
		},
		{
			id: 'terceros',
			heading: '5. Terceros y evolución del sitio',
			paragraphs: [
				'Google Ireland Limited actúa como proveedor de reCAPTCHA en las condiciones descritas. El tratamiento puede implicar transferencias fuera del Espacio Económico Europeo con las garantías que Google indique en su documentación.',
				'No se venden datos personales derivados del uso de cookies. El MVP actual no incorpora publicidad de remarketing ni medición de audiencia de terceros; si en el futuro se añadieran módulos con cookies no esenciales, se actualizará esta política y el mecanismo de consentimiento antes de cargarlos.',
			],
		},
		{
			id: 'gestion',
			heading: '6. Consentimiento, banner y revocación',
			paragraphs: [
				'El sitio muestra un banner de cookies accesible desde las páginas para informar de forma esencial y permitir aceptar, rechazar o configurar las opciones previstas. Puede retirar o modificar su decisión en cualquier momento volviendo a abrir el panel desde el mismo banner o el enlace correspondiente.',
				'Si borra los datos del sitio en su navegador, puede desaparecer la preferencia guardada y volver a mostrarse el banner hasta que registre de nuevo una elección.',
			],
		},
		{
			id: 'navegador',
			heading: '7. Cómo limitar o eliminar cookies en su navegador',
			paragraphs: [
				'También puede aceptar, bloquear o eliminar las cookies instaladas mediante la configuración de su navegador. Tenga en cuenta que bloquear cookies técnicas o borrar datos necesarios puede impedir el correcto funcionamiento de partes del sitio (por ejemplo, el recordatorio de su preferencia sobre el banner o la verificación reCAPTCHA en la reserva).',
				'Las instrucciones dependen del programa utilizado; consulte la sección de ayuda o privacidad de Firefox, Google Chrome, Microsoft Edge o Safari, entre otros.',
			],
		},
		{
			id: 'mas-info',
			heading: '8. Datos personales y ejercicio de derechos',
			paragraphs: [
				'Cuando las cookies o tecnologías similares permitan el tratamiento de datos personales, dicho tratamiento se regirá por lo indicado en la política de privacidad de este sitio. Puede ejercer los derechos que le correspondan (acceso, rectificación, supresión, limitación, oposición, portabilidad, reclamación ante la autoridad de control, etc.) dirigiéndose a __LEGAL_EMAIL__, salvo que para un tratamiento concreto corresponda dirigirse al encargado o a un tercero según la información facilitada en su momento.',
			],
		},
	],
};

const en: LegalPageModel = {
	title: 'Cookie and similar technologies policy',
	sections: [
		{
			id: 'marco-responsable',
			heading: '1. Legal framework and controller',
			paragraphs: [
				'In accordance with Article 22 of Law 34/2002 of 11 July on information society services and electronic commerce (LSSI-CE), together with Regulation (EU) 2016/679 (GDPR) and Organic Law 3/2018 of 5 December on personal data protection and guarantee of digital rights (LOPDGDD), this page describes the use of cookies and similar technologies on this website.',
				'The site is operated by __LEGAL_NAME__, tax ID __LEGAL_NIF__, address __LEGAL_ADDRESS__. For questions about this policy or personal data, contact __LEGAL_EMAIL__.',
			],
		},
		{
			id: 'que-son',
			heading: '2. What cookies and similar technologies are',
			paragraphs: [
				'A cookie is a file sent to the browser and stored on your device. Among other things, cookies can remember preferences or maintain a session. Depending on configuration and retention, they may provide information about use of the site or help identify a device.',
				'Similar technologies include browser local storage (“localStorage”), which can store values on your device without relying on this site’s own backend.',
			],
		},
		{
			id: 'tipologia',
			heading: '3. Common classification (for reference)',
			paragraphs: [
				'By party: first-party cookies (set by this domain) and third-party cookies (set by another domain, for example a security provider).',
				'By purpose: strictly necessary or technical cookies (navigation and core features); preference cookies (remember choices such as language where that mechanism exists); analytics or measurement cookies (usage statistics). This site does not currently load third-party analytics or measurement cookies for statistics; if that changes, this policy and the consent mechanism will be updated and prior consent will be obtained where required before non-essential loading.',
				'By duration: session cookies (removed when you close the browser or shortly after) or persistent cookies (kept for a defined period unless you delete them earlier).',
			],
		},
		{
			id: 'uso-actual',
			heading: '4. Technologies used on this site',
			paragraphs: [
				'Technical cookies or data needed to browse and load the site (for example session or resources related to the site technology, such as Astro View Transitions if enabled).',
				'Cookie-banner preference: the browser local key `webaj_cookie_consent_v1` (or a later version defined in code) stores whether you accepted, rejected, or configured the banner. It remains until you clear site data in the browser or change your choice in the banner.',
				'Security (Google reCAPTCHA): when the embedded booking form is shown, Google may set cookies or technical data to assess abuse risk. Names and lifetimes are determined by Google; see Google’s published information on cookies and privacy for that product.',
			],
		},
		{
			id: 'terceros',
			heading: '5. Third parties and future changes',
			paragraphs: [
				'Google Ireland Limited provides reCAPTCHA as described. Processing may involve transfers outside the EEA under safeguards described in Google’s documentation.',
				'We do not sell personal data obtained through cookies. This MVP does not include third-party remarketing or audience measurement; if non-essential modules are added later, this policy and the consent UI will be updated before they load.',
			],
		},
		{
			id: 'gestion',
			heading: '6. Consent, banner, and withdrawal',
			paragraphs: [
				'A cookie banner is available across the site with essential information and options to accept, reject, or configure choices as implemented. You may change or withdraw your choice at any time by reopening the panel from the banner or the relevant link.',
				'If you clear site data in your browser, the stored preference may be removed and the banner may appear again until you save a new choice.',
			],
		},
		{
			id: 'navegador',
			heading: '7. Browser controls to limit or delete cookies',
			paragraphs: [
				'You can also block or delete cookies through your browser settings. Blocking technical cookies or deleting data needed for core features may prevent parts of the site from working correctly (for example, remembering banner preferences or reCAPTCHA on booking).',
				'Instructions depend on your software; see the help or privacy section of Firefox, Google Chrome, Microsoft Edge, Safari, or other browsers you use.',
			],
		},
		{
			id: 'mas-info',
			heading: '8. Personal data and your rights',
			paragraphs: [
				'Where cookies or similar technologies involve personal data, processing is governed by this site’s privacy policy. You may exercise applicable rights (access, rectification, erasure, restriction, objection, portability, complaint to a supervisory authority, etc.) by writing to __LEGAL_EMAIL__, unless a specific processing requires contacting the processor or another party as explained when the data are collected.',
			],
		},
	],
};

const ca: LegalPageModel = {
	title: 'Política de galetes i tecnologies similars',
	sections: [
		{
			id: 'marco-responsable',
			heading: '1. Marc normatiu i responsable',
			paragraphs: [
				'En compliment de l’article 22 de la Llei 34/2002, d’11 de juliol, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), en relació amb el Reglament (UE) 2016/679 (RGPD) i la Llei Orgànica 3/2018, de 5 de desembre, de protecció de dades personals i garantia dels drets digitals (LOPDGDD), s’informa de l’ús de galetes i tecnologies similars en aquest lloc web.',
				'El responsable del lloc és __LEGAL_NAME__, amb NIF __LEGAL_NIF__ i domicili a __LEGAL_ADDRESS__. Per a consultes sobre aquesta política o sobre dades personals pot contactar a __LEGAL_EMAIL__.',
			],
		},
		{
			id: 'que-son',
			heading: '2. Què són les galetes i tecnologies similars',
			paragraphs: [
				'Una galeta és un fitxer que el servidor envia al navegador i que es pot emmagatzemar al seu equip. Permeten, entre altres coses, recordar preferències o mantenir una sessió. Segons la configuració i el temps de conservació, poden aportar informació sobre l’ús del lloc o contribuir a identificar el dispositiu.',
				'Hi ha tecnologies anàlogues (per exemple l’emmagatzematge local del navegador, «localStorage») que fan funcions semblants per desar dades al terminal sense dependre d’un servidor propi del lloc.',
			],
		},
		{
			id: 'tipologia',
			heading: '3. Tipologia orientativa (criteris habituals)',
			paragraphs: [
				'Segons l’entitat que les gestiona: galetes pròpies (establertes per aquest domini) i galetes de tercers (establertes per un altre domini, per exemple un proveïdor de seguretat).',
				'Segons la finalitat: galetes tècniques o necessàries (permeten la navegació o funcions essencials); de preferències o personalització (recorden opcions com l’idioma quan existeixi aquest mecanisme); d’anàlisi o mesura (permeten estadístiques d’ús). En l’estat actual del lloc no es carreguen galetes d’anàlisi o mesura de tercers amb fins estadístics; si s’incorporen, s’informarà i es sol·licitarà el consentiment previ quan la llei ho exigeixi, abans de carregar-les de manera no essencial.',
				'Segons la durada: de sessió (s’eliminen en tancar el navegador o al cap de poc temps) o persistents (permaneixen un termini definit llevat que vostè les esborri abans).',
			],
		},
		{
			id: 'uso-actual',
			heading: '4. Tecnologies utilitzades en aquest lloc',
			paragraphs: [
				'Galetes o dades tècniques necessàries per a la navegació i la càrrega del lloc (per exemple, sessió o recursos associats a la tecnologia del lloc, com les transicions de vista d’Astro si estan actives).',
				'Preferència sobre l’avís de galetes: s’utilitza la clau local del navegador `webaj_cookie_consent_v1` (o una versió posterior acordada al codi) per recordar si va acceptar, rebutjar o configurar el bàner. És una dada emmagatzemada al seu equip per aquest origen; roman fins que l’esborri des del navegador o canviï l’elecció des del bàner.',
				'Seguretat (Google reCAPTCHA): quan es mostra el formulari de reserva integrat, Google pot establir galetes o dades tècniques pròpies de Google per avaluar el risc d’abús. Els noms i durades concrets els determina Google; pot consultar la informació que Google publica sobre galetes i privacitat per a aquest producte.',
			],
		},
		{
			id: 'terceros',
			heading: '5. Tercers i evolució del lloc',
			paragraphs: [
				'Google Ireland Limited actua com a proveïdor de reCAPTCHA en les condicions descrites. El tractament pot implicar transferències fora de l’Espai Econòmic Europeu amb les garanties que Google indiqui a la documentació.',
				'No es venen dades personals derivades de l’ús de galetes. L’MVP actual no incorpora publicitat de remarketing ni mesura d’audiència de tercers; si en el futur s’afegeixen mòduls amb galetes no essencials, s’actualitzarà aquesta política i el mecanisme de consentiment abans de carregar-los.',
			],
		},
		{
			id: 'gestion',
			heading: '6. Consentiment, bàner i revocació',
			paragraphs: [
				'El lloc mostra un bàner de galetes accessible des de les pàgines per informar de manera essencial i permetre acceptar, rebutjar o configurar les opcions previstes. Pot retirar o modificar la decisió en qualsevol moment tornant a obrir el panell des del mateix bàner o l’enllaç corresponent.',
				'Si esborra les dades del lloc al navegador, pot desaparèixer la preferència desada i tornar a mostrar-se el bàner fins que registri de nou una elecció.',
			],
		},
		{
			id: 'navegador',
			heading: '7. Com limitar o eliminar galetes al navegador',
			paragraphs: [
				'També pot acceptar, bloquejar o eliminar les galetes instal·lades mitjançant la configuració del navegador. Tingui en compte que bloquejar galetes tècniques o esborrar dades necessàries pot impedir el correcte funcionament de parts del lloc (per exemple, el recordatori de la preferència sobre el bàner o la verificació reCAPTCHA a la reserva).',
				'Les instruccions depenen del programa utilitzat; consulti la secció d’ajuda o privacitat de Firefox, Google Chrome, Microsoft Edge o Safari, entre altres.',
			],
		},
		{
			id: 'mas-info',
			heading: '8. Dades personals i exercici de drets',
			paragraphs: [
				'Quan les galetes o tecnologies similars permetin el tractament de dades personals, aquest tractament es regeix pel que s’indica a la política de privacitat d’aquest lloc. Pot exercir els drets que li corresponguin (accés, rectificació, supressió, limitació, oposició, portabilitat, reclamació davant l’autoritat de control, etc.) adreçant-se a __LEGAL_EMAIL__, llevat que per a un tractament concret correspongui adreçar-se a l’encarregat o a un tercer segons la informació facilitada en el seu moment.',
			],
		},
	],
};

const fr: LegalPageModel = {
	title: 'Politique relative aux cookies et aux technologies similaires',
	sections: [
		{
			id: 'marco-responsable',
			heading: '1. Cadre juridique et responsable',
			paragraphs: [
				'Conformément à l’article 22 de la loi 34/2002 du 11 juillet sur les services de la société de l’information et le commerce électronique (LSSI-CE), ainsi qu’au règlement (UE) 2016/679 (RGPD) et à la loi organique 3/2018 du 5 décembre sur la protection des données personnelles et la garantie des droits numériques (LOPDGDD), la présente page décrit l’usage des cookies et technologies similaires sur ce site.',
				'Le site est exploité par __LEGAL_NAME__, immatriculé(e) sous le numéro __LEGAL_NIF__, domicilié(e) __LEGAL_ADDRESS__. Pour toute question sur cette politique ou sur les données personnelles : __LEGAL_EMAIL__.',
			],
		},
		{
			id: 'que-son',
			heading: '2. Définition des cookies et technologies similaires',
			paragraphs: [
				'Un cookie est un fichier envoyé au navigateur et stocké sur votre équipement. Entre autres usages, les cookies peuvent mémoriser des préférences ou maintenir une session. Selon la configuration et la durée de conservation, ils peuvent fournir des informations sur l’usage du site ou contribuer à identifier l’appareil.',
				'Des technologies comparables existent (par exemple le stockage local du navigateur, « localStorage »), qui permettent d’enregistrer des données sur le terminal sans dépendre d’un serveur propriétaire du site.',
			],
		},
		{
			id: 'tipologia',
			heading: '3. Classification usuelle (à titre indicatif)',
			paragraphs: [
				'Selon l’entité : cookies « premiers » (déposés par ce domaine) et cookies tiers (déposés par un autre domaine, par exemple un prestataire de sécurité).',
				'Selon la finalité : cookies techniques ou strictement nécessaires (navigation et fonctions essentielles) ; cookies de préférences (mémorisent des choix tels que la langue lorsque ce mécanisme existe) ; cookies d’analyse ou de mesure d’audience. Dans l’état actuel du site, aucun cookie d’analyse ou de mesure tiers à des fins statistiques n’est chargé ; en cas d’évolution, la présente politique et le mécanisme de consentissement seront mis à jour et un consentement préalable sera sollicité lorsque la loi l’exige, avant tout chargement non essentiel.',
				'Selon la durée : cookies de session (supprimés à la fermeture du navigateur ou peu après) ou cookies persistants (conservés pendant une durée définie sauf suppression anticipée par l’utilisateur).',
			],
		},
		{
			id: 'uso-actual',
			heading: '4. Technologies utilisées sur ce site',
			paragraphs: [
				'Cookies ou données techniques nécessaires à la navigation et au chargement du site (par exemple session ou ressources liées à la technologie du site, telles que les transitions de vue d’Astro si elles sont activées).',
				'Préférence relative à la bannière cookies : clé locale du navigateur `webaj_cookie_consent_v1` (ou version ultérieure définie dans le code) pour mémoriser accepter / refuser / configurer. Les données restent sur votre équipement jusqu’à effacement via le navigateur ou changement de choix dans la bannière.',
				'Sécurité (Google reCAPTCHA) : lorsque le formulaire de réservation intégré est affiché, Google peut déposer des cookies ou des données techniques pour évaluer le risque d’abus. Les noms et durées sont déterminés par Google ; consultez l’information publiée par Google sur les cookies et la confidentialité pour ce produit.',
			],
		},
		{
			id: 'terceros',
			heading: '5. Tiers et évolutions du site',
			paragraphs: [
				'Google Ireland Limited fournit reCAPTCHA dans les conditions décrites. Le traitement peut impliquer des transferts hors EEE selon les garanties indiquées par Google.',
				'Les données personnelles issues des cookies ne sont pas vendues à des tiers. Le MVP actuel n’intègre pas de publicité de remarketing ni de mesure d’audience tierce ; si des modules non essentiels sont ajoutés, la présente politique et l’interface de consentissement seront mises à jour avant chargement.',
			],
		},
		{
			id: 'gestion',
			heading: '6. Consentement, bannière et retrait',
			paragraphs: [
				'Une bannière cookies est disponible sur le site avec les informations essentielles et les actions prévues (accepter, refuser, configurer). Vous pouvez modifier ou retirer votre choix à tout moment en rouvrant le panneau depuis la bannière ou le lien prévu.',
				'Si vous effacez les données du site dans votre navigateur, la préférence enregistrée peut disparaître et la bannière peut réapparaître jusqu’à un nouvel enregistrement.',
			],
		},
		{
			id: 'navegador',
			heading: '7. Paramétrage du navigateur',
			paragraphs: [
				'Vous pouvez également bloquer ou supprimer les cookies via les paramètres du navigateur. Le blocage des cookies techniques ou la suppression de données nécessaires peut empêcher le bon fonctionnement de certaines parties du site (par exemple mémorisation de la préférence sur la bannière ou reCAPTCHA sur la réservation).',
				'Les instructions dépendent du logiciel ; consultez l’aide ou la section confidentialité de Firefox, Google Chrome, Microsoft Edge, Safari ou autre navigateur utilisé.',
			],
		},
		{
			id: 'mas-info',
			heading: '8. Données personnelles et droits',
			paragraphs: [
				'Lorsque les cookies ou technologies similaires impliquent des données personnelles, le traitement est régi par la politique de confidentialité du site. Vous pouvez exercer les droits applicables (accès, rectification, effacement, limitation, opposition, portabilité, réclamation auprès de l’autorité de contrôle, etc.) en écrivant à __LEGAL_EMAIL__, sauf indication contraire pour un traitement spécifique (sous-traitant ou tiers) communiquée lors de la collecte.',
			],
		},
	],
};

export const cookiesByLocale: Record<Locale, LegalPageModel> = {
	es,
	en,
	ca,
	fr,
};
