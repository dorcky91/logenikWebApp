import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollFly = ({
  children,
  direction = "up", // "up", "left", "right"
  distance = 150,
  offsetStart = "start end", // 👈 empieza cuando el elemento entra
  offsetEnd = "end start", // 👈 termina cuando sale del viewport
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [offsetStart, offsetEnd],
  });

  // Movimiento horizontal o vertical según dirección
  const x =
    direction === "left"
      ? useTransform(scrollYProgress, [0, 1], [0, -distance])
      : direction === "right"
      ? useTransform(scrollYProgress, [0, 1], [0, distance])
      : 0;

  const y =
    direction === "up"
      ? useTransform(scrollYProgress, [0, 1], [0, -distance])
      : 0;

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 1, 0.4, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        opacity,
        willChange: "transform, opacity",
        transition: "all 0.8s ease-out",
      }}>
      {children}
    </motion.div>
  );
};

export default ScrollFly;
