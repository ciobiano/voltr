import { Button } from "@/components/primitives/button";
import type { StackingCardData } from "@/components/soul/stacking-cards/stacking-card-scene";
import { rvImages } from "@/assets/rv-images";

export const CARDS: StackingCardData[] = [
  { src: rvImages.exteriorHero.src, alt: "Interior view" },
  { src: rvImages.interiorLounge.src, alt: "Integrated features" },
  { src: rvImages.exteriorExpanded.src, alt: "Lifestyle scene" },
  {
    src: rvImages.exteriorCampsite.src,
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
