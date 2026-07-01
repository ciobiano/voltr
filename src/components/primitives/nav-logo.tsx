"use client";

import { useState } from "react";
import { AnimatePresence, motion, type MotionValue, useMotionValueEvent } from "framer-motion";
import { MascotIcon } from "@/components/primitives/mascot-icon";
import { VOLTR_EASING } from "@/motion/easing";

interface NavLogoProps {
  scrollY: MotionValue<number>;
}

const splitT = { duration: 0.55, ease: VOLTR_EASING.card } as const;
const pushT  = { duration: 0.45, ease: VOLTR_EASING.hero, delay: 0.06 } as const;

export function NavLogo({ scrollY }: NavLogoProps) {
  const [shrunk, setShrunk] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setShrunk(v > 100));

  return (
    // `relative` anchors the popLayout-popped letters during their exit animation
    <div className="relative flex items-center text-lg font-medium">

      {/* "V" — pushed out to the left, as if shoved by the mascot splitting apart. */}
      <AnimatePresence mode="popLayout">
        {!shrunk && (
          <motion.span
            key="v"
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -24, opacity: 0 }}
            transition={pushT}
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

      {/* "LTR" — pushed out to the right, tracking here (not on the container) so the
          lone "V" doesn't inherit trailing letter-spacing and gap away from the mascot. */}
      <AnimatePresence mode="popLayout">
        {!shrunk && (
          <motion.span
            key="ltr"
            className="tracking-[0.45em]"
            initial={{ x: 24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 24, opacity: 0 }}
            transition={pushT}
          >
            LTR
          </motion.span>
        )}
      </AnimatePresence>

    </div>
  );
}
