"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Heading } from "@/components/primitives/heading";
import { TechnologyCard, type FeatureCardData } from "./technology-card";
import { VOLTR_EASING } from "@/motion/easing";
import { cn } from "@/lib/utils";

const FEATURES: FeatureCardData[] = [
  {
    name: "TrekDrive",
    tagline: "Twice the Efficiency.\nAll the Freedom.",
    image: "/images/rv-images/features.png",
    alt: "TrekDrive powertrain system",
  },
  {
    name: "CampQuiet",
    tagline: "Quiet Comes Standard.",
    image: "/images/rv-images/lifestyle.png",
    alt: "CampQuiet silent operation",
  },
  {
    name: "Aero-Electric",
    tagline: "Built to Move.\nBuilt to Transform.",
    image: "/images/rv-images/interior.png",
    alt: "Aero-Electric architecture",
  },
  {
    name: "SolarSync",
    tagline: "Power From\nAbove.",
    image: "/images/rv-images/features.png",
    alt: "SolarSync energy system",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: VOLTR_EASING.entrance,
    },
  },
};

export function TechnologySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // IntersectionObserver to track active card
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cards.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      {
        root: track,
        threshold: 0.5,
      },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const scrollToCard = useCallback((index: number) => {
    const track = trackRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!track || !cards[index]) return;
    const card = cards[index];
    track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
  }, []);

  const handlePrev = useCallback(() => {
    const next = Math.max(0, activeIndex - 1);
    scrollToCard(next);
  }, [activeIndex, scrollToCard]);

  const handleNext = useCallback(() => {
    const next = Math.min(FEATURES.length - 1, activeIndex + 1);
    scrollToCard(next);
  }, [activeIndex, scrollToCard]);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === FEATURES.length - 1;

  return (
    <section className="bg-surface-primary py-24 md:py-32 overflow-hidden">
      {/* Headline area */}
      <motion.div
        className="px-6 md:px-8 mb-10 md:mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.div variants={fadeUpVariants}>
          <Heading level="display" as="h2">
            Smart Systems. Smooth Journeys.
          </Heading>
        </motion.div>

        <motion.div variants={fadeUpVariants} className="mt-4">
          <span
            className={cn(
              "inline-block font-mono text-caption text-text-secondary",
              "tracking-[var(--tracking-mono)] uppercase",
              "rounded-xl border border-border-subtle bg-surface-secondary",
              "px-4 py-1.5",
            )}
          >
            Technology
          </span>
        </motion.div>
      </motion.div>

      {/* Carousel track — no right padding so cards bleed off-screen */}
      <div
        ref={trackRef}
        className={cn(
          "flex gap-4 overflow-x-auto pl-6 md:pl-8",
          "snap-x snap-mandatory",
          // Hide scrollbar cross-browser
          "scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
        )}
      >
        {FEATURES.map((feature, i) => (
          <TechnologyCard
            key={feature.name}
            feature={feature}
            className={undefined}
            // attach ref
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          />
        ))}
        {/* Right gutter spacer so last card can snap into view */}
        <div className="flex-shrink-0 w-6 md:w-8" aria-hidden="true" />
      </div>

      {/* Controls: arrows + dots */}
      <div className="px-6 md:px-8 mt-8 flex items-center gap-4">
        {/* Arrow buttons */}
        <button
          type="button"
          aria-label="Previous feature"
          onClick={handlePrev}
          disabled={isFirst}
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full",
            "bg-surface-primary border border-border-subtle shadow-elevation-1",
            "transition-opacity duration-[var(--duration-ui)]",
            isFirst && "opacity-40 pointer-events-none",
          )}
        >
          <ArrowLeft size={16} strokeWidth={1.5} className="text-text-primary" />
        </button>

        <button
          type="button"
          aria-label="Next feature"
          onClick={handleNext}
          disabled={isLast}
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full",
            "bg-surface-primary border border-border-subtle shadow-elevation-1",
            "transition-opacity duration-[var(--duration-ui)]",
            isLast && "opacity-40 pointer-events-none",
          )}
        >
          <ArrowRight size={16} strokeWidth={1.5} className="text-text-primary" />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 ml-2" role="tablist" aria-label="Feature cards">
          {FEATURES.map((feature, i) => (
            <button
              key={feature.name}
              type="button"
              role="tab"
              aria-label={`Go to ${feature.name}`}
              aria-selected={i === activeIndex}
              onClick={() => scrollToCard(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-colors duration-[var(--duration-ui)]",
                i === activeIndex ? "bg-text-primary" : "bg-border-subtle",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
