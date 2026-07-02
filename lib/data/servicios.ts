export type Servicio = {
  slug: string;
  titulo: string;
  subtitulo: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  descripcionLarga: string;
  tiposDeObras: string[];
  beneficios: string[];
  proceso: string[];
};

export const serviciosData: Servicio[] = [
  {
    slug: "obras-civiles",
    titulo: "Obras Civiles",
    subtitulo: "Obras civiles integrales con enfoque técnico y sostenible",
    metaTitle: "Construcción y Obras Civiles en Perú | Consultoría Lázaro",
    metaDescription: "Especialistas en ejecución y gerencia de obras civiles, infraestructura vial y edificaciones. Garantizamos calidad y cumplimiento de normativas de ingeniería civil en Perú.",
    heroImage: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    descripcionLarga: "En Consultoría Lázaro, gestionamos y ejecutamos proyectos de construcción desde la etapa inicial hasta la entrega final. Aseguramos calidad, seguridad y estricto cumplimiento normativo en cada proceso constructivo, aplicando ingeniería de precisión para resultados duraderos.",
    tiposDeObras: [
      "Construcción de edificaciones urbanas, comerciales e industriales",
      "Obras de infraestructura vial: pistas, veredas, drenajes y pavimentación",
      "Ejecución de redes de saneamiento, agua potable y alcantarillado",
      "Reforzamiento estructural y remodelación profunda de edificaciones",
      "Obras complementarias para habilitaciones urbanas"
    ],
    beneficios: [
      "Supervisión técnica continua y cumplimiento estricto de plazos",
      "Uso de materiales certificados que garantizan durabilidad",
      "Personal técnico calificado con experiencia comprobada en obras",
      "Informes de avance semanales y control presupuestal transparente",
      "Compromiso total con la seguridad ocupacional y sostenibilidad ambiental"
    ],
    proceso: [
      "1️⃣ Diagnóstico estructural y levantamiento topográfico de la zona",
      "2️⃣ Elaboración de planos técnicos, metrados y presupuestos detallados",
      "3️⃣ Ejecución de obra con cuadrillas especializadas y control de calidad",
      "4️⃣ Supervisión técnica, seguimiento y cumplimiento del cronograma",
      "5️⃣ Entrega, validación de ingeniería y cierre formal del proyecto"
    ]
  },
  {
    slug: "levantamientos-topograficos",
    titulo: "Topografía de Precisión",
    subtitulo: "Levantamientos topográficos con tecnología avanzada",
    metaTitle: "Topografía y Levantamientos Topográficos LIDAR | Consultoría Lázaro",
    metaDescription: "Servicios de topografía de alta precisión, vuelos fotogramétricos con drones y tecnología LIDAR. Planos georreferenciados para ingeniería y construcción.",
    heroImage: "https://images.unsplash.com/photo-1602492576369-1c9f52f36b7f?q=80&w=2070&auto=format&fit=crop",
    descripcionLarga: "Proveemos servicios de levantamiento topográfico de alta precisión utilizando estaciones totales de última generación, GPS diferencial y tecnología LIDAR aerotransportada. Nuestros datos garantizan un diseño geométrico perfecto y un control de obra sin margen de error.",
    tiposDeObras: [
      "Levantamientos topográficos altimétricos y planimétricos",
      "Fotogrametría aérea con drones y restitución fotogramétrica",
      "Topografía para parcelaciones, independizaciones y lotizaciones",
      "Control y replanteo de obras de infraestructura vial e hidráulica",
      "Levantamientos batimétricos para proyectos acuáticos"
    ],
    beneficios: [
      "Precisión milimétrica en la toma de coordenadas y cotas",
      "Procesamiento rápido de datos mediante software especializado",
      "Generación de modelos digitales del terreno (MDT) en 3D",
      "Planos georreferenciados compatibles con normativas de registros públicos",
      "Equipos calibrados y con certificación vigente"
    ],
    proceso: [
      "1️⃣ Coordinación y definición de linderos con los propietarios",
      "2️⃣ Posicionamiento de puntos de control con GPS Diferencial (GNSS)",
      "3️⃣ Levantamiento de campo con Estación Total o Drone LIDAR",
      "4️⃣ Procesamiento de datos en gabinete (Civil 3D, AutoCAD)",
      "5️⃣ Emisión de planos firmados por ingeniero colegiado"
    ]
  },
  {
    slug: "saneamiento-legal",
    titulo: "Saneamiento Legal",
    subtitulo: "Regularización técnico-legal de propiedades",
    metaTitle: "Saneamiento Físico Legal de Predios y Habilitaciones | Consultoría Lázaro",
    metaDescription: "Servicio experto en saneamiento físico legal de predios urbanos y rurales. Declaratoria de fábrica, independizaciones y trámites en registros públicos.",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2071&auto=format&fit=crop",
    descripcionLarga: "El saneamiento físico legal es fundamental para otorgar seguridad jurídica a sus propiedades. En Consultoría Lázaro, nos encargamos de la regularización técnica y legal de predios urbanos y rústicos, eliminando contingencias e inscribiendo su derecho de propiedad de forma definitiva.",
    tiposDeObras: [
      "Trámite de Declaratoria de Fábrica y Regularización de Edificaciones",
      "Independización, subdivisión y acumulación de predios",
      "Proyectos de Habilitación Urbana integral",
      "Inscripción de títulos y saneamiento de linderos ante SUNARP",
      "Prescripción adquisitiva de dominio y rectificación de áreas"
    ],
    beneficios: [
      "Evita multas municipales y conflictos de límites vecinales",
      "Incrementa significativamente el valor comercial del inmueble",
      "Facilita la obtención de créditos hipotecarios o financiamientos",
      "Gestión integral: unimos el aspecto legal con el levantamiento técnico",
      "Acompañamiento hasta la inscripción final en Registros Públicos"
    ],
    proceso: [
      "1️⃣ Estudio de títulos y diagnóstico técnico-legal inicial",
      "2️⃣ Levantamiento topográfico y elaboración de planos de situación",
      "3️⃣ Armado de expedientes técnicos para el municipio o notaría",
      "4️⃣ Seguimiento y levantamiento de observaciones registrales",
      "5️⃣ Entrega de título inscrito y partida registral saneada"
    ]
  },
  {
    slug: "gerencia",
    titulo: "Gerencia de Proyectos",
    subtitulo: "Gestión integral bajo estándares PMI para el control de tiempos",
    metaTitle: "Gerencia de Proyectos de Construcción PMI | Consultoría Lázaro",
    metaDescription: "Gerencia de proyectos de ingeniería y construcción. Control de cronogramas, presupuestos, calidad y riesgos bajo metodologías PMI y Lean Construction.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f35aa27?q=80&w=2070&auto=format&fit=crop",
    descripcionLarga: "Nuestra gerencia de proyectos asegura que su obra se ejecute dentro del presupuesto, a tiempo y con la calidad estipulada. Aplicamos las mejores prácticas del Project Management Institute (PMI) y metodologías ágiles (Lean Construction) para maximizar el valor de su inversión.",
    tiposDeObras: [
      "Gerencia integral (PMO) para proyectos inmobiliarios",
      "Control y administración de contratos de construcción",
      "Gestión de procura y licitaciones para contratistas",
      "Auditoría técnica y financiera de obras en ejecución",
      "Gestión de riesgos e integración de interesados (Stakeholders)"
    ],
    beneficios: [
      "Reducción significativa de sobrecostos e imprevistos",
      "Cumplimiento garantizado del cronograma maestro (Gantt)",
      "Centralización de las comunicaciones técnicas y legales",
      "Toma de decisiones basada en reportes de KPIs objetivos",
      "Optimización de recursos materiales y humanos"
    ],
    proceso: [
      "1️⃣ Definición del alcance, presupuesto base y cronograma maestro",
      "2️⃣ Selección de proveedores y proceso de licitación transparente",
      "3️⃣ Monitoreo diario mediante herramientas de control de proyectos",
      "4️⃣ Reuniones de seguimiento y mitigación activa de riesgos",
      "5️⃣ Liquidación técnica-financiera y entrega del dossier de calidad"
    ]
  },
  {
    slug: "geotecnia",
    titulo: "Geotecnia y Suelos",
    subtitulo: "Estudios de mecánica de suelos e ingeniería geotécnica",
    metaTitle: "Estudio Mecánica de Suelos y Geotecnia | Consultoría Lázaro",
    metaDescription: "Servicios de geotecnia, exploración de subsuelo, calicatas, y análisis de cimentaciones para asegurar la estabilidad de edificaciones y obras viales.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
    descripcionLarga: "Un diseño estructural seguro comienza conociendo el terreno. Realizamos estudios de mecánica de suelos y geotecnia que determinan la capacidad portante y los perfiles estratigráficos del subsuelo, garantizando que sus cimientos sean seguros frente a cargas estáticas y sísmicas.",
    tiposDeObras: [
      "Exploración geotécnica mediante calicatas y perforaciones",
      "Ensayos de laboratorio (Granulometría, Límites de Atterberg, CBR)",
      "Diseño geotécnico de cimentaciones superficiales y profundas",
      "Análisis de estabilidad de taludes y diseño de muros de contención",
      "Estudios de riesgo sísmico y licuefacción de suelos"
    ],
    beneficios: [
      "Garantiza el cumplimiento de la norma E.050 de Suelos y Cimentaciones",
      "Evita asentamientos diferenciales y fallas estructurales a futuro",
      "Optimiza el diseño estructural, ahorrando acero y concreto",
      "Identificación temprana de niveles freáticos agresivos",
      "Resultados precisos emitidos por laboratorios certificados"
    ],
    proceso: [
      "1️⃣ Inspección ocular del sitio y diseño del plan de exploración",
      "2️⃣ Ejecución de calicatas y ensayos in-situ (SPT, DPL, Cono Dinámico)",
      "3️⃣ Obtención de muestras y ensayos físicos/mecánicos en laboratorio",
      "4️⃣ Análisis geotécnico y cálculo de la capacidad admisible del terreno",
      "5️⃣ Emisión del informe final con recomendaciones de cimentación"
    ]
  },
  {
    slug: "supervision",
    titulo: "Supervisión de Obra",
    subtitulo: "Control exhaustivo en campo para asegurar los expedientes técnicos",
    metaTitle: "Supervisión de Obras Civiles y Control de Calidad | Consultoría Lázaro",
    metaDescription: "Supervisión técnica de obras civiles, asegurando el cumplimiento de planos, especificaciones y calidad de materiales para el éxito del proyecto.",
    heroImage: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=2070&auto=format&fit=crop",
    descripcionLarga: "Asumimos el rol de sus ojos y oídos en la obra. Nuestro equipo de ingenieros supervisores garantiza que la construcción se ejecute estrictamente según los planos aprobados, el Reglamento Nacional de Edificaciones (RNE) y las mejores normas de calidad y seguridad de la industria.",
    tiposDeObras: [
      "Supervisión de obras públicas y privadas",
      "Control de calidad de materiales (concreto, acero, agregados)",
      "Revisión y aprobación de valorizaciones del contratista",
      "Resolución técnica de interferencias o consultas de diseño (RFI)",
      "Auditorías de seguridad en obra (SSOMA)"
    ],
    beneficios: [
      "Protege su inversión evitando vicios ocultos y malas prácticas",
      "Validación imparcial de los avances de obra para pagos justos",
      "Trazabilidad absoluta de cambios en el proyecto (As-Built)",
      "Solución técnica inmediata a problemas encontrados en el campo",
      "Asegura la operatividad y vida útil proyectada de la infraestructura"
    ],
    proceso: [
      "1️⃣ Revisión crítica del expediente técnico y planos antes de iniciar",
      "2️⃣ Aprobación del cronograma y trazo inicial en el terreno",
      "3️⃣ Control diario de protocolos (vaciados de concreto, soldaduras, etc)",
      "4️⃣ Elaboración de informes semanales y aprobación de hitos",
      "5️⃣ Firma del acta de recepción, dossier de calidad y liquidación"
    ]
  },
  {
    slug: "tasaciones-valorizaciones",
    titulo: "Tasaciones Inmobiliarias",
    subtitulo: "Determinación del valor comercial real con rigor pericial",
    metaTitle: "Tasaciones de Inmuebles y Valorizaciones Periciales | Consultoría Lázaro",
    metaDescription: "Servicio de tasación comercial de inmuebles, terrenos y maquinarias. Informes periciales firmados por tasadores autorizados del ministerio de vivienda.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop",
    descripcionLarga: "Conocer el valor real de sus activos es vital para transacciones comerciales, garantías financieras o distribuciones societarias. Nuestros peritos tasadores inscritos en el Ministerio de Vivienda aplican metodologías reconocidas por el Reglamento Nacional de Tasaciones.",
    tiposDeObras: [
      "Tasación comercial de viviendas, oficinas y locales comerciales",
      "Valorización de terrenos eriazos, agrícolas y expansión urbana",
      "Tasación de plantas industriales, almacenes y maquinaria pesada",
      "Peritajes judiciales y tasaciones con fines tributarios",
      "Estudios de Mayor y Mejor Uso (HBU) para terrenos"
    ],
    beneficios: [
      "Informes técnicos con total validez ante bancos e instituciones",
      "Metodología objetiva (comparación, reposición o rentabilidad)",
      "Identificación de factores que devalúan o aprecian la propiedad",
      "Confidencialidad absoluta en el manejo de su información",
      "Aceleración de procesos de compraventa, hipotecas o fusiones"
    ],
    proceso: [
      "1️⃣ Revisión de la documentación registral, municipal y cargas",
      "2️⃣ Inspección técnica ocular y levantamiento fotográfico del activo",
      "3️⃣ Estudio de mercado de la zona e identificación de propiedades testigo",
      "4️⃣ Aplicación de fórmulas de depreciación y cálculos periciales",
      "5️⃣ Emisión del informe final de tasación visado por perito registrado"
    ]
  }
];

export function getServicioBySlug(slug: string): Servicio | undefined {
  return serviciosData.find((s) => s.slug === slug);
}
