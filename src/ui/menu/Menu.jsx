import { Link, NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next"; // 👈 Importante
import logoGenik from "/images/logogenik.png";
import "./Menu.css";

export function Menu() {
  const { t, i18n } = useTranslation(); // 👈 Hook para traducir textos

  const handleClick = () => {
    const nav = document.getElementById("navbar");
    if (nav) {
      nav.classList.remove("show");
    }
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    handleClick();
  };

  return (
    <Navbar expand="md" sticky="top" id="menu-navigation">
      <Container fluid="sm">
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
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="pt-4 pt-md-0">
          <ul id="menu-links" className="navbar-nav ms-auto">
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
            <li className="nav-item d-flex align-items-center">
              <select
                className="form-select"
                value={i18n.language}
                onChange={handleLanguageChange}>
                {languages.map((lng) => (
                  <option key={lng.code} value={lng.code} title={lng.name}>
                    {lng.flag}
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
  { code: "es", flag: "🇪🇸", name: "Español" },
  { code: "en", flag: "🇺🇸", name: "English" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "zh", flag: "🇨🇳", name: "中文" },
  { code: "ht", flag: "🇭🇹", name: "Kreyòl Ayisyen" },
];
