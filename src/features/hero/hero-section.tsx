"use client";

import { motion } from "framer-motion";
import { Label } from "@/components/label";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { Button } from "@/components/button";
import { heroReveal, labelReveal, cardReveal } from "@/motion/variants";

const stagger = {
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.6 },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-surface-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-surface-primary via-surface-primary to-[oklch(15%_3%_81deg)]" />

      <div className="relative z-10 mx-auto px-8 w-full max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-8 max-w-3xl"
        >
          <motion.div variants={labelReveal}>
            <Label>VOLTR</Label>
          </motion.div>

          <motion.div variants={heroReveal}>
            <Heading level="display" as="h1">
              Motion<br />without noise.
            </Heading>
          </motion.div>

          <motion.div variants={cardReveal}>
            <Text size="body" color="secondary" className="max-w-md">
              Cinematic automotive engineering built on calm intelligence and
              architectural precision.
            </Text>
          </motion.div>

          <motion.div
            variants={cardReveal}
            className="flex gap-4 pt-4"
          >
            <Button intent="primary" size="lg">
              Explore
            </Button>
            <Button intent="primary" size="lg" className="bg-transparent text-text-primary border border-border-subtle hover:bg-text-primary hover:text-surface-primary hover:brightness-100">
              Configure
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent opacity-30" />
    </section>
  );
}
