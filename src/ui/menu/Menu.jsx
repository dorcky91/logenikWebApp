import { motion } from "motion/react";
import { Link, NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next"; // 👈 Importante
import { cascadeLeft, cascadeRight } from "../../utils/helpers";
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
          <motion.img
            {...cascadeLeft(0)}
            height={45}
            src="/images/logoMovil.png"
            alt="Logo Logenik"
            className="d-md-none"
          />
          <motion.img
            {...cascadeLeft(0)}
            height={55}
            src={logoGenik}
            alt="Logo Logenik"
            className="d-none d-md-inline"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="pt-4 pt-md-0">
          <ul id="menu-links" className="navbar-nav ms-auto">
            <motion.li {...cascadeRight(0)} className="nav-item">
              <NavLink onClick={handleClick} to="/" className="nav-link">
                {t("menu.home")}
              </NavLink>
            </motion.li>
            <motion.li {...cascadeRight(1)} className="nav-item">
              <NavLink
                onClick={handleClick}
                to="/services"
                className="nav-link">
                {t("menu.services")}
              </NavLink>
            </motion.li>
            <motion.li {...cascadeRight(2)} className="nav-item">
              <NavLink onClick={handleClick} to="/about" className="nav-link">
                {t("menu.about")}
              </NavLink>
            </motion.li>
            <motion.li {...cascadeRight(3)} className="nav-item">
              <NavLink onClick={handleClick} to="/contact" className="nav-link">
                {t("menu.contact")}
              </NavLink>
            </motion.li>
            <motion.li
              {...cascadeRight(4)}
              className="nav-item d-flex align-items-center">
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
            </motion.li>
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
