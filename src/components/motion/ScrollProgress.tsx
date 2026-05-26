"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-16 z-40 h-[2px] origin-left bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
