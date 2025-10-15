import { useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLang, setHoveredLang] = useState(null); // 👈 para mostrar tooltip

  const languages = [
    { code: "es", flag: "🇪🇸", name: "Español" },
    { code: "en", flag: "🇺🇸", name: "English" },
    { code: "fr", flag: "🇫🇷", name: "Français" },
    { code: "zh", flag: "🇨🇳", name: "中文" },
    { code: "ht", flag: "🇭🇹", name: "Kreyòl Ayisyen" },
  ];

  const currentLang = i18n.language || "es";
  const currentFlag =
    languages.find((lng) => lng.code === currentLang)?.flag || "🇪🇸";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2000,
      }}>
      {/* Botón principal */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          fontSize: "1.4rem",
          borderRadius: "50%",
          background: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          width: "45px",
          height: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.2s ease",
        }}>
        {currentFlag}
      </div>

      {/* Lista de idiomas */}
      {isOpen && (
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            padding: "6px 8px",
            position: "relative",
          }}>
          {languages
            .filter((lng) => lng.code !== currentLang)
            .map((lng) => (
              <div
                key={lng.code}
                style={{ position: "relative", margin: "5px 0" }}>
                <button
                  onClick={() => changeLanguage(lng.code)}
                  onMouseEnter={() => setHoveredLang(lng.code)}
                  onMouseLeave={() => setHoveredLang(null)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.6rem",
                    transition: "transform 0.2s ease",
                  }}>
                  {lng.flag}
                </button>

                {/* Tooltip */}
                {hoveredLang === lng.code && (
                  <span
                    style={{
                      position: "absolute",
                      right: "120%",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "rgba(0,0,0,0.75)",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      whiteSpace: "nowrap",
                      pointerEvents: "none",
                      transition: "opacity 0.2s ease",
                    }}>
                    {lng.name}
                  </span>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
