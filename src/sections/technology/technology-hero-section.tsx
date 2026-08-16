import { ProductHeroSection } from "@/components/soul/hero/product-hero-section";
import { rvImages } from "@/assets/rv-images";

export function TechnologyHeroSection() {
  return (
    <ProductHeroSection
      image={rvImages.exteriorAero}
      leftText="Engineered"
      rightText="for What's Ahead."
    />
  );
}
