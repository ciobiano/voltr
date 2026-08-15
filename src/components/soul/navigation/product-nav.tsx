"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { VOLTR_EASING } from "@/motion/easing";
import { NavLogo } from "@/components/primitives/nav-logo";
import { NavMenu } from "@/components/soul/navigation/nav-menu";

const navLinksLeft = [
  { label: "F2.b", href: "/f2b" },
  { label: "Technology", href: "/technology" },
  { label: "Specs", href: "/specs" },
];

const navLinksRight = [
  { label: "Experience", href: "/experience" },
  { label: "Order now", href: "/order" },
];

interface ProductNavProps {
  className?: string;
}

export function ProductNav({ className }: ProductNavProps) {
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

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
  const scrolledWidth = useTransform(
    progress,
    (t) => `calc(100% - ((100% - 62rem) * ${t}))`,
  );
  // The menu grows out of this same pill, so force it back to full width
  // while open — an extension of the nav, not a separate layer behind it.
  const containerWidth = menuOpen ? "100%" : scrolledWidth;

  return (
    <>
      {/* Scrim over the page behind the pill while the menu is open */}
      {/* z-55 so the scrim also covers the z-50 price dock, which would
          otherwise float on top of the open menu. */}
      <motion.div
        aria-hidden
        className="fixed left-0 top-0 z-[55] h-screen w-screen bg-black/25"
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
        onClick={() => setMenuOpen(false)}
      />

      <motion.header
        className={cn(
          "fixed top-0 left-0 z-[60] flex w-full items-center justify-center ",
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
          className="flex w-full flex-col border bg-surface-tertiary"
          style={{
            maxWidth: containerWidth,
            borderRadius: radius,
            borderColor,
          }}
        >
          <motion.div
            className="flex items-center justify-between"
            style={{
              paddingTop: innerPy,
              paddingBottom: innerPy,
              paddingLeft: innerPx,
              paddingRight: innerPx,
            }}
          >
            <div className="flex items-center gap-10">
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                // `before:` expands the tap area to ~46x44 without changing the
                // 22x16 visual box, so desktop spacing is untouched.
                className="relative h-4 w-[22px] shrink-0 cursor-pointer before:absolute before:-inset-x-3 before:-inset-y-[14px] before:content-['']"
              >
                <motion.span
                  className="absolute left-0 h-[2px] w-[22px] rounded-full bg-current"
                  animate={{ y: menuOpen ? 7 : 0, rotate: menuOpen ? 45 : 0 }}
                  transition={{ duration: 0.5, ease: VOLTR_EASING.menu }}
                  style={{ top: 0 }}
                />
                <motion.span
                  className="absolute left-0 h-[2px] w-[22px] rounded-full bg-current"
                  animate={{ y: menuOpen ? -7 : 0, rotate: menuOpen ? -45 : 0 }}
                  transition={{ duration: 0.5, ease: VOLTR_EASING.menu }}
                  style={{ bottom: 0 }}
                />
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
              <NavLogo scrollY={scrollY} open={menuOpen} />
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

          <NavMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </motion.div>
      </motion.header>
    </>
  );
}
