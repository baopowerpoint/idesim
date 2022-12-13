import React from "react";
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};
function FadeInPage({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 1, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInPage;
