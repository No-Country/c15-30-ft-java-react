"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

const NavBarScrollProgress = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  return (
    <>
      <motion.div
        className="absolute bottom-0 h-1 w-full bg-gradient-to-r from-blue-500 to-pink-500 origin-left rounded-lg"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};

export default NavBarScrollProgress;
