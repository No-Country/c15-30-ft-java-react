"use client";

import { motion } from "framer-motion";

const DynamicLayer = ({ children }) => {
  return (
    <motion.div initial={{ x: 10000 }} animate={{ x: 0 }}>
      {children}
    </motion.div>
  );
};

export default DynamicLayer;
