"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function F2bExpandSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const card = cardRef.current;
      const headline = headlineRef.current;
      const cta = ctaRef.current;
      if (!section || !card || !headline || !cta) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const isMobile = window.innerWidth < 768;

      // Set initial card size via GSAP so no inline styles needed
      gsap.set(card, {
        width: isMobile ? "84vw" : "42vw",
        height: isMobile ? "52vh" : "62vh",
        borderRadius: 24,
      });

      const split = SplitText.create(headline, {
        type: "words, chars",
        mask: "words",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
        },
      });

      // Phase 1 — card expands to full bleed (0 → 0.6)
      tl.to(
        card,
        {
          width: "100vw",
          height: "100vh",
          borderRadius: 8,
          ease: "none",
          margin: 2,
          duration: 0.6,
        },
        0
      );

      // Phase 2 — chars slide up from mask, overlapping expansion (0.25 → 0.65)
      tl.from(
        split.chars,
        {
          yPercent: 110,
          stagger: { amount: 0.35 },
          ease: "none",
          duration: 0.4,
        },
        0.25
      );

      // Phase 3 — CTAs rise into view (0.72 → 1)
      tl.from(
        cta,
        {
          opacity: 0,
          y: 48,
          ease: "none",
          duration: 0.28,
        },
        0.72
      );


      return () => split.revert();
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} data-expand-section className="relative h-screen bg-surface-secondary overflow-hidden -mt-2 m-2">
      {/* Expanding image card — dimensions set by GSAP on mount */}
      <div
        ref={cardRef}
        className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
      >
        <Image
          src="/images/rv-images/lifestyle.png"
          alt="Built for you"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black/65" />
      </div>

      {/* Headline — chars revealed via mask as card expands */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <h2
          ref={headlineRef}
          className="text-size-3xl font-display font-font-base text-stroke  text-white text-center   whitespace-nowrap"
        >
          Built for you
        </h2>
      </div>

      {/* CTA pair — revealed at end of timeline */}
      <div
        ref={ctaRef}
        className="absolute  bg-text-primary/50 p-1 bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col md:flex-row gap-3 w-[90vw] max-w-6xl rounded-xl"
      >
        <a
          href="#"
          className=" flex flex-col justify-between gap-8 md:gap-12 p-5 md:p-6 rounded-lg bg-obsidian border border-white/10 group hover:brightness-110 transition-all"
        >
          <span className="text-size-3xs  text-accent">Talk with an expert</span>
          <div className="flex items-end justify-between">
            <p className="text-subhead text-white max-w-[70%] leading-wide tracking-tight">
              Get your questions answered
            </p>
            <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange transition-colors shrink-0">
              <ArrowRight size={14} className="text-white" />
            </div>
          </div>
        </a>

        <a
          href="#"
          className="flex-1 flex flex-col  justify-between gap-8 md:gap-12 p-5 md:p-6 rounded-lg bg-orange group hover:brightness-105 transition-all"
        >
          <span className="text-size-3xs text-accent">Start your build</span>
          <div className="flex items-end justify-between">
            <p className="text-subhead text-white max-w-[70%] leading-display tracking-tight">
              Customize your F2.b. Your way.
            </p>
            <div className="h-9 w-9 rounded-full bg-text-primary/20 group-hover:bg-accent flex items-center justify-center shrink-0">
              <ArrowRight size={14} className="text-white group-hover:text-orange" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
