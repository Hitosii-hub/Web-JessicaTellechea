import { buildTreatmentContent } from './build-content';
import type { TreatmentContentParts } from './build-content';
import type { CapilarTreatmentContentMap } from './types';

const esParts: TreatmentContentParts = {
	seo: {
		title: 'Mesoterapia capilar médica en Barcelona y Tarragona | Dra. Jessica Tellechea',
		description:
			'Mesoterapia capilar médica con valoración previa, protocolo personalizado y seguimiento clínico. Nutrición del folículo desde el cuero cabelludo en Barcelona y Tarragona.',
	},
	heroH1: 'Mesoterapia capilar médica',
	aboutBody: [
		'La mesoterapia capilar consiste en microinfiltraciones en el cuero cabelludo con una formulación adaptada a cada caso: péptidos, vitaminas y, cuando el diagnóstico lo indica, fármacos antiandrógenos u otros activos de prescripción médica. El objetivo no es prometer resultados inmediatos, sino aportar nutrientes y señales biológicas al folículo piloso en un contexto de caída, debilitamiento o adelgazamiento capilar.',
	],
	howBody: [
		'La sesión comienza con preparación del cuero cabelludo. La formulación se administra en puntos distribuidos sobre la zona a tratar, con técnica controlada y respeto por la anatomía del cuero cabelludo.',
		'La duración, el intervalo entre sesiones y el número total de aplicaciones dependen del diagnóstico y de la respuesta individual. No existe un protocolo único válido para todos los casos: la frecuencia se ajusta en el seguimiento médico, priorizando la seguridad y la coherencia con el plan capilar global.',
	],
	benefits: [
		'Aporte directo de activos al entorno del folículo piloso, sin depender únicamente de la vía oral o tópica.',
		'Protocolo personalizable según tipo de caída, densidad, cuero cabelludo y objetivos clínicos realistas.',
		'Procedimiento ambulatorio, con recuperación habitualmente inmediata y mínima interrupción de la rutina diaria.',
	],
	postCareBody: [
		'Tras la mesoterapia capilar, conviene seguir las indicaciones específicas de la consulta sobre lavado del cabello, exposición solar, ejercicio intenso y productos capilares.',
	],
	essentials: [
		'Acudir con el cuero cabelludo limpio y sin productos grasos el día de la sesión, salvo indicación contraria.',
		'Informar de alergias, medicación habitual, embarazo, lactancia o procesos inflamatorios activos en el cuero cabelludo.',
		'Respetar los intervalos acordados entre sesiones; la constancia clínica importa más que la frecuencia excesiva.',
		'Comunicar cualquier enrojecimiento prolongado, dolor intenso, signos de infección o cambios inesperados en el cuero cabelludo.',
	],
	precautionsDescription:
		'La mesoterapia capilar es un procedimiento médico que requiere valoración previa, formulación individualizada y criterio clínico para indicarlo, posponerlo o descartarlo. Las listas siguientes orientan sobre preparación y cuidados habituales',
	precautionsBefore: [
		'Valoración médica previa obligatoria: cuero cabelludo, patrón de caída, antecedentes hormonales, tiroides, anemia, estrés o medicación relevante.',
		'Informar de alergias conocidas, anticoagulantes, antiagregantes, inmunosupresores o tratamientos capilares recientes.',
		'Suspender o valorar con la médica el uso de AINE, aspirina u otros fármacos que aumenten el riesgo de hematomas si procede.',
		'Evitar alcohol, ejercicio intenso y exposición solar excesiva en el cuero cabelludo 24–48 horas antes, salvo indicación distinta.',
		'No acudir con infecciones activas, heridas, dermatitis severa, psoriasis en brote o cuero cabelludo irritado sin revisión previa.',
		'Comunicar embarazo, lactancia o intención de concebir; en estos casos el tratamiento puede no estar indicado.',
		'No automedicarse ni solicitar copias de formulaciones de terceros: la composición debe ser médica y personalizada.',
		'Planificar la sesión evitando eventos sociales inmediatos si se desea discreción ante posible enrojecimiento leve transitorio.',
	],
	precautionsAfter: [
		'No lavar el cuero cabelludo ni usar champús agresivos durante el tiempo indicado, normalmente entre 12 y 24 horas.',
		'Evitar saunas, piscinas, playa directa, sol intenso y gorras muy ajustadas las primeras 48 horas si hay molestia o enrojecimiento.',
		'No frotar, rascar ni masajear con fuerza la zona tratada; secar con suavidad sin frotar.',
		'Posponer tintes, decoloraciones, alisados químicos o tratamientos agresivos hasta autorización médica.',
		'Evitar ejercicio de alto impacto o sudoración profusa el mismo día si la médica lo recomienda.',
		'No combinar de forma autónoma con otros procedimientos invasivos capilares sin coordinación clínica.',
		'Consultar de inmediato si aparecen nódulos persistentes, dolor desproporcionado, supuración o fiebre.',
		'Acudir a las revisiones programadas: la mesoterapia se valora por evolución, no por una sesión aislada.',
	],
	faq: [
		{
			q: '¿Cuántas sesiones de mesoterapia capilar suelen necesitarse?',
			a: 'No hay un número fijo válido para todos. Tras la valoración inicial, se propone un calendario inicial que luego se ajusta según la respuesta clínica, la tolerancia y los objetivos realistas del caso. En general se recomiendan entre cuatro y seis sesiones como mínimo.',
		},
		{
			q: '¿Duele la mesoterapia capilar?',
			a: 'Puede haber molestia leve o pinchazos durante la aplicación. Cuando procede, se utiliza anestesia tópica para mejorar el confort. La sensibilidad varía según la zona y la persona.',
		},
		{
			q: '¿Cuándo se notan resultados?',
			a: 'Los cambios en el cabello se producen gradualmente debido a su ciclo natural de crecimiento. En mi experiencia, los pacientes que son constantes con su tratamiento suelen percibir los cambios a partir del tercer o cuarto mes de tratamiento.',
		},
		{
			q: '¿Puedo hacer ejercicio el mismo día de la sesión?',
			a: 'No. No se recomienda hacer ejercicio físico intenso posteriormente a la sesión. Puedes realizarlo antes de la sesión o, idealmente, 24 horas después de la sesión.',
		},
	],
	images: {
		hero: {
			src: '/images/capilar/carbox/foliculo.png',
			alt: 'Folículo piloso en contexto de mesoterapia capilar médica',
		},
		about: {
			src: '/images/capilar/meso/tricoscopy-patient.png',
			alt: 'Tricoscopia capilar con paciente en consulta médica',
		},
		how: {
			src: '/images/capilar/meso/meso-patient-procedure.png',
			alt: 'Aplicación de mesoterapia capilar en cuero cabelludo',
		},
		postCare: {
			src: '/images/capilar/meso/woman-post-treatment-gently-patting.png',
			alt: 'Cuidado del cuero cabelludo tras mesoterapia capilar',
		},
		beforeAfter: {
			before: {
				alt: 'Cuero cabelludo con adelgazamiento difuso antes de mesoterapia capilar',
				recraftPrompt:
					'Clinical top-down trichoscopy-style photograph, female scalp crown with visible diffuse thinning and reduced density, neutral clinical background, even medical lighting, documentary before-treatment reference, no text, no logos, photorealistic',
			},
			after: {
				alt: 'Mejora de densidad capilar tras mesoterapia médica',
				recraftPrompt:
					'Clinical top-down trichoscopy-style photograph, same angle female scalp crown with modest improved hair density and healthier hair shafts, neutral clinical background, even medical lighting, documentary after-treatment reference, realistic subtle improvement not exaggerated, no text, no logos, photorealistic',
			},
		},
	},
};

const enParts: TreatmentContentParts = {
	seo: {
		title: 'Medical capillary mesotherapy in Barcelona and Tarragona | Dr Jessica Tellechea',
		description:
			'Medical capillary mesotherapy with prior assessment, personalised protocol and clinical follow-up. Follicle nutrition delivered at scalp level in Barcelona and Tarragona.',
	},
	heroH1: 'Medical capillary mesotherapy',
	aboutBody: [
		'Medical capillary mesotherapy involves microinjections into the scalp using a formulation tailored to each case: peptides, vitamins and, when clinically indicated, antiandrogen drugs or other prescription-only actives. The aim is not to promise instant results, but to deliver nutrients and biological signals to the hair follicle in the context of shedding, weakening or thinning hair.',
	],
	howBody: [
		'The session begins with scalp preparation. The formulation is administered at distributed points across the treatment area, using controlled technique and respect for scalp anatomy.',
		'Session duration, intervals between sessions and total number of applications depend on diagnosis and individual response. There is no one-size-fits-all protocol: frequency is adjusted during medical follow-up, prioritising safety and alignment with the overall hair plan.',
	],
	benefits: [
		'Direct delivery of actives to the hair follicle environment, beyond oral or topical routes alone.',
		'Customisable protocol according to shedding pattern, density, scalp condition and realistic clinical goals.',
		'Outpatient procedure, usually with immediate recovery and minimal disruption to daily routine.',
	],
	postCareBody: [
		'After capillary mesotherapy, follow your clinic\'s specific guidance on hair washing, sun exposure, intense exercise and hair products.',
	],
	essentials: [
		'Attend with a clean scalp and no oily products on treatment day unless advised otherwise.',
		'Report allergies, regular medication, pregnancy, breastfeeding or active inflammatory scalp conditions.',
		'Keep to agreed intervals between sessions; clinical consistency matters more than excessive frequency.',
		'Report prolonged redness, severe pain, signs of infection or unexpected changes in the scalp.',
	],
	precautionsDescription:
		'Capillary mesotherapy is a medical procedure requiring prior assessment, individualised formulation and clinical judgement to indicate, defer or rule it out. The lists below outline usual preparation and aftercare.',
	precautionsBefore: [
		'Mandatory prior medical assessment: scalp, shedding pattern, hormonal history, thyroid, anaemia, stress or relevant medication.',
		'Report known allergies, anticoagulants, antiplatelet agents, immunosuppressants or recent hair treatments.',
		'Stop or review with the doctor use of NSAIDs, aspirin or other drugs that may increase bruising risk when appropriate.',
		'Avoid alcohol, intense exercise and excessive scalp sun exposure 24–48 hours beforehand unless advised otherwise.',
		'Do not attend with active infections, wounds, severe dermatitis, psoriasis flare or irritated scalp without prior review.',
		'Report pregnancy, breastfeeding or plans to conceive; treatment may not be indicated in these situations.',
		'Do not self-medicate or request copies of third-party formulations: composition must be medical and personalised.',
		'Plan the session allowing for possible mild transient redness if discretion is preferred immediately afterwards.',
	],
	precautionsAfter: [
		'Do not wash the scalp or use harsh shampoos for the indicated period, usually 12 to 24 hours.',
		'Avoid saunas, pools, direct beach sun, intense sunlight and very tight caps for 48 hours if sore or red.',
		'Do not rub, scratch or massage the treated area firmly; pat dry gently without friction.',
		'Postpone dyes, bleaching, chemical straightening or aggressive treatments until medically cleared.',
		'Avoid high-impact exercise or heavy sweating on the same day if recommended by the doctor.',
		'Do not autonomously combine with other invasive scalp procedures without clinical coordination.',
		'Seek immediate advice if persistent nodules, disproportionate pain, discharge or fever occur.',
		'Attend scheduled reviews: mesotherapy is assessed by progression, not by a single session alone.',
	],
	faq: [
		{
			q: 'How many capillary mesotherapy sessions are usually needed?',
			a: 'There is no fixed number for everyone. After initial assessment, an initial schedule is proposed and then adjusted according to clinical response, tolerance and realistic case goals. In general, a minimum of four to six sessions is recommended.',
		},
		{
			q: 'Does capillary mesotherapy hurt?',
			a: 'Mild discomfort or pinching may occur during application. Topical anaesthesia is used when appropriate to improve comfort. Sensitivity varies by area and individual.',
		},
		{
			q: 'When are results noticeable?',
			a: 'Changes in hair occur gradually due to its natural growth cycle. In my experience, patients who stay consistent with treatment usually notice changes from the third or fourth month of treatment.',
		},
		{
			q: 'Can I exercise on the same day as the session?',
			a: 'No. Intense physical exercise is not recommended after the session. You may exercise before the session or, ideally, 24 hours afterwards.',
		},
	],
	images: {
		hero: {
			src: esParts.images.hero!.src,
			alt: 'Hair follicle in medical capillary mesotherapy context',
		},
		about: {
			src: esParts.images.about.src,
			alt: 'Capillary trichoscopy with patient in medical consultation',
		},
		how: {
			src: esParts.images.how.src,
			alt: 'Application of capillary mesotherapy on scalp',
		},
		postCare: {
			src: esParts.images.postCare.src,
			alt: 'Scalp care after capillary mesotherapy',
		},
		beforeAfter: {
			before: {
				alt: 'Scalp with diffuse thinning before capillary mesotherapy',
				recraftPrompt: esParts.images.beforeAfter!.before.recraftPrompt,
			},
			after: {
				alt: 'Improved hair density after medical mesotherapy',
				recraftPrompt: esParts.images.beforeAfter!.after.recraftPrompt,
			},
		},
	},
};

const caParts: TreatmentContentParts = {
	seo: {
		title: 'Mesoteràpia capil·lar mèdica a Barcelona i Tarragona | Dra. Jessica Tellechea',
		description:
			'Mesoteràpia capil·lar mèdica amb valoració prèvia, protocol personalitzat i seguiment clínic. Nutrició del fol·licle des del cuir cabellut a Barcelona i Tarragona.',
	},
	heroH1: 'Mesoteràpia capil·lar mèdica',
	aboutBody: [
		'La mesoteràpia capil·lar consisteix en microinfiltracions al cuir cabellut amb una formulació adaptada a cada cas: pèptids, vitamines i, quan el diagnòstic ho indica, fàrmacs antiandrogens o altres actius de prescripció mèdica. L\'objectiu no és prometre resultats immediats, sinó aportar nutrients i senyals biològiques al fol·licle pilós en un context de caiguda, debilitament o aprimament capil·lar.',
	],
	howBody: [
		'La sessió comença amb la preparació del cuir cabellut. La formulació s\'administra en punts distribuïts sobre la zona a tractar, amb tècnica controlada i respecte per l\'anatomia del cuir cabellut.',
		'La durada, l\'interval entre sessions i el nombre total d\'aplicacions depenen del diagnòstic i de la resposta individual. No existeix un protocol únic vàlid per a tots els casos: la freqüència s\'ajusta en el seguiment mèdic, prioritzant la seguretat i la coherència amb el pla capil·lar global.',
	],
	benefits: [
		'Aport directe d\'actius a l\'entorn del fol·licle pilós, sense dependre només de la via oral o tòpica.',
		'Protocol personalitzable segons tipus de caiguda, densitat, cuir cabellut i objectius clínics realistes.',
		'Procediment ambulatòri, amb recuperació habitualment immediata i mínima interrupció de la rutina diària.',
	],
	postCareBody: [
		'Després de la mesoteràpia capil·lar, convé seguir les indicacions específiques de la consulta sobre rentat del cabell, exposició solar, exercici intens i productes capil·lars.',
	],
	essentials: [
		'Acudir amb el cuir cabellut net i sense productes grassos el dia de la sessió, llevat d\'indicació contrària.',
		'Informar d\'al·lèrgies, medicació habitual, embaràs, lactància o processos inflamatoris actius al cuir cabellut.',
		'Respectar els intervals acordats entre sessions; la constància clínica importa més que la freqüència excessiva.',
		'Comunicar qualsevol envermelliment prolongat, dolor intens, signes d\'infecció o canvis inesperats al cuir cabellut.',
	],
	precautionsDescription:
		'La mesoteràpia capil·lar és un procediment mèdic que requereix valoració prèvia, formulació individualitzada i criteri clínic per indicar-lo, ajornar-lo o descartar-lo. Les llistes següents orienten sobre preparació i cures habituals.',
	precautionsBefore: [
		'Valoració mèdica prèvia obligatòria: cuir cabellut, patró de caiguda, antecedents hormonals, tiroides, anèmia, estrès o medicació rellevant.',
		'Informar d\'al·lèrgies conegudes, anticoagulants, antiagregants, immunosupressors o tractaments capil·lars recents.',
		'Suspendre o valorar amb la metgessa l\'ús d\'AINE, aspirina o altres fàrmacs que augmentin el risc d\'hematomes si procedeix.',
		'Evitar alcohol, exercici intens i exposició solar excessiva al cuir cabellut 24–48 hores abans, llevat d\'indicació diferent.',
		'No acudir amb infeccions actives, ferides, dermatitis severa, psoriasis en brot o cuir cabellut irritat sense revisió prèvia.',
		'Comunicar embaràs, lactància o intenció de concebre; en aquests casos el tractament pot no estar indicat.',
		'No automedicar-se ni sol·licitar còpies de formulacions de tercers: la composició ha de ser mèdica i personalitzada.',
		'Planificar la sessió evitant esdeveniments socials immediats si es desitja discreció davant un possible envermelliment lleu transitori.',
	],
	precautionsAfter: [
		'No rentar el cuir cabellut ni usar xampús agressius durant el temps indicat, normalment entre 12 i 24 hores.',
		'Evitar saunes, piscines, platja directa, sol intens i gorres molt ajustades les primeres 48 hores si hi ha molèstia o envermelliment.',
		'No fregar, gratar ni massatjar amb força la zona tractada; assecar amb suavitat sense fregar.',
		'Ajornar tints, decoloracions, allisats químics o tractaments agressius fins a autorització mèdica.',
		'Evitar exercici d\'alt impacte o sudoració profusa el mateix dia si la metgessa ho recomana.',
		'No combinar de forma autònoma amb altres procediments invasius capil·lars sense coordinació clínica.',
		'Consultar immediatament si apareixen nòduls persistents, dolor desproporcionat, supuració o febre.',
		'Acudir a les revisions programades: la mesoteràpia es valora per evolució, no per una sessió aïllada.',
	],
	faq: [
		{
			q: 'Quantes sessions de mesoteràpia capil·lar solen necessitar-se?',
			a: 'No hi ha un nombre fix vàlid per a tothom. Després de la valoració inicial, es proposa un calendari inicial que després s\'ajusta segons la resposta clínica, la tolerància i els objectius realistes del cas. En general, es recomanen entre quatre i sis sessions com a mínim.',
		},
		{
			q: 'Fa mal la mesoteràpia capil·lar?',
			a: 'Pot haver-hi molèstia lleu o punxades durant l\'aplicació. Quan procedeix, s\'utilitza anestèsia tòpica per millorar el confort. La sensibilitat varia segons la zona i la persona.',
		},
		{
			q: 'Quan es noten resultats?',
			a: 'Els canvis en el cabell es produeixen gradualment a causa del seu cicle natural de creixement. En la meva experiència, els pacients que són constants amb el tractament solen percebre els canvis a partir del tercer o quart mes de tractament.',
		},
		{
			q: 'Puc fer exercici el mateix dia de la sessió?',
			a: 'No. No es recomana fer exercici físic intens posteriorment a la sessió. Pots realitzar-lo abans de la sessió o, idealment, 24 hores després de la sessió.',
		},
	],
	images: {
		hero: {
			src: esParts.images.hero!.src,
			alt: 'Fol·licle pilós en context de mesoteràpia capil·lar mèdica',
		},
		about: {
			src: esParts.images.about.src,
			alt: 'Tricoscòpia capil·lar amb pacient en consulta mèdica',
		},
		how: {
			src: esParts.images.how.src,
			alt: 'Aplicació de mesoteràpia capil·lar al cuir cabellut',
		},
		postCare: {
			src: esParts.images.postCare.src,
			alt: 'Cura del cuir cabellut després de mesoteràpia capil·lar',
		},
		beforeAfter: {
			before: {
				alt: 'Cuir cabellut amb aprimament difús abans de mesoteràpia capil·lar',
				recraftPrompt: esParts.images.beforeAfter!.before.recraftPrompt,
			},
			after: {
				alt: 'Millora de densitat capil·lar després de mesoteràpia mèdica',
				recraftPrompt: esParts.images.beforeAfter!.after.recraftPrompt,
			},
		},
	},
};

const frParts: TreatmentContentParts = {
	seo: {
		title: 'Mésothérapie capillaire médicale à Barcelone et Tarragone | Dre Jessica Tellechea',
		description:
			'Mésothérapie capillaire médicale avec évaluation préalable, protocole personnalisé et suivi clinique. Nutrition du follicule au niveau du cuir chevelu à Barcelone et Tarragone.',
	},
	heroH1: 'Mésothérapie capillaire médicale',
	aboutBody: [
		'La mésothérapie capillaire consiste en micro-injections dans le cuir chevelu avec une formulation adaptée à chaque cas : peptides, vitamines et, lorsque le diagnostic l\'indique, anti-androgènes ou autres actifs sur prescription. L\'objectif n\'est pas de promettre des résultats immédiats, mais d\'apporter nutriments et signaux biologiques au follicule pileux dans un contexte de chute, d\'affaiblissement ou d\'amincissement capillaire.',
	],
	howBody: [
		'La séance commence par la préparation du cuir chevelu. La formulation est administrée en points répartis sur la zone à traiter, avec une technique contrôlée et le respect de l\'anatomie du cuir chevelu.',
		'La durée, l\'intervalle entre séances et le nombre total d\'applications dépendent du diagnostic et de la réponse individuelle. Il n\'existe pas de protocole unique valable pour tous : la fréquence est ajustée lors du suivi médical, en priorisant la sécurité et la cohérence avec le plan capillaire global.',
	],
	benefits: [
		'Apport direct d\'actifs à l\'environnement du follicule pileux, au-delà de la voie orale ou topique seule.',
		'Protocole personnalisable selon le type de chute, la densité, le cuir chevelu et des objectifs cliniques réalistes.',
		'Procédure ambulatoire, avec récupération généralement immédiate et interruption minimale de la routine quotidienne.',
	],
	postCareBody: [
		'Après la mésothérapie capillaire, il convient de suivre les indications spécifiques du cabinet concernant le lavage des cheveux, l\'exposition solaire, l\'exercice intense et les produits capillaires.',
	],
	essentials: [
		'Venir avec le cuir chevelu propre et sans produits gras le jour de la séance, sauf indication contraire.',
		'Signaler allergies, traitements habituels, grossesse, allaitement ou processus inflammatoires actifs du cuir chevelu.',
		'Respecter les intervalles convenus entre séances ; la régularité clinique compte plus qu\'une fréquence excessive.',
		'Signaler tout rougissement prolongé, douleur intense, signes d\'infection ou changements inattendus du cuir chevelu.',
	],
	precautionsDescription:
		'La mésothérapie capillaire est un acte médical nécessitant une évaluation préalable, une formulation individualisée et un jugement clinique pour l\'indiquer, la reporter ou l\'écarter. Les listes suivantes orientent la préparation et les soins habituels.',
	precautionsBefore: [
		'Évaluation médicale préalable obligatoire : cuir chevelu, type de chute, antécédents hormonaux, thyroïde, anémie, stress ou médication pertinente.',
		'Signaler allergies connues, anticoagulants, antiagrégants, immunosuppresseurs ou traitements capillaires récents.',
		'Arrêter ou valider avec la médecin l\'usage d\'AINS, aspirine ou autres médicaments augmentant le risque d\'hématomes si nécessaire.',
		'Éviter alcool, exercice intense et exposition solaire excessive du cuir chevelu 24 à 48 heures avant, sauf indication différente.',
		'Ne pas venir avec infections actives, plaies, dermatite sévère, poussée de psoriasis ou cuir chevelu irrité sans avis préalable.',
		'Signaler grossesse, allaitement ou projet de conception ; dans ces cas le traitement peut ne pas être indiqué.',
		'Ne pas s\'automédiquer ni demander de copies de formulations tierces : la composition doit être médicale et personnalisée.',
		'Planifier la séance en évitant les événements sociaux immédiats si discrétion souhaitée face à un rougissement léger transitoire.',
	],
	precautionsAfter: [
		'Ne pas laver le cuir chevelu ni utiliser de shampoings agressifs pendant la durée indiquée, généralement 12 à 24 heures.',
		'Éviter saunas, piscines, plage directe, soleil intense et casquettes très serrées les 48 premières heures en cas de gêne ou rougeur.',
		'Ne pas frotter, gratter ni masser vigoureusement la zone traitée ; sécher en tamponnant délicatement.',
		'Reporter colorations, décolorations, lissages chimiques ou traitements agressifs jusqu\'à autorisation médicale.',
		'Éviter exercice à fort impact ou sudation profonde le jour même si la médecin le recommande.',
		'Ne pas combiner de façon autonome avec d\'autres procédures invasives du cuir chevelu sans coordination clinique.',
		'Consulter immédiatement en cas de nodules persistants, douleur disproportionnée, écoulement ou fièvre.',
		'Assister aux contrôles programmés : la mésothérapie se juge sur l\'évolution, pas sur une séance isolée.',
	],
	faq: [
		{
			q: 'Combien de séances de mésothérapie capillaire sont généralement nécessaires ?',
			a: 'Il n\'y a pas de nombre fixe valable pour tous. Après l\'évaluation initiale, un calendrier initial est proposé puis ajusté selon la réponse clinique, la tolérance et les objectifs réalistes du cas. En général, un minimum de quatre à six séances est recommandé.',
		},
		{
			q: 'La mésothérapie capillaire est-elle douloureuse ?',
			a: 'Une gêne légère ou des piqûres peuvent survenir pendant l\'application. Une anesthésie topique est utilisée le cas échéant pour améliorer le confort. La sensibilité varie selon la zone et la personne.',
		},
		{
			q: 'Quand observe-t-on des résultats ?',
			a: 'Les changements capillaires se produisent progressivement en raison du cycle naturel de croissance. D\'après mon expérience, les patientes assidues au traitement perçoivent généralement des changements à partir du troisième ou quatrième mois.',
		},
		{
			q: 'Puis-je faire de l\'exercice le jour même de la séance ?',
			a: 'Non. L\'exercice physique intense n\'est pas recommandé après la séance. Vous pouvez l\'effectuer avant la séance ou, idéalement, 24 heures après.',
		},
	],
	images: {
		hero: {
			src: esParts.images.hero!.src,
			alt: 'Follicule pileux en contexte de mésothérapie capillaire médicale',
		},
		about: {
			src: esParts.images.about.src,
			alt: 'Trichoscopie capillaire avec patiente en consultation médicale',
		},
		how: {
			src: esParts.images.how.src,
			alt: 'Application de mésothérapie capillaire sur le cuir chevelu',
		},
		postCare: {
			src: esParts.images.postCare.src,
			alt: 'Soins du cuir chevelu après mésothérapie capillaire',
		},
		beforeAfter: {
			before: {
				alt: 'Cuir chevelu avec amincissement diffus avant mésothérapie capillaire',
				recraftPrompt: esParts.images.beforeAfter!.before.recraftPrompt,
			},
			after: {
				alt: 'Amélioration de la densité capillaire après mésothérapie médicale',
				recraftPrompt: esParts.images.beforeAfter!.after.recraftPrompt,
			},
		},
	},
};

export const mesoterapiaCapilarContent: CapilarTreatmentContentMap = {
	es: buildTreatmentContent('es', esParts),
	en: buildTreatmentContent('en', enParts),
	ca: buildTreatmentContent('ca', caParts),
	fr: buildTreatmentContent('fr', frParts),
};
