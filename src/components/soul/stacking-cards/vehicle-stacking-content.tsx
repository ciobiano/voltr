import { Button } from "@/components/primitives/button";
import type { StackingCardData } from "@/components/soul/stacking-cards/stacking-card-scene";

export const CARDS: StackingCardData[] = [
  { src: "/images/rv-images/interior.png", alt: "Interior view" },
  { src: "/images/rv-images/features.png", alt: "Integrated features" },
  { src: "/images/rv-images/lifestyle.png", alt: "Lifestyle scene" },
  {
    src: "/images/rv-images/lifestyle.png",
    alt: "F2.B night reveal",
    overlay: (
      <>
        <h3 className="text-size-xl font-display leading-[0.92] tracking-[-0.06em]">
          Your home,
          <br />
          anywhere.
        </h3>
        <Button intent="ghost" shape="pill" size="sm">
          Explore the F2.B
        </Button>
      </>
    ),
  },
];
