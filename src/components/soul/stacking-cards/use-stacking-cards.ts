"use client";

import { RefObject, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface TimelineContext {
  activeY: () => number;
  startY: () => number;
  phaseLen: number;
}

interface UseStackingCardsOptions {
  /** Scroll trigger + pin boundary for the whole interaction. */
  sectionRef: RefObject<HTMLElement | null>;
  /** Element pinned for the duration of the card cycle (holds the timeline). */
  pinnedRef: RefObject<HTMLElement | null>;
  cardsRef: RefObject<(HTMLElement | null)[]>;
  /** Y position (relative to the cards' parent) where the active card settles. */
  getActiveY: () => number;
  /** Y position cards rise from before becoming active. */
  getStartY: () => number;
  /** Other elements pinned in lockstep with `pinnedRef` (e.g. a heading), pinSpacing disabled. */
  extraPinRefs?: RefObject<HTMLElement | null>[];
  /** Total scroll distance the interaction consumes. Defaults to 2x viewport height. */
  scrollDistance?: () => number;
  /** Timeline units between one card's rise and the next's. */
  phaseLen?: number;
  /** Scale a card settles to once the next card covers it. */
  releaseScale?: number;
  /** Px a card drifts up once covered. */
  driftUp?: number;
  /** matchMedia breakpoint the whole interaction is scoped to. */
  minBreakpoint?: string;
  /**
   * Called once the card timeline is built, positioned at time 0. Use it to
   * add caller-owned tweens (captions, CTAs) synced to the same timeline.
   * Return a cleanup function to run alongside the hook's own teardown.
   */
  onTimelineReady?: (tl: gsap.core.Timeline, ctx: TimelineContext) => void | (() => void);
}

export function useStackingCards({
  sectionRef,
  pinnedRef,
  cardsRef,
  getActiveY,
  getStartY,
  extraPinRefs = [],
  scrollDistance = () => window.innerHeight * 2,
  phaseLen = 0.6,
  releaseScale = 0.88,
  driftUp = 140,
  minBreakpoint = "(min-width: 768px)",
  onTimelineReady,
}: UseStackingCardsOptions) {
  useGSAP(
    () => {
      const trigger = sectionRef.current;
      const pinned = pinnedRef.current;
      const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
      const extraPins = extraPinRefs.map((ref) => ref.current).filter(Boolean) as HTMLElement[];

      if (!trigger || !pinned || cards.length < 2) return;

      const mm = gsap.matchMedia();

      mm.add(minBreakpoint, () => {
        gsap.set(cards, { clearProps: "all" });
        gsap.set(cards, { transformOrigin: "50% 50%" });

        const stConfig = {
          trigger,
          start: "top top",
          end: () => `+=${scrollDistance()}`,
          invalidateOnRefresh: true,
        };

        extraPins.forEach((el) => {
          ScrollTrigger.create({ ...stConfig, pin: el, pinSpacing: false });
        });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            ...stConfig,
            pin: pinned,
            // `scrub: true` (not a lag value like 1) keeps timeline progress
            // locked exactly to raw scroll position — the pin unpins the
            // instant raw scroll hits the trigger end, so any smoothing lag
            // here would let it release before card 4's rise visually catches up.
            scrub: true,
            pinSpacing: false,
          },
        });

        tl.fromTo(
          cards[0],
          { y: () => getActiveY() + 20, scale: 1, immediateRender: true },
          { y: () => getActiveY(), duration: 0.3 },
          0,
        );
        tl.to(
          cards[0],
          { scale: releaseScale, y: () => getActiveY() - driftUp, duration: 0.5 },
          0.3,
        );

        const restCards = cards.slice(1);
        restCards.forEach((card, idx) => {
          // idx is 0-based within the "rest of the cards" slice, but card[0]
          // already occupies timeline slot 0 above — offset by one phaseLen
          // so each subsequent card gets its own slot instead of piling onto
          // the previous one's (which collapses the reveal gap between them).
          const riseAt = (idx + 1) * phaseLen;
          const isLastCard = idx === restCards.length - 1;

          tl.fromTo(
            card,
            { y: () => getStartY(), scale: 1, immediateRender: true },
            { y: () => getActiveY(), duration: 0.75 },
            riseAt,
          );

          // The last card is the final resting state (may hold a CTA/overlay)
          // — it stays put instead of drifting away for a card that never arrives.
          if (!isLastCard) {
            tl.to(
              card,
              { scale: releaseScale, y: () => getActiveY() - driftUp, duration: 0.5 },
              riseAt + 0.75,
            );
          }
        });

        const extraCleanup = onTimelineReady?.(tl, {
          activeY: getActiveY,
          startY: getStartY,
          phaseLen,
        });

        return () => {
          gsap.set(cards, { clearProps: "all" });
          extraCleanup?.();
        };
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef, dependencies: [] },
  );

  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    const unsub = lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();
    return () => unsub?.();
  }, [lenis]);
}
