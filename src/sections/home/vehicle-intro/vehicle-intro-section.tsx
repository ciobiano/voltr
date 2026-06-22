"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import { ImageStack } from "./image-stack";

gsap.registerPlugin(ScrollTrigger);

export function VehicleIntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lenis = useLenis();

  useEffect(() => {
    const trigger = sectionRef.current;
    const svg = svgRef.current;
    const pinned = pinnedRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cardsTrack = cardsTrackRef.current;
    const leftText = leftTextRef.current;
    const rightText = rightTextRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (
      !trigger ||
      !svg ||
      !pinned ||
      !cardsContainer ||
      !cardsTrack ||
      !leftText ||
      !rightText ||
      cards.length < 4
    ) return;

    const overlay = cards[3]?.querySelector(".card-overlay");

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const headerGap = 24;
      const releaseScale = 0.88;
      const driftUp = 90;
      const phaseLen = 1.1;

      gsap.set(svg, { scale: 1, opacity: 1, transformOrigin: "center center" });
      gsap.set(cardsTrack, { clearProps: "transform" });
      gsap.set(cards, { transformOrigin: "50% 50%" });

      const getSceneTravel = () => window.innerHeight * 4.5;
      const getCardStackBase = () => {
        const cardParent = cards[0]?.parentElement;
        if (!cardParent) return 0;
        return cardParent.getBoundingClientRect().top - pinned.getBoundingClientRect().top;
      };
      const getHeaderStop = () => {
        const svgBounds = svg.getBoundingClientRect();
        const pinnedBounds = pinned.getBoundingClientRect();
        return svgBounds.bottom - pinnedBounds.top + headerGap;
      };
      const getActiveY = () => Math.max(0, getHeaderStop() - getCardStackBase());
      const getCardStartY = () => {
        const viewportH = pinned.offsetHeight || window.innerHeight;
        return viewportH - getCardStackBase() + 60;
      };

      ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: () => `+=${getSceneTravel()}`,
        pin: svg,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${getSceneTravel()}`,
          pin: pinned,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl
        .to(leftText, { opacity: 1, y: 0, duration: 0.35 }, 0)
        .to(leftText, { opacity: 0, y: -24, duration: 0.3 }, 0.9)
        .to(rightText, { opacity: 1, y: 0, duration: 0.35 }, 2.5)
        .to(rightText, { opacity: 0, y: -24, duration: 0.35 }, 3.8);

      cards.forEach((card, i) => {
        const arrivalStart = i * phaseLen;

        // Card rises from below into the active (pinned) position
        tl.fromTo(
          card,
          { y: () => getCardStartY(), scale: 1, immediateRender: true },
          { y: () => getActiveY(), scale: 1, duration: 0.75, ease: "none" },
          arrivalStart,
        );

        // Card scales down + drifts up as the next card arrives into the gap
        if (i < cards.length - 1) {
          tl.to(
            card,
            { scale: releaseScale, y: () => getActiveY() - driftUp, duration: 0.8, ease: "none" },
            arrivalStart + 0.85,
          );
        }
      });

      if (overlay) {
        const overlayStart = (cards.length - 1) * phaseLen + 0.75 + 0.3;
        tl.fromTo(overlay, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, overlayStart);
      }
    });

    let cleanupLenis: (() => void) | undefined;
    if (lenis) {
      cleanupLenis = lenis.on("scroll", ScrollTrigger.update);
    }

    ScrollTrigger.refresh();

    return () => {
      if (cleanupLenis) cleanupLenis();
      mm.revert();
    };
  }, [lenis]);

  return (
    <section className="relative isolate bg-surface-primary overflow-hidden">
      {/* Intro text */}
      <div className="w-full px-6 pt-[18vh] pb-[22vh] md:px-8 md:pt-[15vh] md:pb-[15vh]">
        <div className="flex justify-center">
          <p className="max-w-[560px] text-center font-normal text-[clamp(1.05rem,1.45vw,1.35rem)] leading-[1.28] text-tertiary">
            VOLTR is a new standard in travel, where automotive-grade engineering
            meets the soul of American craft. From our Silicon Valley roots to our
            Colorado factory floor, we build every vehicle under one roof, ensuring
            your journey is as reliable as it is revolutionary.
          </p>
        </div>
      </div>

      {/* Main interactive area containing both SVG heading and cards */}
      <div ref={sectionRef} className="relative w-full">
        {/* Large heading (desktop only, pinned independently) */}
        <div
          ref={svgRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[5vh] z-10 hidden w-[97vw] -translate-x-1/2 select-none md:flex md:justify-center"
        >
          <img
            src="/svg/heading-ae1.svg"
            alt=""
            className="w-full min-w-[1120px] max-w-[1680px] text-primary"
          />
        </div>

        {/* Pinned card stack area */}
        <div
          ref={pinnedRef}
          className="relative w-full h-auto md:h-screen md:overflow-visible"
        >
          {/* Mobile heading */}
          <div
            aria-hidden="true"
            className="pointer-events-none relative z-10 flex w-[90vw] shrink-0 select-none justify-center md:hidden"
          >
            <img
              src="/svg/heading-ae1.svg"
              alt=""
              className="w-full min-w-[640px] max-w-[1680px] text-primary"
            />
          </div>

          {/* Desktop interactive elements wrapper */}
          <div ref={cardsContainerRef} className="relative w-full">
            {/* Left text */}
            <div
              ref={leftTextRef}
              className="relative z-30 hidden max-w-[245px] md:absolute md:left-[7.5vw] md:top-[56vh] md:block"
            >
              <p className="text-primary text-medium font-semibold tracking-normal">
                Freedom, Reimagined.
              </p>
              <p className="text-tertiary text-body leading-body mt-3">
                Go further, stay longer and share it with those who matter most.
              </p>
            </div>

            {/* Right text */}
            <div
              ref={rightTextRef}
              className="relative z-30 hidden max-w-[245px] text-right md:absolute md:right-[7.5vw] md:top-[56vh] md:block"
            >
              <p className="text-primary text-medium font-semibold tracking-normal">
                Built Different.
              </p>
              <p className="text-tertiary text-body leading-body mt-3">
                From the Rocky Mountains to the open road, every detail is crafted
                for the journey ahead.
              </p>
            </div>

            {/* Card stack - normal flow, pinned track */}
            <div
              ref={cardsTrackRef}
              className="relative z-50 w-full px-4 md:px-0 md:pt-[20vh] md:will-change-transform"
            >
              <ImageStack
                cardsRef={cardsRef}
                className="w-full md:w-[min(42vw,43rem)] md:mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
