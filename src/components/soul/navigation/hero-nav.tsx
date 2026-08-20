"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { VOLTR_EASING } from "@/motion/easing";
import { NavLogo } from "@/components/primitives/nav-logo";
import { NavMenu } from "@/components/soul/navigation/nav-menu";

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
  const [menuOpen, setMenuOpen] = useState(false);

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
  const scrolledWidth = useTransform(
    progress,
    (t) => `calc(100% - ((100% - 62rem) * ${t}))`,
  );
  // The menu grows out of the pill, so it takes the full width while open.
  const containerWidth = menuOpen ? "100%" : scrolledWidth;

  // Open state has to win over the scroll-driven transparency: the hero sits
  // behind a transparent nav at scrollY 0, and menu links are unreadable on it.
  const solidBg = "rgba(251,251,251,1)";

  return (
    <>
      {/* z-55 so the scrim also covers the z-50 price dock. */}
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
          "fixed top-0 left-0 z-[60] flex w-full items-center justify-center",
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
          className="flex w-full flex-col border"
          style={{
            maxWidth: containerWidth,
            backgroundColor: isMobile || menuOpen ? solidBg : bg,
            borderRadius: isMobile || menuOpen ? 10 : radius,
            borderColor: isMobile || menuOpen ? "rgba(0,0,0,0.08)" : borderC,
            paddingTop: isMobile ? 12 : innerPy,
            paddingBottom: isMobile ? 12 : innerPy,
            paddingLeft: isMobile ? 16 : innerPx,
            paddingRight: isMobile ? 16 : innerPx,
            color: isMobile || menuOpen ? "rgba(0,0,0,1)" : color,
          }}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-10">
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                // `before:` expands the tap area to ~44x44 without moving the icon.
                className="relative cursor-pointer transition-opacity duration-300 before:absolute before:-inset-[13px] before:content-[''] hover:opacity-80"
              >
                {menuOpen ? (
                  <X size={18} strokeWidth={1.4} />
                ) : (
                  <Menu size={18} strokeWidth={1.4} />
                )}
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
              <h1><NavLogo scrollY={scrollY} open={menuOpen} /></h1>
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
          </div>

          <NavMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </motion.div>
      </motion.header>
    </>
  );
}
