import { Card, Col, Container, Row } from "react-bootstrap";
import "@/assets/About.css";
import { cardNosotros, cascadeUp } from "../utils/helpers";
import { motion } from "motion/react";
import AccentTag from "../ui/AccentTag";
import { AnimatedCount } from "../components/AnimatedCount";
import LazyVideo from "../components/LazyVideo";
import { useTranslation } from "react-i18next";
import React from "react";

export const About = () => {
  const { t } = useTranslation();
  const aboutHeader = t("aboutHeaderSection", { returnObjects: true });
  const aboutTeam = t("aboutTeamSection", { returnObjects: true });
  const experiences = t("aboutExperiencesSection.items", {
    returnObjects: true,
  });
  const section = t("aboutBannerSection", { returnObjects: true });

  return (
    <>
      <header className="py-5">
        <Container className="py-5">
          <Row className="gy-4 align-items-lg-center">
            {/* Texto principal */}
            <Col lg={7} md={9}>
              <div className="d-flex align-items-center gap-1 color-accent text-uppercase small">
                <span style={{ width: "35px" }}>
                  <hr className="opacity-75" />
                </span>
                <span>{aboutHeader.smallText}</span>
              </div>

              <h1 className="fw-semibold">
                {aboutHeader.title
                  .split(aboutHeader.highlight)
                  .map((part, i) => (
                    <React.Fragment key={i}>
                      {i === 0 ? part : ""}
                      {i === 0 && (
                        <span className="color-accent">
                          {aboutHeader.highlight}
                        </span>
                      )}
                      {i === 1 ? part : ""}
                    </React.Fragment>
                  ))}
              </h1>
            </Col>

            {/* Imagen principal */}
            <Col md="6">
              <div className="h-100">
                <img
                  src="https://img.freepik.com/free-photo/team-software-engineers-doing-brainstorming-office_482257-123976.jpg"
                  alt=""
                  className="w-100 object-fit-cover rounded-3"
                  height={350}
                />
              </div>
            </Col>

            {/* Características */}
            <Col md="6">
              <Row className="gy-4">
                <Col lg={6}>
                  {aboutHeader.features.map((feature, idx) => (
                    <div className="mb-3 d-flex gap-2" key={idx}>
                      <i
                        className={`bi ${feature.icono} color-accent`}
                        style={{ fontSize: "17px" }}></i>
                      <div>
                        <p className="fw-bold mb-0">{feature.titulo}</p>
                        <small className="color-dark-65">{feature.texto}</small>
                      </div>
                    </div>
                  ))}
                </Col>

                {/* Segunda imagen */}
                <Col lg={6}>
                  <div className="h-100">
                    <img
                      height={350}
                      src="https://img.freepik.com/premium-photo/new-startup-project-online_926199-4079568.jpg"
                      alt=""
                      className="w-100 object-fit-cover rounded-3"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>

      <main>
        <section className="py-5 bg-white" id="about-team">
          <Container className="py-5">
            <Row className="gy-4 align-items-center">
              <Col lg={5} md="8" className="mx-auto order-1 order-lg-0">
                <LazyVideo
                  src="https://res.cloudinary.com/djlxlz9y3/video/upload/v1760415038/representar_xv1bh3.mp4"
                  height={500}
                  className="rounded-3"
                />
              </Col>
              <Col lg="7">
                <Row className="gy-4">
                  <Col lg={8}>
                    <AccentTag
                      subtitle={aboutTeam.subtitle}
                      title={aboutTeam.title}
                    />
                  </Col>
                  <Col md="12">
                    <Row className="gy-4">
                      {aboutTeam.cards.map((item, index) => (
                        <Col md="6" sm="6" key={index}>
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
                                      d="M1.90798e-07 0L0 16C1.05375e-07 7.16344 7.16344 8.54232e-08 16 1.90798e-07L1.90798e-07 0Z"
                                      fill="currentColor"
                                    />
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
                                      d="M1.90798e-07 0L0 16C1.05375e-07 7.16344 7.16344 8.54232e-08 16 1.90798e-07L1.90798e-07 0Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <div className="contenedor-icono">
                                  <i className={`bi ${item.icono}`}></i>
                                </div>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <p className="fw-bold mt-3 mb-2">{item.titulo}</p>
                              <small>{item.texto}</small>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5" id="banner-about-experiences">
          <Container>
            <Row className="gy-4 text-white text-uppercase text-center text-lg-start">
              {experiences.map((item, index) => (
                <Col lg="3" sm="6" key={index}>
                  <AnimatedCount
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    cascadeProps={cascadeUp(4)}
                    className="mb-0 fw-bold text-white"
                    style={{ fontSize: "3.5rem" }}
                  />
                  <small>{item.label}</small>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="py-5" id="banner-about">
          <Container className="py-5">
            <Row className="gy-4 mb-5 text-white">
              <Col md="6">
                <h1 className="text-white">{section.title}</h1>
                <p className="fs-4 my-4">{section.description}</p>
                <button className="btn btn-accent">{section.button}</button>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};
