"use client";

import { useState } from "react";
import { AnimatePresence, motion, type MotionValue, useMotionValueEvent } from "framer-motion";
import { MascotIcon } from "@/components/primitives/mascot-icon";
import { VOLTR_EASING } from "@/motion/easing";

interface NavLogoProps {
  scrollY: MotionValue<number>;
}

const fallT  = { duration: 0.45, ease: VOLTR_EASING.hero } as const;
const splitT = { duration: 0.55, ease: VOLTR_EASING.card } as const;

export function NavLogo({ scrollY }: NavLogoProps) {
  const [shrunk, setShrunk] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setShrunk(v > 100));

  return (
    // `relative` anchors the popLayout-popped letters during their exit animation
    <div className="relative flex items-center text-lg font-medium tracking-[0.45em]">

      {/* "V" — direct flex child, same position as original text node. Falls out on exit. */}
      <AnimatePresence mode="popLayout">
        {!shrunk && (
          <motion.span
            key="v"
            initial={{ y: "80%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={fallT}
          >
            V
          </motion.span>
        )}
      </AnimatePresence>

      {/* Two mascots at identical position, split apart on shrink. Exact original mx + nudge. */}
      <span
        className="relative inline-flex items-center justify-center mx-[0.05em] -translate-y-[0.05em]"
        style={{ width: "0.85em", height: "0.85em" }}
      >
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          animate={{ x: shrunk ? -11 : 0 }}
          transition={splitT}
        >
          <MascotIcon size="0.95em" />
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          animate={{ x: shrunk ? 11 : 0 }}
          transition={splitT}
        >
          <MascotIcon size="0.95em" />
        </motion.span>
      </span>

      {/* "LTR" — same as "V" */}
      <AnimatePresence mode="popLayout">
        {!shrunk && (
          <motion.span
            key="ltr"
            initial={{ y: "80%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={fallT}
          >
            LTR
          </motion.span>
        )}
      </AnimatePresence>

    </div>
  );
}
