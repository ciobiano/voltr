import { ProductHeroSection } from "@/components/soul/hero/product-hero-section";
import { rvImages } from "@/assets/rv-images";

export function ExperienceHeroSection() {
  return (
    <ProductHeroSection
      image={rvImages.exteriorHero}
      leftText="Find your way"
      rightText="to an F2.b"
    />
  );
}
