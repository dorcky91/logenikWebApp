import { motion } from "motion/react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import { fadeInUp } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <motion.footer
      {...fadeInUp}
      className="py-5"
      style={{ backgroundColor: "rgba(var(--dark))" }}>
      <Container className="py-5">
        <Row className="gy-4 text-white mb-5 text-center text-md-start">
          <Col md="3">
            <img src="/images/logoGenikWhite.png" height={80} alt="Logo" />
          </Col>

          <Col md="3">
            <p className="text-accent">{t("footer.quick_links")}</p>
            <div className="d-flex flex-column gap-2">
              <Link to="/" className="text-decoration-none text-white">
                {t("menu.home")}
              </Link>
              <Link to="/services" className="text-decoration-none text-white">
                {t("menu.services")}
              </Link>
              <Link to="/about" className="text-decoration-none text-white">
                {t("menu.about")}
              </Link>
              <Link to="/contact" className="text-decoration-none text-white">
                {t("menu.contact")}
              </Link>
            </div>
          </Col>

          <Col md="3">
            <p className="text-white">{t("footer.social")}</p>
            <div className="d-flex flex-column gap-2">
              <Link to="/" className="text-decoration-none text-white">
                Facebook
              </Link>
              <Link to="/" className="text-decoration-none text-white">
                Instagram
              </Link>
              <Link to="/" className="text-decoration-none text-white">
                LinkedIn
              </Link>
              <Link to="/" className="text-decoration-none text-white">
                X
              </Link>
            </div>
          </Col>

          <Col md="3">
            <p className="text-white">{t("footer.contact")}</p>
            <div className="d-flex flex-column gap-2">
              <a
                href="mailto:admin@logenik.com?subject=Desde la aplicación web"
                className="text-decoration-none text-white">
                admin@logenik.com
              </a>
              <a
                href="tel:+123456789"
                className="text-decoration-none text-white">
                +1 23456789
              </a>
            </div>
          </Col>
        </Row>

        <div className="text-center text-white pt-5 border-top">
          &copy; {new Date().getFullYear()} LOGENIK.{" "}
          {t("footer.rights_reserved")}
        </div>
      </Container>
    </motion.footer>
  );
};
