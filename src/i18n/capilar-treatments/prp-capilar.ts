import { buildTreatmentContent } from './build-content';
import type { TreatmentContentParts } from './build-content';
import type { CapilarTreatmentContentMap } from './types';

const esParts: TreatmentContentParts = {
	seo: {
		title: 'PRP capilar en Barcelona y Tarragona | Dra. Jessica Tellechea',
		description:
			'PRP capilar con plasma autólogo y valoración médica previa. Regeneración del cuero cabelludo y apoyo al folículo piloso en Barcelona y Tarragona.',
	},
	heroH1: 'PRP capilar',
	aboutBody: [
		'El PRP capilar (plasma rico en plaquetas) utiliza una fracción del propio sangre del paciente, procesada para concentrar factores de crecimiento y señales biológicas proveniente de las plaquetas que estimulan el crecimiento y la reparación celular.',
		'En la práctica, el PRP se plantea dentro de un plan médico personalizado, con expectativas prudentes y seguimiento periódico. El objetivo es apoyar procesos de debilitamiento o adelgazamiento capilar desde un enfoque regenerativo, no prometer densidad inmediata ni resultados uniformes en todos los pacientes.',
	],
	howBody: [
		'La sesión incluye extracción sanguínea, centrifugado en condiciones controladas y aplicación del plasma preparado mediante microinfiltraciones en el cuero cabelludo.',
		'El número de sesiones, el intervalo entre ellas y la posible combinación con otros tratamientos médicos capilares se definen en la consulta inicial y se revisan según la respuesta clínica. Cada caso evoluciona de forma distinta; por ello el protocolo se ajusta con criterio médico y no sigue un calendario rígido universal.',
	],
	benefits: [
		'Uso de material autólogo del paciente, lo que reduce la dependencia de sustancias exógenas en el protocolo base.',
		'Favorece la calidad y el grosor del cabello en pacientes seleccionados.',
		'Posibilidad de combinarlo con otras terapias médicas capilares cuando el criterio clínico lo respalda.',
		'Aporte de factores de crecimiento al microentorno del folículo piloso y del cuero cabelludo.',
		'Procedimiento ambulatorio integrado en un plan capilar con diagnóstico previo y seguimiento.',
	],
	postCareBody: [
		'Después del PRP capilar, es habitual mantener reposo relativo del cuero cabelludo las primeras horas y seguir las indicaciones sobre lavado, sol, ejercicio y productos capilares. La percepción de cambios suele ser gradual; la utilidad del tratamiento se valora en revisiones sucesivas, no en el día siguiente a la sesión.',
	],
	essentials: [
		'Acudir bien hidratado y beber abundante agua, especialmente en las horas previas a la extracción',
		'Evite comidas grasosas y copiosas en las horas previas a la extracción',
		'Informar de fiebre reciente, infecciones, anticoagulantes o trastornos de la coagulación.',
		'No automedicarse con antiinflamatorios antes de la sesión sin consultar previamente con la médica.',
		'Planificar la visita evitando compromisos que requieran apariencia impecable si se prevé enrojecimiento leve.',
	],
	precautionsDescription:
		'El PRP capilar es un procedimiento médico que requiere valoración individual, extracción sanguínea y manipulación del material biológico propio del paciente. Las precauciones siguientes son orientativas',
	precautionsBefore: [
		'Valoración capilar y revisión de antecedentes: patrón de caída, medicación, tiroides, anemia, estrés, cirugías previas.',
		'Informar de anticoagulantes, antiagregantes, suplementos que afecten a la coagulación o tratamientos recientes.',
		'Evitar AINE y aspirina en los días previos si la médica lo indica, para reducir riesgo de hematomas (no suspenda ningún medicamento prescrito por iniciativa propia. Si los está tomando comuníquelo previamente para valorar cada caso individualmente).',
		'No acudir con infección activa, fiebre, cuero cabelludo inflamado o heridas sin revisión previa.',
		'Comunicar embarazo, lactancia o enfermedades hematológicas; el PRP puede no estar indicado.',
		'Descansar adecuadamente y mantener hidratación; la calidad de la extracción depende del estado general.',
		'No consumir alcohol ni realizar ejercicio intenso 24 horas antes si se busca minimizar molestias post-procedimiento.',
		'Confirmar que no existen contraindicaciones para la punción venosa o alergias relevantes al material del procedimiento.',
	],
	precautionsAfter: [
		'No lavar el cuero cabelludo durante el periodo indicado, habitualmente 24 horas, salvo otra recomendación.',
		'Evitar sol directo, saunas, piscinas y sudoración intensa las primeras 48 horas.',
		'No frotar, peinar con fuerza ni usar productos irritantes sobre la zona tratada.',
		'Posponer tintes, decoloraciones o tratamientos químicos capilares hasta autorización médica.',
		'Evitar alcohol y tabaco el día del tratamiento y al menos 24 horas después si hay molestias.',
		'No combinar de forma autónoma con mesoterapia u otros procedimientos invasivos sin coordinación clínica.',
		'Consultar si aparecen hematomas extensos, dolor intenso, inflamación progresiva o signos de infección.',
		'Acudir a las revisiones programadas para valorar la evolución con criterio médico y ajustar el plan.',
	],
	faq: [
		{
			q: '¿En qué se diferencia el PRP capilar de la mesoterapia?',
			a: 'El PRP utiliza plasma autólogo del paciente rico en factores de crecimiento. La mesoterapia emplea microinfiltraciones con formulaciones médicas específicas. La elección depende del diagnóstico y puede complementarse en algunos casos, siempre con criterio clínico.',
		},
		{
			q: '¿Cuántas sesiones de PRP capilar se recomiendan?',
			a: 'No hay un número universal. Tras la valoración inicial se propone un calendario que se revisa según tolerancia, evolución y objetivos realistas del caso.',
		},
		{
			q: '¿Cuándo se aprecian cambios tras el PRP?',
			a: 'La respuesta suele ser progresiva y variable. Algunos pacientes notan mejoría en la calidad del cabello o en la caída en semanas; otros requieren varias sesiones y meses de seguimiento antes de valorar resultados.',
		},
		{
			q: '¿Existen riesgos con el PRP capilar?',
			a: 'Al ser material autólogo, el riesgo alérgico es bajo, pero pueden aparecer enrojecimiento, hematomas, molestia local o, de forma infrecuente, infección. La valoración previa y la técnica médica buscan minimizar complicaciones.',
		},
		{
			q: '¿Puede hacerse PRP si ya hay calvicie avanzada?',
			a: 'Depende del patrón de caída, la reserva de cabello y los objetivos realistas. En algunos casos el PRP puede tener utilidad limitada y conviene valorar otras opciones médicas o quirúrgicas tras diagnóstico completo.',
		},
	],
	images: {
		hero: {
			src: '/images/home/treatment-capilar.webp',
			alt: 'Tratamiento PRP capilar con plasma rico en plaquetas',
		},
		about: {
			src: '/images/capilar/prp/prp-centrifuge.png',
			alt: 'Preparación de PRP capilar con centrifugado en clínica médica',
		},
		how: {
			src: '/images/capilar/prp/close-prp-application.png',
			alt: 'Aplicación de PRP capilar mediante microinfiltraciones en cuero cabelludo',
		},
		postCare: {
			src: '/images/capilar/prp/prp-doctora-plasma-tubes.png',
			alt: 'Plasma rico en plaquetas preparado para tratamiento capilar',
		},
		beforeAfter: {
			before: {
				alt: 'Zona frontal con adelgazamiento capilar antes de PRP',
				recraftPrompt:
					'Clinical top-down photograph, female hairline and frontal scalp with visible thinning and miniaturized hairs, neutral background, even medical lighting, before-treatment documentary reference, no text, no logos, photorealistic',
			},
			after: {
				alt: 'Mejora capilar moderada tras PRP médico',
				recraftPrompt:
					'Clinical top-down photograph, same female hairline and frontal scalp with modest density improvement and stronger hair shafts, neutral background, even medical lighting, realistic subtle after-treatment reference, no text, no logos, photorealistic',
			},
		},
	},
};

const enParts: TreatmentContentParts = {
	seo: {
		title: 'Capillary PRP in Barcelona and Tarragona | Dr Jessica Tellechea',
		description:
			'Capillary PRP with autologous plasma and prior medical assessment. Scalp regeneration and follicle support in Barcelona and Tarragona.',
	},
	heroH1: 'Capillary PRP',
	aboutBody: [
		'Capillary PRP (platelet-rich plasma) uses a fraction of the patient\'s own blood, processed to concentrate growth factors and biological signals from platelets that stimulate growth and cellular repair.',
		'In practice, PRP is offered within a personalised medical plan with prudent expectations and periodic follow-up. The aim is to support weakening or thinning hair through a regenerative approach, not to promise immediate density or uniform results in every patient.',
	],
	howBody: [
		'The session includes blood draw, controlled centrifugation and application of the prepared plasma through microinjections into the scalp.',
		'The number of sessions, intervals between them and possible combination with other medical hair treatments are defined at initial consultation and reviewed according to clinical response. Each case progresses differently; the protocol is adjusted with medical judgement rather than following a rigid universal schedule.',
	],
	benefits: [
		'Use of the patient\'s own autologous material, reducing reliance on exogenous substances in the base protocol.',
		'Supports hair quality and thickness in selected patients.',
		'May be combined with other medical hair therapies when clinically supported.',
		'Delivery of growth factors to the hair follicle microenvironment and scalp.',
		'Outpatient procedure integrated into a hair plan with prior diagnosis and follow-up.',
	],
	postCareBody: [
		'After capillary PRP, relative rest of the scalp for the first hours is usual, along with guidance on washing, sun, exercise and hair products. Perceived changes are usually gradual; treatment value is assessed at follow-up visits, not the day after a session.',
	],
	essentials: [
		'Attend well hydrated and drink plenty of water, especially in the hours before the blood draw.',
		'Avoid fatty or heavy meals in the hours before the blood draw.',
		'Report recent fever, infections, anticoagulants or clotting disorders.',
		'Do not self-medicate with anti-inflammatories before the session without consulting the doctor.',
		'Plan the visit avoiding commitments requiring a flawless appearance if mild redness is expected.',
	],
	precautionsDescription:
		'Capillary PRP is a medical procedure requiring individual assessment, blood draw and handling of the patient\'s own biological material. The precautions below are for guidance only.',
	precautionsBefore: [
		'Hair assessment and history review: shedding pattern, medication, thyroid, anaemia, stress, prior surgery.',
		'Report anticoagulants, antiplatelet agents, supplements affecting clotting or recent treatments.',
		'Avoid NSAIDs and aspirin in the days beforehand if the doctor advises, to reduce bruising risk (do not stop any prescribed medication on your own. If you are taking them, report this in advance so each case can be assessed individually).',
		'Do not attend with active infection, fever, inflamed scalp or wounds without prior review.',
		'Report pregnancy, breastfeeding or haematological conditions; PRP may not be indicated.',
		'Rest adequately and stay hydrated; extraction quality depends on general condition.',
		'Avoid alcohol and intense exercise 24 hours beforehand if minimising post-procedure discomfort.',
		'Confirm no contraindications to venepuncture or relevant allergies to procedure materials.',
	],
	precautionsAfter: [
		'Do not wash the scalp for the indicated period, usually 24 hours, unless otherwise advised.',
		'Avoid direct sun, saunas, pools and heavy sweating for the first 48 hours.',
		'Do not rub, brush firmly or use irritating products on the treated area.',
		'Postpone dyes, bleaching or chemical hair treatments until medically cleared.',
		'Avoid alcohol and tobacco on treatment day and at least 24 hours after if sore.',
		'Do not autonomously combine with mesotherapy or other invasive procedures without clinical coordination.',
		'Seek advice if extensive bruising, severe pain, progressive swelling or signs of infection occur.',
		'Attend scheduled reviews to assess progress medically and adjust the plan.',
	],
	faq: [
		{
			q: 'How does capillary PRP differ from mesotherapy?',
			a: 'PRP uses the patient\'s autologous plasma rich in growth factors. Mesotherapy uses microinjections with specific medical formulations. Choice depends on diagnosis and may complement in some cases, always with clinical judgement.',
		},
		{
			q: 'How many capillary PRP sessions are recommended?',
			a: 'There is no universal number. After initial assessment a schedule is proposed and reviewed according to tolerance, progression and realistic case goals.',
		},
		{
			q: 'When are changes noticeable after PRP?',
			a: 'Response is usually gradual and variable. Some patients notice improved hair quality or shedding within weeks; others need several sessions and months of follow-up before results are assessed.',
		},
		{
			q: 'Are there risks with capillary PRP?',
			a: 'As autologous material, allergic risk is low, but redness, bruising, local discomfort or, rarely, infection may occur. Prior assessment and medical technique aim to minimise complications.',
		},
		{
			q: 'Can PRP be done with advanced baldness?',
			a: 'It depends on shedding pattern, hair reserve and realistic goals. In some cases PRP has limited utility and other medical or surgical options should be assessed after full diagnosis.',
		},
	],
	images: {
		hero: {
			src: esParts.images.hero!.src,
			alt: 'Hair PRP treatment with platelet-rich plasma',
		},
		about: {
			src: esParts.images.about.src,
			alt: 'Capillary PRP preparation with centrifuge in medical clinic',
		},
		how: {
			src: esParts.images.how.src,
			alt: 'Capillary PRP application via microinjections on scalp',
		},
		postCare: {
			src: esParts.images.postCare.src,
			alt: 'Platelet-rich plasma prepared for capillary treatment',
		},
		beforeAfter: {
			before: {
				alt: 'Frontal area with hair thinning before PRP',
				recraftPrompt: esParts.images.beforeAfter!.before.recraftPrompt,
			},
			after: {
				alt: 'Moderate hair improvement after medical PRP',
				recraftPrompt: esParts.images.beforeAfter!.after.recraftPrompt,
			},
		},
	},
};

const caParts: TreatmentContentParts = {
	seo: {
		title: 'PRP capil·lar a Barcelona i Tarragona | Dra. Jessica Tellechea',
		description:
			'PRP capil·lar amb plasma autòleg i valoració mèdica prèvia. Regeneració del cuir cabellut i suport al fol·licle pilós a Barcelona i Tarragona.',
	},
	heroH1: 'PRP capil·lar',
	aboutBody: [
		'El PRP capil·lar (plasma ric en plaquetes) utilitza una fracció de la pròpia sang del pacient, processada per concentrar factors de creixement i senyals biològics provinents de les plaquetes que estimulen el creixement i la reparació cel·lular.',
		'En la pràctica, el PRP s\'planteja dins d\'un pla mèdic personalitzat, amb expectatives prudents i seguiment periòdic. L\'objectiu és donar suport a processos de debilitament o aprimament capil·lar des d\'un enfocament regeneratiu, no prometre densitat immediata ni resultats uniformes en tots els pacients.',
	],
	howBody: [
		'La sessió inclou extracció sanguínia, centrifugat en condicions controlades i aplicació del plasma preparat mitjançant microinfiltracions al cuir cabellut.',
		'El nombre de sessions, l\'interval entre elles i la possible combinació amb altres tractaments mèdics capil·lars es defineixen a la consulta inicial i es revisen segons la resposta clínica. Cada cas evoluciona de forma diferent; per això el protocol s\'ajusta amb criteri mèdic i no segueix un calendari rígid universal.',
	],
	benefits: [
		'Ús de material autòleg del pacient, cosa que redueix la dependència de substàncies exògenes en el protocol base.',
		'Favoreix la qualitat i el gruix del cabell en pacients seleccionats.',
		'Possibilitat de combinar-lo amb altres teràpies mèdiques capil·lars quan el criteri clínic ho respalda.',
		'Aport de factors de creixement al microentorn del fol·licle pilós i del cuir cabellut.',
		'Procediment ambulatòri integrat en un pla capil·lar amb diagnòstic previ i seguiment.',
	],
	postCareBody: [
		'Després del PRP capil·lar, és habitual mantenir repòs relatiu del cuir cabellut les primeres hores i seguir les indicacions sobre rentat, sol, exercici i productes capil·lars. La percepció de canvis sol ser gradual; la utilitat del tractament es valora en revisions successives, no l\'endemà de la sessió.',
	],
	essentials: [
		'Acudir ben hidratat i beure abundant aigua, especialment en les hores prèvies a l\'extracció.',
		'Eviteu menjars grassos i copiosos en les hores prèvies a l\'extracció.',
		'Informar de febre recent, infeccions, anticoagulants o trastorns de la coagulació.',
		'No automedicar-se amb antiinflamatoris abans de la sessió sense consultar prèviament amb la metgessa.',
		'Planificar la visita evitant compromisos que requereixin aparença impecable si es preveu envermelliment lleu.',
	],
	precautionsDescription:
		'El PRP capil·lar és un procediment mèdic que requereix valoració individual, extracció sanguínia i manipulació del material biològic propi del pacient. Les precaucions següents són orientatives.',
	precautionsBefore: [
		'Valoració capil·lar i revisió d\'antecedents: patró de caiguda, medicació, tiroides, anèmia, estrès, cirurgies prèvies.',
		'Informar d\'anticoagulants, antiagregants, suplements que afectin la coagulació o tractaments recents.',
		'Evitar AINE i aspirina els dies previs si la metgessa ho indica, per reduir risc d\'hematomes (no suspengueu cap medicament prescrit per iniciativa pròpia. Si el preneu, comuniqueu-ho prèviament per valorar cada cas individualment).',
		'No acudir amb infecció activa, febre, cuir cabellut inflamat o ferides sense revisió prèvia.',
		'Comunicar embaràs, lactància o malalties hematològiques; el PRP pot no estar indicat.',
		'Descansar adequadament i mantenir hidratació; la qualitat de l\'extracció depèn de l\'estat general.',
		'No consumir alcohol ni fer exercici intens 24 hores abans si es vol minimitzar molèsties post-procediment.',
		'Confirmar que no existeixen contraindicacions per a la punció venosa o al·lèrgies rellevants al material del procediment.',
	],
	precautionsAfter: [
		'No rentar el cuir cabellut durant el període indicat, habitualment 24 hores, llevat d\'altra recomanació.',
		'Evitar sol directe, saunes, piscines i sudoració intensa les primeres 48 hores.',
		'No fregar, pentinar amb força ni usar productes irritants sobre la zona tractada.',
		'Ajornar tints, decoloracions o tractaments químics capil·lars fins a autorització mèdica.',
		'Evitar alcohol i tabac el dia del tractament i almenys 24 hores després si hi ha molèsties.',
		'No combinar de forma autònoma amb mesoteràpia o altres procediments invasius sense coordinació clínica.',
		'Consultar si apareixen hematomes extensos, dolor intens, inflamació progressiva o signes d\'infecció.',
		'Acudir a les revisions programades per valorar l\'evolució amb criteri mèdic i ajustar el pla.',
	],
	faq: [
		{
			q: 'En què es diferencia el PRP capil·lar de la mesoteràpia?',
			a: 'El PRP utilitza plasma autòleg del pacient ric en factors de creixement. La mesoteràpia empra microinfiltracions amb formulacions mèdiques específiques. L\'elecció depèn del diagnòstic i pot complementar-se en alguns casos, sempre amb criteri clínic.',
		},
		{
			q: 'Quantes sessions de PRP capil·lar es recomanen?',
			a: 'No hi ha un nombre universal. Després de la valoració inicial es proposa un calendari que es revisa segons tolerància, evolució i objectius realistes del cas.',
		},
		{
			q: 'Quan s\'aprecien canvis després del PRP?',
			a: 'La resposta sol ser progressiva i variable. Alguns pacients noten millora en la qualitat del cabell o en la caiguda en setmanes; altres requereixen diverses sessions i mesos de seguiment abans de valorar resultats.',
		},
		{
			q: 'Existeixen riscos amb el PRP capil·lar?',
			a: 'En ser material autòleg, el risc al·lèrgic és baix, però poden aparèixer envermelliment, hematomes, molèstia local o, de forma infreqüent, infecció. La valoració prèvia i la tècnica mèdica busquen minimitzar complicacions.',
		},
		{
			q: 'Es pot fer PRP si ja hi ha calvície avançada?',
			a: 'Depèn del patró de caiguda, la reserva de cabell i els objectius realistes. En alguns casos el PRP pot tenir utilitat limitada i convé valorar altres opcions mèdiques o quirúrgiques després del diagnòstic complet.',
		},
	],
	images: {
		hero: {
			src: esParts.images.hero!.src,
			alt: 'Tractament PRP capil·lar amb plasma ric en plaquetes',
		},
		about: {
			src: esParts.images.about.src,
			alt: 'Preparació de PRP capil·lar amb centrifugat en clínica mèdica',
		},
		how: {
			src: esParts.images.how.src,
			alt: 'Aplicació de PRP capil·lar mitjançant microinfiltracions al cuir cabellut',
		},
		postCare: {
			src: esParts.images.postCare.src,
			alt: 'Plasma ric en plaquetes preparat per al tractament capil·lar',
		},
		beforeAfter: {
			before: {
				alt: 'Zona frontal amb aprimament capil·lar abans de PRP',
				recraftPrompt: esParts.images.beforeAfter!.before.recraftPrompt,
			},
			after: {
				alt: 'Millora capil·lar moderada després de PRP mèdic',
				recraftPrompt: esParts.images.beforeAfter!.after.recraftPrompt,
			},
		},
	},
};

const frParts: TreatmentContentParts = {
	seo: {
		title: 'PRP capillaire à Barcelone et Tarragone | Dre Jessica Tellechea',
		description:
			'PRP capillaire avec plasma autologue et évaluation médicale préalable. Régénération du cuir chevelu et soutien du follicule à Barcelone et Tarragone.',
	},
	heroH1: 'PRP capillaire',
	aboutBody: [
		'Le PRP capillaire (plasma riche en plaquettes) utilise une fraction du propre sang du patient, traitée pour concentrer les facteurs de croissance et les signaux biologiques provenant des plaquettes qui stimulent la croissance et la réparation cellulaire.',
		'En pratique, le PRP s\'inscrit dans un plan médical personnalisé, avec des attentes prudentes et un suivi périodique. L\'objectif est de soutenir un affaiblissement ou un amincissement capillaire par une approche régénérative, sans promettre une densité immédiate ni des résultats uniformes chez tous les patients.',
	],
	howBody: [
		'La séance comprend une prise de sang, une centrifugation contrôlée et l\'application du plasma préparé par micro-injections dans le cuir chevelu.',
		'Le nombre de séances, l\'intervalle entre elles et la combinaison possible avec d\'autres traitements capillaires médicaux sont définis à la consultation initiale et révisés selon la réponse clinique. Chaque cas évolue différemment ; le protocole est ajusté avec un jugement médical plutôt que selon un calendrier universel rigide.',
	],
	benefits: [
		'Utilisation de matériel autologue du patient, limitant la dépendance aux substances exogènes dans le protocole de base.',
		'Favorise la qualité et l\'épaisseur des cheveux chez les patients sélectionnés.',
		'Possibilité de combinaison avec d\'autres thérapies capillaires médicales lorsque le jugement clinique le justifie.',
		'Apport de facteurs de croissance au microenvironnement du follicule pileux et du cuir chevelu.',
		'Procédure ambulatoire intégrée à un plan capillaire avec diagnostic préalable et suivi.',
	],
	postCareBody: [
		'Après le PRP capillaire, un repos relatif du cuir chevelu les premières heures est habituel, avec des consignes sur le lavage, le soleil, l\'exercice et les produits capillaires. Les changements perçus sont généralement progressifs ; l\'utilité du traitement se juge lors des contrôles successifs, pas le lendemain de la séance.',
	],
	essentials: [
		'Venir bien hydraté et boire abondamment, surtout dans les heures précédant la prise de sang.',
		'Éviter les repas gras ou copieux dans les heures précédant la prise de sang.',
		'Signaler fièvre récente, infections, anticoagulants ou troubles de la coagulation.',
		'Ne pas s\'automédiquer avec des anti-inflammatoires avant la séance sans avis médical.',
		'Planifier la visite en évitant les engagements exigeant une apparence impeccable si rougissement léger prévu.',
	],
	precautionsDescription:
		'Le PRP capillaire est un acte médical nécessitant une évaluation individuelle, une prise de sang et la manipulation du propre matériel biologique du patient. Les précautions suivantes sont indicatives.',
	precautionsBefore: [
		'Évaluation capillaire et revue des antécédents : type de chute, médication, thyroïde, anémie, stress, chirurgies antérieures.',
		'Signaler anticoagulants, antiagrégants, suppléments affectant la coagulation ou traitements récents.',
		'Éviter AINS et aspirine les jours précédents si la médecin l\'indique, pour réduire le risque d\'hématomes (ne suspendez aucun médicament prescrit de votre propre initiative. Si vous en prenez, signalez-le à l\'avance pour une évaluation individualisée).',
		'Ne pas venir avec infection active, fièvre, cuir chevelu inflammé ou plaies sans avis préalable.',
		'Signaler grossesse, allaitement ou maladies hématologiques ; le PRP peut ne pas être indiqué.',
		'Se reposer adéquatement et rester hydraté ; la qualité de la ponction dépend de l\'état général.',
		'Éviter alcool et exercice intense 24 heures avant si l\'on souhaite minimiser l\'inconfort post-acte.',
		'Confirmer l\'absence de contre-indications à la ponction veineuse ou d\'allergies pertinentes au matériel utilisé.',
	],
	precautionsAfter: [
		'Ne pas laver le cuir chevelu pendant la durée indiquée, généralement 24 heures, sauf autre recommandation.',
		'Éviter soleil direct, saunas, piscines et sudation intense les 48 premières heures.',
		'Ne pas frotter, brosser vigoureusement ni utiliser de produits irritants sur la zone traitée.',
		'Reporter colorations, décolorations ou traitements chimiques capillaires jusqu\'à autorisation médicale.',
		'Éviter alcool et tabac le jour du traitement et au moins 24 heures après en cas de gêne.',
		'Ne pas combiner de façon autonome avec mésothérapie ou autres procédures invasives sans coordination clinique.',
		'Consulter en cas d\'hématomes étendus, douleur intense, gonflement progressif ou signes d\'infection.',
		'Assister aux contrôles programmés pour évaluer l\'évolution médicalement et ajuster le plan.',
	],
	faq: [
		{
			q: 'En quoi le PRP capillaire diffère-t-il de la mésothérapie ?',
			a: 'Le PRP utilise le plasma autologue riche en facteurs de croissance. La mésothérapie emploie des micro-injections avec formulations médicales spécifiques. Le choix dépend du diagnostic et peut se compléter dans certains cas, toujours avec jugement clinique.',
		},
		{
			q: 'Combien de séances de PRP capillaire sont recommandées ?',
			a: 'Il n\'y a pas de nombre universel. Après l\'évaluation initiale, un calendrier est proposé puis révisé selon tolérance, évolution et objectifs réalistes du cas.',
		},
		{
			q: 'Quand observe-t-on des changements après le PRP ?',
			a: 'La réponse est généralement progressive et variable. Certains patients remarquent une amélioration de la qualité ou de la chute en quelques semaines ; d\'autres nécessitent plusieurs séances et des mois de suivi avant évaluation.',
		},
		{
			q: 'Existe-t-il des risques avec le PRP capillaire ?',
			a: 'Matériel autologue : risque allergique faible, mais rougeur, hématomes, gêne locale ou, rarement, infection possibles. L\'évaluation préalable et la technique médicale visent à minimiser les complications.',
		},
		{
			q: 'Le PRP est-il possible en cas de calvitie avancée ?',
			a: 'Cela dépend du type de chute, de la réserve capillaire et des objectifs réalistes. Dans certains cas le PRP a une utilité limitée et d\'autres options médicales ou chirurgicales méritent d\'être évaluées après diagnostic complet.',
		},
	],
	images: {
		hero: {
			src: esParts.images.hero!.src,
			alt: 'Traitement PRP capillaire avec plasma riche en plaquettes',
		},
		about: {
			src: esParts.images.about.src,
			alt: 'Préparation du PRP capillaire avec centrifugeuse en clinique médicale',
		},
		how: {
			src: esParts.images.how.src,
			alt: 'Application du PRP capillaire par micro-injections sur le cuir chevelu',
		},
		postCare: {
			src: esParts.images.postCare.src,
			alt: 'Plasma riche en plaquettes préparé pour le traitement capillaire',
		},
		beforeAfter: {
			before: {
				alt: 'Zone frontale avec amincissement capillaire avant PRP',
				recraftPrompt: esParts.images.beforeAfter!.before.recraftPrompt,
			},
			after: {
				alt: 'Amélioration capillaire modérée après PRP médical',
				recraftPrompt: esParts.images.beforeAfter!.after.recraftPrompt,
			},
		},
	},
};

export const prpCapilarContent: CapilarTreatmentContentMap = {
	es: buildTreatmentContent('es', esParts),
	en: buildTreatmentContent('en', enParts),
	ca: buildTreatmentContent('ca', caParts),
	fr: buildTreatmentContent('fr', frParts),
};
