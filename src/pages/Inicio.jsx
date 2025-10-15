import { motion } from "motion/react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Hero } from "../components/inicio/hero/Hero";
import { Clientes } from "../components/inicio/clientes/Clientes";
import { contenidosBase, fadeInUp, projectsBase } from "../utils/helpers";
import LazyVideo from "../components/LazyVideo";
import AccentTag from "../ui/AccentTag";
import ScrollCarousel from "../components/ScrollCarousel";
import ScrollFly from "../components/ScrollFly";
import { useTranslation } from "react-i18next";

export const Inicio = () => {
  const { t } = useTranslation();

  // Obtén los textos traducidos de i18n
  const textos = t("servicesSection.contenidos", { returnObjects: true });
  const proyectosTexto = t("projectsSection.projects", { returnObjects: true });
  const testimonios = t("testimoniosSection.items", { returnObjects: true });

  // 🔥 Combina textos traducidos con imágenes/videos locales
  const contenidos = contenidosBase.map((base, i) => ({
    ...base,
    ...textos[i],
  }));

  // Combina los textos con la base de imágenes y links
  const projects = projectsBase.map((base) => {
    const texto = proyectosTexto.find((p) => p.id === base.id);
    return { ...base, ...texto };
  });

  const [activo, setActivo] = useState(0);
  const [active, setActive] = useState(projects[0].id);

  // Determina el layout dinámico del grid
  const gridTemplate =
    active === null
      ? "repeat(6, 1fr)"
      : projects.map((p) => (p.id === active ? "7fr" : "1fr")).join(" ");

  return (
    <>
      <Hero />
      <main>
        <motion.section {...fadeInUp} id="clientes" className="py-5 bg-white">
          <Container>
            <Clientes />
          </Container>
        </motion.section>

        <motion.section {...fadeInUp} className="py-5">
          <Container className="py-5">
            <Row className="gy-4">
              <Col lg="5" className="order-1 order-lg-0">
                <div
                  className="rounded-3 p-4"
                  style={{ backgroundColor: "#eceef0" }}>
                  <img
                    src="/images/imagen.png"
                    alt=""
                    className="w-100 object-fit-cover"
                    height={350}
                  />
                </div>
              </Col>
              {/* <Col lg="7" md="10" className="order-0 mx-auto">
                <div className="bg-whsite p-5 rounded-4">
                  <h1>Soluciones que marcan la diferencia.</h1>
                  <p className="color-dark-65">
                    Desarrollamos software personalizado que se adapta
                    perfectamente a las necesidades específicas de tu empresa.
                    Nuestro enfoque ágil y metodologías probadas garantizan
                    resultados excepcionales en cada proyecto.
                  </p>
                  <br />

                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex gap-2">
                      <i
                        className="bi bi-check-circle-fill color-primary"
                        style={{ fontSize: "17px" }}></i>
                      <div>
                        <p className="fw-bold mb-0">
                          Desarrollo ágil y transparente
                        </p>
                        <small className="color-dark-65">
                          Mantenemos comunicación constante y entregas
                          incrementales para tu tranquilidad.
                        </small>
                      </div>
                    </li>
                    <li className="mb-3 d-flex gap-2">
                      <i
                        className="bi bi-check-circle-fill color-primary"
                        style={{ fontSize: "17px" }}></i>
                      <div>
                        <p className="fw-bold mb-0">
                          Tecnologías modernas y escalables{" "}
                        </p>
                        <small className="color-dark-65">
                          Utilizamos las últimas tecnologías para crear
                          soluciones robustas y futuras.
                        </small>
                      </div>
                    </li>
                    <li className="mb-3 d-flex gap-2">
                      <i
                        className="bi bi-check-circle-fill color-primary"
                        style={{ fontSize: "17px" }}></i>
                      <div>
                        <p className="fw-bold mb-0">
                          Soporte continuo y mantenimiento
                        </p>
                        <small className="color-dark-65">
                          Te acompañamos después del lanzamiento con soporte
                          técnico especializado.
                        </small>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col> */}
              <Col lg="7" md="10" className="order-0 mx-auto">
                <div className="bg-whsite p-5 rounded-4">
                  {/* Título y descripción */}
                  <h1>{t("solution.solutionsTitle")}</h1>
                  <p className="color-dark-65">{t("solution.solutionsText")}</p>
                  <br />

                  <ul className="list-unstyled">
                    {/* Mapeamos la lista desde i18n */}
                    {t("solution.solutionsList", { returnObjects: true }).map(
                      (item, idx) => (
                        <li key={idx} className="mb-3 d-flex gap-2">
                          <i
                            className="bi bi-check-circle-fill color-primary"
                            style={{ fontSize: "17px" }}></i>
                          <div>
                            <p className="fw-bold mb-0">{item.title}</p>
                            <small className="color-dark-65">
                              {item.description}
                            </small>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </motion.section>

        <motion.section
          {...fadeInUp}
          className="py-5"
          style={{ backgroundColor: "rgb(var(--primary))" }}>
          <Container className="py-5 text-center text-white">
            <Row className="gy-5 mb-4">
              {/* Texto principal - se va a la izquierda */}
              <Col lg="6" md="8" className="mx-auto">
                {/* <ScrollFly direction="left" distance={120}> */}
                <h1 className="text-white">{t("whyUs.title")}</h1>
                <p>{t("whyUs.text")}</p>
                {/* </ScrollFly> */}
              </Col>

              {/* Bloques pequeños - con map() pero misma estructura visual */}
              <Row className="gy-4 align-items-center">
                {t("whyUs.features", { returnObjects: true }).map(
                  (item, idx) => (
                    <Col md="3" sm="6" key={idx}>
                      {/* <ScrollFly direction="right" distance={150 + idx * 30}> */}
                      <div>
                        {/* Ícono se mantiene fijo según el orden */}
                        <i
                          className={`bi ${
                            [
                              "bi-award",
                              "bi-star",
                              "bi-person-gear",
                              "bi-lightbulb",
                            ][idx]
                          } fs-1`}></i>
                        <p className="fw-bold mb-0">{item.title}</p>
                        <small>{item.description}</small>
                      </div>
                      {/* </ScrollFly> */}
                    </Col>
                  )
                )}
              </Row>
            </Row>
          </Container>
        </motion.section>

        <motion.section {...fadeInUp} className="py-5">
          <Container className="py-5">
            <Row className="gx-5 gy-4 items-center">
              <Col md="6">
                {contenidos.map((c, index) => (
                  <div
                    key={index}
                    className={`mb-5 ${activo === index ? "" : "d-none"}`}>
                    <h4>{c.title}</h4>
                    {c.paragraphs.map((p, i) => (
                      <p key={i} className="color-dark-65">
                        {p}
                      </p>
                    ))}
                    <strong>{c.strong}</strong>
                  </div>
                ))}

                <Row className="gy-3 text-center">
                  {contenidos.map((card) => (
                    <Col md="4" key={card.id}>
                      <div
                        className="p-2 rounded-2 h-100"
                        style={{
                          backgroundColor:
                            activo === card.id
                              ? "rgba(var(--accent),.2)"
                              : "#eceef0",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onClick={() => setActivo(card.id)}>
                        <img
                          src={card.imgPrincipal}
                          alt={card.label}
                          className="w-100 object-fit-cover rounded-2"
                          height={100}
                        />
                        <small
                          className={activo === card.id ? "color-accent" : ""}>
                          {card.label}
                        </small>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col md="6">
                <motion.div
                  key={contenidos[activo].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}>
                  <LazyVideo
                    src={contenidos[activo].video}
                    height={350}
                    className="rounded-2"
                  />
                </motion.div>

                <div className="d-flex gap-3 mt-3">
                  <img
                    src={contenidos[activo].imgSecondario}
                    alt=""
                    className="w-100 object-fit-cover rounded-3"
                    height={150}
                  />
                  <img
                    src={contenidos[activo].imgTerciario}
                    alt=""
                    className="w-100 object-fit-cover rounded-3"
                    height={150}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </motion.section>

        <motion.section
          {...fadeInUp}
          className="projects-section py-5 bg-white"
          id="proyectos">
          <Container className="py-5">
            <Row className="gy-5 mb-4">
              <Col lg="6" md="8" className="mx-auto">
                <h1>{t("projectsSection.title")}</h1>
              </Col>
              <Col md="12">
                <div
                  className="projects-container"
                  style={{ gridTemplateColumns: gridTemplate }}>
                  {projects.map((p) => (
                    <div
                      key={p.id}
                      className={`project-item ${
                        active === p.id ? "active" : ""
                      }`}
                      onMouseEnter={() => setActive(p.id)}
                      onMouseLeave={() => setActive(projects[0].id)}>
                      <img src={p.image} alt={p.title} />
                      <div className="overlay">
                        <small className="text-white">{p.title}</small>
                        {active === p.id && (
                          <>
                            <p>{p.description}</p>
                            <a
                              href={p.link}
                              target="_blank"
                              className="btn btn-accent">
                              {p.viewProject}
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </motion.section>

        <motion.section className="py-5 overflow-hidden">
          <Container className="py-5">
            <Row className="gy-5">
              {/* Encabezado */}
              <Col lg="6" md="8" className="mx-auto text-center">
                <AccentTag
                  subtitle={t("testimoniosSection.subtitle")}
                  title={t("testimoniosSection.title")}
                  isCentered={true}
                />
                <p className="color-dark-65 mt-3">
                  {t("testimoniosSection.description")}
                </p>
              </Col>

              {/* Carrusel 1 */}
              <Col md="12">
                <ScrollCarousel direction="left" speed={25}>
                  <Row className="gy-4 flex-nowrap">
                    {testimonios.slice(0, 3).map((item) => (
                      <Col md="4" key={item.id}>
                        <Card className="border-0 py-4 h-100 shadow-sm">
                          <Card.Body>
                            <div className="color-accent mb-4 small">
                              {[...Array(5)].map((_, i) => (
                                <i key={i} className="bi bi-star-fill"></i>
                              ))}
                            </div>
                            <p className="mb-4 color-dark-65">“{item.texto}”</p>
                            <div className="d-flex gap-2">
                              <img
                                src={item.imagen}
                                alt={item.nombre}
                                className="object-fit-cover rounded-circle"
                                height={50}
                                width={50}
                              />
                              <div>
                                <strong className="color-dark-65">
                                  {item.nombre}
                                </strong>
                                <p className="small mb-0 color-dark-65">
                                  {item.cargo}
                                </p>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </ScrollCarousel>
              </Col>

              {/* Carrusel 2 */}
              <Col md="12">
                <ScrollCarousel direction="right" speed={25}>
                  <Row className="gy-4 flex-nowrap">
                    {testimonios.slice(3, 6).map((item) => (
                      <Col md="4" key={item.id}>
                        <Card className="border-0 py-4 h-100 shadow-sm">
                          <Card.Body>
                            <div className="color-accent mb-4 small">
                              {[...Array(5)].map((_, i) => (
                                <i key={i} className="bi bi-star-fill"></i>
                              ))}
                            </div>
                            <p className="mb-4 color-dark-65">“{item.texto}”</p>
                            <div className="d-flex gap-2">
                              <img
                                src={item.imagen}
                                alt={item.nombre}
                                className="object-fit-cover rounded-circle"
                                height={50}
                                width={50}
                              />
                              <div>
                                <strong className="color-dark-65">
                                  {item.nombre}
                                </strong>
                                <p className="small mb-0 color-dark-65">
                                  {item.cargo}
                                </p>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </ScrollCarousel>
              </Col>
            </Row>
          </Container>
        </motion.section>
      </main>
    </>
  );
};
