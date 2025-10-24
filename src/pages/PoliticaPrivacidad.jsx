import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const PoliticaPrivacidad = () => {
  const { t } = useTranslation();
  const sections = t("politica_privacidad.sections", { returnObjects: true });

  // 🔹 Agrupamos las secciones de dos en dos
  const groupedSections = [];
  for (let i = 0; i < sections.length; i += 2) {
    groupedSections.push(sections.slice(i, i + 2));
  }

  return (
    <>
      <header id="header-politica" className="d-flex align-items-center">
        <Container className="py-5">
          <Row>
            <Col md="9" lg="8">
              <h2 className="fw-bold text-white">
                {t("politica_privacidad.title")}
              </h2>{" "}
              <small className="header-legal-descripcion text-white">
                {t("politica_privacidad.date")}
              </small>
            </Col>
          </Row>
        </Container>
      </header>

      <main>
        <section className="py-5 bg-white" id="politica-privacidad">
          <Container>
            <Row className="gy-4 mb-4">
              <Col md="10" className="md-auto">
                <h5>{t("politica_privacidad.intro")}</h5>
              </Col>
            </Row>

            <Row className="gy-5">
              {groupedSections.map((pair, index) => (
                <React.Fragment key={index}>
                  {pair.map((section, colIndex) => (
                    <Col key={colIndex} md={6}>
                      <div className="h-100 p-4 rounded-3 shadow-sm">
                        {section.number && (
                          <p className="number-list mb-2">{section.number}</p>
                        )}
                        <h5 className="fw-bold color-accent">
                          {section.subtitle}
                        </h5>

                        {/* {section.text && (
                        <p className="color-dark-65">{section.text}</p>
                      )} */}

                        {section.text && (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: section.text,
                            }}></p>
                        )}

                        {section.items && (
                          <ul className="mb-0">
                            {section.items.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Col>
                  ))}
                </React.Fragment>
              ))}
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};
