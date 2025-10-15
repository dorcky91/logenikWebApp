import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollCarousel = ({
  children,
  direction = "left", // "left" o "right"
  speed = 20, // velocidad (en porcentaje)
  threshold = ["start end", "end start"], // controla cuándo se activa el scroll
  className = "",
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: threshold,
  });

  // Calcula el desplazamiento según la dirección
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", direction === "left" ? `-${speed}%` : `${speed}%`]
  );

  return (
    <motion.div ref={ref} style={{ x }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollCarousel;
