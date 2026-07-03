"use client";

import { StackingCardScene } from "@/components/soul/stacking-cards/stacking-card-scene";
import { CARDS } from "@/components/soul/stacking-cards/vehicle-stacking-content";

export function VehicleIntroSection() {
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

      <StackingCardScene
        cards={CARDS}
        headingSvgSrc="/svg/heading-ae1.svg"
        leftText={
          <>
            <p className="text-primary text-size-2xs md:text-xs font-semibold tracking-normal">
              Freedom, Reimagined.
            </p>
            <p className="text-secondary font-display text-size-2xs leading-tight mt-3">
              Go further, stay longer and share it with those who matter most.
            </p>
          </>
        }
        rightText={
          <>
            <p className="text-primary text-size-2xs md:text-xs font-semibold tracking-normal">
              Built Different.
            </p>
            <p className="text-secondary font-display text-size-2xs leading-tight mt-3">
              From the Rocky Mountains to the open road, every detail is crafted
              for the journey ahead.
            </p>
          </>
        }
      />
    </section>
  );
}
