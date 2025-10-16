import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import "./Footer.css";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={{ backgroundColor: "rgba(var(--dark))" }}>
      <Container className="pt-5">
        <Row className="gy-4 text-white mb-5">
          <Col md="3">
            <img
              loading="lazy"
              src="/images/logoGenikWhite.png"
              height={55}
              alt="Logo"
            />
            <p className="small color-light">
              Transformamos ideas en soluciones digitales innovadoras. Tu socio
              tecnológico de confianza para el éxito empresarial.
            </p>
          </Col>

          <Col md="3" sm="4" xs="6">
            <p>{t("footer.quick_links")}</p>
            <div className="d-flex flex-column gap-2">
              <Link to="/">{t("menu.home")}</Link>
              <Link to="/services">{t("menu.services")}</Link>
              <Link to="/about">{t("menu.about")}</Link>
              <Link to="/contact">{t("menu.contact")}</Link>
            </div>
          </Col>

          <Col md="3" sm="4" xs="6">
            <p className="text-white">Legal</p>
            <div className="d-flex flex-column gap-2">
              <Link to="/">Política de Privacidad</Link>
              <Link to="/">Términos de Servicio</Link>
              <Link to="/">FAQ</Link>
            </div>
          </Col>

          <Col md="3" sm="4" xs="6">
            <p className="text-white">{t("footer.contact")}</p>
            <div className="d-flex align-items-center gap-1 icon-link">
              <div style={{ width: "25px" }}>
                <i className="bi bi-envelope small"></i>{" "}
              </div>
              <a href="mailto:admin@logenik.com?subject=Desde la aplicación web">
                admin@logenik.com
              </a>
            </div>
            <div className="d-flex align-items-center gap-1 icon-link">
              <div style={{ width: "25px" }}>
                <i className="bi bi-telephone small"></i>{" "}
              </div>
              <a href="tel:+123456789">+1 23456789</a>
            </div>
          </Col>
        </Row>

        <div className="d-flex gap-2 flex-wrap justify-content-between border-top py-3 color-light">
          <small>
            &copy; {new Date().getFullYear()} LOGENIK.{" "}
            {t("footer.rights_reserved")}
          </small>
          <div className="d-flex gap-2">
            <a
              className="social-media"
              href="#"
              target="_blank"
              rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a
              className="social-media"
              href="#"
              target="_blank"
              rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a
              className="social-media"
              href="#"
              target="_blank"
              rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
            <a
              className="social-media"
              href="#"
              target="_blank"
              rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
