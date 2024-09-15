"use client";

import { motion } from "framer-motion";

export default function TemplateTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}