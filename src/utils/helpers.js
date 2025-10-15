//#region MOTIONS
export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const cascadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay: delay * 0.1 },
});

export const cascadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay: delay * 0.1 },
});

export const cascadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay: delay * 0.1 },
});
//#endregion

// export const contenidos = [
//   {
//     // id: 0,
//     // title: "Aplicaciones web",
//     // paragraphs: [
//     //   "Nuestro servicio integral de desarrollo de aplicaciones web abarca todas las etapas del proceso: planeación, diseño, desarrollo, publicación y mantenimiento. Trabajamos de manera estructurada y estratégica para asegurar que cada proyecto cumpla con los más altos estándares de calidad, seguridad y rendimiento.",
//     //   "Nos enfocamos en construir soluciones web sólidas, escalables y personalizadas, adaptadas a las necesidades y objetivos de cada cliente. Acompañamos todo el ciclo de vida de la aplicación, brindando soporte técnico, actualizaciones y optimización constante para garantizar la continuidad y el crecimiento digital de su negocio.",
//     // ],
//     // strong: "Transformamos Ideas en Plataformas Digitales Eficientes.",
//     video:
//       "https://res.cloudinary.com/djlxlz9y3/video/upload/v1760411529/webPage_coyj06.mov",

//     imgPrincipal:
//       "https://img.freepik.com/free-photo/technology-hologram-indoors_23-2151833348.jpg",
//     imgSecondario:
//       "https://img.freepik.com/premium-photo/businessman-holding-app-template-smartphone_110893-1080.jpg",
//     imgTerciario:
//       "https://img.freepik.com/premium-photo/web-page-open-about-online-language_1288529-3827.jpg",
//     // label: "Aplicaciones web",
//   },
//   {
//     // id: 1,
//     // title: "Mantenimiento y soporte",
//     // paragraphs: [
//     //   "En nuestra empresa ofrecemos servicios completos de mantenimiento y soporte para tu sitio web o aplicación, asegurando que siempre funcione de manera óptima y segura. Nos encargamos de actualizaciones, corrección de errores, optimización de rendimiento y adaptación a nuevas tecnologías, para que tu presencia digital nunca se vea comprometida.",
//     //   "Nuestro equipo de expertos brinda soporte técnico rápido y eficiente, desde la gestión de servidores y bases de datos hasta la implementación de nuevas funcionalidades. Con nuestro servicio, tu web estará siempre actualizada, segura y lista para crecer junto a tu negocio.",
//     // ],
//     // strong: "Tu Sitio Web Siempre Seguro, Actualizado y Listo para Crecer.",
//     video:
//       "https://res.cloudinary.com/djlxlz9y3/video/upload/v1760397190/soporte_mantenimiento_q68lzg.mov",
//     imgPrincipal:
//       "https://img.freepik.com/free-photo/worker-providing-live-chat-support-typing-keyboard-using-ai-chatbot_482257-126204.jpg",
//     imgSecondario:
//       "https://img.freepik.com/premium-photo/network_568137-1133.jpg",
//     imgTerciario:
//       "https://img.freepik.com/premium-photo/software-development-life-cycle-concept-businessman-using-laptop-computer-desk-with-software-development-life-cycle-icon-virtual-screen_1296497-1824.jpg",
//     // label: "Mantenimiento y soporte",
//   },
//   {
//     // id: 2,
//     // title: "Integraciones y automatizaciones",
//     // paragraphs: [
//     //   "Ofrecemos soluciones de integraciones y automatizaciones que permiten que tus sistemas y herramientas trabajen juntos de manera eficiente, reduciendo tareas manuales y errores. Conectamos tus aplicaciones, plataformas y bases de datos para que la información fluya automáticamente y puedas enfocarte en lo que realmente importa: hacer crecer tu negocio.",
//     //   "Nuestro equipo se encarga de implementar flujos de trabajo inteligentes, sincronización de datos y automatizaciones personalizadas que optimizan tus procesos internos y mejoran la experiencia de tus clientes. Con nuestras integraciones, tu empresa gana eficiencia, precisión y agilidad, permitiéndote tomar decisiones más rápidas y efectivas.",
//     // ],
//     // strong:
//     //   "Conecta y Automatiza tu Negocio para Ahorrar Tiempo y Maximizar Resultados.",
//     video:
//       "https://res.cloudinary.com/djlxlz9y3/video/upload/v1760396593/integracion_vctcdd.mp4",
//     imgPrincipal:
//       "https://img.freepik.com/free-photo/ui-ux-representations-with-smart-watch_23-2150201850.jpg",
//     imgSecondario:
//       "https://img.freepik.com/premium-photo/businessman-with-computer-background-with-technology-theme-hologram-concept-big-data-double-exposure_700248-77733.jpg",
//     imgTerciario:
//       "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169834.jpg",
//     // label: "Integraciones y automatizaciones",
//   },
// ];

export const contenidosBase = [
  {
    id: 0,
    video:
      "https://res.cloudinary.com/djlxlz9y3/video/upload/v1760411529/webPage_coyj06.mov",
    imgPrincipal:
      "https://img.freepik.com/free-photo/technology-hologram-indoors_23-2151833348.jpg",
    imgSecondario:
      "https://img.freepik.com/premium-photo/businessman-holding-app-template-smartphone_110893-1080.jpg",
    imgTerciario:
      "https://img.freepik.com/premium-photo/web-page-open-about-online-language_1288529-3827.jpg",
  },
  {
    id: 1,
    video:
      "https://res.cloudinary.com/djlxlz9y3/video/upload/v1760397190/soporte_mantenimiento_q68lzg.mov",
    imgPrincipal:
      "https://img.freepik.com/free-photo/worker-providing-live-chat-support-typing-keyboard-using-ai-chatbot_482257-126204.jpg",
    imgSecondario:
      "https://img.freepik.com/premium-photo/network_568137-1133.jpg",
    imgTerciario:
      "https://img.freepik.com/premium-photo/software-development-life-cycle-concept-businessman-using-laptop-computer-desk-with-software-development-life-cycle-icon-virtual-screen_1296497-1824.jpg",
  },
  {
    id: 2,
    video:
      "https://res.cloudinary.com/djlxlz9y3/video/upload/v1760396593/integracion_vctcdd.mp4",
    imgPrincipal:
      "https://img.freepik.com/free-photo/ui-ux-representations-with-smart-watch_23-2150201850.jpg",
    imgSecondario:
      "https://img.freepik.com/premium-photo/businessman-with-computer-background-with-technology-theme-hologram-concept-big-data-double-exposure_700248-77733.jpg",
    imgTerciario:
      "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169834.jpg",
  },
];

export const projectsBase = [
  {
    id: 1,
    image: "images/proyecto1.png",
    link: "https://dorcky91.github.io/Lordan-Clothes/",
  },
  {
    id: 2,
    image: "images/proyecto2.jpg",
    link: "https://dorcky91.github.io/My-Portfolio/",
  },
  {
    id: 3,
    image: "images/proyecto3.jpg",
    link: "https://dorcky91.github.io/masoterapiagabyfl/",
  },
  {
    id: 4,
    image: "images/proyecto4.jpg",
    link: "https://dorcky91.github.io/clon-de-pinterest/",
  },
  {
    id: 5,
    image: "images/proyecto5.png",
    description: "Sistema de gestión en la nube con integración API.",
    link: "https://dorcky91.github.io/Shop-Lordan-Clothes/",
  },
  {
    id: 6,
    title: "Zyan-O",
    image: "images/proyecto6.jpg",
    link: "https://dorcky91.github.io/Blog-Lordan/",
  },
];

export const servicios = [
  {
    id: 1,
    icono: "bi-window-stack",
    titulo: "Desarrollo Web & Aplicaciones",
    texto:
      "Creamos plataformas digitales fluidas, escalables y visualmente impactantes que potencian tu presencia online.",
  },
  {
    id: 2,
    icono: "bi-cloud",
    titulo: "Soluciones Cloud",
    texto:
      "Migramos, gestionamos y optimizamos tus sistemas en la nube para garantizar seguridad, flexibilidad y rendimiento.",
  },
  {
    id: 3,
    icono: "bi-lightbulb",
    titulo: "Consultoría Tecnológica",
    texto:
      "Te guiamos en la adopción de herramientas innovadoras para hacer crecer tu negocio con una estrategia digital sólida.",
  },
  {
    id: 4,
    icono: "bi-shield-lock",
    titulo: "Ciberseguridad & Protección de Datos",
    texto:
      "Protegemos la información crítica de tu empresa mediante auditorías, monitoreo y sistemas de seguridad avanzada.",
  },
  {
    id: 5,
    icono: "bi-bar-chart-line",
    titulo: "Inteligencia de Negocios (BI & Data Analytics)",
    texto:
      "Transformamos tus datos en decisiones inteligentes con dashboards y análisis personalizados en tiempo real.",
  },
  {
    id: 6,
    icono: "bi-gear",
    titulo: "Transformación Digital",
    texto:
      "Impulsamos la evolución tecnológica de tu empresa con soluciones que optimizan procesos y mejoran la eficiencia.",
  },
];

export const cardNosotros = [
  {
    icono: "bi-flag-fill",
    titulo: "Liderazgo",
    texto:
      "Inspiramos y guiamos con visión clara, confianza y decisiones estratégicas.",
  },
  {
    icono: "bi-tree-fill",
    titulo: "Sostenibilidad",
    texto:
      "Promovemos prácticas responsables que aseguran crecimiento a largo plazo.",
  },
  {
    icono: "bi-shield-fill-check",
    titulo: "Integridad",
    texto:
      "Actuamos siempre con honestidad, ética y transparencia en todas acciones.",
  },
  {
    icono: "bi bi-award-fill",
    titulo: "Excelencia",
    texto:
      "Entregamos resultados de máxima calidad cuidando cada detalle cuidadosamente.",
  },
];

// testimoniales.js
export const testimoniales = [
  {
    id: 1,
    nombre: "Orlando Apollon",
    cargo: "Director de TI, Ta’Barato",
    imagen: "https://i.pravatar.cc/150?img=5",
    icono: "bi bi-star-fill",
    texto:
      "Gracias al equipo de LogeniK, logramos digitalizar por completo nuestros procesos internos. Su acompañamiento fue impecable de principio a fin.",
  },
  {
    id: 2,
    nombre: "María González",
    cargo: "CEO, Innovatech Group",
    imagen: "https://i.pravatar.cc/150?img=7",
    icono: "bi bi-star-fill",
    texto:
      "Su enfoque estratégico y tecnológico transformó la manera en que atendemos a nuestros clientes. LogeniK entiende lo que significa crecer con propósito.",
  },
  {
    id: 3,
    nombre: "Javier Morales",
    cargo: "Gerente de Proyectos, DataCore",
    imagen: "https://i.pravatar.cc/150?img=6",
    icono: "bi bi-star-fill",
    texto:
      "La implementación fue rápida, segura y superó nuestras expectativas. Su equipo técnico es verdaderamente excepcional.",
  },
  {
    id: 4,
    nombre: "Lucía Herrera",
    cargo: "Fundadora, EcoSmart Solutions",
    imagen: "https://i.pravatar.cc/150?img=8",
    icono: "bi bi-star-fill",
    texto:
      "LogeniK nos ayudó a automatizar tareas clave en nuestra operación. Ahora trabajamos con más eficiencia y podemos enfocarnos en innovar.",
  },
  {
    id: 5,
    nombre: "Carlos Mendoza",
    cargo: "CTO, NextLevel Systems",
    imagen: "https://i.pravatar.cc/150?img=9",
    icono: "bi bi-star-fill",
    texto:
      "Su equipo es altamente profesional y domina las tecnologías más modernas. Nos entregaron un producto sólido y escalable en tiempo récord.",
  },
  {
    id: 6,
    nombre: "Fernanda López",
    cargo: "Directora de Marketing, RedNova",
    imagen: "https://i.pravatar.cc/150?img=10",
    icono: "bi bi-star-fill",
    texto:
      "Con LogeniK, nuestra presencia digital dio un salto de calidad. Son socios estratégicos que realmente entienden las necesidades del cliente.",
  },
];

export const stepsContact = [
  {
    number: "1",
    title: "Te escuchamos",
    description:
      "Cuéntanos tus objetivos, desafíos y visión. (Creamos relaciones, no solo proyectos.)",
  },
  {
    number: "2",
    title: "Diseñamos tu solución",
    description:
      "Definimos un plan estratégico, alineado con tus metas y presupuesto.",
  },
  {
    number: "3",
    title: "Creamos, medimos y evolucionamos",
    description:
      "Llevamos tu idea a la realidad con tecnología, diseño y resultados medibles.",
  },
];

export const faqs = [
  {
    number: "01.",
    question: "¿Cuánto tarda en desarrollarse un proyecto?",
    answer:
      "Depende del alcance y complejidad. En promedio, los proyectos web suelen completarse entre 4 y 8 semanas. Antes de comenzar, te entregamos un cronograma claro con todas las etapas definidas.",
  },
  {
    number: "02.",
    question: "¿Ofrecen mantenimiento después del lanzamiento?",
    answer:
      "Sí. Contamos con planes de soporte y mantenimiento mensual que incluyen actualizaciones, optimización, monitoreo y soporte técnico continuo.",
  },
  {
    number: "03.",
    question: "¿Trabajan con clientes internacionales?",
    answer:
      "Por supuesto. Nuestro equipo colabora con empresas de distintos países. Adaptamos los horarios de comunicación y usamos herramientas como Google Meet o Slack para mantener una comunicación fluida.",
  },
  {
    number: "04.",
    question: "¿Puedo solicitar solo diseño o desarrollo por separado?",
    answer:
      "Sí, puedes contratar servicios específicos. Ofrecemos soluciones modulares que se ajustan a tus necesidades, desde diseño UX/UI hasta desarrollo backend o infraestructura en la nube.",
  },
  {
    number: "05.",
    question: "¿Qué necesito para comenzar un proyecto?",
    answer:
      "Solo una idea clara de lo que deseas lograr. Nuestro equipo te guiará en todo el proceso: desde definir el alcance hasta la entrega final del producto.",
  },
];
