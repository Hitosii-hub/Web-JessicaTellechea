import { buildTreatmentContent } from './build-content';
import type { TreatmentContentParts } from './build-content';
import type { CapilarTreatmentContentMap } from './types';

const esParts: TreatmentContentParts = {
	seo: {
		title: 'Transplante capilar en Barcelona y Tarragona | Dra. Jessica Tellechea',
		description:
			'Transplante capilar con valoración médica previa, criterio clínico y plan personalizado. Reposición de densidad bajo supervisión médica en Barcelona y Tarragona.',
	},
	heroH1: 'Transplante capilar',
	aboutBody: [
		'El transplante capilar consiste en la extracción de folículos pilosos de una zona donante y su implantación en áreas con pérdida de densidad, bajo criterio médico y con planificación previa. No es un procedimiento indicado para todos los casos: requiere valoración del patrón de caída, la reserva donante, la calidad del cuero cabelludo y expectativas realistas sobre el resultado.',
	],
	howBody: [
		'Tras la valoración, se define la técnica más adecuada según el caso (FUE u otras modalidades clínicamente indicadas), la zona donante, el número estimado de unidades foliculares y el diseño del implante. La intervención se realiza en entorno médico, con anestesia local y protocolo quirúrgico individualizado.',
		'La duración, la extensión del procedimiento y el calendario de recuperación dependen del alcance del transplante y de la respuesta individual. El crecimiento del cabello trasplantado es progresivo: los primeros meses pueden incluir fase de shock loss y la densidad final se valora a largo plazo, con revisiones médicas programadas.',
	],
	benefits: [
		'Reposición de densidad en zonas seleccionadas con folículos del propio paciente.',
		'Diseño personalizado de la línea frontal o áreas receptoras según criterio médico y armonía facial.',
		'Planificación previa con valoración de reserva donante y expectativas realistas.',
		'Seguimiento postoperatorio para monitorizar cicatrización, crecimiento y evolución a medio plazo.',
	],
	postCareBody: [
		'El periodo postoperatorio es clave: incluye cuidados del cuero cabelludo donante y receptor, medicación indicada, restricciones de actividad y revisiones programadas. El crecimiento visible del cabello trasplantado suele ser gradual; Se acompañará la evolución para resolver dudas y ajustar indicaciones según la fase de recuperación.',
	],
	essentials: [
		'Acudir a todas las consultas preoperatorias con historial médico completo y medicación actualizada.',
		'Seguir estrictamente las indicaciones sobre ayuno, medicación y preparación el día de la intervención.',
		'Planificar reposo y apoyo domiciliario los primeros días postoperatorios según indicación médica.',
		'Comunicar de inmediato fiebre, sangrado persistente, dolor desproporcionado o signos de infección.',
	],
	precautionsDescription:
		'El transplante capilar es un procedimiento quirúrgico que exige valoración exhaustiva, consentimiento informado y cumplimiento riguroso de las indicaciones pre y postoperatorias. Las listas siguientes son orientativas.',
	precautionsBefore: [
		'Valoración capilar completa: patrón de caída, reserva donante, densidad actual, expectativas y contraindicaciones.',
		'Informar de antecedentes de cicatrización queloide, trastornos de coagulación, diabetes, inmunosupresión o infecciones activas.',
		'Comunicar medicación habitual, anticoagulantes, antiagregantes y suplementos; pueden requerir ajuste o suspensión temporal.',
		'No fumar ni consumir alcohol en el periodo preoperatorio indicado; afectan a cicatrización y vascularización.',
		'Valorar la toma de AINE, aspirina y ciertos suplementos según protocolo prequirúrgico (no suspenda ningún medicamento prescrito por iniciativa propia. Si los está tomando comuníquelo previamente para valorar cada caso individualmente).',
		'No automedicarse ni iniciar tratamientos capilares invasivos sin coordinación antes de la cirugía.',
		'Planificar la intervención con tiempo suficiente para reposo postoperatorio y evitar compromisos laborales o viajes inmediatos.',
		'Confirmar comprensión de plazos de crecimiento, posible shock loss y limitaciones del resultado según reserva donante.',
	],
	precautionsAfter: [
		'No tocar, rascar ni frotar las zonas donante y receptora; respetar las costras y el lavado suave indicado.',
		'Dormir en la posición recomendada los primeros días para proteger la zona implantada.',
		'Evitar ejercicio intenso, sudoración profusa, sol directo, piscinas, saunas y gorras ajustadas según calendario médico.',
		'No tomar medicación no prescrita; seguir antibióticos, analgesia o antinflamatorios solo si fueron indicados.',
		'Posponer tintes, decoloraciones, mesoterapia, PRP u otros procedimientos capilares hasta autorización médica.',
		'No conducir ni realizar actividades que requieran concentración si la medicación postoperatoria lo desaconseja.',
		'Acudir a todas las revisiones programadas: extracción de puntos, control de cicatrices y seguimiento del crecimiento.',
		'Consultar de inmediato si aparecen supuración, fiebre, inflamación progresiva o pérdida de implantes en bloque.',
	],
	faq: [
		{
			q: '¿Cuándo es candidato alguien a un transplante capilar?',
			a: 'Cuando la valoración confirma patrón de caída estable o predecible, reserva donante adecuada, cuero cabelludo receptor viable y expectativas alineadas con lo clínicamente alcanzable. No todos los casos califican tras la consulta.',
		},
		{
			q: '¿Cuándo se ve el resultado final del transplante?',
			a: 'El crecimiento es progresivo. Puede haber shock loss inicial; la densidad visible mejora en meses y la valoración final suele requerir 12–18 meses según el caso.',
		},
		{
			q: '¿Duele el transplante capilar?',
			a: 'Se realiza con anestesia local. Puede haber molestia durante y después del procedimiento, controlada con medicación indicada. La sensibilidad varía según extensión y tolerancia individual.',
		},
		{
			q: '¿Dejan cicatriz en la zona donante?',
			a: 'Depende de la técnica y del caso. La FUE deja microcicatrices puntuales; la extensión y visibilidad dependen del peinado, la calidad de cicatrización y la planificación preoperatoria.',
		},
		{
			q: '¿Puede combinarse el transplante con mesoterapia o PRP?',
			a: 'Soy partidaria de realizar tratamiento médico antes y después del transplante para mejorar el resultado. Cada caso queda sujeto a una valoración individual.',
		},
	],
	images: {
		hero: {
			src: '/images/capilar/transplant/transplant-planification.png',
			alt: 'Planificación de transplante capilar con el paciente en consulta',
		},
		about: {
			src: '/images/capilar/transplant/transplant-design.png',
			alt: 'Diseño y planificación de transplante capilar en consulta médica',
		},
		how: {
			src: '/images/capilar/transplant/doctor-during-hair-transplant.png',
			alt: 'Procedimiento médico de transplante capilar durante la intervención',
		},
		postCare: {
			src: '/images/capilar/transplant/doctor-indications.png',
			alt: 'Indicaciones médicas tras transplante capilar en consulta',
			aspect: 'landscape',
			fit: 'contain',
		},
		beforeAfter: {
			before: {
				alt: 'Línea frontal con retroceso antes de transplante capilar',
				recraftPrompt:
					'Clinical frontal photograph, male hairline with visible recession and temporal thinning, neutral clinical background, even medical lighting, before hair transplant documentary reference, no text, no logos, photorealistic',
			},
			after: {
				alt: 'Mejora de línea frontal tras transplante capilar médico',
				recraftPrompt:
					'Clinical frontal photograph, same male hairline with natural modest improvement after medical hair transplant, realistic density not exaggerated, neutral clinical background, even medical lighting, after-treatment reference, no text, no logos, photorealistic',
			},
		},
	},
};

const enParts: TreatmentContentParts = {
	seo: {
		title: 'Hair transplant in Barcelona and Tarragona | Dr Jessica Tellechea',
		description:
			'Hair transplant with prior medical assessment, clinical judgement and personalised plan. Density restoration under medical supervision in Barcelona and Tarragona.',
	},
	heroH1: 'Hair transplant',
	aboutBody: [
		'Hair transplant involves extracting hair follicles from a donor area and implanting them in areas with density loss, under medical judgement and prior planning. It is not indicated for every case: assessment of shedding pattern, donor reserve, scalp quality and realistic expectations about outcome is required.',
	],
	howBody: [
		'After assessment, the most appropriate technique is defined for each case (FUE or other clinically indicated modalities), donor zone, estimated follicular units and implant design. The procedure is performed in a medical setting with local anaesthesia and individualised surgical protocol.',
		'Duration, procedure extent and recovery timeline depend on transplant scope and individual response. Transplanted hair growth is progressive: early months may include shock loss and final density is assessed long term, with scheduled medical reviews.',
	],
	benefits: [
		'Density restoration in selected areas using the patient\'s own follicles.',
		'Personalised hairline or recipient area design according to medical criteria and facial harmony.',
		'Prior planning with donor reserve assessment and realistic expectations.',
		'Postoperative follow-up to monitor healing, growth and medium-term progression.',
	],
	postCareBody: [
		'The postoperative period is key: it includes care of donor and recipient scalp, prescribed medication, activity restrictions and scheduled reviews. Visible growth of transplanted hair is usually gradual; your progress will be supported to address questions and adjust guidance according to the recovery phase.',
	],
	essentials: [
		'Attend all preoperative consultations with complete medical history and updated medication list.',
		'Strictly follow guidance on fasting, medication and preparation on procedure day.',
		'Plan rest and home support for the first postoperative days as medically advised.',
		'Report immediately any fever, persistent bleeding, severe pain or signs of infection.',
	],
	precautionsDescription:
		'Hair transplant is a surgical procedure requiring thorough assessment, informed consent and rigorous compliance with pre and postoperative instructions. The lists below are for guidance only.',
	precautionsBefore: [
		'Full hair assessment: shedding pattern, donor reserve, current density, expectations and contraindications.',
		'Report history of keloid scarring, clotting disorders, diabetes, immunosuppression or active infections.',
		'Report regular medication, anticoagulants, antiplatelet agents and supplements; temporary adjustment or suspension may be required.',
		'Do not smoke or consume alcohol during the indicated preoperative period; both affect healing and vascularisation.',
		'Review NSAIDs, aspirin and certain supplements per pre-surgical protocol (do not stop any prescribed medication on your own. If you are taking them, report this in advance so each case can be assessed individually).',
		'Do not self-medicate or start invasive hair treatments without coordination before surgery.',
		'Plan the procedure allowing sufficient postoperative rest and avoiding immediate work commitments or travel.',
		'Confirm understanding of growth timelines, possible shock loss and result limitations according to donor reserve.',
	],
	precautionsAfter: [
		'Do not touch, scratch or rub donor and recipient areas; respect scabs and indicated gentle washing.',
		'Sleep in the recommended position for the first days to protect the implanted zone.',
		'Avoid intense exercise, heavy sweating, direct sun, pools, saunas and tight caps per medical schedule.',
		'Do not take unprescribed medication; follow antibiotics, analgesia or anti-inflammatories only if indicated.',
		'Postpone dyes, bleaching, mesotherapy, PRP or other hair procedures until medically cleared.',
		'Do not drive or perform activities requiring concentration if postoperative medication advises against it.',
		'Attend all scheduled reviews: stitch removal, scar monitoring and growth follow-up.',
		'Seek immediate advice if discharge, fever, progressive swelling or block loss of implants occurs.',
	],
	faq: [
		{
			q: 'When is someone a candidate for hair transplant?',
			a: 'When assessment confirms stable or predictable shedding pattern, adequate donor reserve, viable recipient scalp and expectations aligned with what is clinically achievable. Not all cases qualify after consultation.',
		},
		{
			q: 'When is the final transplant result visible?',
			a: 'Growth is progressive. Initial shock loss may occur; visible density improves over months and final assessment usually requires 12–18 months depending on the case.',
		},
		{
			q: 'Does hair transplant hurt?',
			a: 'It is performed under local anaesthesia. Discomfort during and after the procedure may occur, managed with indicated medication. Sensitivity varies by extent and individual tolerance.',
		},
		{
			q: 'Does the donor area leave a scar?',
			a: 'It depends on technique and case. FUE leaves micro point scars; extent and visibility depend on hairstyle, scarring quality and preoperative planning.',
		},
		{
			q: 'Can transplant be combined with mesotherapy or PRP?',
			a: 'I am in favour of medical treatment before and after transplant to improve the outcome. Each case is subject to individual assessment.',
		},
	],
	images: {
		hero: {
			src: esParts.images.hero!.src,
			alt: 'Hair transplant planning with patient in consultation',
		},
		about: {
			src: esParts.images.about.src,
			alt: 'Hair transplant design and planning in medical consultation',
		},
		how: {
			src: esParts.images.how.src,
			alt: 'Medical hair transplant procedure during intervention',
		},
		postCare: {
			src: esParts.images.postCare.src,
			alt: 'Medical instructions after hair transplant in consultation',
			aspect: esParts.images.postCare.aspect,
			fit: esParts.images.postCare.fit,
		},
		beforeAfter: {
			before: {
				alt: 'Receding hairline before hair transplant',
				recraftPrompt: esParts.images.beforeAfter!.before.recraftPrompt,
			},
			after: {
				alt: 'Improved hairline after medical hair transplant',
				recraftPrompt: esParts.images.beforeAfter!.after.recraftPrompt,
			},
		},
	},
};

const caParts: TreatmentContentParts = {
	seo: {
		title: 'Transplant capil·lar a Barcelona i Tarragona | Dra. Jessica Tellechea',
		description:
			'Transplant capil·lar amb valoració mèdica prèvia, criteri clínic i pla personalitzat. Reposició de densitat sota supervisió mèdica a Barcelona i Tarragona.',
	},
	heroH1: 'Transplant capil·lar',
	aboutBody: [
		'El transplant capil·lar consisteix en l\'extracció de fol·lics pilosos d\'una zona donant i la seva implantació en àrees amb pèrdua de densitat, sota criteri mèdic i amb planificació prèvia. No és un procediment indicat per a tots els casos: requereix valoració del patró de caiguda, la reserva donant, la qualitat del cuir cabellut i expectatives realistes sobre el resultat.',
	],
	howBody: [
		'Després de la valoració, es defineix la tècnica més adequada segons el cas (FUE o altres modalitats clínicament indicades), la zona donant, el nombre estimat d\'unitats fol·liculars i el disseny de l\'implant. La intervenció es realitza en entorn mèdic, amb anestèsia local i protocol quirúrgic individualitzat.',
		'La durada, l\'extensió del procediment i el calendari de recuperació depenen de l\'abast del transplant i de la resposta individual. El creixement del cabell transplantat és progressiu: els primers mesos poden incloure fase de shock loss i la densitat final es valora a llarg termini, amb revisions mèdiques programades.',
	],
	benefits: [
		'Reposició de densitat en zones seleccionades amb fol·lics del propi pacient.',
		'Disseny personalitzat de la línia frontal o àrees receptores segons criteri mèdic i harmonia facial.',
		'Planificació prèvia amb valoració de reserva donant i expectatives realistes.',
		'Seguiment postoperatori per monitoritzar cicatrització, creixement i evolució a mitjà termini.',
	],
	postCareBody: [
		'El període postoperatori és clau: inclou cures del cuir cabellut donant i receptor, medicació indicada, restriccions d\'activitat i revisions programades. El creixement visible del cabell transplantat sol ser gradual; s\'acompanyarà l\'evolució per resoldre dubtes i ajustar indicacions segons la fase de recuperació.',
	],
	essentials: [
		'Acudir a totes les consultes preoperatòries amb historial mèdic complet i medicació actualitzada.',
		'Seguir estrictament les indicacions sobre dejú, medicació i preparació el dia de la intervenció.',
		'Planificar repòs i suport domiciliari els primers dies postoperatoris segons indicació mèdica.',
		'Comunicar immediatament febre, sagnat persistent, dolor desproporcionat o signes d\'infecció.',
	],
	precautionsDescription:
		'El transplant capil·lar és un procediment quirúrgic que exigeix valoració exhaustiva, consentiment informat i compliment rigorós de les indicacions pre i postoperatòries. Les llistes següents són orientatives.',
	precautionsBefore: [
		'Valoració capil·lar completa: patró de caiguda, reserva donant, densitat actual, expectatives i contraindicacions.',
		'Informar d\'antecedents de cicatriu queloide, trastorns de coagulació, diabetis, immunosupressió o infeccions actives.',
		'Comunicar medicació habitual, anticoagulants, antiagregants i suplements; poden requerir ajust o suspensió temporal.',
		'No fumar ni consumir alcohol en el període preoperatori indicat; afecten la cicatrització i vascularització.',
		'Valorar la presa d\'AINE, aspirina i certs suplements segons protocol prequirúrgic (no suspengueu cap medicament prescrit per iniciativa pròpia. Si el preneu, comuniqueu-ho prèviament per valorar cada cas individualment).',
		'No automedicar-se ni iniciar tractaments capil·lars invasius sense coordinació abans de la cirurgia.',
		'Planificar la intervenció amb temps suficient per a repòs postoperatori i evitar compromisos laborals o viatges immediats.',
		'Confirmar comprensió de terminis de creixement, possible shock loss i limitacions del resultat segons reserva donant.',
	],
	precautionsAfter: [
		'No tocar, gratar ni fregar les zones donant i receptora; respectar les crostes i el rentat suau indicat.',
		'Dormir en la posició recomanada els primers dies per protegir la zona implantada.',
		'Evitar exercici intens, sudoració profusa, sol directe, piscines, saunes i gorres ajustades segons calendari mèdic.',
		'No prendre medicació no prescrita; seguir antibiòtics, analgèsia o antiinflamatoris només si van ser indicats.',
		'Ajornar tints, decoloracions, mesoteràpia, PRP o altres procediments capil·lars fins a autorització mèdica.',
		'No conduir ni realitzar activitats que requereixin concentració si la medicació postoperatòria ho desaconsella.',
		'Acudir a totes les revisions programades: extracció de punts, control de cicatrius i seguiment del creixement.',
		'Consultar immediatament si apareixen supuració, febre, inflamació progressiva o pèrdua d\'implants en bloc.',
	],
	faq: [
		{
			q: 'Quan és candidat algú a un transplant capil·lar?',
			a: 'Quan la valoració confirma patró de caiguda estable o previsible, reserva donant adequada, cuir cabellut receptor viable i expectatives alineades amb el clínicament assolible. No tots els casos qualifiquen després de la consulta.',
		},
		{
			q: 'Quan es veu el resultat final del transplant?',
			a: 'El creixement és progressiu. Pot haver-hi shock loss inicial; la densitat visible millora en mesos i la valoració final sol requerir 12–18 mesos segons el cas.',
		},
		{
			q: 'Fa mal el transplant capil·lar?',
			a: 'Es realitza amb anestèsia local. Pot haver-hi molèstia durant i després del procediment, controlada amb medicació indicada. La sensibilitat varia segons extensió i tolerància individual.',
		},
		{
			q: 'Deixen cicatriu a la zona donant?',
			a: 'Depèn de la tècnica i del cas. La FUE deixa microcicatrius puntuals; l\'extensió i visibilitat depenen del pentinat, la qualitat de cicatriu i la planificació preoperatòria.',
		},
		{
			q: 'Es pot combinar el transplant amb mesoteràpia o PRP?',
			a: 'Sóc partidària de realitzar tractament mèdic abans i després del transplant per millorar el resultat. Cada cas queda subjecte a una valoració individual.',
		},
	],
	images: {
		hero: {
			src: esParts.images.hero!.src,
			alt: 'Planificació de transplant capil·lar amb el pacient en consulta',
		},
		about: {
			src: esParts.images.about.src,
			alt: 'Disseny i planificació de transplant capil·lar en consulta mèdica',
		},
		how: {
			src: esParts.images.how.src,
			alt: 'Procediment mèdic de transplant capil·lar durant la intervenció',
		},
		postCare: {
			src: esParts.images.postCare.src,
			alt: 'Indicacions mèdiques després de transplant capil·lar en consulta',
			aspect: esParts.images.postCare.aspect,
			fit: esParts.images.postCare.fit,
		},
		beforeAfter: {
			before: {
				alt: 'Línia frontal amb retrocés abans de transplant capil·lar',
				recraftPrompt: esParts.images.beforeAfter!.before.recraftPrompt,
			},
			after: {
				alt: 'Millora de línia frontal després de transplant capil·lar mèdic',
				recraftPrompt: esParts.images.beforeAfter!.after.recraftPrompt,
			},
		},
	},
};

const frParts: TreatmentContentParts = {
	seo: {
		title: 'Greffe capillaire à Barcelone et Tarragone | Dre Jessica Tellechea',
		description:
			'Greffe capillaire avec évaluation médicale préalable, jugement clinique et plan personnalisé. Restauration de densité sous supervision médicale à Barcelone et Tarragone.',
	},
	heroH1: 'Greffe capillaire',
	aboutBody: [
		'La greffe capillaire consiste en l\'extraction de follicules pileux d\'une zone donneuse et leur implantation dans des zones de perte de densité, sous jugement médical et planification préalable. Ce n\'est pas un acte indiqué pour tous les cas : il faut évaluer le type de chute, la réserve donneuse, la qualité du cuir chevelu et des attentes réalistes sur le résultat.',
	],
	howBody: [
		'Après évaluation, la technique la plus adaptée est définie selon le cas (FUE ou autres modalités cliniquement indiquées), la zone donneuse, le nombre estimé d\'unités folliculaires et le design de l\'implant. L\'intervention se déroule en environnement médical, avec anesthésie locale et protocole chirurgical individualisé.',
		'La durée, l\'étendue de l\'acte et le calendrier de récupération dépendent de l\'ampleur de la greffe et de la réponse individuelle. La pousse des cheveux greffés est progressive : les premiers mois peuvent inclure un shock loss et la densité finale se juge à long terme, avec contrôles médicaux programmés.',
	],
	benefits: [
		'Restauration de densité dans des zones sélectionnées avec les propres follicules du patient.',
		'Design personnalisé de la ligne frontale ou des zones receveuses selon critères médicaux et harmonie faciale.',
		'Planification préalable avec évaluation de la réserve donneuse et attentes réalistes.',
		'Suivi postopératoire pour monitorer cicatrisation, pousse et évolution à moyen terme.',
	],
	postCareBody: [
		'La période postopératoire est essentielle : soins du cuir chevelu donneur et receveur, médication prescrite, restrictions d\'activité et contrôles programmés. La pousse visible des cheveux greffés est généralement progressive ; l\'évolution sera accompagnée pour répondre aux questions et ajuster les consignes selon la phase de récupération.',
	],
	essentials: [
		'Assister à toutes les consultations préopératoires avec antécédents médicaux complets et médication à jour.',
		'Suivre strictement les consignes de jeûne, médication et préparation le jour de l\'intervention.',
		'Prévoir repos et aide à domicile les premiers jours postopératoires selon avis médical.',
		'Signaler immédiatement fièvre, saignement persistant, douleur intense ou signes d\'infection.',
	],
	precautionsDescription:
		'La greffe capillaire est un acte chirurgical exigeant une évaluation approfondie, un consentement éclairé et le respect rigoureux des consignes pré et postopératoires. Les listes suivantes sont indicatives.',
	precautionsBefore: [
		'Évaluation capillaire complète : type de chute, réserve donneuse, densité actuelle, attentes et contre-indications.',
		'Signaler antécédents de cicatrice chéloïde, troubles de coagulation, diabète, immunosuppression ou infections actives.',
		'Signaler médication habituelle, anticoagulants, antiagrégants et suppléments ; ajustement ou suspension temporaire possible.',
		'Ne pas fumer ni consommer d\'alcool pendant la période préopératoire indiquée ; impact sur cicatrisation et vascularisation.',
		'Évaluer la prise d\'AINS, aspirine et certains suppléments selon le protocole préchirurgical (ne suspendez aucun médicament prescrit de votre propre initiative. Si vous en prenez, signalez-le à l\'avance pour une évaluation individualisée).',
		'Ne pas s\'automédiquer ni débuter de traitements capillaires invasifs sans coordination avant la chirurgie.',
		'Planifier l\'intervention avec temps suffisant pour repos postopératoire et éviter engagements professionnels ou voyages immédiats.',
		'Confirmer la compréhension des délais de pousse, du shock loss possible et des limites du résultat selon réserve donneuse.',
	],
	precautionsAfter: [
		'Ne pas toucher, gratter ni frotter zones donneuse et receveuse ; respecter croûtes et lavage doux indiqué.',
		'Dormir dans la position recommandée les premiers jours pour protéger la zone implantée.',
		'Éviter exercice intense, sudation profonde, soleil direct, piscines, saunas et casquettes serrées selon calendrier médical.',
		'Ne pas prendre de médication non prescrite ; suivre antibiotiques, analgésiques ou anti-inflammatoires uniquement si indiqués.',
		'Reporter colorations, décolorations, mésothérapie, PRP ou autres actes capillaires jusqu\'à autorisation médicale.',
		'Ne pas conduire ni effectuer d\'activités exigeant concentration si la médication postopératoire le déconseille.',
		'Assister à tous les contrôles programmés : retrait de points, suivi des cicatrices et de la pousse.',
		'Consulter immédiatement en cas d\'écoulement, fièvre, gonflement progressif ou perte de greffons en bloc.',
	],
	faq: [
		{
			q: 'Quand une personne est-elle candidate à une greffe capillaire ?',
			a: 'Lorsque l\'évaluation confirme un type de chute stable ou prévisible, une réserve donneuse adéquate, un cuir chevelu receveur viable et des attentes alignées avec le cliniquement atteignable. Tous les cas ne qualifient pas après consultation.',
		},
		{
			q: 'Quand le résultat final de la greffe est-il visible ?',
			a: 'La pousse est progressive. Un shock loss initial peut survenir ; la densité visible s\'améliore en mois et l\'évaluation finale requiert généralement 12 à 18 mois selon le cas.',
		},
		{
			q: 'La greffe capillaire est-elle douloureuse ?',
			a: 'Elle se réalise sous anesthésie locale. Une gêne pendant et après l\'acte peut survenir, gérée par médication indiquée. La sensibilité varie selon l\'étendue et la tolérance individuelle.',
		},
		{
			q: 'La zone donneuse laisse-t-elle une cicatrice ?',
			a: 'Cela dépend de la technique et du cas. La FUE laisse des microcicatrices ponctuelles ; visibilité selon coiffure, qualité de cicatrisation et planification préopératoire.',
		},
		{
			q: 'Peut-on combiner la greffe avec mésothérapie ou PRP ?',
			a: 'Je suis favorable à un traitement médical avant et après la greffe pour améliorer le résultat. Chaque cas fait l\'objet d\'une évaluation individualisée.',
		},
	],
	images: {
		hero: {
			src: esParts.images.hero!.src,
			alt: 'Planification de greffe capillaire avec le patient en consultation',
		},
		about: {
			src: esParts.images.about.src,
			alt: 'Conception et planification de greffe capillaire en consultation médicale',
		},
		how: {
			src: esParts.images.how.src,
			alt: 'Procédure médicale de greffe capillaire pendant l\'intervention',
		},
		postCare: {
			src: esParts.images.postCare.src,
			alt: 'Indications médicales après greffe capillaire en consultation',
			aspect: esParts.images.postCare.aspect,
			fit: esParts.images.postCare.fit,
		},
		beforeAfter: {
			before: {
				alt: 'Ligne frontale avec recul avant greffe capillaire',
				recraftPrompt: esParts.images.beforeAfter!.before.recraftPrompt,
			},
			after: {
				alt: 'Amélioration de la ligne frontale après greffe capillaire médicale',
				recraftPrompt: esParts.images.beforeAfter!.after.recraftPrompt,
			},
		},
	},
};

export const transplanteCapilarContent: CapilarTreatmentContentMap = {
	es: buildTreatmentContent('es', esParts),
	en: buildTreatmentContent('en', enParts),
	ca: buildTreatmentContent('ca', caParts),
	fr: buildTreatmentContent('fr', frParts),
};
