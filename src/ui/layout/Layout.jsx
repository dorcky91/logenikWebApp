import { Link, Outlet } from "react-router";
import { Menu } from "../menu/Menu";
import { Footer } from "../footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import WhatsAppIcon from "../../components/WhatsappIcon";
import { useTranslation } from "react-i18next";
import ScrollTop from "../../components/ScrollTop";

export const Layout = () => {
  const { t } = useTranslation();

  return (
    <>
      <ScrollTop />
      <Menu />
      <Outlet />

      <section className="py-sm-5 bg-white">
        <Container
          className="py-5 rounded-4 cta"
          style={{ backgroundColor: "rgb(var(--accent))" }}>
          <Row className="p-md-5 text-center">
            <Col md="9" lg="6" className="mx-auto">
              <h1
                data-aos="fade-up"
                className="text-white"
                style={{ fontSize: "50px" }}>
                {t("cardContact.ctaTitle")}
              </h1>
              <p data-aos="fade-up" className="text-white mb-5">
                {t("cardContact.ctaText")}
              </p>
              <Link
                data-aos="fade-up"
                to="/contact"
                className="btn btn-white-accent">
                {t("cardContact.ctaButton")}
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <WhatsAppIcon
        phoneNumber="+523333802053"
        message="Hola! Quisiera más información sobre sus servicios"
      />

      <Footer />
    </>
  );
};
