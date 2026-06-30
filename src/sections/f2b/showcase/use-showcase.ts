"use client";

import { useState } from "react";
import {
  VIEWS, MODES, EXTERIOR_COLORS, INTERIOR_COLORS,
  type ViewId, type ModeId, type ExteriorColorId, type InteriorColorId,
} from "./showcase.data";

export function useShowcase() {
  const [activeView, setActiveView]         = useState<ViewId>("exterior");
  const [activeMode, setActiveMode]         = useState<ModeId>("camp");
  const [activeExtColor, setActiveExtColor] = useState<ExteriorColorId>("snow-line");
  const [activeIntColor, setActiveIntColor] = useState<InteriorColorId>("dune");

  const currentImage =
    activeView === "exterior"
      ? MODES.find((m) => m.id === activeMode)!.image
      : VIEWS.find((v) => v.id === activeView)!.image;

  const tint =
    activeView === "exterior"
      ? EXTERIOR_COLORS.find((c) => c.id === activeExtColor)!.tint
      : activeView === "interior"
      ? INTERIOR_COLORS.find((c) => c.id === activeIntColor)!.tint
      : "transparent";

  return {
    activeView,  setActiveView,
    activeMode,  setActiveMode,
    activeExtColor, setActiveExtColor,
    activeIntColor, setActiveIntColor,
    currentImage,
    tint,
  };
}
