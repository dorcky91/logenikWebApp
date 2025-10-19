import { Link, NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import logoGenik from "/images/logogenik.png";
import { LanguageDropdown } from "./LanguageDropdown";
import "./Menu.css";
import { languages } from "../../utils/helpers";

export const Menu = () => {
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    const nav = document.getElementById("navbar");
    if (nav) nav.classList.remove("show");
  };

  return (
    <Navbar expand="md" sticky="top" id="menu-navigation">
      <Container
        fluid="sm"
        className="d-flex align-items-center justify-content-between">
        {/* LOGO */}
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

        {/* MÓVIL: Hamburguesa + bandera sola */}
        <div className="d-flex align-items-center d-md-none">
          <Navbar.Toggle aria-controls="navbar" />
          <LanguageDropdown
            languages={languages}
            currentLang={i18n.language}
            onChange={(lang) => i18n.changeLanguage(lang)}
            mobileOnly={true}
          />
        </div>

        {/* MENÚ PRINCIPAL */}
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

            {/* DESKTOP: bandera + texto */}
            <li className="nav-item d-none d-md-flex align-items-center ms-3">
              <LanguageDropdown
                languages={languages}
                currentLang={i18n.language}
                onChange={(lang) => {
                  i18n.changeLanguage(lang);
                  handleClick();
                }}
              />
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
