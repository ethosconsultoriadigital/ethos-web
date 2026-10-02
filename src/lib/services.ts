export type ServiceGroup = "continuo" | "proyecto";

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  number: string;
  slug: string;
  name: string;
  group: ServiceGroup;
  badge: string;
  hook: string;
  problem: string;
  benefits: string[];
  audience: string;
  faqs: ServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
  whatsappText: string;
  image?: string;
}

/** Respuesta estándar a la pregunta de costo (sin precios). */
export const SERVICE_COST_ANSWER =
  "Cada propuesta se elabora a la medida de su alcance y objetivos. La presentamos en una consulta confidencial, sin compromiso.";

const costFaq = (): ServiceFAQ => ({
  q: "¿Cuánto cuesta?",
  a: SERVICE_COST_ANSWER,
});

/**
 * Catálogo único de los 10 servicios ETHOS.
 * Fuente de verdad para /servicios, páginas individuales e inicio.
 */
export const catalogServices: Service[] = [
  {
    number: "01",
    slug: "monitoreo-de-medios",
    name: "Monitoreo de medios y reputación",
    group: "continuo",
    badge: "Servicio continuo",
    hook: "Sepa cada mañana qué se publica sobre su marca, en qué tono y con qué riesgo.",
    problem:
      "Una nota negativa que se detecta tarde se convierte en crisis. La mayoría de las empresas se entera por un tercero, cuando la información ya circuló.",
    benefits: [
      "Seguimiento de medios nacionales y digitales, todo el día, con los temas que usted defina.",
      "Resumen ejecutivo en su correo a las 6:00 a. m., con el riesgo señalado.",
      "Alerta por WhatsApp cuando surge una nota relevante, solo a los contactos que usted autorice.",
      "Reportes semanales y mensuales, con comparativo frente a los competidores que usted elija.",
    ],
    audience: "Empresas, marcas y equipos de comunicación.",
    faqs: [
      {
        q: "¿Qué medios cubren?",
        a: "Medios nacionales, regionales y digitales, configurados según los temas y palabras clave de cada cliente.",
      },
      {
        q: "¿Cómo recibo la información?",
        a: "Por correo cada mañana, con alertas por WhatsApp a los contactos que usted autorice y reportes periódicos. Cualquier destinatario puede darse de baja en todo momento.",
      },
      costFaq(),
    ],
    seoTitle: "Monitoreo de medios y reputación en México | ETHOS",
    seoDescription:
      "Seguimiento de medios con resumen diario a las 6 a. m. y alertas por WhatsApp para empresas en México. Consulta confidencial.",
    whatsappText:
      "Hola, me interesa el servicio de Monitoreo de medios y reputación.",
    image: "/images/colocacion-contenido.png",
  },
  {
    number: "02",
    slug: "inteligencia-regulatoria",
    name: "Inteligencia regulatoria",
    group: "continuo",
    badge: "Servicio continuo",
    hook: "Entérese a tiempo de los cambios normativos que tocan a su industria.",
    problem:
      "Las normas estatales y municipales cambian sin aviso, y el DOF por sí solo no alcanza. Enterarse tarde significa reaccionar con prisa o incumplir.",
    benefits: [
      "Revisión en días hábiles del DOF y de los periódicos oficiales de las entidades que usted elija.",
      "Tres cortes al día, incluida la lectura de documentos escaneados.",
      "Aviso de propuestas normativas en discusión relacionadas con su sector.",
      "Lectura de impacto para su equipo jurídico: qué le aplica y a qué dar seguimiento.",
    ],
    audience: "Áreas jurídicas, de cumplimiento y de asuntos corporativos.",
    faqs: [
      {
        q: "¿Qué publicaciones oficiales cubren?",
        a: "El DOF y los periódicos oficiales de entidades como Jalisco, Ciudad de México y Nuevo León, además de gacetas legislativas.",
      },
      {
        q: "¿Sustituye la asesoría legal?",
        a: "No. Cada aviso incluye una lectura de impacto para que su equipo jurídico decida; no constituye opinión legal.",
      },
      costFaq(),
    ],
    seoTitle: "Monitoreo DOF y normativa estatal | ETHOS",
    seoDescription:
      "Revisión en días hábiles del DOF y periódicos oficiales estatales, con lectura de impacto para su equipo jurídico.",
    whatsappText:
      "Hola, me interesa el servicio de Inteligencia regulatoria.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    slug: "entorno-operativo",
    name: "Monitoreo de entorno operativo",
    group: "continuo",
    badge: "Servicio continuo",
    hook: "Conozca a tiempo lo que se publica sobre su planta, obra o centro de operación.",
    problem:
      "Los temas de convivencia con el entorno suelen aparecer primero en medios locales y fuentes públicas. Conocerlos a tiempo permite atenderlos con diálogo antes de que afecten la operación.",
    benefits: [
      "Seguimiento de lo que se publica en medios locales y fuentes públicas sobre su sitio.",
      "Temas de convivencia con el entorno: movilidad, ruido y operación diaria.",
      "Reporte con nivel de riesgo reputacional y seguimiento diario.",
      "Portal propio para administrar temas y destinatarios.",
    ],
    audience: "Industria, construcción, manufactura y operación en sitio.",
    faqs: [
      {
        q: "¿Para qué tipo de sitios funciona?",
        a: "Plantas, obras, centros de distribución y cualquier operación con impacto en su zona de influencia.",
      },
      {
        q: "¿Qué fuentes usan?",
        a: "Solo información publicada en fuentes públicas. Los reportes son agregados: no se elaboran perfiles de personas.",
      },
      costFaq(),
    ],
    seoTitle: "Monitoreo de entorno para plantas y obras | ETHOS",
    seoDescription:
      "Conozca lo que se publica sobre su planta u obra en medios locales y fuentes públicas, con nivel de riesgo y seguimiento diario.",
    whatsappText:
      "Hola, me interesa el servicio de Monitoreo de entorno operativo.",
    image: "/images/arquitectura-corporativa.png",
  },
  {
    number: "04",
    slug: "automatizacion-de-redes",
    name: "Automatización de redes sociales",
    group: "continuo",
    badge: "Acceso anticipado · Beta",
    hook: "Su calendario, textos y piezas del mes, listos para aprobar.",
    problem:
      "Las herramientas tradicionales solo programan lo que usted ya escribió. Crear el contenido de cada mes sigue consumiendo horas de su equipo.",
    benefits: [
      "Propone el calendario, los textos y los guiones del mes con apoyo de inteligencia artificial.",
      "Arma las piezas sobre sus propias plantillas en Canva.",
      "Programa, publica y da seguimiento a los comentarios en las redes conectadas.",
      "Nada se publica sin la revisión y aprobación de su equipo.",
    ],
    audience: "Agencias, equipos de marketing y marcas con varias cuentas.",
    faqs: [
      {
        q: "¿En qué redes publica?",
        a: "Hoy opera en Facebook, Instagram y X; otras redes se integran de forma progresiva. Es una versión beta en acceso anticipado.",
      },
      {
        q: "¿Usa inteligencia artificial?",
        a: "Sí, para proponer textos y piezas. Todo contenido pasa por la revisión y aprobación de su equipo antes de publicarse.",
      },
      costFaq(),
    ],
    seoTitle: "Automatización de contenido para redes | ETHOS",
    seoDescription:
      "Calendario, textos y piezas del mes generados sobre sus plantillas de Canva, con aprobación humana antes de publicar. Acceso anticipado.",
    whatsappText:
      "Hola, me interesa el acceso anticipado a la Automatización de redes sociales.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "05",
    slug: "due-diligence",
    name: "Due diligence e investigación",
    group: "proyecto",
    badge: "Por proyecto",
    hook: "Antes de firmar, invertir o contratar: conozca a su contraparte.",
    problem:
      "Firmar con una contraparte que no se revisó a fondo puede costar más que el propio contrato. La información existe, pero hay que encontrarla y conectarla.",
    benefits: [
      "Revisión de antecedentes en prensa, registros y fuentes públicas.",
      "Análisis corporativo: estructura, empresas vinculadas y litigios públicos.",
      "Matriz de riesgo con cada fuente documentada.",
      "Investigación de grupos de empresas conectadas en un solo mapa.",
    ],
    audience: "Direcciones generales, jurídicas, de compras e inversión.",
    faqs: [
      {
        q: "¿Qué fuentes utilizan?",
        a: "Solo fuentes públicas y registros de acceso público, con anexo de fuentes en cada reporte. El servicio no incluye cruce con listas internacionales de sanciones.",
      },
      {
        q: "¿Cuánto tarda?",
        a: "Depende del alcance; se define con fecha cerrada en la propuesta.",
      },
      costFaq(),
    ],
    seoTitle: "Due diligence empresarial en México | ETHOS",
    seoDescription:
      "Investigación de contrapartes antes de firmar o invertir: estructura corporativa, litigios, prensa y matriz de riesgo documentada.",
    whatsappText:
      "Hola, me interesa el servicio de Due diligence e investigación.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "06",
    slug: "radiografia-digital",
    name: "Radiografía estratégica digital",
    group: "proyecto",
    badge: "Por proyecto",
    hook: "Dónde está parada su marca o su liderazgo en digital, y qué hacer en los próximos 90 días.",
    problem:
      "Tener presencia digital no es lo mismo que tener reputación. Sin un diagnóstico claro, cada publicación es una apuesta.",
    benefits: [
      "Índice de desempeño digital y análisis red por red.",
      "Conversación pública, narrativas, tono y riesgos detectados.",
      "Comparativo frente a sus referentes del sector.",
      "Plan por etapas a 90 días y protocolo básico de crisis.",
    ],
    audience: "Directivos, voceros, marcas personales y organizaciones.",
    faqs: [
      {
        q: "¿Qué incluye el plan?",
        a: "Acciones en tres etapas (0–15, 16–45 y 46–90 días) y un protocolo básico de crisis.",
      },
      {
        q: "¿Se puede hacer de una sola red?",
        a: "Sí, el alcance se ajusta a sus necesidades.",
      },
      costFaq(),
    ],
    seoTitle: "Diagnóstico de reputación digital | ETHOS",
    seoDescription:
      "Radiografía de su presencia digital: desempeño por red, tono, riesgos y plan de acción a 90 días para marcas y líderes.",
    whatsappText: "Hola, me interesa la Radiografía estratégica digital.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "07",
    slug: "estudios-de-mercado",
    name: "Estudios de mercado",
    group: "proyecto",
    badge: "Por proyecto",
    hook: "Decida si un producto o una plaza valen la inversión, con información en días hábiles.",
    problem:
      "Abrir una plaza o lanzar un producto sin datos es decidir a ciegas. Los estudios tradicionales tardan meses en entregarse.",
    benefits: [
      "Dimensionamiento del mercado, perfil del consumidor y canales.",
      "Análisis de la competencia y de su posicionamiento.",
      "FODA y plan de acción a 30, 60 y 90 días.",
      "Estudio de gabinete con fuentes documentadas; trabajo de campo opcional.",
    ],
    audience: "Empresas en expansión, emprendedores e inversionistas.",
    faqs: [
      {
        q: "¿Incluye trabajo de campo?",
        a: "El estudio es de gabinete, con fuentes documentales. El trabajo de campo es opcional y se define por separado.",
      },
      {
        q: "¿Qué entregan?",
        a: "Un documento por capítulos con mercado, consumidor, canales, competencia, FODA y plan de acción.",
      },
      costFaq(),
    ],
    seoTitle: "Estudios de mercado en Guadalajara y México | ETHOS",
    seoDescription:
      "Estudios de mercado de gabinete con tamaño de mercado, consumidor, competencia, FODA y plan a 90 días, entregados en días hábiles.",
    whatsappText: "Hola, me interesa un Estudio de mercado.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "08",
    slug: "mapa-de-mercado-b2b",
    name: "Mapa de mercado B2B",
    group: "proyecto",
    badge: "Por proyecto",
    hook: "No es una base de datos: es investigación aplicada a su prospección.",
    problem:
      "Las bases de datos genéricas llenan el CRM de registros que nadie contacta. Su equipo comercial necesita saber a quién buscar primero y por qué.",
    benefits: [
      "Universo de empresas por giro, canal, municipio y zona, sin duplicados.",
      "Nivel de ajuste con su cliente ideal y prioridad de acercamiento.",
      "Notas comerciales y fuentes verificables por empresa.",
      "Información de empresas, no bases de datos personales.",
    ],
    audience: "Equipos comerciales, distribuidores y empresas B2B.",
    faqs: [
      {
        q: "¿En qué se diferencia de comprar una base?",
        a: "Cada empresa se investiga y se califica según su cliente ideal, con motivo y prioridad de acercamiento. No se venden datos personales.",
      },
      {
        q: "¿Qué zonas cubren?",
        a: "Cualquier zona de México, definida por giro, canal y municipio.",
      },
      costFaq(),
    ],
    seoTitle: "Prospección B2B calificada | ETHOS",
    seoDescription:
      "Mapa de mercado B2B: empresas investigadas y calificadas por ajuste, con prioridad de acercamiento y fuentes verificables.",
    whatsappText: "Hola, me interesa el Mapa de mercado B2B.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "09",
    slug: "valuacion-de-activos-publicitarios",
    name: "Valuación de activos publicitarios",
    group: "proyecto",
    badge: "Por proyecto",
    hook: "Convierta un activo urbano en un medio con valor comercial.",
    problem:
      "Parabuses, puentes o sistemas de bicicleta tienen audiencia, pero rara vez un valor comercial medido. Sin él, no se puede negociar con anunciantes.",
    benefits: [
      "Perfil demográfico agregado de la zona y del flujo de personas.",
      "Inventario convertido en unidades medibles de exposición.",
      "Paquetes comerciales y escenarios de aprovechamiento.",
      "Modelo listo para presentar a anunciantes y socios.",
    ],
    audience:
      "Operadores de mobiliario urbano, desarrolladores y dueños de espacios.",
    faqs: [
      {
        q: "¿Qué tipo de activos valúan?",
        a: "Mobiliario urbano, espacios en inmuebles, puentes, sistemas de movilidad y otros espacios con exposición.",
      },
      {
        q: "¿Qué recibo al final?",
        a: "Un modelo de monetización con inventario medido y paquetes comerciales.",
      },
      costFaq(),
    ],
    seoTitle: "Valuación de espacios publicitarios | ETHOS",
    seoDescription:
      "Convertimos activos urbanos en medios con valor comercial: perfil de audiencia, unidades de exposición y modelo de monetización.",
    whatsappText:
      "Hola, me interesa la Valuación de activos publicitarios.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "10",
    slug: "desarrollo-de-software",
    name: "Desarrollo de software a la medida",
    group: "proyecto",
    badge: "Por proyecto",
    hook: "Herramientas digitales hechas para su operación, con acompañamiento uno a uno.",
    problem:
      "Las herramientas genéricas obligan a su equipo a adaptarse al software, y no al revés. Los procesos manuales y los sistemas desconectados consumen tiempo que su operación necesita.",
    benefits: [
      "Diagnóstico de sus procesos y definición conjunta del alcance.",
      "Plataformas web, automatizaciones e integraciones hechas a la medida.",
      "Asesoría personalizada, uno a uno, durante todo el proyecto.",
      "Entregas por etapas, con documentación y capacitación para su equipo.",
    ],
    audience:
      "Empresas y organizaciones que necesitan digitalizar sus procesos.",
    faqs: [
      {
        q: "¿Qué tipo de software desarrollan?",
        a: "Plataformas web, paneles internos, automatizaciones e integraciones entre sistemas, según lo que defina el diagnóstico.",
      },
      {
        q: "¿Cómo funciona la asesoría uno a uno?",
        a: "Un responsable da seguimiento directo a su proyecto, con sesiones periódicas y entregas por etapas que usted revisa y aprueba.",
      },
      costFaq(),
    ],
    seoTitle: "Desarrollo de software a la medida en México | ETHOS",
    seoDescription:
      "Plataformas web, automatizaciones e integraciones a la medida, con asesoría personalizada uno a uno y entregas por etapas.",
    whatsappText:
      "Hola, me interesa el servicio de Desarrollo de software a la medida.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return catalogServices.find((service) => service.slug === slug);
}

export function getServicesByGroup(group: ServiceGroup): Service[] {
  return catalogServices.filter((service) => service.group === group);
}

export function getRelatedServices(
  service: Service,
  limit = 3
): Service[] {
  return catalogServices
    .filter((item) => item.group === service.group && item.slug !== service.slug)
    .slice(0, limit);
}

/** Slugs destacados en el inicio (Fase 5): 01, 05, 07, 10, 02, 06 */
export const featuredHomeServiceSlugs = [
  "monitoreo-de-medios",
  "due-diligence",
  "estudios-de-mercado",
  "desarrollo-de-software",
  "inteligencia-regulatoria",
  "radiografia-digital",
] as const;

export function getFeaturedHomeServices(): Service[] {
  return featuredHomeServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is Service => Boolean(service));
}

// TODO: confirmar con Dirección si se mantiene
export const SHOW_CYBERSECURITY = true;

/** Tarjeta legacy de ciberseguridad (visible solo si SHOW_CYBERSECURITY). */
export const cybersecurityLegacyCard = {
  title: "Ciberseguridad y datos",
  description:
    "Asesoría en protección de información sensible y mitigación de vulnerabilidades reputacionales vinculadas a datos.",
  image:
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
} as const;
