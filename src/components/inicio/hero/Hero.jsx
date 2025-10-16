import { motion } from "motion/react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router";
import { useTranslation } from "react-i18next"; // 👈 importa el hook
import LazyVideo from "../..//LazyVideo";
import {
  cascadeLeft,
  cascadeUp,
  cascadeRight,
  fadeInUp,
} from "@/utils/helpers";
import { AnimatedCount } from "../../AnimatedCount";

export const Hero = () => {
  const { t } = useTranslation(); // 👈 inicializa traducción

  return (
    <motion.header {...fadeInUp} className="pb-5 pt-2 pt-md-5">
      <Container>
        <Row className="gy-5 align-items-center">
          <Col lg="5" md="6">
            <motion.div {...cascadeLeft()}>
              <motion.div
                {...cascadeUp()}
                className="d-flex align-items-center gap-1 color-accent text-uppercase small">
                <span style={{ width: "35px" }}>
                  <hr className="opacity-75" />
                </span>{" "}
                <span>{t("hero.subtitle")}</span>
              </motion.div>

              <motion.h1 {...cascadeUp(1)} className="fw-semibold mb-3">
                {t("hero.title")}
              </motion.h1>

              <motion.h5
                {...cascadeUp(2)}
                className="color-dark-65 fw-normal lh-base">
                {t("hero.description")}
              </motion.h5>

              <motion.div {...cascadeUp(3)} className="d-flex gap-3 mt-5">
                <Link to="/contact" className="btn btn-accent">
                  {t("hero.contact")}
                </Link>
                <a href="#proyectos" className="btn btn-outline-accent">
                  {t("hero.projects")}
                </a>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg="7" md="6" className="ms-auto">
            <motion.div {...cascadeRight()} className="position-relative">
              <Card
                className="position-absolute start-0 top-0 border-0 rounded-4 bg-variado1"
                style={{
                  width: "200px",
                  outline: "10px solid #f7f8f9",
                }}>
                <Card.Body>
                  <AnimatedCount
                    prefix="+"
                    value={99}
                    suffix="%"
                    cascadeProps={cascadeUp(2)}
                  />
                  <motion.small {...cascadeUp(3)} className="text-white">
                    {t("hero.stats.clients")}
                  </motion.small>
                </Card.Body>
              </Card>

              <Card
                className="position-absolute bottom-0 end-0 border-0 rounded-4 bg-variado2"
                style={{
                  width: "200px",
                  outline: "10px solid #f7f8f9",
                }}>
                <Card.Body>
                  <AnimatedCount value={15} cascadeProps={cascadeUp(4)} />
                  <motion.small {...cascadeUp(5)} className="text-white">
                    {t("hero.stats.professionals")}
                  </motion.small>
                </Card.Body>
              </Card>

              <LazyVideo
                height={500}
                src="https://res.cloudinary.com/djlxlz9y3/video/upload/v1760386053/heroVideo_nxfvgo.mp4"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.header>
  );
};
