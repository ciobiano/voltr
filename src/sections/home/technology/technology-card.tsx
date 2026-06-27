"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureCardData {
  name: string;
  tagline: string;
  image: string;
  alt: string;
}

interface TechnologyCardProps {
  feature: FeatureCardData;
  className?: string;
}

export const TechnologyCard = forwardRef<HTMLElement, TechnologyCardProps>(
  function TechnologyCard({ feature, className }, ref) {
    return (
      <article
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          "relative flex-shrink-0 rounded-2xl overflow-hidden aspect-[3/4] snap-start",
          "w-[80vw] md:w-[45vw]",
          className,
        )}
      >
        {/* Full-bleed background image */}
        <Image
          src={feature.image}
          alt={feature.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80vw, 45vw"
          priority={false}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        {/* Top-left: feature name */}
        <div className="absolute top-5 left-5">
          <span className="font-mono text-caption tracking-widest uppercase text-white/80">
            {feature.name}
          </span>
        </div>

        {/* Bottom row: tagline + button */}
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          {/* Tagline */}
          <p
            className="font-display text-size-heading text-white leading-[0.95] whitespace-pre-line"
          >
            {feature.tagline}
          </p>

          {/* Circular + button */}
          <button
            type="button"
            aria-label={`Learn more about ${feature.name}`}
            className={cn(
              "flex-shrink-0 flex items-center justify-center",
              "w-11 h-11 rounded-full",
              "border border-white/60 bg-white/10 backdrop-blur-sm",
              "text-white transition-colors duration-[var(--duration-ui)]",
              "hover:bg-white/20",
            )}
          >
            <Plus size={18} strokeWidth={1.5} />
          </button>
        </div>
      </article>
    );
  },
);
