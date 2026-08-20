import { ProductHeroSection } from "@/components/soul/hero/product-hero-section";
import { rvImages } from "@/assets/rv-images";

export function F2bHeroSection() {
  return (
    <ProductHeroSection
      image={rvImages.exteriorHero}
      leftText="Silence in"
      rightText="Motion."
    />
  );
}
