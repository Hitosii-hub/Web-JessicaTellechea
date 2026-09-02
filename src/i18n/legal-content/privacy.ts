import type { Locale } from '../config';
import type { LegalPageModel } from '../legal-types';

/**
 * Política de privacidad: estructura orientativa (responsable, objeto/ámbito,
 * datos, menores, finalidades y bases, conservación, encargados/terceros,
 * derechos, seguridad, modificaciones, recogida en dos fases). Ajustar con
 * asesoramiento jurídico antes de publicación definitiva.
 */
const es: LegalPageModel = {
	title: 'Política de privacidad',
	sections: [
		{
			id: 'responsable',
			heading: '1. Responsable del tratamiento e información normativa',
			paragraphs: [
				'En cumplimiento del Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), y de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), le informamos de lo siguiente.',
				'El responsable del tratamiento de los datos personales obtenidos a través de este sitio web es __LEGAL_NAME__, con NIF __LEGAL_NIF__ y domicilio en __LEGAL_ADDRESS__. Para ejercer derechos o realizar consultas sobre protección de datos puede dirigirse a __LEGAL_EMAIL__.',
				'Esta política complementa la información que pueda facilitarse en formularios concretos (por ejemplo, en la solicitud o gestión de cita a través de la plataforma del encargado).',
			],
		},
		{
			id: 'objeto-ambito',
			heading: '2. Objeto y ámbito',
			paragraphs: [
				'La presente política tiene por objeto informarle del tratamiento de sus datos personales en relación con este sitio web.',
				'Le resulta aplicable en su condición de usuario del sitio, con independencia del lugar desde el que acceda, en la medida en que el tratamiento esté conectado con los servicios ofrecidos en el mismo.',
			],
		},
		{
			id: 'datos-tratados',
			heading: '3. Categorías de datos que podemos tratar',
			paragraphs: [
				'Según los formularios o funciones activas, pueden tratarse datos identificativos y de contacto (nombre, apellidos, documento identificativo cuando proceda, teléfono, correo electrónico), datos relativos a la cita (fecha, hora, profesional o servicio), datos técnicos de conexión (dirección IP, identificadores de dispositivo, registros mínimos necesarios para seguridad) y, si se utiliza, metadatos de verificación antiabuso (reCAPTCHA) sin almacenar en este sitio el audio o la imagen del desafío.',
				'El uso de cookies o almacenamiento local se describe en la política de cookies, accesible desde el pie del sitio.',
			],
		},
		{
			id: 'menores',
			heading: '4. Menores de edad',
			paragraphs: [
				'Los contenidos y servicios del sitio están dirigidos a personas mayores de 16 años. Si es menor de edad, no utilice el sitio sin la supervisión de quien ejerza la patria potestad o tutela. El tratamiento de datos de menores solo será lícito cuando corresponda conforme a la normativa aplicable y, en su caso, con la autorización o supervisión adecuadas.',
			],
		},
		{
			id: 'finalidades',
			heading: '5. Finalidades del tratamiento y bases legitimadoras',
			paragraphs: [
				'Gestionar la relación con los usuarios del sitio (consultas, comunicaciones, mejora del servicio), mantener la seguridad del sitio y cumplir obligaciones legales aplicables a la actividad profesional del responsable. Según el caso, la base jurídica puede ser la ejecución de medidas precontractuales o de un contrato (artículo 6.1.b RGPD), el interés legítimo en un sitio seguro y operativo (6.1.f) y el cumplimiento de obligaciones legales (6.1.c).',
				'La solicitud y gestión de citas en línea mediante el formulario integrado tiene como finalidad principal la prestación del servicio solicitado por el interesado (gestión de agenda y comunicaciones relacionadas con la cita), con base jurídica predominante en la ejecución de medidas precontractuales o contractual (6.1.b).',
				'Respecto a cookies y preferencias similares, se aplicará lo indicado en la política de cookies: cookies estrictamente necesarias o de seguridad con fundamento en interés legítimo o ejecución del servicio, cuando proceda, y otras categorías solo tras la configuración o el consentimiento que corresponda según el mecanismo del sitio.',
				'Si en el futuro se incorporaran comunicaciones comerciales, se solicitarán de forma independiente y solo con el consentimiento previo e informado (6.1.a), salvo que otra base legal resulte aplicable.',
			],
		},
		{
			id: 'conservacion',
			heading: '6. Plazos de conservación',
			paragraphs: [
				'Los datos se conservarán durante el tiempo necesario para cumplir cada finalidad, las obligaciones legales aplicables y la prescripción de posibles responsabilidades. Los plazos concretos dependen del tipo de dato y del canal (sitio web, agenda profesional o plataforma del encargado); puede solicitar información adicional por los medios de contacto indicados en el apartado 1.',
			],
		},
		{
			id: 'encargados-terceros',
			heading: '7. Encargados del tratamiento, destinatarios y transferencias',
			paragraphs: [
				'Para la gestión de citas en línea, __LEGAL_NAME__ utiliza la plataforma Nubimed / Clínica en la nube como encargado del tratamiento, que trata los datos siguiendo instrucciones documentadas del responsable y en virtud del correspondiente contrato de encargo.',
				'La lista actualizada de encargados puede solicitarse por los medios de contacto indicados en el apartado 1.',
				'Google Ireland Limited actúa como proveedor de reCAPTCHA cuando está activo en el formulario de reserva; puede implicar transferencias fuera del Espacio Económico Europeo con las garantías previstas por Google. Consulte la política de privacidad de Google aplicable a ese servicio.',
				'No se venden datos personales a terceros. Cualquier otra comunicación de datos (por ejemplo, a autoridades competentes) se realizará exclusivamente cuando resulte exigido por la ley.',
			],
		},
		{
			id: 'derechos',
			heading: '8. Derechos de las personas interesadas',
			paragraphs: [
				'Derecho de acceso: puede solicitar confirmación sobre si se tratan sus datos y, en su caso, obtener información sobre las finalidades, categorías de datos afectados y otros extremos previstos en la normativa.',
				'Derecho de rectificación: puede solicitar la corrección de datos inexactos o la completitud de datos incompletos.',
				'Derecho de supresión («derecho al olvido»): puede solicitar la supresión de los datos cuando concurran los supuestos legalmente previstos.',
				'Derecho de limitación del tratamiento: en los casos previstos en el RGPD, puede solicitar la limitación del tratamiento de sus datos.',
				'Derecho de oposición: en determinadas circunstancias y por motivos relacionados con su situación particular, puede oponerse al tratamiento de sus datos salvo que el responsable acredite motivos legítimos imperiosos o el ejercicio o la defensa de reclamaciones.',
				'Derecho a la portabilidad: cuando el tratamiento se base en el consentimiento o en el contrato y se efectúe por medios automatizados, podrá recibir los datos que haya facilitado en un formato estructurado, de uso común y lectura mecánica, y transmitirlos a otro responsable cuando sea técnicamente posible.',
				'Retirada del consentimiento: cuando algún tratamiento se base en el consentimiento, podrá retirarlo en cualquier momento sin afectar a la licitud del tratamiento basado en el consentimiento previo a su retirada.',
				'Para ejercer estos derechos puede dirigirse a __LEGAL_EMAIL__. Le informamos de su derecho a presentar reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
			],
		},
		{
			id: 'seguridad',
			heading: '9. Medidas de seguridad',
			paragraphs: [
				'Se aplican medidas técnicas y organizativas apropiadas al riesgo, incluida la transmisión cifrada cuando el alojamiento y la configuración del sitio lo permiten, minimización de datos y control de accesos respecto de los proveedores que actúan como encargados. Ningún sistema es completamente invulnerable; si detecta un incidente relacionado con sus datos, puede comunicarlo a la dirección de contacto indicada.',
			],
		},
		{
			id: 'modificaciones',
			heading: '10. Modificaciones de la política',
			paragraphs: [
				'__LEGAL_NAME__ podrá actualizar esta política para adaptarla a cambios normativos, técnicos o del sitio. La versión vigente estará publicada en esta página; le recomendamos revisarla periódicamente. El uso continuado del sitio tras los cambios podrá implicar la aceptación de la política actualizada, sin perjuicio de las bases jurídicas aplicables a cada tratamiento.',
			],
		},
		{
			id: 'recogida',
			heading: '11. Recogida en dos fases (sitio web y plataforma de cita)',
			paragraphs: [
				'Parte de los datos se recogen en este sitio (por ejemplo, selección de franja y datos de contacto básicos) y parte se procesan en la plataforma del encargado Nubimed para completar la petición de cita. Ambas capas deben respetar la información y los consentimientos aplicables; los datos identificativos del responsable y el canal de contacto figuran en el apartado 1.',
			],
		},
	],
};

const en: LegalPageModel = {
	title: 'Privacy policy',
	sections: [
		{
			id: 'responsable',
			heading: '1. Controller and legal framework',
			paragraphs: [
				'In accordance with Regulation (EU) 2016/679 (GDPR), Organic Law 3/2018 of 5 December on Personal Data Protection and guarantee of digital rights (LOPDGDD), and Law 34/2002 of 11 July on information society services and electronic commerce (LSSI-CE), we inform you as follows.',
				'The controller for personal data collected through this website is __LEGAL_NAME__, tax ID __LEGAL_NIF__, address __LEGAL_ADDRESS__. To exercise your rights or ask questions about data protection, contact __LEGAL_EMAIL__.',
				'This policy supplements any information provided in specific forms (for example, appointment requests via the processor platform).',
			],
		},
		{
			id: 'objeto-ambito',
			heading: '2. Purpose and scope',
			paragraphs: [
				'This policy explains how we process your personal data in connection with this website.',
				'It applies to you as a site user regardless of where you access from, insofar as the processing relates to the services offered on the site.',
			],
		},
		{
			id: 'datos-tratados',
			heading: '3. Categories of data we may process',
			paragraphs: [
				'Depending on active forms or features, we may process identity and contact details (name, surname, ID document where needed, phone, email), appointment-related data (date, time, professional or service), limited technical connection data (IP address, device identifiers where needed for security), and, if used, anti-abuse verification metadata from reCAPTCHA without storing challenge media on this site.',
				'Cookies and local storage are described in the cookie policy linked in the site footer.',
			],
		},
		{
			id: 'menores',
			heading: '4. Children',
			paragraphs: [
				'Site content and services are aimed at people aged 16 or over. If you are a child, do not use the site without a parent or guardian. Processing of children data will only be lawful as permitted by applicable law and, where relevant, with appropriate authorisation or supervision.',
			],
		},
		{
			id: 'finalidades',
			heading: '5. Purposes and legal bases',
			paragraphs: [
				'To manage the relationship with site users (requests, communications, service improvement), maintain site security, and comply with legal obligations applicable to the controller\'s professional practice. Depending on the case, the legal basis may be performance of pre-contractual measures or a contract (Art. 6(1)(b) GDPR), legitimate interests in a secure, operational site (6(1)(f)), and legal obligations (6(1)(c)).',
				'Online appointment handling aims primarily at providing the service requested by the data subject (scheduling and communications related to the appointment), mainly on the basis of performance of pre-contractual measures or contract (6(1)(b)).',
				'For cookies and similar preferences, see the cookie policy: strictly necessary or security cookies may rely on legitimate interests or service performance where appropriate; other categories only after the configuration or consent required by the site mechanism.',
				'If direct marketing is added later, it will be offered separately and only with prior informed consent (6(1)(a)) unless another legal basis applies.',
			],
		},
		{
			id: 'conservacion',
			heading: '6. Retention',
			paragraphs: [
				'Data are kept only as long as necessary for each purpose, applicable legal duties, and limitation periods. Exact periods depend on the data category and channel (website, professional diary, or processor platform); you may request further detail using the contact details in section 1.',
			],
		},
		{
			id: 'encargados-terceros',
			heading: '7. Processors, recipients, and transfers',
			paragraphs: [
				'For online appointments, __LEGAL_NAME__ uses the Nubimed / Clinica en la nube platform as a processor, acting on documented instructions under an appropriate processing agreement.',
				'You may request an up-to-date list of processors via the contact details in section 1.',
				'Google Ireland Limited provides reCAPTCHA when enabled on the booking form; this may involve transfers outside the EEA subject to Google safeguards. See Google privacy information for that product.',
				'We do not sell personal data. Any further disclosure (for example, to authorities) will only occur where required by law.',
			],
		},
		{
			id: 'derechos',
			heading: '8. Your rights',
			paragraphs: [
				'Right of access: you may ask whether we process your data and, if so, obtain information on purposes, categories of data concerned, and other elements provided for by law.',
				'Right to rectification: you may ask us to correct inaccurate data or complete incomplete data.',
				'Right to erasure (“right to be forgotten”): you may ask us to erase data where the legal grounds apply.',
				'Right to restriction: in the cases set out in the GDPR, you may ask us to restrict processing.',
				'Right to object: in certain circumstances and on grounds relating to your particular situation, you may object to processing unless we demonstrate compelling legitimate grounds or processing for legal claims.',
				'Right to data portability: where processing is based on consent or contract and is carried out by automated means, you may receive the data you provided in a structured, commonly used, machine-readable format and transmit them to another controller where technically feasible.',
				'Withdrawal of consent: where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of processing based on consent before its withdrawal.',
				'To exercise these rights, write to __LEGAL_EMAIL__. You may lodge a complaint with your local supervisory authority (in Spain, the AEPD).',
			],
		},
		{
			id: 'seguridad',
			heading: '9. Security measures',
			paragraphs: [
				'We apply appropriate technical and organisational measures, including encrypted transmission where hosting configuration allows, data minimisation, and access controls for processors. No system is fully immune; if you notice an incident concerning your data, you may report it to the contact address above.',
			],
		},
		{
			id: 'modificaciones',
			heading: '10. Changes to this policy',
			paragraphs: [
				'__LEGAL_NAME__ may update this policy to reflect legal, technical, or site changes. The current version will be published on this page; we encourage you to review it periodically. Continued use after changes may imply acceptance of the updated policy, without prejudice to the legal bases applicable to each processing activity.',
			],
		},
		{
			id: 'recogida',
			heading: '11. Two-step collection (website and booking platform)',
			paragraphs: [
				'Some data are collected on this site (for example, slot selection and basic contact details) and some processing occurs on the Nubimed processor platform to complete the appointment request. Both layers must respect applicable transparency and consent rules; controller contact details are in section 1.',
			],
		},
	],
};

const ca: LegalPageModel = {
	title: 'Política de privacitat',
	sections: [
		{
			id: 'responsable',
			heading: '1. Responsable del tractament i informació normativa',
			paragraphs: [
				'En compliment del Reglament (UE) 2016/679, RGPD, de la Llei Orgànica 3/2018, de 5 de desembre, de protecció de dades personals i garantia dels drets digitals (LOPDGDD), i de la Llei 34/2002, d’11 de juliol, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), l’informem del següent.',
				'El responsable del tractament de les dades personals obtingudes a través d’aquest lloc web és __LEGAL_NAME__, amb NIF __LEGAL_NIF__ i domicili a __LEGAL_ADDRESS__. Per exercir drets o fer consultes sobre protecció de dades pot adreçar-se a __LEGAL_EMAIL__.',
				'Aquesta política complementa la informació que es pugui facilitar en formularis concrets (per exemple, en la sol·licitud o gestió de cita a través de la plataforma de l’encarregat).',
			],
		},
		{
			id: 'objeto-ambito',
			heading: '2. Objecte i àmbit',
			paragraphs: [
				'Aquesta política té per objecte informar-lo del tractament de les seves dades personals en relació amb aquest lloc web.',
				'Li resulta aplicable en la condició d’usuari del lloc, amb independència del lloc des d’on hi accedeixi, en la mesura que el tractament estigui connectat amb els serveis oferts en el mateix.',
			],
		},
		{
			id: 'datos-tratados',
			heading: '3. Categories de dades que podem tractar',
			paragraphs: [
				'Segons els formularis o funcions actives, es poden tractar dades identificatives i de contacte (nom, cognoms, document identificatiu quan escaigui, telèfon, correu electrònic), dades relatives a la cita (data, hora, professional o servei), dades tècniques de connexió (adreça IP, identificadors de dispositiu, registres mínims necessaris per a seguretat) i, si s’utilitza, metadades de verificació antiabús (reCAPTCHA) sense emmagatzemar en aquest lloc l’àudio o la imatge del repte.',
				'L’ús de galetes o emmagatzematge local es descriu a la política de galetes, accessible des del peu del lloc.',
			],
		},
		{
			id: 'menores',
			heading: '4. Menors d’edat',
			paragraphs: [
				'Els continguts i serveis del lloc estan dirigits a persones majors de 16 anys. Si és menor, no utilitzi el lloc sense la supervisió de qui exerceixi la patria potestat o tutela. El tractament de dades de menors només serà lícit quan correspongui d’acord amb la normativa aplicable i, si escau, amb l’autorització o supervisió adequades.',
			],
		},
		{
			id: 'finalidades',
			heading: '5. Finalitats del tractament i bases legitimadores',
			paragraphs: [
				'Gestionar la relació amb els usuaris del lloc (consultes, comunicacions, millora del servei), mantenir la seguretat del lloc i complir obligacions legals aplicables a l’activitat professional del responsable. Segons el cas, la base jurídica pot ser l’execució de mesures precontractuals o d’un contracte (article 6.1.b RGPD), l’interès legítim en un lloc segur i operatiu (6.1.f) i el compliment d’obligacions legals (6.1.c).',
				'La sol·licitud i gestió de cites en línia mitjançant el formulari integrat té com a finalitat principal la prestació del servei sol·licitat per l’interessat (gestió d’agenda i comunicacions relacionades amb la cita), amb base jurídica predominant en l’execució de mesures precontractuals o contractual (6.1.b).',
				'Quant a galetes i preferències similars, s’aplicarà el indicat a la política de galetes: galetes estrictament necessàries o de seguretat amb fonament en interès legítim o execució del servei, quan escaigui, i altres categories només després de la configuració o el consentiment que correspongui segons el mecanisme del lloc.',
				'Si s’incorporen comunicacions comercials en el futur, es sol·licitaran de manera independent i només amb el consentiment previ i informat (6.1.a), llevat que una altra base legal sigui aplicable.',
			],
		},
		{
			id: 'conservacion',
			heading: '6. Terminis de conservació',
			paragraphs: [
				'Les dades es conservaran el temps necessari per complir cada finalitat, les obligacions legals aplicables i la prescripció de possibles responsabilitats. Els terminis concrets depenen del tipus de dada i del canal (lloc web, agenda professional o plataforma de l’encarregat); pot sol·licitar informació addicional pels mitjans de contacte indicats a l’apartat 1.',
			],
		},
		{
			id: 'encargados-terceros',
			heading: '7. Encarregats del tractament, destinataris i transferències',
			paragraphs: [
				'Per a la gestió de cites en línia, __LEGAL_NAME__ utilitza la plataforma Nubimed / Clínica en el núvol com a encarregat del tractament, que tracta les dades seguint instruccions documentades del responsable i amb el contracte d’encàrrec corresponent.',
				'La llista actualitzada d’encarregats es pot sol·licitar pels mitjans de contacte indicats a l’apartat 1.',
				'Google Ireland Limited actua com a proveïdor de reCAPTCHA quan està actiu al formulari de reserva; pot implicar transferències fora de l’EEE amb les garanties previstes per Google. Consulteu la política de privacitat de Google aplicable a aquest servei.',
				'No es venen dades personals a tercers. Qualsevol altra comunicació de dades (per exemple, a autoritats competents) es farà exclusivament quan ho exigeixi la llei.',
			],
		},
		{
			id: 'derechos',
			heading: '8. Drets de les persones interessades',
			paragraphs: [
				'Dret d’accés: pot sol·licitar confirmació sobre si es tracten les seves dades i, si escau, obtenir informació sobre les finalitats, categories de dades afectades i altres extrems previstos a la normativa.',
				'Dret de rectificació: pot sol·licitar la correcció de dades inexactes o la compleció de dades incompletes.',
				'Dret de supressió («dret a l’oblit»): pot sol·licitar la supressió de les dades quan concorrin els supòsits legalment previstos.',
				'Dret de limitació del tractament: en els casos previstos al RGPD, pot sol·licitar la limitació del tractament de les seves dades.',
				'Dret d’oposició: en determinades circumstàncies i per motius relacionats amb la seva situació particular, pot oposar-se al tractament de les seves dades llevat que el responsable acrediti motius legítims imperiosos o l’exercici o la defensa de reclamacions.',
				'Dret a la portabilitat: quan el tractament es basi en el consentiment o en el contracte i es dugui a terme per mitjans automatitzats, podrà rebre les dades que hagi facilitat en un format estructurat, d’ús comú i lectura mecànica, i transmetre-les a un altre responsable quan sigui tècnicament possible.',
				'Retirada del consentiment: quan algun tractament es basi en el consentiment, el podrà retirar en qualsevol moment sense afectar la licitud del tractament basat en el consentiment previ a la retirada.',
				'Per exercir aquests drets pot adreçar-se a __LEGAL_EMAIL__. Té dret a presentar reclamació davant l’Autoritat Catalana de Protecció de Dades o l’AEPD, segons correspongui.',
			],
		},
		{
			id: 'seguridad',
			heading: '9. Mesures de seguretat',
			paragraphs: [
				'S’apliquen mesures tècniques i organitzatives apropiades al risc, inclosa la transmissió xifrada quan l’allotjament i la configuració ho permeten, minimització de dades i control d’accés respecte dels proveïdors que actuen com a encarregats. Cap sistema és completament invulnerable; si detecta un incident relacionat amb les seves dades, pot comunicar-ho a l’adreça de contacte indicada.',
			],
		},
		{
			id: 'modificaciones',
			heading: '10. Modificacions de la política',
			paragraphs: [
				'__LEGAL_NAME__ podrà actualitzar aquesta política per adaptar-la a canvis normatius, tècnics o del lloc. La versió vigent estarà publicada en aquesta pàgina; li recomanem revisar-la periòdicament. L’ús continuat del lloc després dels canvis pot implicar l’acceptació de la política actualitzada, sense perjudici de les bases jurídiques aplicables a cada tractament.',
			],
		},
		{
			id: 'recogida',
			heading: '11. Recollida en dues fases (lloc web i plataforma de cita)',
			paragraphs: [
				'Part de les dades es recullen en aquest lloc (per exemple, selecció de franja i dades de contacte bàsiques) i part es processa a la plataforma de l’encarregat Nubimed per completar la petició de cita. Ambdues capes han de respectar la informació i els consentiments aplicables; les dades identificatives del responsable i el canal de contacte figuren a l’apartat 1.',
			],
		},
	],
};

const fr: LegalPageModel = {
	title: 'Politique de confidentialité',
	sections: [
		{
			id: 'responsable',
			heading: '1. Responsable du traitement et cadre juridique',
			paragraphs: [
				'Conformément au Règlement (UE) 2016/679 (RGPD), à la loi organique 3/2018 du 5 décembre sur la protection des données personnelles et la garantie des droits numériques (LOPDGDD), et à la loi 34/2002 du 11 juillet sur les services de la société de l’information et le commerce électronique (LSSI-CE), nous vous informons des éléments suivants.',
				'Le responsable du traitement des données personnelles collectées via ce site est __LEGAL_NAME__, immatriculé(e) sous le numéro __LEGAL_NIF__, domicilié(e) __LEGAL_ADDRESS__. Pour exercer vos droits ou poser des questions relatives à la protection des données : __LEGAL_EMAIL__.',
				'La présente politique complète les informations pouvant être fournies dans des formulaires spécifiques (par exemple, la demande ou la gestion de rendez-vous via la plateforme du sous-traitant).',
			],
		},
		{
			id: 'objeto-ambito',
			heading: '2. Objet et champ d’application',
			paragraphs: [
				'La présente politique vise à vous informer du traitement de vos données personnelles en lien avec ce site web.',
				'Elle vous concerne en tant qu’utilisateur du site, quel que soit le lieu d’accès, dans la mesure où le traitement est lié aux services proposés sur le site.',
			],
		},
		{
			id: 'datos-tratados',
			heading: '3. Catégories de données susceptibles d’être traitées',
			paragraphs: [
				'Selon les formulaires ou fonctionnalités actifs, peuvent être traitées des données d’identification et de contact (nom, prénom, pièce d’identité si nécessaire, téléphone, e-mail), des données relatives au rendez-vous (date, heure, professionnel ou service), des données techniques de connexion (adresse IP, identifiants d’appareil, journaux minimaux nécessaires à la sécurité) et, si utilisé, des métadonnées de vérification anti-abus (reCAPTCHA) sans stocker sur ce site le contenu audio ou visuel du défi.',
				'L’usage des cookies ou du stockage local est décrit dans la politique relative aux cookies, accessible depuis le pied de page du site.',
			],
		},
		{
			id: 'menores',
			heading: '4. Mineurs',
			paragraphs: [
				'Les contenus et services du site s’adressent aux personnes âgées d’au moins 16 ans. Si vous êtes mineur, n’utilisez pas le site sans la supervision d’un titulaire de l’autorité parentale ou d’un tuteur. Le traitement de données de mineurs n’est licite que dans les conditions prévues par la loi applicable et, le cas échéant, avec l’autorisation ou la supervision appropriée.',
			],
		},
		{
			id: 'finalidades',
			heading: '5. Finalités et bases juridiques',
			paragraphs: [
				'Gérer la relation avec les utilisateurs du site (demandes, communications, amélioration du service), maintenir la sécurité du site et respecter les obligations légales applicables à l’activité professionnelle du responsable. Selon les cas, la base juridique peut être l’exécution de mesures précontractuelles ou d’un contrat (article 6.1.b du RGPD), l’intérêt légitime à disposer d’un site sûr et opérationnel (6.1.f), et le respect d’obligations légales (6.1.c).',
				'La demande et la gestion de rendez-vous en ligne via le formulaire intégré visent principalement la fourniture du service demandé par la personne concernée (gestion d’agenda et communications liées au rendez-vous), avec une base juridique prédominante en l’exécution de mesures précontractuelles ou contractuelles (6.1.b).',
				'Pour les cookies et préférences similaires, les indications de la politique relative aux cookies s’appliquent : cookies strictement nécessaires ou de sécurité sur le fondement de l’intérêt légitime ou de l’exécution du service, le cas échéant, et autres catégories uniquement après la configuration ou le consentement requis par le mécanisme du site.',
				'Si des communications commerciales sont ajoutées ultérieurement, elles feront l’objet d’une information distincte et d’un consentement préalable éclairé (6.1.a), sauf base légale différente applicable.',
			],
		},
		{
			id: 'conservacion',
			heading: '6. Durées de conservation',
			paragraphs: [
				'Les données sont conservées le temps nécessaire à chaque finalité, aux obligations légales applicables et aux délais de prescription. Les durées précises dépendent de la catégorie de données et du canal (site web, agenda professionnel ou plateforme du sous-traitant) ; des précisions peuvent être demandées aux coordonnées indiquées à la section 1.',
			],
		},
		{
			id: 'encargados-terceros',
			heading: '7. Sous-traitants, destinataires et transferts',
			paragraphs: [
				'Pour la prise de rendez-vous en ligne, __LEGAL_NAME__ utilise la plateforme Nubimed / Clinica en la nube comme sous-traitant, traitant les données sur instructions documentées du responsable, dans le cadre d’un contrat de sous-traitance.',
				'La liste à jour des sous-traitants peut être demandée via les coordonnées de la section 1.',
				'Google Ireland Limited fournit reCAPTCHA lorsqu’il est activé sur le formulaire de réservation ; des transferts hors EEE peuvent intervenir selon les garanties proposées par Google. Veuillez consulter la politique de confidentialité Google applicable à ce service.',
				'Les données personnelles ne sont pas vendues à des tiers. Toute autre communication (par exemple, aux autorités) n’interviendra que lorsque la loi l’exige.',
			],
		},
		{
			id: 'derechos',
			heading: '8. Droits des personnes concernées',
			paragraphs: [
				'Droit d’accès : vous pouvez demander si vos données sont traitées et, le cas échéant, obtenir des informations sur les finalités, les catégories de données concernées et autres éléments prévus par la loi.',
				'Droit de rectification : vous pouvez demander la correction de données inexactes ou la complétion de données incomplètes.',
				'Droit à l’effacement (« droit à l’oubli ») : vous pouvez demander l’effacement des données lorsque les conditions légales sont réunies.',
				'Droit à la limitation du traitement : dans les cas prévus par le RGPD, vous pouvez demander la limitation du traitement.',
				'Droit d’opposition : dans certaines circonstances et pour des motifs liés à votre situation particulière, vous pouvez vous opposer au traitement, sauf si le responsable démontre des motifs légitimes impérieux ou le traitement pour la constatation, l’exercice ou la défense de droits en justice.',
				'Droit à la portabilité : lorsque le traitement est fondé sur le consentement ou le contrat et effectué par des moyens automatisés, vous pouvez recevoir les données que vous avez fournies dans un format structuré, couramment utilisé et lisible par machine, et les transmettre à un autre responsable lorsque cela est techniquement possible.',
				'Retrait du consentement : lorsque le traitement est fondé sur le consentement, vous pouvez le retirer à tout moment sans affecter le caractère licite du traitement fondé sur le consentement avant son retrait.',
				'Pour exercer ces droits, écrivez à __LEGAL_EMAIL__. Vous pouvez introduire une réclamation auprès de l’autorité de contrôle compétente (par exemple la CNIL ou l’AEPD selon votre situation).',
			],
		},
		{
			id: 'seguridad',
			heading: '9. Mesures de sécurité',
			paragraphs: [
				'Des mesures techniques et organisationnelles adaptées au risque sont mises en œuvre, y compris la transmission chiffrée lorsque l’hébergement et la configuration du site le permettent, la minimisation des données et le contrôle des accès des sous-traitants. Aucun système n’est totalement invulnérable ; si vous constatez un incident concernant vos données, vous pouvez le signaler à l’adresse de contact indiquée.',
			],
		},
		{
			id: 'modificaciones',
			heading: '10. Modifications de la politique',
			paragraphs: [
				'__LEGAL_NAME__ peut mettre à jour la présente politique pour refléter des changements législatifs, techniques ou relatifs au site. La version en vigueur sera publiée sur cette page ; nous vous invitons à la consulter régulièrement. L’utilisation continue du site après modification peut valoir acceptation de la politique mise à jour, sans préjudice des bases juridiques applicables à chaque traitement.',
			],
		},
		{
			id: 'recogida',
			heading: '11. Collecte en deux étapes (site et plateforme de rendez-vous)',
			paragraphs: [
				'Une partie des données est collectée sur ce site (par exemple, choix de créneau et coordonnées de base) et une partie est traitée sur la plateforme du sous-traitant Nubimed pour finaliser la demande de rendez-vous. Les deux niveaux doivent respecter la transparence et les consentements applicables ; les coordonnées du responsable figurent à la section 1.',
			],
		},
	],
};

export const privacyByLocale: Record<Locale, LegalPageModel> = {
	es,
	en,
	ca,
	fr,
};
