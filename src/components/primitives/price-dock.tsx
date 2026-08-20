"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Button } from "@/components/primitives/button";

interface PriceDockProps {
  model?: string;
  price?: string;
  monthly?: string;
  ctaLabel?: string;
  onCta?: () => void;
}

export function PriceDock({
  model = "F2.b",
  price = "$84,900",
  monthly = "$977/mo.",
  ctaLabel = "Order now",
  onCta,
}: PriceDockProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { y: 56, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.5 },
      );

      const expandSection = document.querySelector("[data-expand-section]");
      if (!expandSection) return;

      // Driven by scroll progress rather than a scrubbed tween. Two tweens
      // animating opacity on the same element fought each other, which left
      // the dock stuck hidden with no way back once you scrolled up again.
      // Reading progress directly is reversible by construction: scroll back
      // above the trigger and progress returns to 0, so opacity returns to 1.
      const apply = (p: number) => gsap.set(el, { opacity: 1 - p, y: 16 * p });

      ScrollTrigger.create({
        trigger: expandSection,
        start: "top 90%",
        end: "top 40%",
        invalidateOnRefresh: true,
        onUpdate: (self) => apply(self.progress),
        // The expand section pins itself, so document height changes after
        // this trigger is first measured. onRefresh re-applies the correct
        // state for wherever the user actually is.
        onRefresh: (self) => apply(self.progress),
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} data-dock className="fixed bottom-0 left-0 z-50 w-full">
      <div className="mx-4 mb-3 flex items-center justify-between gap-3 rounded-xl bg-neutral-950/90 px-3 py-2 backdrop-blur-md sm:mx-auto sm:max-w-xl sm:gap-6 md:mb-5 lg:max-w-2/5">
        <div className="flex min-w-0 items-center gap-2 pl-1 sm:gap-6 sm:pl-2">
          <span className="text-sm font-medium tracking-wide text-white">
            {model}
          </span>
          
          <span className="truncate text-sm text-white/70">
            <span className="hidden sm:inline">Starting at </span>
            {price}
          </span>
          {monthly && (
            <>
              <span className="hidden w-1.5 text-white/50 md:inline">—</span>
              <span className="hidden font-mono text-xs text-white/50 md:inline">
                {monthly}{" "}
                <sup className="text-[9px]">(1)</sup>
              </span>
            </>
          )}
        </div>

        <Button
          intent="accent"
          shape="semi"
          className="shrink-0 whitespace-nowrap bg-orange text-white hover:bg-orange/90"
          onClick={onCta}
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
