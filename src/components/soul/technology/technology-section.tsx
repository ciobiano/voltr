"use client";

import { Heading } from "@/components/primitives/heading";
import { RevealText } from "@/components/primitives/reveal";
import { Carousel } from "@/components/primitives/carousel";
import { cn } from "@/lib/utils";
import { FeatureCard, type FeatureCardData } from "@/components/primitives/feature-card";
import { Paragraph } from "@/components/primitives/paragraph";

interface TechnologySectionProps {
  features: FeatureCardData[];
  heading?: React.ReactNode;
  label?: string | null;
  description?: React.ReactNode;
}

export function TechnologySection({
  features,
  heading = (<>Smart Systems.<br /> Smooth Journeys.</>),
  label,
  description,
}: TechnologySectionProps) {
  return (
    <section className="flex flex-col bg-surface-primary my-44">
      {description && (
        <div className="w-full px-6 md:px-8 mb-12 md:mb-28">
          <Paragraph className="w-full text-lg font-normal md:max-w-1/2 mx-auto text-center">
            {description}
          </Paragraph>
        </div>
      )}

      <div className="px-6 md:px-8 mb-10 md:mb-20">
        <div className="flex flex-col w-full max-w-5xl mx-auto items-center text-center justify-center">
          <Heading level="h1" as="h2">
            {heading}
          </Heading>
        </div>

        {label && (
          <RevealText delay={0.15} className="my-10 flex items-center justify-center w-full max-w-3xl mx-auto">
            <span
              className={cn(
                "inline-block font-sans",
                "tracking-[var(--tracking-mono)]",
                "rounded-3xl border border-border-subtle bg-accent",
                "px-4 py-1.5",
              )}
            >
              {label}
            </span>
          </RevealText>
        )}
      </div>

      <Carousel
        itemCount={features.length}
        itemLabels={features.map((f) => `Go to ${f.name}`)}
        paddingStart="pl-6 md:pl-28"
        gap="gap-4"
        showControls
      >
        {features.map((feature) => (
          <FeatureCard
            key={feature.name ?? feature.title}
            feature={feature}
            variant="technology"
            className="flex-[0_0_80vw] md:flex-[0_0_45vw]"
          />
        ))}
      </Carousel>
    </section>
  );
}
