import { Col, Container, Row } from "react-bootstrap";
import { preguntasFrecuentesData } from "../utils/helpers";
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
      <header id="header-faq">
        <Row>
          <Col md="6">
            <div className="header-txt">
              <h1 className="header-legal-title fw-bold text-white">
                {t("politica_privacidad.title")}
              </h1>
              <small className="header-legal-descripcion text-white">
                {t("politica_privacidad.date")}
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
                <h4>{t("politica_privacidad.intro")}</h4>
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
                        {section.question}
                      </h5>

                      {section.answer && (
                        <p className="color-dark-65">{section.answer}</p>
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
