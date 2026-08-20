"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface HotspotProps {
  x: number;
  y: number;
  label: string;
  desc: string;
}

export function Hotspot({ x, y, label, desc }: HotspotProps) {
  const [open, setOpen] = useState(false);

  return (
    <button
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={() => setOpen((o) => !o)}
    >
      <span className="absolute -inset-1 rounded-full bg-orange/60 animate-ping [animation-duration:0.9s] [animation-delay:0.2s]" />
      <span className="relative flex h-4 w-4 rounded-full bg-orange border border-white/50 shadow-[0_0_12px_4px_rgba(219,88,30,0.7)]" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute bottom-6 w-36 md:w-40 rounded-xl bg-black/80 p-2.5 md:p-3 text-left backdrop-blur-md",
              x < 25 ? "left-0" : x > 75 ? "right-0" : "left-1/2 -translate-x-1/2",
            )}
          >
            <p className="text-xs font-semibold text-white leading-tight mb-0.5">{label}</p>
            <p className="text-[10px] text-white/60 leading-snug">{desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
