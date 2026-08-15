"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { VOLTR_EASING } from "@/motion/easing";

interface NavMenuProps {
  open: boolean;
  onClose: () => void;
}

const menuLinks = [
  { label: "F2.b", href: "/f2b" },
  { label: "Technology", href: "/technology" },
  { label: "Experience", href: "/experience" },
  { label: "Order now", href: "/order" },
];

const footerColumns = [
  [
    { label: "Company", href: "#" },
    { label: "Events", href: "#" },
    { label: "Press & Media", href: "#" },
  ],
  [
    { label: "Journal", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Specs", href: "/specs" },
  ],
];

const cards = [
  {
    src: "/images/rv-images/features.png",
    alt: "",
    height: "h-[160px] md:h-[360px]",
    objectPosition: "object-center",
    title: "Technology",
    subtitle: "Discover the tech within",
  },
  {
    src: "/images/rv-images/interior.png",
    alt: "",
    height: "h-[160px] md:h-[360px]",
    objectPosition: "object-top",
    title: "Experience",
    subtitle: "Find your way into an F2.b",
  },
];

const tallCard = {
  src: "/images/rv-images/lifestyle.png",
  alt: "",
  title: "F2.b",
  subtitle: "Your American-built adventure vehicle",
};

function MenuCard({
  children,
  delay,
  open,
}: {
  children: React.ReactNode;
  delay: number;
  open: boolean;
}) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-surface-secondary"
      initial={false}
      animate={{ opacity: open ? 1 : 0, y: open ? 0 : 34 }}
      transition={{ duration: 0.8, ease: VOLTR_EASING.menu, delay }}
    >
      {children}
    </motion.div>
  );
}

function CardCaption({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-white">
      <div className="text-lg font-normal">{title}</div>
      <div className="text-sm opacity-85">{subtitle}</div>
    </div>
  );
}

/**
 * Menu content only — no fixed positioning, no scrim, no background of its
 * own. Nested inside the same pill container as the persistent nav bar row,
 * so opening it grows that one card downward (an extension of the nav)
 * instead of dropping a separate full-viewport layer behind it.
 */
export function NavMenu({ open, onClose }: NavMenuProps) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // The page behind is scroll-locked while open, so Escape is the only
  // keyboard way out of the sheet.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <motion.div
      aria-hidden={!open}
      initial={false}
      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.72, ease: VOLTR_EASING.menu }}
      style={{ overflow: "hidden", pointerEvents: open ? "auto" : "none" }}
    >
      {/* Mobile: the sheet is taller than the viewport and the page behind is
          scroll-locked, so the sheet itself has to scroll or the links below
          the fold are unreachable. Desktop lays out side by side and fits. */}
      <div className="flex max-h-[calc(100dvh-7.5rem)] flex-col gap-10 overflow-y-auto overscroll-contain px-2 pb-10 pt-8 md:max-h-none md:flex-row md:items-start md:gap-10 md:overflow-visible md:px-4 md:pt-10">
        {/* Image cards — below the links on mobile so nav comes first */}
        <div className="order-2 flex flex-[1.6] gap-4 md:order-1">
          <div className="flex flex-1 flex-col gap-4">
            {cards.map((card, i) => (
              <MenuCard key={card.title} delay={open ? 0.14 + i * 0.06 : 0} open={open}>
                <div className={`relative w-full ${card.height}`}>
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className={`object-cover ${card.objectPosition}`}
                    sizes="(max-width: 768px) 45vw, 24vw"
                  />
                  <CardCaption title={card.title} subtitle={card.subtitle} />
                </div>
              </MenuCard>
            ))}
          </div>
          <div className="flex-1">
            <MenuCard delay={open ? 0.26 : 0} open={open}>
              <div className="relative h-[336px] w-full md:h-[736px]">
                <Image
                  src={tallCard.src}
                  alt={tallCard.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 24vw"
                />
                <CardCaption title={tallCard.title} subtitle={tallCard.subtitle} />
              </div>
            </MenuCard>
          </div>
        </div>

        {/* Nav links + secondary footer-style links — first on mobile */}
        <div className="order-1 flex flex-1 flex-col pt-1 md:order-2">
          {menuLinks.map((link, i) => {
            const d = 0.22 + i * 0.09;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="relative block overflow-hidden py-4 text-text-primary hover:text-text-secondary"
              >
                <motion.span
                  className="absolute inset-x-0 top-0 h-px origin-left bg-border-subtle"
                  initial={false}
                  animate={{ scaleX: open ? 1 : 0 }}
                  transition={{ duration: 0.7, ease: VOLTR_EASING.menu, delay: open ? d : 0 }}
                />
                <motion.span
                  className="block text-[clamp(3rem,5.5vw,5rem)] font-normal leading-none tracking-[-0.02em]"
                  initial={false}
                  animate={{ opacity: open ? 1 : 0, y: open ? 0 : 26 }}
                  transition={{ duration: 0.8, ease: VOLTR_EASING.menu, delay: open ? d + 0.06 : 0 }}
                >
                  {link.label}
                </motion.span>
              </a>
            );
          })}

          {/* Secondary link columns, bottom-right */}
          <motion.div
            className="mt-auto grid grid-cols-2 gap-8 pt-14"
            initial={false}
            animate={{ opacity: open ? 1 : 0, y: open ? 0 : 16 }}
            transition={{ duration: 0.6, ease: VOLTR_EASING.menu, delay: open ? 0.5 : 0 }}
          >
            {footerColumns.map((column, i) => (
              <ul key={i} className="flex flex-col gap-2">
                {column.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="text-sm text-text-secondary hover:text-text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
