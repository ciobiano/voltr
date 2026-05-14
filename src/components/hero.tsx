"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { Button } from "@/components/button";
import { VOLTR_EASING } from "@/motion/easing";

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-surface-primary overflow-hidden">
      {/* Atmospheric light sweep */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,oklch(95%_2%_81deg)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-32 w-full">
        <motion.p
          className="text-caption text-text-secondary mb-8"
          initial={{ opacity: 0, y: -8, filter: "blur(2px)" }}
          animate={
            ready
              ? { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: VOLTR_EASING.hero } }
              : {}
          }
        >
          VOLTR
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          animate={
            ready
              ? { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.1, ease: VOLTR_EASING.hero, delay: 0.15 } }
              : {}
          }
        >
          <Heading level="display" className="mb-6">
            Motion<br />without noise.
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            ready
              ? { opacity: 1, y: 0, transition: { duration: 0.6, ease: VOLTR_EASING.card, delay: 0.5 } }
              : {}
          }
        >
          <Text size="body" color="secondary" className="max-w-md mb-10">
            Cinematic automotive engineering built on calm intelligence and
            architectural precision.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={
            ready
              ? { opacity: 1, y: 0, transition: { duration: 0.4, ease: VOLTR_EASING.micro, delay: 0.7 } }
              : {}
          }
        >
          <Button intent="primary" size="md">
            Explore
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={
          ready
            ? { opacity: 1, transition: { duration: 0.8, ease: VOLTR_EASING.ambient, delay: 1.2 } }
            : {}
        }
      >
        <span className="text-caption text-text-tertiary">Scroll</span>
        <motion.div
          className="w-px h-8 bg-text-tertiary"
          animate={{
            scaleY: [1, 0.4, 1],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 2.4,
            ease: VOLTR_EASING.ambient,
            repeat: Infinity,
          }}
          style={{ transformOrigin: "top center" }}
        />
      </motion.div>
    </section>
  );
}
