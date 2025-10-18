import { Link, NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import logoGenik from "/images/logogenik.png";
import "./Menu.css";
import { useState } from "react";

export function Menu() {
  const { t, i18n } = useTranslation();

  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    handleClick();
  };

  return (
    <Navbar
      expand="md"
      sticky="top"
      id="menu-navigation"
      onToggle={setExpanded}
      expanded={expanded}
      collapseOnSelect>
      <Container
        fluid="sm"
        className="d-flex align-items-center justify-content-between">
        {/* ✅ LOGO */}
        <Link to="/">
          <img
            height={45}
            src="/images/logoMovil.png"
            alt="Logo Logenik"
            className="d-md-none"
          />
          <img
            height={55}
            src={logoGenik}
            alt="Logo Logenik"
            className="d-none d-md-inline"
          />
        </Link>

        {/* ✅ BOTÓN HAMBURGUESA + SELECT IDIOMAS (solo móvil) */}
        <div className="d-flex align-items-center gap-2 d-md-none">
          <Navbar.Toggle aria-controls="navbar" />
          <select
            className="form-select form-select-sm lang-select-mobile"
            value={i18n.language}
            onChange={handleLanguageChange}>
            {languages.map((lng) => (
              <option key={lng.code} value={lng.code}>
                {lng.flag}
              </option>
            ))}
          </select>
        </div>

        {/* ✅ MENÚ DESPLEGABLE */}
        <Navbar.Collapse id="navbar" className="pt-4 pt-md-0">
          <ul
            id="menu-links"
            className="navbar-nav ms-auto align-items-md-center">
            <li className="nav-item">
              <NavLink onClick={handleClick} to="/" className="nav-link">
                {t("menu.home")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={handleClick}
                to="/services"
                className="nav-link">
                {t("menu.services")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleClick} to="/about" className="nav-link">
                {t("menu.about")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleClick} to="/contact" className="nav-link">
                {t("menu.contact")}
              </NavLink>
            </li>

            {/* ✅ SELECT IDIOMAS SOLO EN ESCRITORIO */}
            <li className="nav-item d-none d-md-flex align-items-center ms-3">
              <select
                className="form-select form-select-sm lang-select-desktop"
                value={i18n.language}
                onChange={handleLanguageChange}>
                {languages.map((lng) => (
                  <option key={lng.code} value={lng.code}>
                    {lng.flag} {lng.name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const languages = [
  { code: "es", flag: 🇲🇽 name: "Español (México)" },
  
  { code: "es", flag: "🇲🇽", name: "Español (México)" },
  { code: "ar", flag: "🇫🇷", name: "Arlo (México)" },
  { code: "en", flag: "🇺🇸", name: "English" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "zh", flag: "🇨🇳", name: "中文" },
  { code: "ht", flag: "🇭🇹", name: "Kreyòl Ayisyen" },
  // { code: "pt", flag: "🇧🇷", name: "Português" },
];
