"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { HeroNav } from "@/components/soul/navigation/hero-nav";
import { Heading } from "@/components/primitives/heading";
import { VOLTR_EASING } from "@/motion/easing";

export function HeroSection() {
  const [ready, setReady] = useState(false);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 220]);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-3 md:inset-2 mt-14 md:mt-0 will-change-transform overflow-hidden rounded-lg"
        style={{ y }}
      >
        <Image
          src="/images/rv-images/interior.png"
          alt="VOLTR Hero"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Top Nav */}
      <HeroNav ready={ready} />

      {/* Main Copy */}
      <div className="relative z-20 flex h-full w-full items-center">
        <div className="w-full px-6 md:px-5">
          <div className="flex flex-col md:flex-row ml-5 md:ml-0 md:items-end md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
              animate={
                ready
                  ? { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.0, ease: VOLTR_EASING.hero } }
                  : {}
              }
            >
              <Heading level="h1" reveal={false} className="max-w-[700px] text-white">
                Born for Adventure.
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
              animate={
                ready
                  ? { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.0, ease: VOLTR_EASING.hero, delay: 0.12 } }
                  : {}
              }
            >
              <Heading level="h1" reveal={false} className="text-white">
                Built in America.
              </Heading>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="absolute bottom-0 left-0 z-30 w-full px-6 pb-8 md:px-14"
        initial={{ opacity: 0 }}
        animate={
          ready
            ? { opacity: 1, transition: { duration: 0.6, ease: VOLTR_EASING.ambient, delay: 0.5 } }
            : {}
        }
      >
        <div className="flex items-center justify-between border-t border-white/20 pt-5">
          <button
            aria-label="Scroll down"
            className="flex items-center gap-2 text-sm font-light tracking-wide transition-opacity hover:opacity-80"
          >
            <ArrowDown size={14} />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs font-light tracking-wide opacity-70">
              Scroll to explore
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
