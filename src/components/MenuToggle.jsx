import React from "react";
import { motion } from "framer-motion";

function MenuToggle({ isOpen, toggleOpen }) {
  return (
    <button onClick={toggleOpen} className="bg-dark3 z-[70] p-1 rounded-lg">
      <svg width="23" height="23" viewBox="-1 -2 23 23">
        <motion.path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          fill="transparent"
          strokeWidth="3"
          stroke="#F9FAFB"
          strokeLinecap="round"
          d="M 2 2.5 L 20 2.5"
        />
        <motion.path
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          fill="transparent"
          strokeWidth="3"
          stroke="#F9FAFB"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
        />
        <motion.path
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          fill="transparent"
          strokeWidth="3"
          stroke="#F9FAFB"
          strokeLinecap="round"
          d="M 2 16.346 L 20 16.346"
        />
      </svg>
    </button>
  );
}

export default MenuToggle;
