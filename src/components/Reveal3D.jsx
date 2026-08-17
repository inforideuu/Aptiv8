import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reveal3D wraps children with an elegant 3D perspective fold-in/slide-up
 * effect that triggers automatically as the user scrolls them into the viewport.
 */
export default function Reveal3D({ children }) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 60, 
        rotateX: 10,
        scale: 0.96 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        scale: 1 
      }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ 
        duration: 0.75, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      style={{ 
        transformOrigin: "top center", 
        perspective: "1000px" 
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
