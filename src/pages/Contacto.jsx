import { useState } from "react";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const Contacto = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const { t } = useTranslation();
  const section = t("contactHeroSection", { returnObjects: true });
  const sectionForm = t("contactProcessSection", { returnObjects: true });
  const faqs = t("faqSection.items", { returnObjects: true });

  return (
    <>
      <header className="py-5 position-relative" style={{ overflow: "hidden" }}>
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          style={{ zIndex: 0 }}>
          <source
            src="https://res.cloudinary.com/djlxlz9y3/video/upload/v1760500311/contacto_igqnkm.mov"
            type="video/mp4"
          />
          Tu navegador no soporta videos.
        </video>
        {/* Overlay oscuro */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1 }}></div>

        {/* Loader (mientras carga el video) */}
        {!isVideoLoaded && (
          <div
            className="position-absolute top-50 start-50 translate-middle text-center"
            style={{ zIndex: 3 }}>
            <Spinner animation="border" variant="light" />
          </div>
        )}

        {/* Contenido */}
        <Container
          className="py-5 position-relative"
          style={{
            zIndex: 2,
            opacity: isVideoLoaded ? 1 : 0.4,
            transition: "opacity 0.5s ease",
          }}>
          <Row className="gy-4 align-items-center">
            <Col md="6">
              <div className="mb-5 text-white">
                <h1 className="fw-semibold text-white">{section.title}</h1>
                <p>{section.description}</p>
              </div>
              <div className="redes-sociales d-flex gap-3">
                <a href="#" target="_blank">
                  <i className="bi bi-facebook text-white fs-4"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="bi bi-instagram text-white fs-4"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="bi bi-twitter-x text-white fs-4"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="bi bi-linkedin text-white fs-4"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <main>
        <section className="py-5">
          <Container className="py-5 pb-lg-0">
            <Row className="gy-4">
              <Col lg="5" md="8" className="mx-md-auto me-lg-auto">
                <div className="mb-5">
                  <h1 className="fw-semibold">{sectionForm.timelineTitle}</h1>
                  <p className="color-dark-65">{sectionForm.description}</p>
                </div>
                <div className="timeline-wrapper">
                  {sectionForm.timelineSteps.map((step, index) => (
                    <div className="timeline-step" key={index}>
                      <div className="circle-number">{step.number}</div>
                      <div className="timeline-content">
                        <h5>{step.title}</h5>
                        <small className="color-dark-65">
                          {step.description}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>

              <Col lg="7" md="11" className="ms-lg-auto mx-auto">
                <div className="contact-card shadow-sm px-3 py-5 px-md-5 bg-white rounded-4">
                  <div className="mb-5">
                    <div className="d-flex align-items-center gap-1 color-accent text-uppercase small">
                      <span style={{ width: "35px" }}>
                        <hr className="opacity-75" />
                      </span>{" "}
                      <span>{sectionForm.subtitle}</span>
                    </div>
                    <h3 className="mb-3">{sectionForm.title}</h3>
                  </div>

                  <Form>
                    <Row className="gy-4">
                      <Col md={6} lg="12" xl="6">
                        <Form.Group controlId="formName">
                          <Form.Label>{sectionForm.form.name}</Form.Label>
                          <Form.Control type="text" required />
                        </Form.Group>
                      </Col>

                      <Col md={6} lg="12" xl="6">
                        <Form.Group controlId="formEmail">
                          <Form.Label>{sectionForm.form.email}</Form.Label>
                          <Form.Control type="email" required />
                        </Form.Group>
                      </Col>

                      <Col md={6} lg="12" xl="6">
                        <Form.Group controlId="formCompany">
                          <Form.Label>{sectionForm.form.company}</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>

                      <Col md={6} lg="12" xl="6">
                        <Form.Group controlId="formSubject" className="mb-3">
                          <Form.Label>{sectionForm.form.subject}</Form.Label>
                          <Form.Select aria-label="Selecciona un asunto">
                            <option value=""></option>
                            <option value="webDevelopment">
                              {sectionForm.form.subjectOptions.webDevelopment}
                            </option>
                            <option value="support">
                              {sectionForm.form.subjectOptions.support}
                            </option>
                            <option value="ecommerce">
                              {sectionForm.form.subjectOptions.ecommerce}
                            </option>
                            <option value="other">
                              {sectionForm.form.subjectOptions.other}
                            </option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col md={12}>
                        <Form.Group controlId="formMessage">
                          <Form.Label>{sectionForm.form.message}</Form.Label>
                          <Form.Control as="textarea" rows={4} />
                        </Form.Group>
                      </Col>

                      <Col md={12} className="text-end">
                        <button type="submit" className="btn btn-accent">
                          {sectionForm.form.submit}
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-white">
          <Container className="py-5">
            <Row className="gy-4 mb-5">
              <Col lg="5" md="6">
                <h1 className="fw-semibold">{t("faqSection.title")}</h1>
                <p className="color-dark-65">{t("faqSection.description")}</p>

                <img
                  src="https://img.freepik.com/premium-photo/question-tech-brainstorming-problem_218381-42062.jpg"
                  alt="FAQ"
                  className="object-fit-cover rounded-3 w-md-75 w-100"
                  height={400}
                />
              </Col>
              <Col md="6" className="ms-auto">
                {faqs.map((faq, index) => (
                  <div
                    className="border-bottom py-4 d-flex gap-3 mb-4"
                    key={index}>
                    <span className="fs-4">{faq.number}</span>
                    <div>
                      <h5 className="fw-semibold">{faq.question}</h5>
                      <p className="color-dark-65 mb-0">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};
