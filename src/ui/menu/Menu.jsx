import { Link, NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import logoGenik from "/images/logogenik.png";
import "./Menu.css";

// Lista de idiomas con la ruta de la bandera en public/flags (PNG)
const languages = [
  { code: "es", flag: "mx", name: "Español (México)" },
  { code: "en", flag: "us", name: "English" },
  { code: "fr", flag: "fr", name: "Français" },
  { code: "zh", flag: "cn", name: "中文" },
  { code: "ht", flag: "ht", name: "Kreyòl Ayisyen" },
];

// Dropdown personalizado de idiomas
function LanguageDropdown({ languages, currentLang, onChange, mobileOnly }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected =
    languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div ref={ref} className="language-dropdown position-relative">
      <button
        className="btn btn-outline-secondary d-flex align-items-center gap-1"
        onClick={() => setOpen((prev) => !prev)}>
        {/* Bandera */}
        <img
          src={`/flags/${selected.flag}.png`}
          alt={selected.name}
          width={16}
          height={13}
        />
        {/* Solo texto en desktop */}
        {!mobileOnly && (
          <>
            <span className="d-none d-md-inline">{selected.name}</span>
            <span className="ms-1 d-none d-md-inline">▾</span>
          </>
        )}
      </button>

      {open && (
        <ul
          className="dropdown-menu show position-absolute end-0 mt-1 shadow-smb"
          style={{ minWidth: 10 }}>
          {languages.map((lng) => (
            <li key={lng.code}>
              <button
                className="dropdown-item d-flex align-items-center gap-1"
                onClick={() => {
                  onChange(lng.code);
                  setOpen(false);
                }}>
                <img
                  src={`/flags/${lng.flag}.png`}
                  alt={lng.name}
                  width={18}
                  height={14}
                />
                {!mobileOnly && <span>{lng.name}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Menu() {
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

        {/* BOTÓN HAMBURGUESA + DROPDOWN MÓVIL (solo bandera) */}
        <div className="d-flex align-items-center d-md-none">
          <Navbar.Toggle aria-controls="navbar" />
          <LanguageDropdown
            languages={languages}
            currentLang={i18n.language}
            onChange={(lang) => i18n.changeLanguage(lang)}
            mobileOnly={true} // bandera sola
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

            {/* DROPDOWN SOLO DESKTOP */}
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
}
