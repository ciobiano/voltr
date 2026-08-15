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

      <div className="relative z-10 flex h-full w-full items-center px-6 pb-28 md:px-10 md:pb-32">
        <div ref={rowRef} className="flex w-full items-end justify-between">
          <h1 ref={leftRef} className="text-heading-xl max-w-[42%] text-white">
            {leftText}
          </h1>
          <h1 ref={rightRef} className="text-heading-xl max-w-[42%] text-right text-white">
            {rightText}
          </h1>
        </div>
      </div>
    </section>
  );
}
