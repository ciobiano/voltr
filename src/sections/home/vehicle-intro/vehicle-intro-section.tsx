"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { ImageStack } from "./image-stack";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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

  useGSAP(
    () => {
      const trigger = sectionRef.current;
      const svg = svgRef.current;
      const pinned = pinnedRef.current;
      const cardsTrack = cardsTrackRef.current;
      const leftText = leftTextRef.current;
      const rightText = rightTextRef.current;
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      if (
        !trigger || !svg || !pinned ||
        !cardsTrack || !leftText || !rightText ||
        cards.length < 4
      ) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const phaseLen = 0.6;
        const releaseScale = 0.88;
        const driftUp = 140;
        const headerGap = 24;

        // Clear any stale transforms before setting up.
        gsap.set(cards, { clearProps: "all" });
        gsap.set([cardsTrack, leftText, rightText], { clearProps: "transform,opacity" });

        gsap.set(svg, { scale: 1, opacity: 1, transformOrigin: "center center" });
        gsap.set(cardsTrack, { clearProps: "transform" });
        gsap.set(cards, { transformOrigin: "50% 50%" });
        gsap.set(leftText, { opacity: 1, y: 0 });

        const cardParentTop = () => cards[0].parentElement!.getBoundingClientRect().top;
        const activeY = () => Math.max(0, svg.getBoundingClientRect().bottom + headerGap - cardParentTop());
        const startY = () => (pinned.offsetHeight || innerHeight) - (cardParentTop() - pinned.getBoundingClientRect().top) + 10;

        const stConfig = {
          trigger,
          start: "top top",
          end: () => `+=${innerHeight * 2}`,
          invalidateOnRefresh: true,
        };

        ScrollTrigger.create({ ...stConfig, pin: svg, pinSpacing: false });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            ...stConfig,
            pin: pinned,
            scrub: 1,
            anticipatePin: 1,
            pinSpacing: false,
          },
        });

        tl.to(leftText, { opacity: 0, duration: 0.75 }, 0);

        tl.fromTo(
          cards[0],
          { y: () => activeY() + 20, scale: 1, immediateRender: true },
          { y: () => activeY(), duration: 0.3 },
          0,
        );
        tl.to(
          cards[0],
          { scale: releaseScale, y: () => activeY() - driftUp, duration: 0.5 },
          0.3,
        );

        cards.slice(1).forEach((card, idx) => {
          const riseAt = idx * phaseLen;
          tl.fromTo(
            card,
            { y: () => startY(), scale: 1, immediateRender: true },
            { y: () => activeY(), duration: 0.75 },
            riseAt,
          );
          tl.to(
            card,
            { scale: releaseScale, y: () => activeY() - driftUp, duration: 0.5 },
            riseAt + 0.75,
          );
        });

        tl.fromTo(
          rightText,
          { y: () => startY(), opacity: 1, immediateRender: true },
          { y: () => activeY(), duration: 0.75 },
          phaseLen,
        );
        tl.to(rightText, { opacity: 0, duration: 0.25 }, phaseLen + 0.5);

        return () => {
          gsap.set(cards, { clearProps: "all" });
          gsap.set([cardsTrack, leftText, rightText], { clearProps: "all" });
        };
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef, dependencies: [] },
  );

  // Lenis scroll sync is event-binding, not a GSAP animation — useEffect is correct here.
  useEffect(() => {
    if (!lenis) return;
    const unsub = lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();
    return () => unsub?.();
  }, [lenis]);

  return (
    <section className="relative isolate bg-surface-primary overflow-hidden">
      <div className="w-full px-6 pt-[18vh] pb-[22vh] md:px-8 md:pt-[15vh] md:pb-[15vh]">
        <div className="flex justify-center">
          <p className="max-w-[560px] text-center text-xl leading-[1.28] text-secondary">
            VOLTR is a new standard in travel, where automotive-grade engineering
            meets the soul of American craft. From our Silicon Valley roots to our
            Colorado factory floor, we build every vehicle under one roof, ensuring
            your journey is as reliable as it is revolutionary.
          </p>
        </div>
      </div>

      <div ref={sectionRef} className="relative w-full">
        <div
          ref={svgRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[5vh] z-10 hidden  md:w-[98vw] -translate-x-1/2 select-none md:flex md:justify-center"
        >
          <Image
            src="/svg/heading-ae1.svg"
            alt=""
            width={1411}
            height={181}
            className="w-full min-w-[640px] max-w-[1680px]"
          />
        </div>

        <div ref={pinnedRef} className="relative w-full h-auto md:h-screen md:overflow-visible z-50">
          <div
            aria-hidden="true"
            className="pointer-events-none relative z-10 flex mb-20 mx-2 md:mx-0  md:w-[90vw] shrink-0 select-none justify-center md:hidden"
          >
            <Image
              src="/svg/heading-ae1.svg"
              alt=""
              width={1411}
              height={181}
              className="w-full md:min-w-[640px] max-w-[1680px]"
            />
          </div>

          <div ref={cardsContainerRef} className="relative w-full -top-10">
            <div
              ref={leftTextRef}
              className="relative z-30 hidden max-w-[245px] md:absolute md:left-[7.5vw] md:top-[30vh] md:block"
            >
              <p className="text-primary text-xs font-semibold tracking-normal">
                Freedom, Reimagined.
              </p>
              <p className="text-secondary font-display text-size-2xs leading-tight mt-3">
                Go further, stay longer and share it with those who matter most.
              </p>
            </div>

            <div
              ref={rightTextRef}
              className="hidden max-w-[245px] md:absolute md:right-[6.5vw] md:top-[18vh] md:block z-30"
            >
              <p className="text-primary text-xs font-semibold tracking-normal">
                Built Different.
              </p>
              <p className="text-secondary font-display text-size-2xs leading-tight mt-3">
                From the Rocky Mountains to the open road, every detail is crafted
                for the journey ahead.
              </p>
            </div>

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
        <div className="hidden md:block md:h-[180vh]" aria-hidden="true" />
      </div>
    </section>
  );
}
