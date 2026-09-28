export const INITIAL_PROJECTS = [
  {
    id: 'citas-rolicode',
    title: 'Sistema de Gestión de Citas y Turnos',
    subtitle: 'Plataforma SaaS Multi-negocio en Tiempo Real',
    category: 'fullstack',
    categoryLabel: 'Fullstack & SaaS',
    badge: 'En Línea 🚀',
    badgeType: 'success',
    status: 'live',
    featured: true,
    liveUrl: 'https://citas.rolicode.com.mx',
    githubUrl: 'https://github.com/urielrg',
    summary: 'Aplicación web completa para agendamiento, gestión de servicios, asignación de profesionales, control de horarios y panel de administración.',
    description: 'Solución integral diseñada para negocios de servicios (clínicas, barberías, consultorios, estudios). Permite a los clientes reservar turnos de manera intuitiva y brinda a los administradores un panel de control con métricas de ocupación, cancelaciones y facturación estimada.',
    technologies: ['React 19', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Bootstrap', 'Vite'],
    metrics: [
      { label: 'Disponibilidad', value: '99.9%' },
      { label: 'Tiempo de Carga', value: '< 0.8s' },
      { label: 'Modo Oscuro', value: 'Soportado' },
      { label: 'Arquitectura', value: 'RESTful API' }
    ],
    features: [
      'Reserva de citas sin fricción en 3 sencillos pasos',
      'Panel de control administrativo con estadísticas en tiempo real',
      'Gestión de personal, horarios laborales y servicios configurables',
      'Autenticación basada en tokens JWT con control de roles (Admin/Staff)',
      'Diseño responsivo optimizado para smartphones y tablets',
      'Soporte nativo para tema claro y tema oscuro'
    ],
    architecture: {
      frontend: 'React 19 con componentes modulares, hooks personalizados y persistencia de sesión.',
      backend: 'Node.js con Express, middlewares de validación y seguridad CORS/Helmet.',
      database: 'PostgreSQL con índices optimizados para consultas de disponibilidad por fecha y hora.',
      deployment: 'Despliegue automatizado con SSL y dominio personalizado rolicode.com.mx.'
    }
  },
  {
    id: 'api-inventario-spring',
    title: 'API Empresarial de Inventario & Stock',
    subtitle: 'Microservicio de Alto Rendimiento para Retail',
    category: 'backend',
    categoryLabel: 'Backend & APIs',
    badge: 'Enterprise ⚡',
    badgeType: 'info',
    status: 'featured',
    featured: true,
    liveUrl: null,
    githubUrl: 'https://github.com/urielrg',
    summary: 'API RESTful robusta para gestión de almacenes múltiples, auditoría de transferencias de inventario y alertas automatizadas.',
    description: 'Sistema backend diseñado con arquitectura limpia (Clean Architecture) para empresas que manejan miles de SKU en diversas sucursales. Cuenta con trazabilidad completa, endpoints documentados con OpenAPI/Swagger y manejo estricto de concurrencia.',
    technologies: ['Java 21', 'Spring Boot 3', 'Spring Data JPA', 'PostgreSQL', 'Docker', 'Swagger / OpenAPI', 'JUnit 5'],
    metrics: [
      { label: 'Latencia Promedio', value: '45ms' },
      { label: 'Rendimiento', value: '+1.5k req/s' },
      { label: 'Cobertura Tests', value: '88%' },
      { label: 'Estándar', value: 'REST OpenAPI 3.0' }
    ],
    features: [
      'Control de existencias multi-sucursal con bloqueo optimista/pesimista para evitar sobreventas',
      'Registro inmutable de auditoría para cada entrada y salida de mercancía',
      'Documentación interactiva Swagger para rápida integración de clientes frontend y móviles',
      'Contenedorización Docker para despliegue ágil en cualquier nube o VPS',
      'Validación exhaustiva de payloads y manejo centralizado de excepciones'
    ],
    architecture: {
      frontend: 'Consumible por cualquier cliente web, móvil o sistema de punto de venta (POS).',
      backend: 'Spring Boot 3 en Java 21 utilizando Virtual Threads para alta concurrencia.',
      database: 'PostgreSQL con esquemas particionados y migraciones automatizadas con Flyway.',
      deployment: 'Imágenes Docker multicapa listas para Kubernetes o contenedores independientes.'
    }
  },
  {
    id: 'habitflow-mobile',
    title: 'HabitFlow - Rastreador de Hábitos',
    subtitle: 'Aplicación Móvil Nativa de Productividad',
    category: 'mobile',
    categoryLabel: 'Apps Móviles',
    badge: 'Mobile Native 📱',
    badgeType: 'warning',
    status: 'development',
    featured: true,
    liveUrl: null,
    githubUrl: 'https://github.com/urielrg',
    summary: 'App móvil para construcción de hábitos positivos, con rachas diarias, recordatorios contextuales y modo offline.',
    description: 'Aplicación orientada a mejorar la calidad de vida de las personas mediante el método de micro-hábitos. Diseñada con Kotlin y la moderna librería de interfaces Jetpack Compose, con sincronización automática al recuperar conexión.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Room DB', 'Firebase FCM', 'Clean MVVM'],
    metrics: [
      { label: 'Plataforma', value: 'Android Nativo' },
      { label: 'Modo Offline', value: '100% Funcional' },
      { label: 'Animaciones', value: '60 FPS fluido' },
      { label: 'Almacenamiento', value: 'Room SQLite' }
    ],
    features: [
      'Seguimiento visual de metas mediante calendarios de calor (heatmaps) y rachas',
      'Recordatorios inteligentes locales y notificaciones push vía Firebase',
      'Arquitectura offline-first con persistencia local en Room DB',
      'Animaciones y micro-interacciones creadas en Jetpack Compose',
      'Exportación y respaldo seguro de estadísticas personales'
    ],
    architecture: {
      frontend: 'UI declarativa moderna con Jetpack Compose y Material You 3.',
      backend: 'Sincronización en la nube mediante Cloud Functions y bases de datos NoSQL.',
      database: 'Room Database local con Flow reactivo para actualización instantánea de la UI.',
      deployment: 'Compilado firmado para Google Play Store con proguard/R8 optimizado.'
    }
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics & Sales Command Center',
    subtitle: 'Panel Administrativo de Métricas en Tiempo Real',
    category: 'web',
    categoryLabel: 'Desarrollo Web',
    badge: 'Dashboard 📊',
    badgeType: 'primary',
    status: 'live',
    featured: false,
    liveUrl: null,
    githubUrl: 'https://github.com/urielrg',
    summary: 'Dashboard analítico con gráficos interactivos, filtros dinámicos, exportación de reportes y monitoreo de KPIs.',
    description: 'Solución para directores y equipos de operaciones que necesitan consolidar datos de ventas, rendimiento de campañas y métricas de retención de clientes en un solo tablero visual y accionable.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind / Modern CSS', 'REST API', 'Vite'],
    metrics: [
      { label: 'Tiempo de render', value: 'Instantáneo' },
      { label: 'Exportación', value: 'CSV / PDF' },
      { label: 'Interactividad', value: 'Filtros dinámicos' },
      { label: 'Diseño', value: 'Data Density UI' }
    ],
    features: [
      'Visualización de ingresos mensuales, ticket promedio y tasas de conversión',
      'Filtros temporales por rango de fechas, regiones y canales de adquisición',
      'Generación de reportes ejecutivos descargables en un solo clic',
      'Diseño pensado para alta densidad de información sin saturar al usuario'
    ],
    architecture: {
      frontend: 'Arquitectura por componentes reutilizables con soporte para tablas paginadas.',
      backend: 'Conectores modulares a servicios de analítica y bases de datos relacionales.',
      database: 'Vistas materializadas y caché para consultas analíticas pesadas.',
      deployment: 'Optimizado para CDN global con carga diferida de gráficos.'
    }
  }
];

export const SERVICES_DATA = [
  {
    id: 'web-dev',
    title: 'Desarrollo Web & SaaS',
    shortDesc: 'Sitios web ultrarrápidos, plataformas interactivas y aplicaciones de una sola página (SPA).',
    description: 'Creamos experiencias digitales enfocadas en la conversión, velocidad y diseño de vanguardia. Desde landing pages comerciales hasta aplicaciones empresariales complejas.',
    techs: ['React', 'JavaScript / TypeScript', 'HTML5 / CSS3', 'Vite', 'Bootstrap / Tailwind'],
    highlights: ['Diseño 100% responsivo para móviles', 'Optimización SEO y Core Web Vitals', 'Integración de pasarelas de pago y formularios']
  },
  {
    id: 'backend-dev',
    title: 'Backend, Microservicios & APIs',
    shortDesc: 'Arquitecturas robustas, seguras y escalables para soportar el crecimiento de tu negocio.',
    description: 'Diseño y desarrollo de APIs RESTful de alta velocidad, integración de bases de datos relacionales y NoSQL, autenticación segura y lógica de negocio crítica.',
    techs: ['Node.js & Express', 'Java & Spring Boot', 'PostgreSQL', 'SQL / JPA', 'Docker'],
    highlights: ['Microservicios modulares y desacoplados', 'Seguridad con JWT, OAuth y hashing seguro', 'Consultas SQL optimizadas para alto volumen']
  },
  {
    id: 'mobile-dev',
    title: 'Aplicaciones Móviles',
    shortDesc: 'Apps nativas y modernas centradas en una experiencia de usuario fluida e intuitiva.',
    description: 'Desarrollo de aplicaciones móviles orientadas a rendimiento nativo, notificaciones en tiempo real, persistencia local offline y diseño pulido.',
    techs: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Firebase', 'Room SQLite'],
    highlights: ['Experiencia nativa fluida a 60/120 FPS', 'Modo offline y sincronización en la nube', 'Integración de notificaciones push y cámara']
  },
  {
    id: 'devops-cloud',
    title: 'Despliegue & Consultoría Cloud',
    shortDesc: 'Puesta en producción, configuración de dominios, SSL, servidores y CI/CD continuo.',
    description: 'Nos aseguramos de que tus aplicaciones estén siempre disponibles, seguras y protegidas con certificados SSL, dominios propios y despliegues sin interrupciones.',
    techs: ['Linux VPS', 'Vercel / Netlify', 'Docker', 'Nginx', 'SSL / HTTPS'],
    highlights: ['Configuración de dominios como rolicode.com.mx', 'Monitoreo de disponibilidad y respaldos', 'Automatización de builds y entregas continuas']
  }
];
