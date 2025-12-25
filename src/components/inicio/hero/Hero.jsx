import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router";
import { useTranslation } from "react-i18next"; // 👈 importa el hook
import { AnimatedCount } from "../../AnimatedCount";
import LazyVideo from "../../LazyVideo";

export const Hero = () => {
  const { t } = useTranslation(); // 👈 inicializa traducción

  return (
    <header className="pb-5 pt-4 pt-md-5">
      <Container>
        <Row className="gy-5 align-items-center">
          <Col lg="5" md="6">
            <div>
              <div className="d-flex align-items-center gap-1 color-accent text-uppercase small">
                <span style={{ width: "35px" }}>
                  <hr className="opacity-75" />
                </span>{" "}
                <span>{t("hero.subtitle")}</span>
              </div>

              <h1 className="fw-semibold mb-3">{t("hero.title")}</h1>

              <h5 className="color-dark-65 fw-normal lh-base">
                {t("hero.description")}
              </h5>

              <div className="d-flex gap-3 mt-5">
                <Link to="/contact" className="btn btn-accent">
                  {t("hero.contact")}
                </Link>
                <a href="#proyectos" className="btn btn-outline-accent">
                  {t("hero.projects")}
                </a>
              </div>
            </div>
          </Col>

          <Col lg="7" md="6" className="ms-auto">
            <div className="position-relative">
              <Card className="position-absolute start-0 top-0 border-0 rounded-4 bg-variado1 card-hero-home">
                <Card.Body>
                  <AnimatedCount prefix="+" value={99} suffix="%" />
                  <small className="text-white">
                    {t("hero.stats.clients")}
                  </small>
                </Card.Body>
              </Card>

              <Card className="position-absolute bottom-0 end-0 border-0 rounded-4 bg-variado2 card-hero-home">
                <Card.Body>
                  <AnimatedCount value={15} />
                  <small className="text-white">
                    {t("hero.stats.professionals")}
                  </small>
                </Card.Body>
              </Card>

              <LazyVideo
                height={500}
                src="https://res.cloudinary.com/djlxlz9y3/video/upload/v1760386053/heroVideo_nxfvgo.mp4"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
