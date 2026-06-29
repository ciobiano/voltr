"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wordmarkAppear, letterExit, oZoom, overlayFade } from "@/motion/variants";

type Phase = "wordmark" | "zoom" | "exit" | "done";

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
      variants={overlayFade}
      initial="visible"
      animate={phase === "exit" ? "exit" : "visible"}
    >
      <motion.div
        layout
        className="text-display text-primary flex items-center justify-center"
        variants={wordmarkAppear}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="popLayout">
          {showLetters && (
            <motion.span key="V" layout variants={letterExit} exit="exit">
              V
            </motion.span>
          )}
        </AnimatePresence>

        <motion.span
          layout
          variants={oZoom}
          initial="initial"
          animate={phase !== "wordmark" ? "zoom" : "initial"}
          style={{ transformOrigin: "center center" }}
        >
          O
        </motion.span>

        <AnimatePresence mode="popLayout">
          {showLetters && (
            <motion.span key="L" layout variants={letterExit} exit="exit">
              L
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {showLetters && (
            <motion.span key="T" layout variants={letterExit} exit="exit">
              T
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {showLetters && (
            <motion.span key="R" layout variants={letterExit} exit="exit">
              R
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
