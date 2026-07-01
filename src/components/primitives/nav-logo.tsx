"use client";

import { useState } from "react";
import { motion, type MotionValue, useMotionValueEvent } from "framer-motion";
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
    // `relative` container's rendered width is driven ONLY by the mascot span below
    // (V/LTR are position:absolute, out of flow). Keeping that width constant between
    // shrunk states matters: the parent nav centers this component via
    // `left-1/2 -translate-x-1/2`, so if our own width changed with `shrunk`, the
    // centering math would shift the whole block sideways mid-animation — which is
    // what caused "V" to visibly jump right before sliding left.
    <div className="relative flex items-center text-lg font-medium">

      {/* "V" — absolutely positioned directly left of the mascot; pushed further
          left + faded on shrink. Out of flow, so it can't perturb the centering. */}
      <motion.span
        className="absolute right-full inline-block whitespace-nowrap"
        animate={{ x: shrunk ? -24 : 0, opacity: shrunk ? 0 : 1 }}
        transition={pushT}
      >
        V
      </motion.span>

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

      {/* "LTR" — same pattern, pushed right. Tracking lives here (not on the
          container) so the lone "V" doesn't inherit trailing letter-spacing
          and gap away from the mascot. */}
      <motion.span
        className="absolute left-full inline-block whitespace-nowrap tracking-[0.45em]"
        animate={{ x: shrunk ? 24 : 0, opacity: shrunk ? 0 : 1 }}
        transition={pushT}
      >
        LTR
      </motion.span>

    </div>
  );
}
