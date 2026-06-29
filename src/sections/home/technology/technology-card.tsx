"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Button } from "@/components/primitives/button";
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
          "relative min-w-0 rounded-2xl overflow-hidden aspect-8/5",
          "w-[80vw] md:w-[35vw]",
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
          <span className="text-body  text-white/90">
            {feature.name}
          </span>
        </div>

        {/* Bottom row: tagline + button */}
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          {/* Tagline */}
          <p
            className="font-sans text-size-xs text-white leading-[1.2] whitespace-pre-line"
          >
            {feature.tagline}
          </p>

          {/* Circular + button */}
          <Button
            intent="ghost"
            shape="pill"
            size="sm"
            icon={<Plus size={18} strokeWidth={1.5} className="text-accent"  />}
            aria-label={`Learn more about ${feature.name}`}
            className="flex-shrink-0 w-11 h-11 p-0 "
          />
        </div>
      </article>
    );
  },
);
