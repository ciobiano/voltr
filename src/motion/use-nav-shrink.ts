"use client";

import { useScroll, useTransform } from "framer-motion";

export function useNavShrink() {
  const { scrollY } = useScroll();

  const paddingY = useTransform(scrollY, [0, 80], [20, 10]);
  const paddingX = useTransform(scrollY, [0, 80], [24, 16]);

  return { paddingY, paddingX };
}
