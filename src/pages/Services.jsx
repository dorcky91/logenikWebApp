import { Card, Col, Container, Row } from "react-bootstrap";
import "@/assets/Services.css";
import { Link } from "react-router";
import AccentTag from "../ui/AccentTag";
import LazyVideo from "../components/LazyVideo";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();
  const servicios = t("servicesOffered.items", { returnObjects: true });

  return (
    <>
      <header className="py-5">
        <Container>
          <Row className="gy-5 align-items-center">
            <Col lg="5" md="6">
              <div className="d-flex align-items-center gap-1 color-accent text-uppercase small">
                <span style={{ width: "35px" }}>
                  <hr className="opacity-75" />
                </span>{" "}
                <span>{t("heroServices.subtitle")}</span>
              </div>

              <h1 className="fw-semibold mb-3">
                {t("heroServices.title.part1")}{" "}
                <span className="color-accent">
                  {t("heroServices.title.highlight")}
                </span>
              </h1>

              <h5 className="color-dark-65 fw-normal lh-base">
                {t("heroServices.description")}
              </h5>

              <div className="d-flex gap-3 mt-5">
                <Link to="/contact" className="btn btn-accent">
                  {t("heroServices.button")}
                </Link>
              </div>
            </Col>

            <Col lg="7" md="6" className="ms-auto">
              <LazyVideo
                src="https://res.cloudinary.com/djlxlz9y3/video/upload/v1760410006/digiHero_c7mjit.mp4"
                height={450}
                className="rounded-4"
              />
            </Col>
          </Row>
        </Container>
      </header>

      <main>
        <section className="py-5 bg-white">
          <Container className="py-5">
            <Row className="gy-4 align-items-center">
              <Col md="6" lg="5" className="order-1 order-md-0">
                <div className="d-flex flex-column flex-md-row gap-2">
                  <div className="d-flex gap-2 flex-md-column justify-content-center order-1 order-md-0">
                    <img
                      loading="lazy"
                      src="https://img.freepik.com/premium-photo/hand-holding-light-bulb-is-symbol-intellectual-light-creative-education-concept_557176-1107.jpg"
                      alt=""
                      className="w-100 object-fit-cover rounded-3"
                      height={150}
                    />
                    <img
                      loading="lazy"
                      src="https://img.freepik.com/premium-photo/online-briefing-brainstorming-group-remote-work-concept-with-young-man-sitting-office-chair-looking-digital-tablet-screen-virtual-profile-picture-windows-with-colleagues-he-contacted_670147-41.jpg"
                      alt=""
                      className="w-100 object-fit-cover rounded-3"
                      height={150}
                    />
                  </div>
                  <LazyVideo
                    src="https://res.cloudinary.com/djlxlz9y3/video/upload/v1760410412/Technology_v8siv9.mp4"
                    height={350}
                    className="rounded-3"
                  />
                </div>
              </Col>

              <Col md="6">
                <AccentTag
                  subtitle={t("estrategiaSection.subtitle")}
                  title={t("estrategiaSection.title")}
                />

                <ul className="list-unstyled">
                  <li className="mb-3 d-flex gap-2">
                    <i
                      className="bi bi-check-circle-fill color-primary"
                      style={{ fontSize: "17px" }}></i>
                    <div>
                      <p className="fw-bold mb-2">
                        {t("estrategiaSection.items.0.title")}
                      </p>
                      <small className="color-dark-65">
                        {t("estrategiaSection.items.0.text")}
                      </small>
                    </div>
                  </li>
                  <li className="mb-3 d-flex gap-2">
                    <i
                      className="bi bi-check-circle-fill color-primary"
                      style={{ fontSize: "17px" }}></i>
                    <div>
                      <p className="fw-bold mb-0">
                        {t("estrategiaSection.items.1.title")}
                      </p>
                      <small className="color-dark-65">
                        {t("estrategiaSection.items.1.text")}
                      </small>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5" id="banner-services">
          <Container className="py-5">
            <Row className="gy-4 mb-5 text-white">
              <Col md="6">
                <h1 className="text-white">{t("bannerServices.title")}</h1>
              </Col>
              <Col md="6">
                <p className="fs-5">
                  {t("bannerServices.description", { strong: "LOGENIK" })}
                </p>
              </Col>
            </Row>

            <Row className="gy-4">
              {t("bannerServices.items", { returnObjects: true }).map(
                (item, index) => (
                  <Col md="5 mx-auto" key={index}>
                    <div className="position-relative bg-light-main rounded-3 border border-white border-4">
                      <img
                        loading="lazy"
                        src={item.image}
                        alt={item.title}
                        className="w-100 object-fit-cover rounded-3"
                        height={250}
                      />
                      <div className="card card-body card-queHacemos shadow">
                        <i className={`bi ${item.icon} color-accent fs-4`}></i>
                        <strong className="color-accent">{item.title}</strong>
                        <small className="color-dark-65">{item.text}</small>
                      </div>
                    </div>
                  </Col>
                )
              )}
            </Row>
          </Container>
        </section>

        <section id="services-offered" className="py-5">
          <Container className="py-5">
            <Row className="gy-5">
              <Col lg="6" md="8" className="mx-auto text-center">
                <AccentTag
                  isCentered={true}
                  subtitle={t("servicesOffered.subtitle")}
                  title={t("servicesOffered.title")}
                />
              </Col>

              <Col md="12">
                <Row className="gy-4">
                  {servicios.map((servicio, index) => (
                    <Col md="4" sm="6" key={index}>
                      <Card>
                        <Card.Header className="position-relative">
                          <div className="wrapper">
                            <div className="efecto-card-servicio">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 16 16"
                                fill="none"
                                aria-hidden="true"
                                role="img">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0 0L0 16C0 7.16344 7.16344 0 16 0L0 0Z"
                                  fill="currentColor"></path>
                              </svg>
                            </div>
                            <div className="efecto-card-servicio svg-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 16 16"
                                fill="none"
                                aria-hidden="true"
                                role="img">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0 0L0 16C0 7.16344 7.16344 0 16 0L0 0Z"
                                  fill="currentColor"></path>
                              </svg>
                            </div>
                            <div className="contenedor-icono">
                              <i className={`bi ${servicio.icono}`}></i>
                            </div>
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <p className="fw-bold mt-3 mb-2">{servicio.titulo}</p>
                          <small>{servicio.texto}</small>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-white">
          <Container className="py-5">
            <Row className="gy-5">
              <Col xs="12" className="mb-5">
                <Row className="gy-5">
                  <Col md="6" lg="3" id="metodology-section">
                    <div className="d-flex align-items-center gap-3">
                      <div>
                        <div className="metodology-icon bg-primary">
                          <i className="bi bi-journal-text"></i>
                        </div>
                      </div>
                      <div>
                        <p className="descripcion mb-1 color-dark-65">
                          Adquiere habilidades digitales útiles con recursos
                          claros y aplicables.
                        </p>
                        <h6 className="fw-semibold">Learn</h6>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" lg="3" id="metodology-section">
                    <div className="d-flex align-items-center gap-3">
                      <div>
                        <div className="metodology-icon bg-accent">
                          <i className="bi bi-lightning"></i>
                        </div>
                      </div>
                      <div>
                        <p className="descripcion mb-1 color-dark-65">
                          Itera rápido, colabora mejor y adapta soluciones en
                          tiempo real.
                        </p>
                        <h6 className="fw-semibold">Agile</h6>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" lg="3" id="metodology-section">
                    <div className="d-flex align-items-center gap-3">
                      <div>
                        <div className="metodology-icon bg-variado1">
                          <i className="bi bi-diagram-3"></i>
                        </div>
                      </div>
                      <div>
                        <p className="descripcion mb-1 color-dark-65">
                          Define fases secuenciales para proyectos con
                          requisitos bien estructurados.
                        </p>
                        <h6 className="fw-semibold">Waterfall</h6>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" lg="3" id="metodology-section">
                    <div className="d-flex align-items-center gap-3">
                      <div>
                        <div className="metodology-icon bg-variado2">
                          <i className="bi bi-hdd-network"></i>
                        </div>
                      </div>
                      <div>
                        <p className="descripcion mb-1 color-dark-65">
                          Gestiona servicios TI con procesos estandarizados y
                          mejora continua.
                        </p>
                        <h6 className="fw-semibold">ITIL</h6>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md="10" lg="7" className="mx-auto">
                <img
                  loading="lazy"
                  height={400}
                  src="https://img.freepik.com/free-photo/business-chart-visual-graphics-report-concept_53876-167093.jpg"
                  alt=""
                  className="w-100 object-fit-cover rounded-3"
                />
              </Col>
              <Col lg="5" md="12">
                <div>
                  <div className="d-flex align-items-center gap-1 color-accent text-uppercase small">
                    <span style={{ width: "35px" }}>
                      <hr className="opacity-75" />
                    </span>{" "}
                    <span>Gestión estratégica</span>
                  </div>
                  <h1 className="mb-3 fw-semibold">
                    Transforma tu operación con{" "}
                    <span className="color-accent">metodologías</span> probadas
                  </h1>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex gap-2">
                      <i
                        className="bi bi-record-circle-fill color-primary"
                        style={{ fontSize: "17px" }}></i>
                      <div>
                        <p className="fw-bold mb-2">
                          Cultura ágil aplicada a equipos TI
                        </p>
                        <small className="color-dark-65">
                          Implementa sprints, tableros Kanban y validación
                          continua para acelerar resultados sin perder control.
                        </small>
                      </div>
                    </li>
                    <li className="mb-3 d-flex gap-2">
                      <i
                        className="bi bi-record-circle-fill color-primary"
                        style={{ fontSize: "17px" }}></i>
                      <div>
                        <p className="fw-bold mb-0">
                          Servicios TI con enfoque ITIL
                        </p>
                        <small className="color-dark-65">
                          Estandariza procesos, mejora la atención al cliente y
                          reduce tiempos de respuesta con prácticas reconocidas
                          globalmente.
                        </small>
                      </div>
                    </li>
                    <li className="mb-3 d-flex gap-2">
                      <i
                        className="bi bi-record-circle-fill color-primary"
                        style={{ fontSize: "17px" }}></i>
                      <div>
                        <p className="fw-bold mb-0">
                          Control total sobre cada fase del proyecto
                        </p>
                        <small className="color-dark-65">
                          Planifica, documenta y ejecuta con precisión,
                          asegurando entregas alineadas a los requisitos
                          iniciales.
                        </small>
                      </div>
                    </li>
                  </ul>{" "}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};
