"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const WORD_GAP_PX = 14;

interface ProductHeroSectionProps {
  image: { src: string; alt: string };
  leftText: string;
  rightText: string;
}

export function ProductHeroSection({ image, leftText, rightText }: ProductHeroSectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 220]);

  const rowRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLHeadingElement>(null);
  const rightRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const row = rowRef.current;
      const left = leftRef.current;
      const right = rightRef.current;
      if (!row || !left || !right) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      // Below md the two lines stack, so the joined-to-split horizontal move
      // has nothing to travel along. Fade them in instead.
      if (window.matchMedia("(max-width: 767px)").matches) {
        gsap.fromTo(
          [left, right],
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08 },
        );
        return;
      }

      // Measure the final (split) layout, then animate in from a joined,
      // centered "single sentence" position out to the resting left/right spots.
      const rowRect = row.getBoundingClientRect();
      const leftRect = left.getBoundingClientRect();
      const rightRect = right.getBoundingClientRect();

      const combinedWidth = leftRect.width + WORD_GAP_PX + rightRect.width;
      const joinedStartX = (rowRect.width - combinedWidth) / 2;
      const leftInitialX = joinedStartX;
      const rightInitialX =
        joinedStartX + leftRect.width + WORD_GAP_PX - (rowRect.width - rightRect.width);

      gsap.set(left, { x: leftInitialX, opacity: 0 });
      gsap.set(right, { x: rightInitialX, opacity: 0 });

      gsap
        .timeline({ defaults: { duration: 1.1, ease: "power3.out" } })
        .to(left, { x: 0, opacity: 1 }, 0)
        .to(right, { x: 0, opacity: 1 }, 0.05);
    },
    { scope: rowRef },
  );

  return (
    <section className="relative h-[94vh] w-full overflow-hidden text-white">
      <motion.div
        className="absolute inset-4 md:inset-2 will-change-transform overflow-hidden rounded-lg"
        style={{ y }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 flex h-full w-full items-center">
        <div className="w-full px-6 md:px-5">
          <div
            ref={rowRef}
            className="ml-5 flex flex-col md:ml-0 md:flex-row md:items-end md:justify-between"
          >
            <h1 ref={leftRef} className="text-heading-xl max-w-[700px] text-white md:max-w-[42%]">
              {leftText}
            </h1>
            <h1
              ref={rightRef}
              className="text-heading-xl max-w-[700px] text-white md:max-w-[42%] md:text-right"
            >
              {rightText}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
