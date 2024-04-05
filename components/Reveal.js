// import { motion, useInView, useAnimation } from "framer-motion";
// import React, { useEffect, useRef } from "react";

// const Reveal = ({ children, width = "fit-content | 100%" }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const mainControls = useAnimation();
//   const slideControls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       mainControls.start("visible");
//       slideControls.start("visible");
//       console.log(isInView);
//     }
//   }, [isInView]);

//   return (
//     <div ref={ref} className={`relative w-${width} overflow-hidden`}>
//       <motion.div
//         variants={{
//           hidden: { opacity: 0, y: 75 },
//           visible: { opacity: 1, y: 0 },
//         }}
//         initial="hidden"
//         animate={mainControls}
//         transition={{ duration: 0.5, delay: 0.25 }}
//         className="overflow-hidden"
//       >
//         {children}
//       </motion.div>

//       <motion.div
//         variants={{
//           hidden: { left: 0 },
//           visible: { left: "100%" },
//         }}
//         initial="hidden"
//         animate={slideControls}
//         transition={{ duration: 0.5, ease: "easeIn" }}
//         className="absolute top-4 bottom-4 left-0 right-0 bg-black z-20"
//       />
//     </div>
//   );
// };

// export default Reveal;

import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Reveal = ({ children, width = "fit-content | 100%" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const top = element.getBoundingClientRect().top;
        setIsVisible(top >= 0 && top <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isVisible, mainControls, slideControls]);

  return (
    <div ref={ref} className={`relative w-${width} overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-4 bottom-4 left-0 right-0 bg-black z-20"
      />
    </div>
  );
};

export default Reveal;
