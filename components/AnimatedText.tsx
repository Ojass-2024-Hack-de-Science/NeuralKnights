import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, className }) => {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: "-100%",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: "100%",
      }}
      key={1}
      className={`text-2xl ${className ?? ""}`}
      style={{
        textShadow: "0 0 3px #eeeeff",
      }}
    >
      {children}
    </motion.p>
  );
};

export default AnimatedText;
