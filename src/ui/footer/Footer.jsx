import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import "./Footer.css";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer data-aos="fade-up" style={{ backgroundColor: "rgba(var(--dark))" }}>
      <Container className="pt-5">
        <Row className="gy-4 text-white mb-5">
          <Col md="3">
            <img
              data-aos="fade-up"
              loading="lazy"
              src="/images/logoGenikWhite.png"
              height={55}
              alt="Logo"
            />
            <p data-aos="fade-up" className="small color-light">
              {t("footer.description")}
            </p>
          </Col>

          <Col md="3" sm="4" xs="6">
            <p data-aos="fade-up">{t("footer.quick_links")}</p>
            <div className="d-flex flex-column gap-2">
              <Link data-aos="fade-up" to="/">
                {t("menu.home")}
              </Link>
              <Link data-aos="fade-up" to="/services">
                {t("menu.services")}
              </Link>
              <Link data-aos="fade-up" to="/about">
                {t("menu.about")}
              </Link>
              <Link data-aos="fade-up" to="/contact">
                {t("menu.contact")}
              </Link>
            </div>
          </Col>

          <Col md="3" sm="4" xs="6">
            <p data-aos="fade-up" className="text-white">
              {t("footer.legal.title")}
            </p>
            <div className="d-flex flex-column gap-2">
              <Link data-aos="fade-up" to="/">
                {t("footer.legal.privacy")}
              </Link>
              <Link data-aos="fade-up" to="/">
                {t("footer.legal.terms")}
              </Link>
              <Link data-aos="fade-up" to="/">
                {t("footer.legal.faq")}
              </Link>
            </div>
          </Col>

          <Col md="3" sm="4" xs="6">
            <p data-aos="fade-up" className="text-white">
              {t("footer.contact")}
            </p>
            <div
              data-aos="fade-up"
              className="d-flex align-items-center gap-1 icon-link">
              <div style={{ width: "25px" }}>
                <i className="bi bi-envelope small"></i>{" "}
              </div>
              <a href="mailto:admin@logenik.com?subject=Desde la aplicación web">
                admin@logenik.com
              </a>
            </div>
            <div
              data-aos="fade-up"
              className="d-flex align-items-center gap-1 icon-link">
              <div style={{ width: "25px" }}>
                <i className="bi bi-telephone small"></i>{" "}
              </div>
              <a href="tel:+523352008682">+52 3352008682</a>
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
              href="https://www.facebook.com/share/1Bu4NaTpdK/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a
              className="social-media"
              href="https://www.instagram.com/logenik.1/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a
              className="social-media"
              href="https://x.com/logenik135872?s=21"
              target="_blank"
              rel="noopener noreferrer">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              className="social-media"
              href="https://www.linkedin.com/company/logenik"
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
