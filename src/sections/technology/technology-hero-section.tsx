"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { VOLTR_EASING } from "@/motion/easing";

export function TechnologyHeroSection() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 220]);

  return (
    <section className="relative h-[94vh] w-full overflow-hidden text-white">
      <motion.div
        className="absolute inset-4 md:inset-2 will-change-transform overflow-hidden rounded-lg"
        style={{ y }}
      >
        <Image
          src="/images/rv-images/features.png"
          alt="VOLTR Aero-Electric platform"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 flex h-full w-full items-center px-6 pb-28 md:px-10 md:pb-32">
        <div className="flex w-full items-end justify-between">
          <motion.h1
            className="text-heading-xl max-w-[42%] text-white"
            initial={{ opacity: 0, y: 28 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.0, ease: VOLTR_EASING.hero },
            }}
          >
            Engineered
          </motion.h1>

          <motion.h1
            className="text-heading-xl max-w-[42%] text-right text-white"
            initial={{ opacity: 0, y: 28 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.0, ease: VOLTR_EASING.hero, delay: 0.1 },
            }}
          >
            for What&apos;s Ahead.
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
