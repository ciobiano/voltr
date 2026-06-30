"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureCardData {
  title: string;
  name?: string;
  image: string;
  alt?: string;
}

interface FeatureCardProps {
  feature: FeatureCardData;
  variant?: "default" | "technology";
  className?: string;
}

export const FeatureCard = forwardRef<HTMLElement, FeatureCardProps>(
  function FeatureCard({ feature, variant = "default", className }, ref) {
    const isTechnology = variant === "technology";
    const alt = feature.alt ?? feature.title;

    return (
      <article
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          "relative min-w-0 rounded-2xl overflow-hidden md:aspect-8/5 aspect-2/3  group",
          "w-[70vw] h-[50vh] md:h-auto  md:w-[45vw]",
          className,
        )}
      >
        <Image
          src={feature.image}
          alt={alt}
          fill
          className={cn(
            "object-cover",
            !isTechnology && "transition-transform duration-[var(--duration-scene)] ease-[var(--ease-card)] group-hover:scale-[1.03]",
          )}
          sizes="(max-width: 768px) 80vw, 45vw"
          priority={false}
        />

        <div className={cn(
          "absolute inset-0 bg-gradient-to-t",
          isTechnology
            ? "from-black/70 via-black/20 to-black/10"
            : "from-black/60 via-black/10 to-transparent",
        )} />

        {isTechnology && feature.name && (
          <div className="absolute top-5 left-5">
            <span className="text-md font-semibold text-white/90">{feature.name}</span>
          </div>
        )}

        <p className={cn(
          "absolute left-5 right-5 font-sans text-white leading-mono tracking-tighter whitespace-pre-line",
          isTechnology
            ? "top-16 md:top-auto md:bottom-5 text-subhead"
            : "top-5 md:top-auto md:bottom-5 text-subhead max-w-[70%]",
        )}>
          {feature.title}
        </p>

        <button
          className="absolute bottom-5 left-5 md:left-auto md:right-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-surface-secondary/1 bg-surface-secondary/4 text-white backdrop-blur-md transition-colors group-hover:bg-orange"
          aria-label={`Learn more about ${feature.title}`}
        >
          <Plus size={16} strokeWidth={2.5} />
        </button>
      </article>
    );
  },
);
