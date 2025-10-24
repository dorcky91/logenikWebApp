import { Col, Container, Row } from "react-bootstrap";
import { terminosServicioData } from "../utils/helpers";
import { useTranslation } from "react-i18next";

export const TerminosServicio = () => {
  const { t } = useTranslation();
  const sections = t("terminos_servicio.sections", { returnObjects: true });

  // 🔹 Agrupamos las secciones de dos en dos
  const groupedSections = [];
  for (let i = 0; i < sections.length; i += 2) {
    groupedSections.push(sections.slice(i, i + 2));
  }

  return (
    <>
      <header id="header-terminos">
        <Row>
          <Col md="6">
            <div className="header-txt">
              <h1 className="header-legal-title fw-bold text-white">
                {t("terminos_servicio.title")}
              </h1>
              <small className="header-legal-descripcion text-white">
                {t("terminos_servicio.date")}
              </small>
            </div>
          </Col>
        </Row>
      </header>

      <main>
        <section className="py-5 bg-white" id="terminos-servicio">
          <Container>
            <Row className="gy-4 mb-4">
              <Col md="10" className="md-auto">
                <h4>{t("terminos_servicio.intro")}</h4>
              </Col>
            </Row>

            {/* 🔹 Iteramos las filas (cada una con 2 columnas) */}
            {groupedSections.map((pair, rowIndex) => (
              <Row key={rowIndex} className="gy-5 mb-5">
                {pair.map((section, colIndex) => (
                  <Col key={colIndex} md={6}>
                    <div className="h-100 p-4 rounded-3 shadow-sm">
                      {section.number && (
                        <p className="number-list mb-2">{section.number}</p>
                      )}
                      <h5 className="fw-bold color-accent">
                        {section.subtitle}
                      </h5>

                      {section.text && (
                        <p className="color-dark-65">{section.text}</p>
                      )}

                      {section.items && (
                        <ul className="mb-0">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="color-dark-65 small">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Col>
                ))}
              </Row>
            ))}
          </Container>
        </section>
      </main>
    </>
  );
};
