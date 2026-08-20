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

  useGSAP(() => {
    gsap.from(ref.current, {
      y: 56,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: 0.5,
    });

    const expandSection = document.querySelector("[data-expand-section]");
    if (expandSection) {
      gsap.to(ref.current, {
        opacity: 0,
        y: 16,
        ease: "none",
        scrollTrigger: {
          trigger: expandSection,
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div ref={ref} data-dock className="fixed bottom-0 left-0 z-50 w-full">
      <div className=" max-w-2/5 mx-auto mb-5 flex items-center justify-between rounded-xl bg-neutral-950/90 px-2 py-2 backdrop-blur-md ">
        <div className="flex pl-2 items-center gap-6">
          <span className="text-sm font-medium tracking-wide text-white">
            {model}
          </span>
          
          <span className="text-sm text-white/70">Starting at {price}</span>
          {monthly && (
            <>
              <span className="text-white/50 w-1.5">—</span>
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
          className="bg-orange text-white hover:bg-orange/90 "
          onClick={onCta}
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
