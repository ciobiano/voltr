import Image from "next/image";
import { RefObject } from "react";
import { cn } from "@/lib/utils";

const cards = [
  {
    src: "/images/rv-images/interior.png",
    alt: "Interior view",
  },
  {
    src: "/images/rv-images/features.png",
    alt: "Integrated features",
  },
  {
    src: "/images/rv-images/lifestyle.png",
    alt: "Lifestyle scene",
  },
  {
    src: "/images/rv-images/lifestyle.png",
    alt: "AE.1 night reveal",
  },
];

interface ImageStackProps {
  cardsRef: RefObject<(HTMLDivElement | null)[]>;
  overlayRef?: RefObject<HTMLDivElement | null>;
  className?: string;
}

export function ImageStack({ cardsRef, overlayRef, className }: ImageStackProps) {
  return (
    <div
      className={cn(
        "relative mx-auto flex w-full flex-col gap-6 md:block md:aspect-[4/5] md:w-[min(42vw,43rem)]",
        className,
      )}
    >
      {cards.map((card, i) => (
        <div
          key={`${card.src}-${i}`}
          ref={(el) => {
            if (cardsRef.current) cardsRef.current[i] = el;
          }}
          className={cn(
            "relative aspect-[4/5] w-full shrink-0 rounded-[1rem] md:absolute md:left-0 md:top-0 md:will-change-transform md:max-h-[67vh]",
            i === 0 && "z-20",
            i === 1 && "z-30",
            i === 2 && "z-40",
            i === 3 && "z-50",
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
            <div
              ref={overlayRef}
              className="card-overlay absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-[1rem] bg-black/30 px-6 text-center text-white opacity-100 md:opacity-0"
            >
              <h3 className="text-[clamp(2.6rem,4vw,4.6rem)] font-display leading-[0.92] tracking-[-0.06em]">
                Your home,
                <br />
                anywhere.
              </h3>
              <button className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium tracking-wide backdrop-blur-sm transition-colors hover:bg-white/20">
                Explore the AE.1
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
