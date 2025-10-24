//#region MOTIONS
export const cascadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay: delay * 0.1 },
});
//#endregion

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

//lenguajes
export const languages = [
  { code: "es", flag: "mx", name: "Español (México)" },
  { code: "en", flag: "us", name: "English" },
  { code: "fr", flag: "fr", name: "Français" },
  { code: "zh", flag: "cn", name: "中文" },
  { code: "ht", flag: "ht", name: "Kreyòl Ayisyen" },
];
