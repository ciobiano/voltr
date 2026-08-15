import { ProductHeroSection } from "@/components/soul/hero/product-hero-section";

export function ExperienceHeroSection() {
  return (
    <ProductHeroSection
      image={{ src: "/images/rv-images/lifestyle.png", alt: "VOLTR Experience" }}
      leftText="Find your way"
      rightText="to an F2.b"
    />
  );
}
