import type { Locale as AppLocale } from './config';

export type Locale = AppLocale;

interface FacialSeoContent {
  title: string;
  description: string;
}

interface FacialHeroContent {
  h1: string;
  subtitle: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
}

interface FacialTextBlock {
  title: string;
  body: string;
}

interface FacialServiceGroup {
  subtitle: string;
  services: string[];
}

export interface FacialPageContent {
  seo: FacialSeoContent;
  hero: FacialHeroContent;
  insight: FacialTextBlock;
  medicalApproach: FacialTextBlock;
  benefits: { title: string; items: string[] };
  services: { title: string; groups: FacialServiceGroup[] };
  process: { title: string; steps: string[] };
  trust: { title: string; points: string[] };
  finalCta: { h2: string; body: string; primary: string };
}

export const facialPageContent: Record<Locale, FacialPageContent> = {
  es: {
    seo: {
      title: 'Medicina estetica facial - Clinica AJ',
      description: 'Tratamientos faciales medicos con enfoque natural, progresivo y adaptado a tu identidad.',
    },
    hero: {
      h1: 'Medicina estetica facial',
      subtitle: 'Rejuvenecer sin dejar de ser tu',
      lead: 'Tratamientos medicos orientados a mejorar la calidad de la piel y la armonia facial de forma natural y progresiva.',
      primaryCta: 'Solicitar valoracion facial',
      secondaryCta: 'Conoce nuestro criterio medico',
    },
    insight: {
      title: 'Quieres verte mejor, manteniendo tu expresion',
      body: 'La medicina estetica facial en AJ busca acompanar la armonia del rostro con resultados sutiles, progresivos y coherentes con tu identidad.',
    },
    medicalApproach: {
      title: 'Cada tratamiento se define a partir de una valoracion',
      body: 'Analizamos estructura facial, calidad de la piel y objetivo estetico para construir un plan adaptado a cada caso.',
    },
    benefits: {
      title: 'Beneficios del enfoque facial',
      items: [
        'Mejora progresiva de la armonia facial.',
        'Piel mas luminosa, uniforme y cuidada.',
        'Suavizacion de signos de expresion.',
        'Resultados naturales y coherentes con la identidad del paciente.',
        'Mejora visible sin sensacion de exceso.',
      ],
    },
    services: {
      title: 'Servicios faciales',
      groups: [
        {
          subtitle: 'Armonizacion y estructura',
          services: [
            'Armonizacion facial',
            'Armonizacion facial 1/3 superior',
            'Perfilado nasal con acido hialuronico',
            'Relleno de labios con acido hialuronico',
            'Hidratacion de labios con acido hialuronico',
          ],
        },
        { subtitle: 'Expresion y prevencion', services: ['Botox'] },
        {
          subtitle: 'Calidad de piel y luminosidad',
          services: [
            'IPL facial (pack 3 sesiones)',
            'Laser IPL',
            'Radiofrecuencia facial (sesion)',
            'Radiofrecuencia facial (pack 5 sesiones)',
            'Dermapen (pack 3 sesiones)',
            'Mesoterapia facial (1 sesion)',
            'Mesoterapia Fillmed / Pinklla',
          ],
        },
        {
          subtitle: 'Zonas especificas',
          services: ['Mesoterapia de ojeras (sesion)', 'Mesoterapia de ojeras (pack 3 sesiones)'],
        },
        { subtitle: 'Estimulacion y regeneracion', services: ['Bioestimuladores'] },
        {
          subtitle: 'Higiene y mantenimiento',
          services: ['Hidrohigiene facial', 'Hidro Higiene facial + drenaje linfatico'],
        },
      ],
    },
    process: {
      title: 'Proceso facial',
      steps: ['Valoracion facial', 'Diagnostico y prioridades', 'Plan de tratamiento', 'Seguimiento'],
    },
    trust: {
      title: 'Nuestro criterio medico',
      points: [
        'Resultados orientados a la naturalidad.',
        'Tratamientos seleccionados segun el caso.',
        'Evolucion progresiva y controlada.',
      ],
    },
    finalCta: {
      h2: 'Empieza con una valoracion facial',
      body: 'El objetivo es definir que necesita tu rostro y en que orden trabajarlo.',
      primary: 'Solicitar valoracion facial',
    },
  },
  en: {
    seo: {
      title: 'Facial aesthetic medicine - AJ Clinic',
      description: 'Medical facial treatments with a natural, progressive approach tailored to your identity.',
    },
    hero: {
      h1: 'Facial aesthetic medicine',
      subtitle: 'Rejuvenate without stopping being yourself',
      lead: 'Medical treatments focused on improving skin quality and facial harmony in a natural and progressive way.',
      primaryCta: 'Request facial assessment',
      secondaryCta: 'Discover our medical criteria',
    },
    insight: {
      title: 'You want to look better while keeping your expression',
      body: 'Facial aesthetic medicine at AJ is designed to support facial harmony with subtle, progressive results aligned with your identity.',
    },
    medicalApproach: {
      title: 'Each treatment is defined from an assessment',
      body: 'We analyze facial structure, skin quality and aesthetic goals to build a plan adapted to each case.',
    },
    benefits: {
      title: 'Benefits of our facial approach',
      items: [
        'Progressive improvement of facial harmony.',
        'Brighter, more even and healthier-looking skin.',
        'Softening of expression lines.',
        'Natural results aligned with the patient identity.',
        'Visible improvement without an excessive effect.',
      ],
    },
    services: {
      title: 'Facial services',
      groups: [
        {
          subtitle: 'Harmonization and structure',
          services: [
            'Facial harmonization',
            'Upper-third facial harmonization',
            'Nasal contouring with hyaluronic acid',
            'Lip filler with hyaluronic acid',
            'Lip hydration with hyaluronic acid',
          ],
        },
        { subtitle: 'Expression and prevention', services: ['Botox'] },
        {
          subtitle: 'Skin quality and radiance',
          services: [
            'Facial IPL (3-session pack)',
            'IPL laser',
            'Facial radiofrequency (single session)',
            'Facial radiofrequency (5-session pack)',
            'Dermapen (3-session pack)',
            'Facial mesotherapy (1 session)',
            'Fillmed / Pinklla mesotherapy',
          ],
        },
        {
          subtitle: 'Specific areas',
          services: ['Under-eye mesotherapy (single session)', 'Under-eye mesotherapy (3-session pack)'],
        },
        { subtitle: 'Stimulation and regeneration', services: ['Biostimulators'] },
        {
          subtitle: 'Hygiene and maintenance',
          services: ['Facial hydrohygiene', 'Facial hydrohygiene + lymphatic drainage'],
        },
      ],
    },
    process: {
      title: 'Facial process',
      steps: ['Facial assessment', 'Diagnosis and priorities', 'Treatment plan', 'Follow-up'],
    },
    trust: {
      title: 'Our medical criteria',
      points: [
        'Results focused on naturalness.',
        'Treatments selected according to each case.',
        'Progressive and controlled evolution.',
      ],
    },
    finalCta: {
      h2: 'Start with a facial assessment',
      body: 'The goal is to define what your face needs and in what order to work on it.',
      primary: 'Request facial assessment',
    },
  },
  ca: {
    seo: {
      title: 'Medicina estetica facial - Clinica AJ',
      description: 'Tractaments facials medics amb un enfocament natural i progressiu adaptat a la teva identitat.',
    },
    hero: {
      h1: 'Medicina estetica facial',
      subtitle: 'Rejovenir sense deixar de ser tu',
      lead: "Tractaments medics orientats a millorar la qualitat de la pell i l'harmonia facial de manera natural i progressiva.",
      primaryCta: 'Sollicitar valoracio facial',
      secondaryCta: 'Coneix el nostre criteri medic',
    },
    insight: {
      title: 'Vols veuret millor, mantenint la teva expressio',
      body: "La medicina estetica facial a AJ busca acompanyar l'harmonia del rostre amb resultats subtils, progressius i coherents amb la teva identitat.",
    },
    medicalApproach: {
      title: 'Cada tractament es defineix a partir d una valoracio',
      body: 'Analitzem estructura facial, qualitat de la pell i objectiu estetic per construir un pla adaptat a cada cas.',
    },
    benefits: {
      title: 'Beneficis de lenfocament facial',
      items: [
        "Millora progressiva de l'harmonia facial.",
        'Pell mes lluminosa, uniforme i cuidada.',
        'Suavitzacio dels signes dexpressio.',
        'Resultats naturals i coherents amb la identitat del pacient.',
        'Millora visible sense sensacio dexces.',
      ],
    },
    services: {
      title: 'Serveis facials',
      groups: [
        {
          subtitle: 'Harmonitzacio i estructura',
          services: [
            'Harmonitzacio facial',
            'Harmonitzacio facial 1/3 superior',
            'Perfilat nasal amb acid hialuronic',
            'Farciment de llavis amb acid hialuronic',
            'Hidratacio de llavis amb acid hialuronic',
          ],
        },
        { subtitle: 'Expressio i prevencio', services: ['Botox'] },
        {
          subtitle: 'Qualitat de pell i lluminositat',
          services: [
            'IPL facial (pack 3 sessions)',
            'Laser IPL',
            'Radiofrequencia facial (sessio)',
            'Radiofrequencia facial (pack 5 sessions)',
            'Dermapen (pack 3 sessions)',
            'Mesoterapia facial (1 sessio)',
            'Mesoterapia Fillmed / Pinklla',
          ],
        },
        {
          subtitle: 'Zones especifiques',
          services: ['Mesoterapia dojeres (sessio)', 'Mesoterapia dojeres (pack 3 sessions)'],
        },
        { subtitle: 'Estimulacio i regeneracio', services: ['Bioestimuladors'] },
        {
          subtitle: 'Higiene i manteniment',
          services: ['Hidro-higiene facial', 'Hidro-higiene facial + drenatge limfatic'],
        },
      ],
    },
    process: {
      title: 'Proces facial',
      steps: ['Valoracio facial', 'Diagnostic i prioritats', 'Pla de tractament', 'Seguiment'],
    },
    trust: {
      title: 'El nostre criteri medic',
      points: [
        'Resultats orientats a la naturalitat.',
        'Tractaments seleccionats segons el cas.',
        'Evolucio progressiva i controlada.',
      ],
    },
    finalCta: {
      h2: 'Comenca amb una valoracio facial',
      body: 'Lobjectiu es definir que necessita el teu rostre i en quin ordre treballar-ho.',
      primary: 'Sollicitar valoracio facial',
    },
  },
  fr: {
    seo: {
      title: 'Medecine esthetique du visage - Clinique AJ',
      description: 'Traitements medicaux du visage avec une approche naturelle et progressive adaptee a votre identite.',
    },
    hero: {
      h1: 'Medecine esthetique du visage',
      subtitle: 'Rajeunir sans cesser detre vous',
      lead: 'Des traitements medicaux axes sur lamelioration de la qualite de la peau et de lharmonie du visage de facon naturelle et progressive.',
      primaryCta: 'Demander une evaluation du visage',
      secondaryCta: 'Connaitre notre critere medical',
    },
    insight: {
      title: 'Vous voulez paraitre mieux tout en gardant votre expression',
      body: "La medecine esthetique du visage chez AJ vise a accompagner lharmonie du visage avec des resultats subtils, progressifs et coherents avec votre identite.",
    },
    medicalApproach: {
      title: 'Chaque traitement est defini a partir dune evaluation',
      body: 'Nous analysons la structure du visage, la qualite de la peau et lobjectif esthetique pour construire un plan adapte a chaque cas.',
    },
    benefits: {
      title: 'Benefices de notre approche visage',
      items: [
        'Amelioration progressive de lharmonie du visage.',
        'Peau plus lumineuse, uniforme et soignee.',
        'Adoucissement des signes dexpression.',
        'Resultats naturels et coherents avec lidentite du patient.',
        'Amelioration visible sans sensation dexces.',
      ],
    },
    services: {
      title: 'Services visage',
      groups: [
        {
          subtitle: 'Harmonisation et structure',
          services: [
            'Harmonisation du visage',
            'Harmonisation du tiers superieur du visage',
            'Profilage nasal avec acide hyaluronique',
            'Comblement des levres avec acide hyaluronique',
            'Hydratation des levres avec acide hyaluronique',
          ],
        },
        { subtitle: 'Expression et prevention', services: ['Botox'] },
        {
          subtitle: 'Qualite de peau et eclat',
          services: [
            'IPL visage (pack 3 seances)',
            'Laser IPL',
            'Radiofrequence visage (seance)',
            'Radiofrequence visage (pack 5 seances)',
            'Dermapen (pack 3 seances)',
            'Mesotherapie visage (1 seance)',
            'Mesotherapie Fillmed / Pinklla',
          ],
        },
        {
          subtitle: 'Zones specifiques',
          services: ['Mesotherapie des cernes (seance)', 'Mesotherapie des cernes (pack 3 seances)'],
        },
        { subtitle: 'Stimulation et regeneration', services: ['Biostimulateurs'] },
        {
          subtitle: 'Hygiene et entretien',
          services: ['Hydro-hygiene visage', 'Hydro-hygiene visage + drainage lymphatique'],
        },
      ],
    },
    process: {
      title: 'Processus visage',
      steps: ['Evaluation du visage', 'Diagnostic et priorites', 'Plan de traitement', 'Suivi'],
    },
    trust: {
      title: 'Notre critere medical',
      points: [
        'Des resultats orientes vers la naturalite.',
        'Des traitements selectionnes selon chaque cas.',
        'Une evolution progressive et controlee.',
      ],
    },
    finalCta: {
      h2: 'Commencez par une evaluation du visage',
      body: 'Lobjectif est de definir ce dont votre visage a besoin et dans quel ordre le traiter.',
      primary: 'Demander une evaluation du visage',
    },
  },
};

