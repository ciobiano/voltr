"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  wordmarkAppear,
  letterExit,
  oZoom,
  overlayFade,
} from "@/motion/variants";

type Phase = "wordmark" | "zoom" | "exit" | "done";

export function PreLoader() {
  const [phase, setPhase] = useState<Phase>("wordmark");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("zoom"), 1800);
    const t2 = setTimeout(() => setPhase("exit"), 2700);
    const t3 = setTimeout(() => setPhase("done"), 3300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-surface-primary"
      variants={overlayFade}
      animate={phase === "exit" ? "exit" : "visible"}
    >
      <AnimatePresence>
        {phase === "wordmark" && (
          <motion.p
            key="wordmark"
            className="text-display text-text-primary flex"
            variants={wordmarkAppear}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <motion.span key="V" variants={letterExit} exit="exit">
              V
            </motion.span>
            <motion.span key="L" variants={letterExit} exit="exit">
              L
            </motion.span>
            <motion.span key="T" variants={letterExit} exit="exit">
              T
            </motion.span>
            <motion.span key="R" variants={letterExit} exit="exit">
              R
            </motion.span>
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(phase === "zoom" || phase === "exit") && (
          <motion.p
            key="o"
            className="text-display text-text-primary fixed inset-0 flex items-center justify-center"
            variants={oZoom}
            initial="initial"
            animate="zoom"
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
          >
            O
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
