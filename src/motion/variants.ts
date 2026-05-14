import { VOLTR_EASING } from "./easing";
import type { Variants } from "framer-motion";

export const heroReveal: Variants = {
  hidden: { y: 40, opacity: 0, filter: "blur(4px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: VOLTR_EASING.hero },
  },
};

export const cardReveal: Variants = {
  hidden: { y: 24, opacity: 0, scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: VOLTR_EASING.card },
  },
};

export const metricEnter: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.25, ease: VOLTR_EASING.gauge },
  },
};

export const labelReveal: Variants = {
  hidden: { opacity: 0, y: -8, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: VOLTR_EASING.hero },
  },
};

export const wordmarkAppear: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: VOLTR_EASING.hero, delay: 0.4 },
  },
};

export const letterExit: Variants = {
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.3, ease: VOLTR_EASING.card },
  },
};

export const oZoom: Variants = {
  initial: { scale: 1 },
  zoom: {
    scale: 15,
    transition: { duration: 0.9, ease: VOLTR_EASING.entrance },
  },
};

export const overlayFade: Variants = {
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: VOLTR_EASING.entrance },
  },
};
