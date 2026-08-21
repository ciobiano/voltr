"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/primitives/container";
import { Label } from "@/components/primitives/label";
import { Heading } from "@/components/primitives/heading";
import { rvImages } from "@/assets/rv-images";

const TICK_COUNT = 60;
const TICK_OUTER = 86;
const RADIUS = TICK_OUTER;
const CENTER = 100;

export function TechnologyScaleSection() {
  const arcRef = useRef<SVGCircleElement>(null);

  useGSAP(() => {
    const arc = arcRef.current;
    if (!arc) return;

    const circumference = 2 * Math.PI * RADIUS;
    gsap.set(arc, { strokeDasharray: circumference, strokeDashoffset: circumference });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(arc, { strokeDashoffset: 0 });
      return;
    }

    gsap.to(arc, {
      strokeDashoffset: 0,
      repeat: -1,
      duration: 20,
      ease: "none",
    });
  });

  return (
    <section className="relative m-2 rounded-lg h-full max-h-[95vh] overflow-hidden py-10 md:py-5">
      <Image
        src={rvImages.exteriorHero.src}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

      <Container
        size="lg"
        className="relative mx-auto flex flex-col items-center justify-center"
      >
        <div className="relative w-[var(--size-scale-ring)] h-[var(--size-scale-ring)]">
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {Array.from({ length: TICK_COUNT }).map((_, i) => {
              const isMajor = i % 15 === 0;
              if (isMajor) return null;
              const angle = (i / TICK_COUNT) * 360;
              return (
                <line
                  key={i}
                  x1={CENTER}
                  y1={12}
                  x2={CENTER}
                  y2={15}
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth={0.5}
                  transform={`rotate(${angle} ${CENTER} ${CENTER})`}
                />
              );
            })}
            <circle
              ref={arcRef}
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke="var(--color-orange)"
              strokeWidth={4}
              strokeLinecap="butt"
              transform={`rotate(-90 ${CENTER} ${CENTER})`}
            />
            {Array.from({ length: TICK_COUNT }).map((_, i) => {
              const isMajor = i % 15 === 0;
              if (!isMajor) return null;
              const angle = (i / TICK_COUNT) * 360;
              return (
                <line
                  key={i}
                  className="z-30"
                  x1={CENTER}
                  y1={12}
                  x2={CENTER}
                  y2={22}
                  stroke="white"
                  strokeWidth={1}
                  transform={`rotate(${angle} ${CENTER} ${CENTER})`}
                />
              );
            })}
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center md:px-8">
            {/* Tracks the dial, which is itself viewport-width based. Matches the
                original ~67px at desktop and shrinks to fit the ring on a phone. */}
            <Heading
              level="h1"
              as="h2"
              className="text-accent text-[clamp(1rem,4.4vw,2.125rem)] leading-snug md:text-[clamp(1.1rem,5.2vw,4.5rem)] md:leading-[var(--leading-heading)] lg:text-[length:var(--text-size-xl)]"
            >
              Canopy on test Drive:
              <br />
              100+, on the Road
            </Heading>
            
           
          </div>
        </div>
      </Container>
    </section>
  );
}
