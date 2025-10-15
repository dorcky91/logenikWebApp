import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "../locales/idioma";

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // idioma por defecto
  fallbackLng: "en", // si falta traducción, usa inglés
  interpolation: {
    escapeValue: false, // React ya protege contra XSS
  },
});

export default i18n;
