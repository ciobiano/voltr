"use client";

import { cn } from "@/lib/utils";
import { headingVariants } from "@/design-system/variants";
import { RevealText } from "./reveal";

type Level = "display" | "h1" | "h2" | "h3";
const levelMap: Record<Level, "h1" | "h2" | "h3" | "p"> = {
  display: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

interface HeadingProps {
  level?: Level;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  children: React.ReactNode;
  className?: string;
  reveal?: boolean;
  revealDelay?: number;
}

export function Heading({ level = "h1", as, children, className, reveal = true, revealDelay = 0 }: HeadingProps) {
  const Component = as ?? levelMap[level];

  const heading = (
    <Component className={cn(headingVariants({ level }), className)}>
      {children}
    </Component>
  );

  if (!reveal) return heading;

  return <RevealText delay={revealDelay}>{heading}</RevealText>;
}
