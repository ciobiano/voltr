"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinksLeft = [
  { label: "AE.1", href: "#ae1" },
  { label: "Technology", href: "#technology" },
  { label: "Specs", href: "#specs" },
];

const navLinksRight = [
  { label: "Experience", href: "#experience" },
  { label: "Buy it now", href: "#buy" },
];

interface HeroNavProps {
  className?: string;
}

export function HeroNav({ className }: HeroNavProps) {
  const { scrollY } = useScroll();

  const paddingY = useTransform(scrollY, [0, 80], [28, 12]);
  const paddingX = useTransform(scrollY, [0, 80], [32, 16]);

  const innerPy = useTransform(scrollY, [0, 80], [0, 8]);
  const innerPx = useTransform(scrollY, [0, 80], [0, 24]);

  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.9)"],
  );

  const radius = useTransform(scrollY, [0, 80], [0, 8]);

  const borderC = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,1)"],
  );

  const color = useTransform(
    scrollY,
    [0, 50],
    ["rgb(255 248 241)", "rgba(0, 0, 0, 1)"],
  );

  const progress = useTransform(scrollY, [0, 80], [0, 1]);
  const containerWidth = useTransform(
    progress,
    (t) => `calc(100% - ((100% - 72rem) * ${t}))`,
  );

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 z-50 flex w-full items-center justify-center",
        className,
      )}
      style={{ paddingTop: paddingY, paddingBottom: paddingY, paddingLeft: paddingX, paddingRight: paddingX }}
    >
      <motion.div
        className="flex w-full items-center justify-between border"
        style={{
          maxWidth: containerWidth,
          backgroundColor: bg,
          borderRadius: radius,
          borderColor: borderC,
          paddingTop: innerPy,
          paddingBottom: innerPy,
          paddingLeft: innerPx,
          paddingRight: innerPx,
          color,
        }}
      >
        <div className="flex items-center gap-10">
          <button className="transition-opacity duration-300 hover:opacity-80">
            <Menu size={18} strokeWidth={1.4} />
          </button>

          <nav className="hidden items-center gap-10 text-sm tracking-wide md:flex">
            {navLinksLeft.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="underline-offset-4 transition-all duration-700 ease-out hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-lg font-medium tracking-[0.45em]">
            VOLTR
          </h1>
        </div>

        <nav className="hidden items-center gap-10 text-sm tracking-wide md:flex">
          {navLinksRight.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="underline-offset-4 transition-all duration-700 ease-out hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
