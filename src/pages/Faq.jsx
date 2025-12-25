import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const Faq = () => {
  const { t } = useTranslation();
  const questions = t("preguntas_frecuentes.questions", {
    returnObjects: true,
  });

  // 🔹 Agrupamos las secciones de dos en dos
  const groupedSections = [];
  for (let i = 0; i < questions.length; i += 2) {
    groupedSections.push(questions.slice(i, i + 2));
  }

  return (
    <>
      <header id="header-faq" className="d-flex align-items-center">
        <Container className="py-5">
          <Row>
            <Col md="9" lg="8">
              <h2 className="fw-semibold text-white">
                {t("politica_privacidad.title")}
              </h2>
              <p className="text-white">{t("politica_privacidad.date")}</p>
            </Col>
          </Row>
        </Container>
      </header>

      <main>
        <section className="py-5 bg-white" id="terminos-servicio">
          <Container>
            <Row className="gy-4 mb-4">
              <Col md="10" className="md-auto">
                <h4>{t("politica_privacidad.intro")}</h4>
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
                          {section.question}
                        </h5>

                        {section.answer && (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: section.answer,
                            }}></p>
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
