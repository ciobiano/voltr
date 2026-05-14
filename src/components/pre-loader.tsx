"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VOLTR_EASING } from "@/motion/easing";

type Phase = "wordmark" | "zoom" | "exit" | "done";

const exitProps = {
  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.3, ease: VOLTR_EASING.card },
  },
};

export function PreLoader() {
  const [phase, setPhase] = useState<Phase>("wordmark");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("zoom"), 2200);
    const t2 = setTimeout(() => setPhase("exit"), 3100);
    const t3 = setTimeout(() => setPhase("done"), 3700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  const showLetters = phase === "wordmark";

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-surface-primary flex items-center justify-center"
      animate={
        phase === "exit"
          ? { opacity: 0, transition: { duration: 0.6, ease: VOLTR_EASING.entrance } }
          : { opacity: 1 }
      }
    >
      <motion.div
        layout
        className="text-display text-text-primary flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: VOLTR_EASING.hero, delay: 0.4 },
        }}
      >
        <AnimatePresence mode="popLayout">
          {showLetters && (
            <motion.span key="V" layout {...exitProps}>
              V
            </motion.span>
          )}
        </AnimatePresence>

        <motion.span
          layout
          animate={
            phase !== "wordmark"
              ? { scale: 15, transition: { duration: 0.9, ease: VOLTR_EASING.entrance, delay: 0.1 } }
              : { scale: 1 }
          }
          style={{ transformOrigin: "center center" }}
        >
          O
        </motion.span>

        <AnimatePresence mode="popLayout">
          {showLetters && (
            <motion.span key="L" layout {...exitProps}>
              L
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {showLetters && (
            <motion.span key="T" layout {...exitProps}>
              T
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {showLetters && (
            <motion.span key="R" layout {...exitProps}>
              R
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
