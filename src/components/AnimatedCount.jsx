// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { useEffect, useState } from "react";

// export const AnimatedCount = ({
//   value,
//   suffix = "+",
//   prefix = "",
//   cascadeProps,
// }) => {
//   const motionValue = useMotionValue(0);
//   const [displayValue, setDisplayValue] = useState(0);

//   const rounded = useTransform(motionValue, (latest) => Math.floor(latest));

//   useEffect(() => {
//     // Animación lenta y suave
//     const controls = animate(motionValue, value, {
//       duration: 5, // 3 segundos de animación
//       ease: [0.42, 0, 0.58, 1], // easing suave tipo "ease-in-out"
//     });

//     const unsubscribe = rounded.onChange((val) => setDisplayValue(val));

//     return () => {
//       controls.stop();
//       unsubscribe();
//     };
//   }, [value, rounded, motionValue]);

//   return (
//     <motion.h3
//       {...cascadeProps}
//       className="text-white fw-bold"
//       style={{ fontSize: "3.5rem" }}
// >
//       {prefix}
//       {displayValue}
//       {suffix}
//     </motion.h3>
//   );
// };

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export const AnimatedCount = ({
  value,
  suffix = "+",
  prefix = "",
  cascadeProps,
}) => {
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
    <motion.h3
      ref={ref}
      {...cascadeProps}
      className="text-white fw-bold"
      style={{ fontSize: "3.5rem" }}>
      {prefix}
      {displayValue}
      {suffix}
    </motion.h3>
  );
};
