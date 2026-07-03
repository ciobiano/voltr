"use client";

import { forwardRef, useRef, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogTitle, DialogDescription } from "@/components/primitives/dialog";

export interface FeatureCardData {
  title: string;
  name?: string;
  image: string;
  alt?: string;
  description?: string;
  detailImage?: string;
}

interface FeatureCardProps {
  feature: FeatureCardData;
  variant?: "default" | "technology";
  className?: string;
}

const DRAG_THRESHOLD_PX = 5;

export const FeatureCard = forwardRef<HTMLElement, FeatureCardProps>(
  function FeatureCard({ feature, variant = "default", className }, ref) {
    const isTechnology = variant === "technology";
    const alt = feature.alt ?? feature.title;
    const [open, setOpen] = useState(false);
    const pointerStart = useRef<{ x: number; y: number } | null>(null);

    const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
      pointerStart.current = { x: event.clientX, y: event.clientY };
    };

    const handlePointerUp = (event: React.PointerEvent<HTMLElement>) => {
      const start = pointerStart.current;
      pointerStart.current = null;
      if (!start) return;
      const moved =
        Math.abs(event.clientX - start.x) + Math.abs(event.clientY - start.y);
      if (moved < DRAG_THRESHOLD_PX) {
        setOpen(true);
      }
    };

    return (
      <>
        <article
          ref={ref as React.Ref<HTMLElement>}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          role="button"
          tabIndex={0}
          aria-label={`Learn more about ${feature.title}`}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setOpen(true);
            }
          }}
          className={cn(
            "relative min-w-0 rounded-2xl overflow-hidden md:aspect-8/5 aspect-2/3  group cursor-pointer",
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

          <span className="absolute bottom-5 left-5 md:left-auto md:right-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-surface-secondary/1 bg-surface-secondary/4 text-white backdrop-blur-md transition-colors group-hover:bg-orange">
            <Plus size={16} strokeWidth={2.5} />
          </span>
        </article>

        <Dialog open={open} onOpenChange={setOpen}>
          {feature.name && (
            <span className="text-md font-semibold text-text-secondary">{feature.name}</span>
          )}

          <DialogTitle className="mt-3 font-display text-heading-xl tracking-[var(--tracking-mono)] whitespace-pre-line">
            {feature.title}
          </DialogTitle>

          <div className="relative mt-6 h-64 w-full overflow-hidden rounded-xl bg-surface-secondary md:h-80">
            <Image
              src={feature.detailImage ?? feature.image}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 92vw, 640px"
            />
          </div>

          {feature.description && (
            <DialogDescription className="mt-6 text-body leading-relaxed text-text-secondary">
              {feature.description}
            </DialogDescription>
          )}
        </Dialog>
      </>
    );
  },
);
