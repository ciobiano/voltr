"use client";

import { RevealLines } from "@/components/primitives/reveal-lines";
import { cn } from "@/lib/utils";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function Paragraph({ children, className }: ParagraphProps) {
  return (
    <RevealLines
      className={cn(
        "font-display font-  text-size-3xs leading-relaxed  text-tertiary",
        className,
      )}
    >
      {children}
    </RevealLines>
  );
}
