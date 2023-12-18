"use client";

import { motion } from "framer-motion";

const DynamicLayer = ({ children }) => {
  return (
    <motion.div initial={{ x: -1000 }} animate={{ x: 0}} transition={{duration: 0.3, type: "spring"}}>
      {children}
    </motion.div>
  );
};

export default DynamicLayer;
