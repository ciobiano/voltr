"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sun, Zap, Refrigerator, Plus } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { TechnologySpecsSection } from "@/sections/technology/technology-specs-section";
import { Heading } from "@/components/primitives/heading";
import { Label } from "@/components/primitives/label";
import { rvImages } from "@/assets/rv-images";

gsap.registerPlugin(ScrollTrigger);

const VIEWBOX_W = 1440;
const VIEWBOX_H = 1664;

// Straight runs joined by quarter-round elbows — ported from design reference,
// compressed vertically (0.65x) so nodes/cards sit closer together.
const PATH_D =
  "M630,91 V429 Q630,455 650.5,476.45 L693.5,521.3 Q714,542.75 714,568.75 V1014 Q714,1040 734.5,1061.45 L777.5,1106.3 Q798,1127.75 798,1153.75 V1248";

const NODES = [
  { id: "solar", icon: Sun, xPct: 43.75, yPx: 91 },
  { id: "battery", icon: Zap, xPct: 49.58, yPx: 650 },
  { id: "usage", icon: Refrigerator, xPct: 55.42, yPx: 1248 },
] as const;

const CARDS = [
  {
    id: "solar",
    title: "Topped Off by the Sun",
    body: "Heat-tempered rooftop solar panels ensure continuous power production.",
    image: rvImages.systemSolar.src,
    xPct: 3.2,
    yPx: 59.8,
    widthPct: 30.33,
  },
  {
    id: "battery",
    title: "Stored for Later",
    body: "Our high-capacity batteries keep that energy ready to use.",
    image: rvImages.systemBattery.src,
    xPct: 63.9,
    yPx: 501.8,
    widthPct: 30.61,
  },
  {
    id: "usage",
    title: "Stay cool. Stay fed. Stay powered.",
    body: "Effortlessly power your appliances, climate, and lights with minimal noise.",
    image: rvImages.systemPower.src,
    xPct: 3.8,
    yPx: 1207.7,
    widthPct: 30.33,
  },
] as const;

const yToPct = (yPx: number) => (yPx / VIEWBOX_H) * 100;

export function TechnologyEnergyFlowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const green = "var(--color-green)";
      const black = "var(--color-text-primary)";

      const nodeEls = gsap.utils.toArray<HTMLElement>("[data-node]", timeline);
      const cardEls = gsap.utils.toArray<HTMLElement>("[data-card]", timeline);
      const rings = gsap.utils.toArray<HTMLElement>("[data-ring]", timeline);
      const discs = gsap.utils.toArray<HTMLElement>("[data-disc]", timeline);
      const dotted = timeline.querySelector<SVGPathElement>("[data-dots]");
      const progress = timeline.querySelector<SVGPathElement>("[data-progress]");

      // Position nodes and cards from design constants (gsap.set, not inline styles).
      nodeEls.forEach((el, i) => {
        gsap.set(el, { left: `${NODES[i].xPct}%`, top: `${yToPct(NODES[i].yPx)}%` });
      });
      cardEls.forEach((el, i) => {
        gsap.set(el, {
          left: `${CARDS[i].xPct}%`,
          top: `${yToPct(CARDS[i].yPx)}%`,
          width: `${CARDS[i].widthPct}%`,
        });
      });

      if (!dotted || !progress) return;

      const length = progress.getTotalLength();
      gsap.set(dotted, { strokeDasharray: "0.1 9" });
      gsap.set(progress, { strokeDasharray: length, strokeDashoffset: length });
      gsap.set(discs, { backgroundColor: black });
      gsap.set(rings, { opacity: 0, scale: 1.7, transformOrigin: "50% 50%" });

      if (!reduceMotion) {
        rings.forEach((ring) => {
          gsap.fromTo(
            ring,
            { scale: 1.7 * 0.92, opacity: 0.9 },
            {
              scale: 1.7 * 1.12,
              opacity: 0.25,
              duration: 1.3,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            }
          );
        });
      }

      // Binary-search each node's distance along the path by its target y.
      const nodeLengths = NODES.map((node) => {
        let lo = 0;
        let hi = length;
        for (let i = 0; i < 42; i++) {
          const mid = (lo + hi) / 2;
          if (progress.getPointAtLength(mid).y < node.yPx) lo = mid;
          else hi = mid;
        }
        return (lo + hi) / 2;
      });

      const paint = (p: number) => {
        const drawn = p * length;
        gsap.set(progress, { strokeDashoffset: Math.max(length - drawn, 0.001) });
        nodeLengths.forEach((nodeLength, i) => {
          const on = drawn >= nodeLength - 1;
          gsap.set(discs[i], { backgroundColor: on ? green : black });
          const isCurrent =
            on && (i === nodeLengths.length - 1 || drawn < nodeLengths[i + 1] - 1);
          gsap.set(rings[i], { opacity: isCurrent ? 1 : 0 });
        });
      };

      if (reduceMotion) {
        paint(1);
        return;
      }

      paint(0);
      ScrollTrigger.create({
        trigger: timeline,
        start: "top 62%",
        end: "bottom 85%",
        scrub: 0.6,
        onUpdate: (self) => paint(self.progress),
        onRefresh: (self) => paint(self.progress),
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-surface-secondary cross-pattern m-2 mt-20 rounded-lg py-20 md:py-28 overflow-x-clip"
    >
      <Container size="lg" className="mx-auto w-full px-2 md:px-12">
        <div className="flex flex-col mx-auto items-center gap-6 text-center py-20 md:py-24">
          <Label className="tracking-[var(--tracking-mono)]">
            Fable-Electric Platform
          </Label>
          <Heading level="h1" as="h2" className="items-center justify-center text-size-2xl leading-heading tracking-mono text-stroke   ">
            Built to last a Lifetime.
          </Heading>
        </div>
        {/* Mobile — simple vertical stack */}
        <div className="relative flex flex-col items-center gap-16 md:hidden">
          <svg
            viewBox="0 0 10 300"
            preserveAspectRatio="none"
            className="absolute hidden left-1/2 top-8 bottom-8 -translate-x-1/2 h-[calc(100%-4rem)] w-2"
            aria-hidden="true"
          >
            <line
              x1="5"
              y1="0"
              x2="5"
              y2="300"
              stroke="var(--color-text-primary)"
              strokeWidth={3}
              strokeLinecap="round"
              strokeDasharray="0.1 10"
              vectorEffect="non-scaling-stroke"
              opacity={0.85}
            />
          </svg>

          {CARDS.map((card) => (
            <StepCard key={card.id} card={card} />
          ))}
        </div>

        {/* Desktop — precise scroll-driven timeline, ported from design reference */}
        <div ref={timelineRef} className="relative hidden md:block w-full aspect-[45/52]">
          <svg
            viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
            preserveAspectRatio="xMidYMin meet"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              data-dots
              d={PATH_D}
              fill="none"
              stroke="var(--color-text-primary)"
              strokeWidth={2.5}
              strokeLinecap="round"
              opacity={0.85}
            />
            <path
              data-progress
              d={PATH_D}
              fill="none"
              stroke="var(--color-green)"
              strokeWidth={3}
              strokeLinecap="round"
            />
          </svg>

          {NODES.map((node) => (
            <NodeMarker key={node.id} icon={node.icon} />
          ))}

          {CARDS.map((card) => (
            <div key={card.id} data-card className="absolute ">
              <StepCard card={card} />
            </div>
          ))}
        </div>

        <TechnologySpecsSection />
      </Container>
    </section>
  );
}

function NodeMarker({ icon: Icon }: { icon: typeof Sun }) {
  return (
    <div data-node className="absolute z-10 h-0 w-0">
      <span
        data-ring
        className="pointer-events-none absolute left-0 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-green)]"
      />
      <div
        data-disc
        className="absolute left-0 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
      >
        <Icon size={28} strokeWidth={1.6} className="text-white" />
      </div>
    </div>
  );
}

function StepCard({ card }: { card: (typeof CARDS)[number] }) {
  return (
    <div
      key={card.id}
      className="flex-[0_0_92vw] md:flex-[0_0_20vw] flex flex-col rounded-xl overflow-hidden bg-surface-primary border border-border-subtle group"
    >
      {/* Text area */}
      <div className="flex flex-col gap-4 md:gap-2 p-4 md:h-[8rem]  overflow-hidden">
        <span className=" text-size-3xs font-display font-semibold text-text-primary">
          {card.title}
        </span>
        <p className="text-size-2xs text-text-secondary leading-snug">
          {card.body}
        </p>
      </div>

      {/* Image area */}
      <div className="relative md:aspect-[6/3] aspect-8/5 m-1 rounded-lg mt-20 overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 52vw, 22vw"
        />
        <button
          className="absolute bottom-3 right-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-surface-secondary/1 bg-surface-secondary/4 text-white backdrop-blur-md transition-colors group-hover:bg-orange"
          aria-label={`Add ${card.title}`}
        >
          <Plus size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
