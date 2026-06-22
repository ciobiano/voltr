"use client";

import { LenisProvider } from "@/motion/lenis-provider";
import { ScrollProvider } from "@/motion/scroll-provider";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <ScrollProvider>{children}</ScrollProvider>
    </LenisProvider>
  );
}
