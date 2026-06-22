"use client";

import { useEffect } from "react";
import { setViewportSize } from "@/lib/viewport";

export function ViewportProvider() {
  useEffect(() => {
    setViewportSize();
    window.addEventListener("resize", setViewportSize);
    return () => window.removeEventListener("resize", setViewportSize);
  }, []);

  return null;
}
