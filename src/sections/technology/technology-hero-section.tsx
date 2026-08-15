import { ProductHeroSection } from "@/components/soul/hero/product-hero-section";

export function TechnologyHeroSection() {
  return (
    <ProductHeroSection
      image={{ src: "/images/rv-images/features.png", alt: "VOLTR Aero-Electric platform" }}
      leftText="Engineered"
      rightText="for What's Ahead."
    />
  );
}
