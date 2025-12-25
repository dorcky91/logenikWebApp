import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export const AnimatedCount = ({ value, suffix = "+", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // solo dispara la animación una vez
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (!isInView) return; // solo animar cuando el elemento esté visible

    const controls = animate(motionValue, value, {
      duration: 5, // animación lenta y suave
      ease: [0.42, 0, 0.58, 1], // easing tipo ease-in-out
    });

    const unsubscribe = rounded.onChange((val) => setDisplayValue(val));

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, value, rounded, motionValue]);

  return (
    <h3 ref={ref} className="text-white fw-bold animated-number">
      {prefix}
      {displayValue}
      {suffix}
    </h3>
  );
};
