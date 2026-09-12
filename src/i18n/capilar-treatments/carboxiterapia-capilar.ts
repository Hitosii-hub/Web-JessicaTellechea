import { buildTreatmentContent } from './build-content';
import type { TreatmentContentParts } from './build-content';
import { clinicalBeforeAfterSrc, clinicalResultsDisclaimer } from './clinical-before-after-src';
import type { CapilarTreatmentContentMap } from './types';

const esParts: TreatmentContentParts = {
	resultsDisclaimer: clinicalResultsDisclaimer.es,
	seo: {
		title: 'Carboxiterapia capilar en Barcelona y Tarragona | Dra. Jessica Tellechea',
		description:
			'Carboxiterapia capilar para mejorar la microcirculación del cuero cabelludo. Valoración médica previa y plan capilar personalizado en Barcelona y Tarragona.',
	},
	heroH1: 'Carboxiterapia capilar',
	aboutBody: [
		'La carboxiterapia capilar consiste en la aplicación controlada de CO₂ medicinal en el cuero cabelludo para favorecer la oxigenación local, la microcirculación y la llegada de nutrientes al entorno del folículo piloso. Se utiliza en contextos de caída, debilitamiento capilar o cuero cabelludo con perfusión deficiente, siempre tras valoración médica.',
	],
	howBody: [
		'Mediante un dispositivo médico, el CO₂ se administra de forma localizada en la zona del cuero cabelludo a tratar. La sesión es ambulatoria; puede percibirse una sensación de presión o leve molestia transitoria. La extensión de la zona, la intensidad y el ritmo de las sesiones se adaptan al caso clínico.',
		'El número de aplicaciones y el intervalo entre sesiones se establecen en la valoración inicial y se revisan según tolerancia y evolución. Como en otros tratamientos capilares médicos, la respuesta es individual: el protocolo se ajusta con criterio clínico y no sigue un esquema rígido igual para todos los pacientes.',
	],
	benefits: [
		'Estímulo de la microcirculación y oxigenación del cuero cabelludo en la zona tratada.',
		'Procedimiento ambulatorio, sin tiempo de recuperación prolongado en la mayoría de casos.',
		'Integración en un plan capilar médico con diagnóstico previo y seguimiento periódico.',
		'Posibilidad de asociarse a mesoterapia, PRP u otras terapias cuando el criterio clínico lo indica.',
	],
	postCareBody: [
		'Tras la carboxiterapia capilar, suele recomendarse evitar fricción intensa, calor excesivo y exposición solar directa sobre el cuero cabelludo durante las primeras horas. La evolución se valora en consultas sucesivas; los cambios en la calidad capilar o en la caída suelen ser progresivos y requieren constancia clínica.',
	],
	essentials: [
		'Acudir con el cuero cabelludo limpio y sin productos oclusivos el día de la sesión.',
		'Informar de asma, enfermedad pulmonar, embarazo, lactancia o antecedentes de reacciones vasovagales.',
		'Comunicar medicación habitual, especialmente anticoagulantes o tratamientos cardiovasculares relevantes.',
		'Respetar los intervalos acordados; la constancia clínica importa más que la frecuencia excesiva.',
	],
	precautionsDescription:
		'La carboxiterapia capilar es un procedimiento médico que requiere valoración individual para confirmar indicación, contraindicaciones y planificación. Las listas siguientes orientan sobre preparación y cuidados habituales',
	precautionsBefore: [
		'Valoración capilar completa: patrón de caída, estado del cuero cabelludo, antecedentes médicos y medicación.',
		'Informar de asma, EPOC, insuficiencia cardíaca, enfermedad vascular severa o antecedentes de síncope.',
		'Comunicar embarazo, lactancia o intención de concebir; el tratamiento puede no estar indicado.',
		'No acudir con infección activa, heridas abiertas, dermatitis severa o psoriasis en brote sin revisión.',
		'Evitar alcohol y comidas muy copiosas el mismo día si hay historial de mareo o vasovagal.',
		'Informar de anticoagulantes o antiagregantes; pueden aumentar riesgo de hematomas leves locales.',
		'No automedicarse ni combinar con otros procedimientos invasivos capilares el mismo día sin coordinación.',
		'Planificar la sesión permitiendo reposo breve posterior si se ha experimentado molestia en sesiones previas.',
	],
	precautionsAfter: [
		'Evitar frotar, rascar o masajear con fuerza el cuero cabelludo las primeras 12–24 horas.',
		'No exponer la zona a sol intenso, saunas, piscinas o gorras muy apretadas el mismo día si hay molestia.',
		'Posponer tintes, decoloraciones o tratamientos químicos agresivos hasta autorización médica.',
		'Evitar ejercicio de alto impacto o sudoración profusa inmediata si la médica lo recomienda.',
		'Consultar si aparecen enrojecimiento persistente, dolor desproporcionado o signos de irritación severa.',
		'No combinar de forma autónoma con mesoterapia, PRP u otros procedimientos sin planificación clínica.',
		'Mantener hidratación y alimentación normales; informar de mareo o sensación de presión prolongada.',
		'Acudir a las revisiones programadas para valorar tolerancia, evolución y necesidad de continuar o espaciar sesiones.',
	],
	faq: [
		{
			q: '¿Qué sensaciones son normales durante la carboxiterapia capilar?',
			a: 'Puede haber presión local, leve picor o molestia transitoria durante la aplicación del CO₂. Estas sensaciones suelen ser breves. Si son intensas o persistentes, deben comentarse con la médica.',
		},
		{
			q: '¿Cuántas sesiones de carboxiterapia capilar se necesitan?',
			a: 'Depende del diagnóstico y de la respuesta individual. Tras la valoración inicial se propone un calendario que se ajusta en el seguimiento clínico.',
		},
		{
			q: '¿Cuándo se notan resultados?',
			a: 'La mejora de la microcirculación no siempre se traduce en cambios visibles inmediatos. La evolución capilar suele valorarse de forma progresiva en varias sesiones y revisiones médicas.',
		},
		{
			q: '¿Puede combinarse con mesoterapia o PRP?',
			a: 'En algunos casos sí, con secuencia y criterio médico. La combinación depende del diagnóstico y no conviene superponer procedimientos sin planificación clínica.',
		},
		{
			q: '¿Quién no debe recibir carboxiterapia capilar?',
			a: 'Puede estar contraindicada en embarazo, ciertas enfermedades respiratorias o cardiovasculares descompensadas, infecciones activas del cuero cabelludo o expectativas poco realistas. La valoración previa determina la idoneidad.',
		},
	],
	images: {
		hero: {
			src: '/images/capilar/carbox/carboxitherapy-3.png',
			alt: 'Paciente revisando su cabello tras carboxiterapia capilar',
		},
		about: {
			src: '/images/capilar/carbox/carboxitherapy-1.png',
			alt: 'Aplicación de carboxiterapia en la línea frontal del cuero cabelludo',
		},
		how: {
			src: '/images/capilar/carbox/carboxitherapy-2.png',
			alt: 'Infiltración de carboxiterapia en cuero cabelludo durante sesión médica',
		},
		postCare: {
			src: '/images/capilar/carbox/carboxitherapy-3.png',
			alt: 'Paciente revisando su cabello tras carboxiterapia capilar',
		},
		beforeAfter: {
			before: {
				src: clinicalBeforeAfterSrc[0].before,
				alt: 'Cuero cabelludo con adelgazamiento difuso antes de carboxiterapia capilar',
			},
			after: {
				src: clinicalBeforeAfterSrc[0].after,
				alt: 'Mejora de densidad capilar tras carboxiterapia médica',
			},
		},
		beforeAfterExtra: [
			{
				before: {
					src: clinicalBeforeAfterSrc[1].before,
					alt: 'Coronilla con adelgazamiento visible antes de carboxiterapia capilar',
				},
				after: {
					src: clinicalBeforeAfterSrc[1].after,
					alt: 'Mayor cobertura capilar en coronilla tras carboxiterapia médica',
				},
			},
			{
				before: {
					src: clinicalBeforeAfterSrc[2].before,
					alt: 'Cuero cabelludo con adelgazamiento en coronilla antes de carboxiterapia capilar',
				},
				after: {
					src: clinicalBeforeAfterSrc[2].after,
					alt: 'Recuperación de densidad en coronilla tras carboxiterapia médica',
				},
			},
		],
	},
};

const enParts: TreatmentContentParts = {
	resultsDisclaimer: clinicalResultsDisclaimer.en,
	seo: {
		title: 'Capillary carboxytherapy in Barcelona and Tarragona | Dr Jessica Tellechea',
		description:
			'Capillary carboxytherapy to improve scalp microcirculation. Prior medical assessment and personalised hair plan in Barcelona and Tarragona.',
	},
	heroH1: 'Capillary carboxytherapy',
	aboutBody: [
		'Capillary carboxytherapy involves controlled application of medical CO₂ to the scalp to support local oxygenation, microcirculation and nutrient delivery to the hair follicle environment. It is used in contexts of shedding, weakening hair or poorly perfused scalp, always after medical assessment.',
	],
	howBody: [
		'Using a medical device, CO₂ is delivered locally to the scalp area to be treated. The session is outpatient; a sensation of pressure or mild transient discomfort may occur. Treatment area, intensity and session rhythm are adapted to the clinical case.',
		'Number of applications and intervals are set at initial assessment and reviewed according to tolerance and progression. As with other medical hair treatments, response is individual: the protocol is adjusted clinically rather than following an identical rigid schedule for every patient.',
	],
	benefits: [
		'Stimulation of microcirculation and scalp oxygenation in the treated area.',
		'Outpatient procedure, usually without prolonged recovery time.',
		'Integration into a medical hair plan with prior diagnosis and periodic follow-up.',
		'May be combined with mesotherapy, PRP or other therapies when clinically indicated.',
	],
	postCareBody: [
		'After capillary carboxytherapy, avoiding intense friction, excessive heat and direct sun on the scalp for the first hours is usually recommended. Progress is assessed at follow-up visits; changes in hair quality or shedding are usually gradual and require clinical consistency.',
	],
	essentials: [
		'Attend with a clean scalp and no occlusive products on treatment day.',
		'Report asthma, lung disease, pregnancy, breastfeeding or history of vasovagal reactions.',
		'Report regular medication, especially anticoagulants or relevant cardiovascular treatments.',
		'Keep to agreed intervals; clinical consistency matters more than excessive frequency.',
	],
	precautionsDescription:
		'Capillary carboxytherapy is a medical procedure requiring individual assessment to confirm indication, contraindications and planning. The lists below outline usual preparation and aftercare.',
	precautionsBefore: [
		'Full hair assessment: shedding pattern, scalp condition, medical history and medication.',
		'Report asthma, COPD, heart failure, severe vascular disease or history of syncope.',
		'Report pregnancy, breastfeeding or plans to conceive; treatment may not be indicated.',
		'Do not attend with active infection, open wounds, severe dermatitis or psoriasis flare without review.',
		'Avoid alcohol and very heavy meals on the same day if there is a history of dizziness or vasovagal episodes.',
		'Report anticoagulants or antiplatelet agents; they may increase risk of minor local bruising.',
		'Do not self-medicate or combine with other invasive scalp procedures on the same day without coordination.',
		'Plan the session allowing brief rest afterwards if discomfort occurred in previous sessions.',
	],
	precautionsAfter: [
		'Avoid rubbing, scratching or firm massage of the scalp for the first 12–24 hours.',
		'Do not expose the area to intense sun, saunas, pools or very tight caps on the same day if sore.',
		'Postpone dyes, bleaching or aggressive chemical treatments until medically cleared.',
		'Avoid high-impact exercise or heavy sweating immediately if recommended by the doctor.',
		'Seek advice if persistent redness, disproportionate pain or signs of severe irritation occur.',
		'Do not autonomously combine with mesotherapy, PRP or other procedures without clinical planning.',
		'Maintain normal hydration and nutrition; report dizziness or prolonged pressure sensation.',
		'Attend scheduled reviews to assess tolerance, progression and whether to continue or space sessions.',
	],
	faq: [
		{
			q: 'What sensations are normal during capillary carboxytherapy?',
			a: 'Local pressure, mild itching or transient discomfort during CO₂ application may occur. These sensations are usually brief. If intense or persistent, they should be discussed with the doctor.',
		},
		{
			q: 'How many capillary carboxytherapy sessions are needed?',
			a: 'It depends on diagnosis and individual response. After initial assessment a schedule is proposed and adjusted during clinical follow-up.',
		},
		{
			q: 'When are results noticeable?',
			a: 'Improved microcirculation does not always translate into immediate visible changes. Hair progression is usually assessed gradually over several sessions and medical reviews.',
		},
		{
			q: 'Can it be combined with mesotherapy or PRP?',
			a: 'In some cases yes, with medical sequencing and judgement. Combination depends on diagnosis; overlapping procedures without clinical planning is not advisable.',
		},
		{
			q: 'Who should not receive capillary carboxytherapy?',
			a: 'It may be contraindicated in pregnancy, certain decompensated respiratory or cardiovascular conditions, active scalp infections or unrealistic expectations. Prior assessment determines suitability.',
		},
	],
	images: {
		hero: {
			src: esParts.images.hero!.src,
			alt: 'Patient checking hair after capillary carboxytherapy',
		},
		about: {
			src: esParts.images.about.src,
			alt: 'Carboxytherapy application at the frontal hairline',
		},
		how: {
			src: esParts.images.how.src,
			alt: 'Carboxytherapy scalp infiltration during medical session',
		},
		postCare: {
			src: esParts.images.postCare.src,
			alt: 'Patient checking hair after capillary carboxytherapy',
		},
		beforeAfter: {
			before: {
				src: esParts.images.beforeAfter!.before.src,
				alt: 'Scalp with diffuse thinning before capillary carboxytherapy',
			},
			after: {
				src: esParts.images.beforeAfter!.after.src,
				alt: 'Improved hair density after medical carboxytherapy',
			},
		},
		beforeAfterExtra: [
			{
				before: {
					src: esParts.images.beforeAfterExtra![0].before.src,
					alt: 'Visible crown thinning before capillary carboxytherapy',
				},
				after: {
					src: esParts.images.beforeAfterExtra![0].after.src,
					alt: 'Improved crown coverage after medical carboxytherapy',
				},
			},
			{
				before: {
					src: esParts.images.beforeAfterExtra![1].before.src,
					alt: 'Scalp with crown thinning before capillary carboxytherapy',
				},
				after: {
					src: esParts.images.beforeAfterExtra![1].after.src,
					alt: 'Restored crown density after medical carboxytherapy',
				},
			},
		],
	},
};

const caParts: TreatmentContentParts = {
	resultsDisclaimer: clinicalResultsDisclaimer.ca,
	seo: {
		title: 'Carboxiteràpia capil·lar a Barcelona i Tarragona | Dra. Jessica Tellechea',
		description:
			'Carboxiteràpia capil·lar per millorar la microcirculació del cuir cabellut. Valoració mèdica prèvia i pla capil·lar personalitzat a Barcelona i Tarragona.',
	},
	heroH1: 'Carboxiteràpia capil·lar',
	aboutBody: [
		'La carboxiteràpia capil·lar consisteix en l\'aplicació controlada de CO₂ medicinal al cuir cabellut per afavorir l\'oxigenació local, la microcirculació i l\'arribada de nutrients a l\'entorn del fol·licle pilós. S\'utilitza en contextos de caiguda, debilitament capil·lar o cuir cabellut amb perfusió deficient, sempre després de valoració mèdica.',
	],
	howBody: [
		'Mitjançant un dispositiu mèdic, el CO₂ s\'administra de forma localitzada a la zona del cuir cabellut a tractar. La sessió és ambulatòria; pot percebre\'s una sensació de pressió o lleu molèstia transitoria. L\'extensió de la zona, la intensitat i el ritme de les sessions s\'adapten al cas clínic.',
		'El nombre d\'aplicacions i l\'interval entre sessions s\'estableixen a la valoració inicial i es revisen segons tolerància i evolució. Com en altres tractaments capil·lars mèdics, la resposta és individual: el protocol s\'ajusta amb criteri clínic i no segueix un esquema rígid igual per a tots els pacients.',
	],
	benefits: [
		'Estimulació de la microcirculació i oxigenació del cuir cabellut a la zona tractada.',
		'Procediment ambulatòri, sense temps de recuperació prolongat en la majoria de casos.',
		'Integració en un pla capil·lar mèdic amb diagnòstic previ i seguiment periòdic.',
		'Possibilitat d\'associar-se a mesoteràpia, PRP o altres teràpies quan el criteri clínic ho indica.',
	],
	postCareBody: [
		'Després de la carboxiteràpia capil·lar, sol recomanar-se evitar fricció intensa, calor excessiu i exposició solar directa sobre el cuir cabellut durant les primeres hores. L\'evolució es valora en consultes successives; els canvis en la qualitat capil·lar o en la caiguda solen ser progressius i requereixen constància clínica.',
	],
	essentials: [
		'Acudir amb el cuir cabellut net i sense productes oclusius el dia de la sessió.',
		'Informar d\'asma, malaltia pulmonar, embaràs, lactància o antecedents de reaccions vasovagals.',
		'Comunicar medicació habitual, especialment anticoagulants o tractaments cardiovasculars rellevants.',
		'Respectar els intervals acordats; la constància clínica importa més que la freqüència excessiva.',
	],
	precautionsDescription:
		'La carboxiteràpia capil·lar és un procediment mèdic que requereix valoració individual per confirmar indicació, contraindicacions i planificació. Les llistes següents orienten sobre preparació i cures habituals.',
	precautionsBefore: [
		'Valoració capil·lar completa: patró de caiguda, estat del cuir cabellut, antecedents mèdics i medicació.',
		'Informar d\'asma, MPOC, insuficiència cardíaca, malaltia vascular severa o antecedents de síncope.',
		'Comunicar embaràs, lactància o intenció de concebre; el tractament pot no estar indicat.',
		'No acudir amb infecció activa, ferides obertes, dermatitis severa o psoriasis en brot sense revisió.',
		'Evitar alcohol i menjars molt copiosos el mateix dia si hi ha historial de mareig o vasovagal.',
		'Informar d\'anticoagulants o antiagregants; poden augmentar risc d\'hematomes lleus locals.',
		'No automedicar-se ni combinar amb altres procediments invasius capil·lars el mateix dia sense coordinació.',
		'Planificar la sessió permetent repòs breu posterior si s\'ha experimentat molèstia en sessions prèvies.',
	],
	precautionsAfter: [
		'Evitar fregar, gratar o massatjar amb força el cuir cabellut les primeres 12–24 hores.',
		'No exposar la zona a sol intens, saunes, piscines o gorres molt ajustades el mateix dia si hi ha molèstia.',
		'Ajornar tints, decoloracions o tractaments químics agressius fins a autorització mèdica.',
		'Evitar exercici d\'alt impacte o sudoració profusa immediata si la metgessa ho recomana.',
		'Consultar si apareixen envermelliment persistent, dolor desproporcionat o signes d\'irritació severa.',
		'No combinar de forma autònoma amb mesoteràpia, PRP o altres procediments sense planificació clínica.',
		'Mantenir hidratació i alimentació normals; informar de mareig o sensació de pressió prolongada.',
		'Acudir a les revisions programades per valorar tolerància, evolució i necessitat de continuar o espaiar sessions.',
	],
	faq: [
		{
			q: 'Quines sensacions són normals durant la carboxiteràpia capil·lar?',
			a: 'Pot haver-hi pressió local, lleu picor o molèstia transitoria durant l\'aplicació del CO₂. Aquestes sensacions solen ser breus. Si són intenses o persistents, s\'han de comentar amb la metgessa.',
		},
		{
			q: 'Quantes sessions de carboxiteràpia capil·lar es necessiten?',
			a: 'Depèn del diagnòstic i de la resposta individual. Després de la valoració inicial es proposa un calendari que s\'ajusta en el seguiment clínic.',
		},
		{
			q: 'Quan es noten resultats?',
			a: 'La millora de la microcirculació no sempre es tradueix en canvis visibles immediats. L\'evolució capil·lar sol valorar-se de forma progressiva en diverses sessions i revisions mèdiques.',
		},
		{
			q: 'Es pot combinar amb mesoteràpia o PRP?',
			a: 'En alguns casos sí, amb seqüència i criteri mèdic. La combinació depèn del diagnòstic i no convé superposar procediments sense planificació clínica.',
		},
		{
			q: 'Qui no ha de rebre carboxiteràpia capil·lar?',
			a: 'Pot estar contraindicada en embaràs, certes malalties respiratòries o cardiovasculars descompensades, infeccions actives del cuir cabellut o expectatives poc realistes. La valoració prèvia determina la idoneïtat.',
		},
	],
	images: {
		hero: {
			src: esParts.images.hero!.src,
			alt: 'Pacient revisant el cabell després de carboxiteràpia capil·lar',
		},
		about: {
			src: esParts.images.about.src,
			alt: 'Aplicació de carboxiteràpia a la línia frontal del cuir cabellut',
		},
		how: {
			src: esParts.images.how.src,
			alt: 'Infiltració de carboxiteràpia al cuir cabellut durant sessió mèdica',
		},
		postCare: {
			src: esParts.images.postCare.src,
			alt: 'Pacient revisant el cabell després de carboxiteràpia capil·lar',
		},
		beforeAfter: {
			before: {
				src: esParts.images.beforeAfter!.before.src,
				alt: 'Cuir cabellut amb aprimament difús abans de carboxiteràpia capil·lar',
			},
			after: {
				src: esParts.images.beforeAfter!.after.src,
				alt: 'Millora de densitat capil·lar després de carboxiteràpia mèdica',
			},
		},
		beforeAfterExtra: [
			{
				before: {
					src: esParts.images.beforeAfterExtra![0].before.src,
					alt: 'Coronilla amb aprimament visible abans de carboxiteràpia capil·lar',
				},
				after: {
					src: esParts.images.beforeAfterExtra![0].after.src,
					alt: 'Major cobertura capil·lar a la coronilla després de carboxiteràpia mèdica',
				},
			},
			{
				before: {
					src: esParts.images.beforeAfterExtra![1].before.src,
					alt: 'Cuir cabellut amb aprimament a la coronilla abans de carboxiteràpia capil·lar',
				},
				after: {
					src: esParts.images.beforeAfterExtra![1].after.src,
					alt: 'Recuperació de densitat a la coronilla després de carboxiteràpia mèdica',
				},
			},
		],
	},
};

const frParts: TreatmentContentParts = {
	resultsDisclaimer: clinicalResultsDisclaimer.fr,
	seo: {
		title: 'Carboxythérapie capillaire à Barcelone et Tarragone | Dre Jessica Tellechea',
		description:
			'Carboxythérapie capillaire pour améliorer la microcirculation du cuir chevelu. Évaluation médicale préalable et plan capillaire personnalisé à Barcelone et Tarragone.',
	},
	heroH1: 'Carboxythérapie capillaire',
	aboutBody: [
		'La carboxythérapie capillaire consiste en l\'application contrôlée de CO₂ médical sur le cuir chevelu pour favoriser l\'oxygénation locale, la microcirculation et l\'apport de nutriments à l\'environnement du follicule pileux. Elle est utilisée dans des contextes de chute, d\'affaiblissement capillaire ou de cuir chevelu mal perfusé, toujours après évaluation médicale.',
	],
	howBody: [
		'À l\'aide d\'un dispositif médical, le CO₂ est administré localement sur la zone du cuir chevelu à traiter. La séance est ambulatoire ; une sensation de pression ou une gêne légère transitoire peut survenir. La zone traitée, l\'intensité et le rythme des séances sont adaptés au cas clinique.',
		'Le nombre d\'applications et l\'intervalle entre séances sont définis à l\'évaluation initiale et révisés selon tolérance et évolution. Comme pour d\'autres traitements capillaires médicaux, la réponse est individuelle : le protocole est ajusté avec un jugement clinique plutôt que selon un schéma rigide identique pour tous les patients.',
	],
	benefits: [
		'Stimulation de la microcirculation et de l\'oxygénation du cuir chevelu dans la zone traitée.',
		'Procédure ambulatoire, généralement sans temps de récupération prolongé.',
		'Intégration dans un plan capillaire médical avec diagnostic préalable et suivi périodique.',
		'Possibilité d\'association avec mésothérapie, PRP ou autres thérapies lorsque le jugement clinique l\'indique.',
	],
	postCareBody: [
		'Après la carboxythérapie capillaire, il est généralement recommandé d\'éviter frottements intenses, chaleur excessive et soleil direct sur le cuir chevelu les premières heures. L\'évolution est évaluée lors des contrôles ; les changements de qualité capillaire ou de chute sont habituellement progressifs et demandent une régularité clinique.',
	],
	essentials: [
		'Venir avec le cuir chevelu propre et sans produits occlusifs le jour de la séance.',
		'Signaler asthme, maladie pulmonaire, grossesse, allaitement ou antécédents de réactions vasovagales.',
		'Signaler médication habituelle, notamment anticoagulants ou traitements cardiovasculaires pertinents.',
		'Respecter les intervalles convenus ; la régularité clinique compte plus qu\'une fréquence excessive.',
	],
	precautionsDescription:
		'La carboxythérapie capillaire est un acte médical nécessitant une évaluation individuelle pour confirmer indication, contre-indications et planification. Les listes suivantes orientent la préparation et les soins habituels.',
	precautionsBefore: [
		'Évaluation capillaire complète : type de chute, état du cuir chevelu, antécédents médicaux et médication.',
		'Signaler asthme, BPCO, insuffisance cardiaque, maladie vasculaire sévère ou antécédents de syncope.',
		'Signaler grossesse, allaitement ou projet de conception ; le traitement peut ne pas être indiqué.',
		'Ne pas venir avec infection active, plaies ouvertes, dermatite sévère ou poussée de psoriasis sans avis.',
		'Éviter alcool et repas très copieux le jour même en cas d\'historique de vertige ou épisode vasovagal.',
		'Signaler anticoagulants ou antiagrégants ; risque accru d\'hématomes locaux légers.',
		'Ne pas s\'automédiquer ni combiner avec d\'autres procédures invasives du cuir chevelu le même jour sans coordination.',
		'Planifier la séance en prévoyant un repos bref après si gêne survenue lors de séances antérieures.',
	],
	precautionsAfter: [
		'Éviter de frotter, gratter ou masser vigoureusement le cuir chevelu les 12 à 24 premières heures.',
		'Ne pas exposer la zone au soleil intense, saunas, piscines ou casquettes très serrées le jour même en cas de gêne.',
		'Reporter colorations, décolorations ou traitements chimiques agressifs jusqu\'à autorisation médicale.',
		'Éviter exercice à fort impact ou sudation profonde immédiate si la médecin le recommande.',
		'Consulter en cas de rougeur persistante, douleur disproportionnée ou signes d\'irritation sévère.',
		'Ne pas combiner de façon autonome avec mésothérapie, PRP ou autres procédures sans planification clinique.',
		'Maintenir hydratation et alimentation normales ; signaler vertige ou sensation de pression prolongée.',
		'Assister aux contrôles programmés pour évaluer tolérance, évolution et nécessité de poursuivre ou espacer les séances.',
	],
	faq: [
		{
			q: 'Quelles sensations sont normales pendant la carboxythérapie capillaire ?',
			a: 'Une pression locale, un léger prurit ou une gêne transitoire pendant l\'application du CO₂ peuvent survenir. Ces sensations sont généralement brèves. Si elles sont intenses ou persistantes, les signaler à la médecin.',
		},
		{
			q: 'Combien de séances de carboxythérapie capillaire sont nécessaires ?',
			a: 'Cela dépend du diagnostic et de la réponse individuelle. Après l\'évaluation initiale, un calendrier est proposé puis ajusté lors du suivi clinique.',
		},
		{
			q: 'Quand observe-t-on des résultats ?',
			a: 'L\'amélioration de la microcirculation ne se traduit pas toujours par des changements visibles immédiats. L\'évolution capillaire se juge progressivement sur plusieurs séances et contrôles médicaux.',
		},
		{
			q: 'Peut-on la combiner avec mésothérapie ou PRP ?',
			a: 'Dans certains cas oui, avec séquencement et jugement médical. La combinaison dépend du diagnostic ; superposer des procédures sans planification clinique n\'est pas recommandé.',
		},
		{
			q: 'Qui ne doit pas recevoir la carboxythérapie capillaire ?',
			a: 'Elle peut être contre-indiquée en grossesse, certaines pathologies respiratoires ou cardiovasculaires décompensées, infections actives du cuir chevelu ou attentes irréalistes. L\'évaluation préalable détermine l\'adéquation.',
		},
	],
	images: {
		hero: {
			src: esParts.images.hero!.src,
			alt: 'Patient vérifiant ses cheveux après carboxythérapie capillaire',
		},
		about: {
			src: esParts.images.about.src,
			alt: 'Application de carboxythérapie sur la ligne frontale du cuir chevelu',
		},
		how: {
			src: esParts.images.how.src,
			alt: 'Infiltration de carboxythérapie sur le cuir chevelu pendant la séance médicale',
		},
		postCare: {
			src: esParts.images.postCare.src,
			alt: 'Patient vérifiant ses cheveux après carboxythérapie capillaire',
		},
		beforeAfter: {
			before: {
				src: esParts.images.beforeAfter!.before.src,
				alt: 'Cuir chevelu avec amincissement diffus avant carboxythérapie capillaire',
			},
			after: {
				src: esParts.images.beforeAfter!.after.src,
				alt: 'Amélioration de la densité capillaire après carboxythérapie médicale',
			},
		},
		beforeAfterExtra: [
			{
				before: {
					src: esParts.images.beforeAfterExtra![0].before.src,
					alt: 'Couronne avec amincissement visible avant carboxythérapie capillaire',
				},
				after: {
					src: esParts.images.beforeAfterExtra![0].after.src,
					alt: 'Meilleure couverture capillaire à la couronne après carboxythérapie médicale',
				},
			},
			{
				before: {
					src: esParts.images.beforeAfterExtra![1].before.src,
					alt: 'Cuir chevelu avec amincissement à la couronne avant carboxythérapie capillaire',
				},
				after: {
					src: esParts.images.beforeAfterExtra![1].after.src,
					alt: 'Densité retrouvée à la couronne après carboxythérapie médicale',
				},
			},
		],
	},
};

export const carboxiterapiaCapilarContent: CapilarTreatmentContentMap = {
	es: buildTreatmentContent('es', esParts),
	en: buildTreatmentContent('en', enParts),
	ca: buildTreatmentContent('ca', caParts),
	fr: buildTreatmentContent('fr', frParts),
};
