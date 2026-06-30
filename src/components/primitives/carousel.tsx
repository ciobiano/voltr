"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/primitives/button";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  itemCount: number;
  itemLabels?: string[];
  showControls?: boolean;
  paddingStart?: string;
  gap?: string;
  className?: string;
}

export function Carousel({
  children,
  itemCount,
  itemLabels,
  showControls = true,
  paddingStart = "pl-6 md:pl-28",
  gap = "gap-4",
  className,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
    duration: 32,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const onPointerDown = () => setIsDragging(true);
    const onPointerUp = () => setIsDragging(false);
    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);
    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi]);

  const handlePrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const handleNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <div className={className}>
      <div
        ref={emblaRef}
        className={cn("overflow-hidden", isDragging ? "cursor-grabbing" : "cursor-grab")}
      >
        <div className={cn("flex", gap, paddingStart)}>
          {children}
          <div className="flex-[0_0_1.5rem] md:flex-[0_0_2rem]" aria-hidden="true" />
        </div>
      </div>

      {showControls && (
        <div className="px-6 md:px-28 my-8 flex items-center  gap-4">
          <Button
            intent="outline"
            shape="pill"
            size="sm"
            icon={<ArrowLeft size={16} strokeWidth={1.5} />}
            aria-label="Previous"
            onClick={handlePrev}
            disabled={!canPrev}
            className="w-11 h-11 p-0 "
          />
          <Button
            intent="outline"
            shape="pill"
            size="sm"
            icon={<ArrowRight size={16} strokeWidth={1.5} />}
            aria-label="Next"
            onClick={handleNext}
            disabled={!canNext}
            className="w-11 h-11 p-0"
          />
          <div className="flex items-center ml-2" role="tablist">
            {Array.from({ length: itemCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-label={itemLabels?.[i] ?? `Go to item ${i + 1}`}
                aria-selected={i === activeIndex}
                onClick={() => scrollTo(i)}
                className="flex h-8 w-6 items-center justify-center"
              >
                <span
                  className={cn(
                    "block w-2 h-2 rounded-full transition-colors duration-[var(--duration-ui)]",
                    i === activeIndex ? "bg-text-primary" : "bg-border-subtle",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
