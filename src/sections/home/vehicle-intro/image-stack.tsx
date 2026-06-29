import Image from "next/image";
import { RefObject } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/primitives/button";

const CARD_Z_INDICES = ["z-20", "z-30", "z-40", "z-50"] as const;

const CARD_IMAGES = [
  { src: "/images/rv-images/interior.png", alt: "Interior view" },
  { src: "/images/rv-images/features.png", alt: "Integrated features" },
  { src: "/images/rv-images/lifestyle.png", alt: "Lifestyle scene" },
  { src: "/images/rv-images/lifestyle.png", alt: "AE.1 night reveal" },
];

interface ImageStackProps {
  cardsRef: RefObject<(HTMLDivElement | null)[]>;
  className?: string;
}

export function ImageStack({ cardsRef, className }: ImageStackProps) {
  return (
    <div
      className={cn(
        "relative mx-auto flex w-full flex-col gap-6 md:block md:aspect-[4/5] md:w-[min(42vw,43rem)]",
        className,
      )}
    >
      {CARD_IMAGES.map((card, i) => (
        <div
          key={`${card.src}-${i}`}
          ref={(el) => {
            if (cardsRef.current) cardsRef.current[i] = el;
          }}
          className={cn(
            "relative aspect-[4/5] w-full shrink-0 rounded-[1rem] md:absolute md:left-0 md:top-0 md:will-change-transform md:max-h-[67vh]",
            CARD_Z_INDICES[i],
          )}
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            className="rounded-[1rem] object-cover"
            sizes="(max-width: 768px) 88vw, 46rem"
            priority={i === 0}
          />

          {i === 3 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-[1rem] bg-black/40 px-6 text-center text-white">
              <h3 className="text-size-xl font-display leading-[0.92] tracking-[-0.06em]">
                Your home,
                <br />
                anywhere.
              </h3>
              <Button intent="ghost" shape="semi" size="sm">
                Explore the AE.1
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
