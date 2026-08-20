"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ViewToggle360, ModeToggle, ColorPicker } from "@/components/primitives/showcase-controls";
import { MODES, EXTERIOR_COLORS, INTERIOR_COLORS, EXTERIOR_HOTSPOTS, FLOOR_HOTSPOTS } from "./showcase.data";
import { useShowcase } from "./use-showcase";
import { ViewTabs } from "./view-tabs";
import { Hotspot } from "./hotspot";

export function F2bShowcaseSection() {
  const {
    activeView,  setActiveView,
    activeMode,  setActiveMode,
    activeExtColor, setActiveExtColor,
    activeIntColor, setActiveIntColor,
    currentImage,
    tint,
  } = useShowcase();

  return (
    <section className="relative h-[90vh] w-full">
      {/* Inset rounded frame — overflow-hidden clips the image only */}
      <div className="absolute inset-3 md:inset-2 overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage + tint}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={currentImage} alt="VOLTR F2b" fill priority className="object-cover" />
            <div
              className="absolute inset-0 mix-blend-multiply transition-colors duration-500"
              style={{ backgroundColor: tint }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hotspot layer — same inset, no overflow-hidden so tooltips escape */}
      <div className="absolute inset-3 md:inset-2 rounded-2xl pointer-events-none">
        {activeView === "exterior" && EXTERIOR_HOTSPOTS.map((h) => (
          <Hotspot key={h.id} x={h.x} y={h.y} label={h.label} desc={h.desc} />
        ))}
        {activeView === "floor-plan" && FLOOR_HOTSPOTS.map((h) => (
          <Hotspot key={h.id} x={h.x} y={h.y} label={h.label} desc={h.desc} />
        ))}
      </div>

      <ViewTabs active={activeView} onChange={setActiveView} />

      <AnimatePresence mode="wait">
        {activeView !== "floor-plan" && (
          <motion.div
            key={activeView}
            className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 w-[calc(100vw-3rem)] md:w-max"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            {activeView === "exterior" ? (
              <>
                {/* Mobile: 360 stacked above mode+color */}
                <div className="flex flex-col items-center gap-2 md:hidden">
                  <ViewToggle360 />
                  <div className="flex items-center gap-2">
                    <ModeToggle modes={MODES} active={activeMode} onChange={setActiveMode} />
                    <ColorPicker colors={EXTERIOR_COLORS} active={activeExtColor} onChange={setActiveExtColor} />
                  </div>
                </div>
                {/* Desktop: all three in a row */}
                <div className="hidden md:flex items-center gap-2">
                  <ViewToggle360 />
                  <ModeToggle modes={MODES} active={activeMode} onChange={setActiveMode} />
                  <ColorPicker colors={EXTERIOR_COLORS} active={activeExtColor} onChange={setActiveExtColor} />
                </div>
              </>
            ) : (
              <ColorPicker colors={INTERIOR_COLORS} active={activeIntColor} onChange={setActiveIntColor} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
