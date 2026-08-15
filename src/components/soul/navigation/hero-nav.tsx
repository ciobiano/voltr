"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { VOLTR_EASING } from "@/motion/easing";
import { NavLogo } from "@/components/primitives/nav-logo";

const navLinksLeft = [
  { label: "F2b", href: "/f2b" },
  { label: "Technology", href: "/technology" },
  { label: "Specs", href: "/specs" },
];

const navLinksRight = [
  { label: "Experience", href: "/experience" },
  { label: "Buy it now", href: "/order" },
];

interface HeroNavProps {
  className?: string;
  ready?: boolean;
}

export function HeroNav({ className, ready = false }: HeroNavProps) {
  const { scrollY } = useScroll();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const paddingY = useTransform(scrollY, [0, 80], [28, 12]);
  const paddingX = useTransform(scrollY, [0, 80], [32, 16]);

  const innerPy = useTransform(scrollY, [0, 80], [0, 8]);
  const innerPx = useTransform(scrollY, [0, 80], [0, 24]);

  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(251,251,251,1)"],
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
    (t) => `calc(100% - ((100% - 62rem) * ${t}))`,
  );

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 z-50 flex w-full items-center justify-center",
        className,
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={
        ready
          ? { opacity: 1, y: 0, transition: { duration: 0.6, ease: VOLTR_EASING.hero } }
          : {}
      }
      style={{
        paddingTop: isMobile ? 12 : paddingY,
        paddingBottom: isMobile ? 12 : paddingY,
        paddingLeft: isMobile ? 12 : paddingX,
        paddingRight: isMobile ? 12 : paddingX,
      }}
    >
      <motion.div
        className="flex w-full items-center justify-between border"
        style={{
          maxWidth: containerWidth,
          backgroundColor: isMobile ? "rgba(251,251,251,1)" : bg,
          borderRadius: isMobile ? 10 : radius,
          borderColor: isMobile ? "rgba(0,0,0,0.08)" : borderC,
          paddingTop: isMobile ? 12 : innerPy,
          paddingBottom: isMobile ? 12 : innerPy,
          paddingLeft: isMobile ? 16 : innerPx,
          paddingRight: isMobile ? 16 : innerPx,
          color: isMobile ? "rgba(0,0,0,1)" : color,
        }}
      >
        <div className="flex items-center gap-10">
          <button className="transition-opacity duration-300 hover:opacity-80">
            <Menu size={18} strokeWidth={1.4} />
          </button>

          <nav className="hidden items-center gap-10 text-sm  tracking-wide md:flex">
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
          <h1><NavLogo scrollY={scrollY} /></h1>
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
