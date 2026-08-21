"use client";

import { ReactNode, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { useStackingCards } from "@/components/soul/stacking-cards/use-stacking-cards";

export interface StackingCardData {
  src: string;
  alt: string;
  /** Rendered on top of the image, e.g. a caption + CTA revealed on the last card. */
  overlay?: ReactNode;
}

const CARD_Z_INDICES = ["z-20", "z-30", "z-40", "z-50"] as const;

const HEADER_GAP = 24;

interface StackingCardSceneProps {
  cards: StackingCardData[];
  headingSvgSrc: string;
  leftText: ReactNode;
  rightText: ReactNode;
}

export function StackingCardScene({
  cards,
  headingSvgSrc,
  leftText,
  rightText,
}: StackingCardSceneProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cardParentTop = () =>
    cardsRef.current[0]?.parentElement?.getBoundingClientRect().top ?? 0;

  const getActiveY = () =>
    Math.max(
      0,
      (svgRef.current?.getBoundingClientRect().bottom ?? 0) +
        HEADER_GAP -
        cardParentTop(),
    );

  const getStartY = () =>
    (pinnedRef.current?.offsetHeight || window.innerHeight) -
    (cardParentTop() - (pinnedRef.current?.getBoundingClientRect().top ?? 0)) +
    10;

  useStackingCards({
    // The pinned card stack needs a wide canvas: at tablet it clamped the
    // side copy to 150px and reserved 200vh of empty scroll. Tablet gets the
    // stacked layout instead, same as mobile.
    minBreakpoint: "(min-width: 1024px)",
    sectionRef,
    pinnedRef,
    cardsRef,
    getActiveY,
    getStartY,
    // Must be >= each card's 0.75s rise duration so cards 2→3→4 finish
    // rising before the next one starts (card 1→2 already had this gap
    // for free via card 1's own shorter, hardcoded settle timing).
    phaseLen: 0.7,
    // Lower driftUp/higher releaseScale keep the settled card closer behind
    // the one rising over it, closing the visible gap between them.
    releaseScale: 0.94,
    driftUp: 60,
    onTimelineReady: (tl, { phaseLen }) => {
      const leftTextEl = leftTextRef.current;
      const rightTextEl = rightTextRef.current;
      if (!leftTextEl || !rightTextEl) return;

      gsap.set(leftTextEl, { opacity: 1, y: 0 });
      tl.to(leftTextEl, { opacity: 0, duration: 0.75 }, 0);

      // Card 3 (lake scene) rises at `phaseLen * 2` — sync the right text to
      // arrive with it, not card 2.
      tl.fromTo(
        rightTextEl,
        { y: () => getStartY(), opacity: 1, immediateRender: true },
        { y: () => getActiveY(), duration: 0.75 },
        phaseLen * 2,
      );
      // Fade out must finish before card 4 starts rising at `phaseLen * 3`.
      tl.to(rightTextEl, { opacity: 0, duration: 0.25 }, phaseLen * 3 - 0.25);

      return () => {
        gsap.set([leftTextEl, rightTextEl], { clearProps: "all" });
      };
    },
  });

  return (
    <div ref={sectionRef} className="relative w-full">
      <div
        ref={pinnedRef}
        className="relative w-full h-auto lg:h-screen lg:overflow-visible z-20   Phar2580
        PharPhar2580
        "
      >
        {/*
          Desktop heading rides along inside the already-pinned container
          instead of getting its own separate ScrollTrigger pin. A second
          pin on this element was locking its box via inline left/width
          captured before flex centering resolved, permanently knocking it
          off-center. Living inside `pinnedRef` gets identical fixed-in-
          place behavior for free, using plain CSS, immune to that.
        */}
        <div
          ref={svgRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[5vh] z-10 hidden select-none lg:flex lg:justify-center"
        >
          <Image
            src={headingSvgSrc}
            alt=""
            width={1411}
            height={181}
            className="w-[98vw] min-w-[640px] max-w-[1680px]"
          />
        </div>

        {/* Mobile heading — in-flow duplicate, unchanged. */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative z-10 flex mb-20 mx-2 lg:mx-0  lg:w-[90vw] shrink-0 select-none justify-center lg:hidden"
        >
          <Image
            src={headingSvgSrc}
            alt=""
            width={1411}
            height={181}
            className="w-full lg:min-w-[640px] max-w-[1680px]"
          />
        </div>

        <div className="relative w-full -top-10">
          <div
            ref={cardsTrackRef}
            className="relative z-50 w-full px-4 lg:px-0 lg:pt-[20vh] lg:will-change-transform"
          >
            <div className="relative mx-auto flex w-full flex-col gap-6 lg:block lg:aspect-[4/5] lg:w-[min(42vw,43rem)]">
              {cards.map((card, i) => (
                <div
                  key={`${card.src}-${i}`}
                  ref={(el) => {
                    if (cardsRef.current) cardsRef.current[i] = el;
                  }}
                  className={cn(
                    "relative aspect-[4/5] w-full shrink-0 rounded-[1rem] lg:absolute lg:left-0 lg:top-0 lg:will-change-transform lg:max-h-[67vh]",
                    CARD_Z_INDICES[i] ?? "z-50",
                  )}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="rounded-[1rem] object-cover"
                    sizes="(max-width: 1024px) 88vw, 46rem"
                    priority={i === 0}
                  />

                  {card.overlay && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-[1rem] bg-black/40 px-6 text-center text-white">
                      {card.overlay}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            ref={leftTextRef}
            className="z-30 w-full max-w-[60vw] ml-6 mt-8 lg:mt-0 lg:absolute lg:max-w-[clamp(150px,16vw,245px)] lg:left-[7.5vw] lg:top-[30vh]"
          >
            {leftText}
          </div>

          <div
            ref={rightTextRef}
            className="z-30 w-full max-w-[60vw] mt-8 ml-6  lg:mt-0 lg:absolute lg:max-w-[clamp(150px,16vw,245px)] lg:right-[6.5vw] lg:top-[18vh]"
          >
            {rightText}
          </div>
        </div>
      </div>
      {/* Must match useStackingCards' scrollDistance default (innerHeight * 2) —
          pinSpacing is false, so this is the only thing reserving scroll room
          after the pin. A shortfall here caps the max reachable ScrollTrigger
          progress below 100%, so card 4's rise (which completes exactly at
          100%) can never finish. */}
      <div className="hidden lg:block lg:h-[200vh]" aria-hidden="true" />
    </div>
  );
}
