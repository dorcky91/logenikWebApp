import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Hero } from "../components/inicio/hero/Hero";
import { Clientes } from "../components/inicio/clientes/Clientes";
import { contenidosBase, projectsBase } from "../utils/helpers";
import LazyVideo from "../components/LazyVideo";
import AccentTag from "../ui/AccentTag";
import ScrollCarousel from "../components/ScrollCarousel";
import { useTranslation } from "react-i18next";

export const Inicio = () => {
  const { t } = useTranslation();

  const [showViewSm, setShowViewSm] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767.98px)");
    const handleChange = (e) => setShowViewSm(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    setShowViewSm(mediaQuery.matches);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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
        <section id="clientes" className="py-5 bg-white">
          <Container>
            <Clientes />
          </Container>
        </section>

        <section className="py-5">
          <Container className="py-5">
            <Row className="gy-4">
              <Col lg="5" className="order-1 order-lg-0">
                <div
                  className="rounded-3 p-4"
                  style={{ backgroundColor: "#eceef0" }}>
                  <img
                    data-aos="fade-up"
                    loading="lazy"
                    src="/images/imagen.png"
                    alt=""
                    className="w-100 object-fit-cover"
                    height={350}
                  />
                </div>
              </Col>
              <Col lg="7" md="10" className="order-0 mx-auto">
                <div className="px-md-5 rounded-4">
                  <h1 data-aos="fade-up">{t("solution.solutionsTitle")}</h1>
                  <p data-aos="fade-up" className="color-dark-65">
                    {t("solution.solutionsText")}
                  </p>
                  <br />

                  <ul className="list-unstyled">
                    {t("solution.solutionsList", { returnObjects: true }).map(
                      (item, idx) => (
                        <li
                          data-aos="zoom-in"
                          data-aos-delay={idx * 100}
                          key={idx}
                          className="mb-3 d-flex gap-2">
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
        </section>

        <section
          className="py-5"
          style={{ backgroundColor: "rgb(var(--primary))" }}>
          <Container className="py-5 text-center text-white">
            <Row className="gy-5 mb-4">
              <Col lg="6" md="8" className="mx-auto">
                <h1 data-aos="fade-up" className="text-white">
                  {t("whyUs.title")}
                </h1>
                <p data-aos="fade-up">{t("whyUs.text")}</p>
              </Col>
              <Col md="12">
                <Row className="gy-4">
                  {t("whyUs.features", { returnObjects: true }).map(
                    (item, idx) => (
                      <Col md="3" sm="6" key={idx}>
                        <div
                          data-aos="zoom-in"
                          data-aos-delay={idx * 100}
                          className="rounded-3 px-3 py-4 h-100"
                          style={{ backgroundColor: "rgba(var(--light),.1)" }}>
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
                      </Col>
                    )
                  )}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5">
          <Container className="py-5">
            {showViewSm ? (
              <Row className="gy-5">
                <Col sm="12">
                  {contenidos.map((c, index) => (
                    <div key={index} className="mb-5 pb-4">
                      <div className="mb-3">
                        <h4 data-aos="fade-up" className="fw-bold">
                          {c.title}
                        </h4>
                        {c.paragraphs.map((p, i) => (
                          <p
                            data-aos="fade-up"
                            key={i}
                            className="color-dark-65">
                            {p}
                          </p>
                        ))}
                        <strong data-aos="fade-up">{c.strong}</strong>
                      </div>

                      <div
                        data-aos="zoom-in"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}>
                        <LazyVideo
                          src={c.video}
                          height={350}
                          className="rounded-2"
                        />
                      </div>

                      <Row className="gy-3 mt-2">
                        <Col xs="6">
                          <img
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                            loading="lazy"
                            src={c.imgSecondario}
                            alt=""
                            className="w-100 object-fit-cover rounded-3"
                            height={150}
                          />
                        </Col>
                        <Col xs="6">
                          <img
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                            loading="lazy"
                            src={c.imgTerciario}
                            alt=""
                            className="w-100 object-fit-cover rounded-3"
                            height={150}
                          />
                        </Col>
                      </Row>
                    </div>
                  ))}
                </Col>
              </Row>
            ) : (
              <Row className="gy-4">
                <Col md="6">
                  {contenidos.map((c, index) => (
                    <div
                      key={index}
                      className={`mb-5 ${activo === index ? "" : "d-none"}`}>
                      <h4 data-aos="fade-up">{c.title}</h4>
                      {c.paragraphs.map((p, i) => (
                        <p data-aos="fade-up" key={i} className="color-dark-65">
                          {p}
                        </p>
                      ))}
                      <strong data-aos="fade-up">{c.strong}</strong>
                    </div>
                  ))}

                  <Row className="gy-3 text-center">
                    {contenidos.map((card, index) => (
                      <Col md="4" key={card.id}>
                        <div
                          data-aos="zoom-in"
                          data-aos-delay={index * 100}
                          className="p-2 rounded-2 h-100 small"
                          title={card.label}
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
                            loading="lazy"
                            src={card.imgPrincipal}
                            alt={card.label}
                            className="w-100 object-fit-cover rounded-2"
                            height={100}
                          />
                          <small
                            className={`d-block text-truncate ${
                              activo === card.id ? "color-accent" : ""
                            }`}>
                            {card.label}
                          </small>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col md="6">
                  <div
                    data-aos="zoom-in"
                    key={contenidos[activo].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}>
                    <LazyVideo
                      src={contenidos[activo].video}
                      height={350}
                      className="rounded-2"
                    />
                  </div>

                  <div className="d-flex gap-3 mt-3">
                    <img
                      data-aos="zoom-in"
                      loading="lazy"
                      src={contenidos[activo].imgSecondario}
                      alt=""
                      className="w-100 object-fit-cover rounded-3"
                      height={150}
                    />
                    <img
                      data-aos="zoom-in"
                      data-aos-delay={100}
                      loading="lazy"
                      src={contenidos[activo].imgTerciario}
                      alt=""
                      className="w-100 object-fit-cover rounded-3"
                      height={150}
                    />
                  </div>
                </Col>
              </Row>
            )}
          </Container>
        </section>

        <section className="projects-section py-5 bg-white" id="proyectos">
          <Container className="py-5">
            <Row className="gy-5 mb-4">
              <Col lg="6" md="8" className="mx-auto">
                <h2 data-aos="fade-up">{t("projectsSection.title")}</h2>
              </Col>
              {showViewSm ? (
                <Col md="12">
                  {projects.map((p) => (
                    <div
                      data-aos="fade-up"
                      key={p.id}
                      className="mb-4 card card-project rounded shadow">
                      <img
                        loading="lazy"
                        className="card-img"
                        src={p.image}
                        alt={p.title}
                      />
                      <div className="card-overlay">
                        <div>
                          <h4 className="text-white">{p.title}</h4>{" "}
                          <p>{p.description}</p>
                        </div>
                      </div>
                      <a
                        href={p.link}
                        target="_blank"
                        className="stretched-link"></a>
                    </div>
                  ))}
                </Col>
              ) : (
                <Col md="12">
                  <div
                    data-aos="fade-up"
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
                        <img loading="lazy" src={p.image} alt={p.title} />
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
              )}
            </Row>
          </Container>
        </section>

        <section className="py-5 overflow-hidden">
          <Container className="py-5">
            <Row className="gy-5">
              <Col lg="6" md="8" className="mx-auto text-center">
                <AccentTag
                  subtitle={t("testimoniosSection.subtitle")}
                  title={t("testimoniosSection.title")}
                  isCentered={true}
                />
                <p data-aos="fade-up" className="color-dark-65 mt-3">
                  {t("testimoniosSection.description")}
                </p>
              </Col>

              {showViewSm ? (
                <Col md="12">
                  <Row className="gy-4">
                    {testimonios.map((item, index) => (
                      <Col md="4" key={item.id}>
                        <Card
                          data-aos="zoom-in"
                          data-aos-delay={index * 100}
                          className="border-0 py-4 h-100 shadow-sm">
                          <Card.Body>
                            <div className="color-accent mb-4 small">
                              {[...Array(5)].map((_, i) => (
                                <i key={i} className="bi bi-star-fill"></i>
                              ))}
                            </div>
                            <p className="mb-4 color-dark-65">“{item.texto}”</p>
                            <div className="d-flex gap-2">
                              <img
                                loading="lazy"
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
                </Col>
              ) : (
                <>
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
                                <p className="mb-4 color-dark-65">
                                  “{item.texto}”
                                </p>
                                <div className="d-flex gap-2">
                                  <img
                                    loading="lazy"
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
                                <p className="mb-4 color-dark-65">
                                  “{item.texto}”
                                </p>
                                <div className="d-flex gap-2">
                                  <img
                                    loading="lazy"
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
                </>
              )}
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};
