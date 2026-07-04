"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { VOLTR_EASING } from "@/motion/easing";
import { NavLogo } from "@/components/primitives/nav-logo";

const navLinksLeft = [
  { label: "F2.b", href: "#f2b" },
  { label: "Technology", href: "/technology" },
  { label: "Specs", href: "/specs" },
];

const navLinksRight = [
  { label: "Experience", href: "#experience" },
  { label: "Order now", href: "#order" },
];

interface ProductNavProps {
  className?: string;
}

export function ProductNav({ className }: ProductNavProps) {
  const { scrollY } = useScroll();

  const paddingY = useTransform(scrollY, [0, 80], [20, 10]);
  const paddingX = useTransform(scrollY, [0, 80], [12, 10]);

  const innerPy = useTransform(scrollY, [0, 80], [15, 15]);
  const innerPx = useTransform(scrollY, [0, 80], [24, 24]);

  const radius = useTransform(scrollY, [0, 80], [10, 10]);

  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,0,0,0.08)", "rgba(0,0,0,0.12)"],
  );

  const progress = useTransform(scrollY, [0, 80], [0, 1]);
  const containerWidth = useTransform(
    progress,
    (t) => `calc(100% - ((100% - 62rem) * ${t}))`,
  );

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 z-50 flex w-full items-center justify-center ",
        className,
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: VOLTR_EASING.hero },
      }}
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
      }}
    >
      <motion.div
        className="flex w-full items-center justify-between border bg-surface-tertiary"
        style={{
          maxWidth: containerWidth,
          borderRadius: radius,
          borderColor,
          paddingTop: innerPy,
          paddingBottom: innerPy,
          paddingLeft: innerPx,
          paddingRight: innerPx,
        }}
      >
        <div className="flex items-center gap-10">
          <button
            aria-label="Open menu"
            className="transition-opacity duration-300 hover:opacity-60"
          >
            <Menu size={18} strokeWidth={1.4} />
          </button>

          <nav className="hidden items-center gap-10 text-sm tracking-wide md:flex">
            {navLinksLeft.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary underline-offset-4 transition-all duration-700 ease-out hover:text-text-primary hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <NavLogo scrollY={scrollY} />
        </div>

        <nav className="hidden items-center gap-10 text-sm tracking-wide md:flex">
          {navLinksRight.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary underline-offset-4 transition-all duration-700 ease-out hover:text-text-primary hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
