"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { Carousel } from "@/components/primitives/carousel";
import { Heading } from "@/components/primitives/heading";
import { Button } from "@/components/primitives/button";

interface PackageCard {
  name: string;
  tagline: string;
  image: string;
}

const packages: PackageCard[] = [
  {
    name: "TrekDrive",
    tagline: "Make towing feel effortless.",
    image: "/images/rv-images/features.png",
  },
  {
    name: "Elevated Living Package",
    tagline: "Turn Every Stop Into a Stay.",
    image: "/images/rv-images/interior.png",
  },
  {
    name: "Solar+",
    tagline: "Turns your F2.b into a true sun-powered basecamp.",
    image: "/images/rv-images/lifestyle.png",
  },
  {
    name: "Summit Sleeper",
    tagline: "A twin bed that lowers by night and disappears by day.",
    image: "/images/rv-images/interior.png",
  },
  {
    name: "Effortless Pack",
    tagline: "Remove stress from your list of things to pack.",
    image: "/images/rv-images/features.png",
  },
];

export function F2bCustomizeSection() {
  return (
    <section className="bg-surface-secondary cross-pattern section-inset rounded-xl py-24 md:py-32 overflow-hidden">
      {/* Centered intro */}
      <div className="flex flex-col items-center text-center px-6 mb-16 md:mb-28 gap-10">
        <Heading level="h1" as="h2">
          Defined by you
        </Heading>

        <p className="text-size-2xs text-tertiary max-w-5xl md:max-w-[45vw] font-medium leading-heading-xl text-center">
          Customization is built into the F2.b from the start. Choose from curated upgrades
          and individual features to shape the energy systems, performance, and comforts
          that define your experience. The result is an adventure vehicle that reflects
          your priorities, not a preset package.
        </p>

        <Button intent="primary" shape="pill" size="md" className="bg-orange">
          Customize now
        </Button>
      </div>

      {/* Package cards carousel */}
      <Carousel
        itemCount={packages.length}
        itemLabels={packages.map((p) => p.name)}
        paddingStart="pl-5 md:pl-12"
        gap="gap-4"
        showControls
      >
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="flex-[0_0_72vw] md:flex-[0_0_20vw] flex flex-col rounded-xl overflow-hidden bg-surface-primary border border-border-subtle group"
          >
            {/* Text area */}
            <div className="flex flex-col gap-2 p-4 h-[8rem] overflow-hidden">
              <span className="text-body font-semibold text-text-primary">
                {pkg.name}
              </span>
              <p className="text-size-2xs text-text-secondary leading-snug">
                {pkg.tagline}
              </p>
            </div>

            {/* Image area */}
            <div className="relative aspect-[6/3] m-2 rounded-lg mt-20 overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 52vw, 22vw"
              />
              <button
                className="absolute bottom-3 right-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-surface-secondary/1 bg-surface-secondary/4 text-white backdrop-blur-md transition-colors group-hover:bg-orange"
                aria-label={`Add ${pkg.name}`}
              >
                <Plus size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
