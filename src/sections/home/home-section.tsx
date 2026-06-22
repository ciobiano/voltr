"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { HeroNav } from "@/components/soul/navigation/hero-nav";
import { VOLTR_EASING } from "@/motion/easing";
import { Heading } from "@/components/primitives/heading";

export function HeroSection() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 220]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.08]);

  return (
    <section className="relative h-screen w-full overflow-hidden  text-white">
      {/* Background */}
      <motion.div
        className="absolute inset-4 md:inset-2 will-change-transform overflow-hidden rounded-lg"
      >
        <Image
          src="/images/rv-images/interior.png"
          alt="VOLTR Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        {/*<div className="absolute inset-0 bg-black/25" />*/}

      
      </motion.div>

      {/* Top Nav */}
      <HeroNav />

      {/* Main Copy */}
      <div className="relative z-20 flex h-full w-full items-center">
        <div className="w-full px-6 md:px-5">
          <div className="flex items-end justify-between">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                ease: VOLTR_EASING.card,
              }}
            >
              <Heading  level="h1" className="max-w-[700px] text-white ">
                Born for Adventure.
              </Heading>
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                delay: 0.15,
                ease: VOLTR_EASING.card,
              }}
            >
              <Heading level="h1" className=" text-white  ">
                Built in America.
              </Heading>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 z-30 w-full px-6 pb-8 md:px-14">
        <div className="flex items-center justify-between border-t border-white/20 pt-5">
          <button className="flex items-center gap-2 text-sm font-light tracking-wide  transition-opacity hover:opacity-80">
            <ArrowDown size={14} />
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-light tracking-wide opacity-70">
              Scroll to explore
            </span>
           
          </div>
        </div>
      </div>
    </section>
  );
}
