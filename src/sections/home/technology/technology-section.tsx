"use client";

import { Heading } from "@/components/primitives/heading";
import { RevealText } from "@/components/primitives/reveal";
import { Carousel } from "@/components/primitives/carousel";
import { TechnologyCard, type FeatureCardData } from "./technology-card";
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

export function TechnologySection() {
  return (
    <section className="flex flex-col bg-surface-primary">
      {/* Headline area */}
      <div className="px-6 md:px-8 mb-10 md:mb-20">
        <div className="flex flex-col w-full max-w-5xl mx-auto items-center text-center justify-center">
          <Heading level="h1" as="h2">
            Smart Systems.<br /> Smooth Journeys.
          </Heading>
        </div>

        <RevealText delay={0.15} className="my-10 flex items-center justify-center w-full max-w-3xl mx-auto">
          <span
            className={cn(
              "inline-block font-sans",
              "tracking-[var(--tracking-mono)]",
              "rounded-3xl border border-border-subtle bg-accent",
              "px-4 py-1.5",
            )}
          >
            Technology
          </span>
        </RevealText>
      </div>

      <Carousel
        itemCount={FEATURES.length}
        itemLabels={FEATURES.map((f) => `Go to ${f.name}`)}
        paddingStart="pl-6 md:pl-28"
        gap="gap-4"
        showControls
      >
        {FEATURES.map((feature) => (
          <TechnologyCard
            key={feature.name}
            feature={feature}
            className="flex-[0_0_80vw] md:flex-[0_0_35vw]"
          />
        ))}
      </Carousel>
    </section>
  );
}
